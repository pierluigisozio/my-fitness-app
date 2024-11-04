from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from utils import is_valid_password


@api_view(['POST'])
def register_by_username_and_password(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if username and password:
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

        if not is_valid_password(password):
            return Response({'error': 'Password criteria unmatched'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password)
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)

    return Response({'error': 'Missing fields'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_by_username_and_password(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
        if user.check_password(password):
            refresh = RefreshToken.for_user(user)
            access = refresh.access_token
            return Response({
                'access': str(access),
                'refresh': str(refresh)
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def logout(request):
    refresh_token = request.data.get('refresh')

    if refresh_token:
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Logged out successfully'}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'error': 'Missing refresh token'}, status=status.HTTP_400_BAD_REQUEST)
