```bash
curl -X POST http://127.0.0.1:8000/api/registerUsername/ -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}'
curl -X POST http://127.0.0.1:8000/api/loginUsername/ -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}'
curl -X POST http://127.0.0.1:8000/api/logout/ -H "Content-Type: application/json"
```
```bash
python manage.py runserver
