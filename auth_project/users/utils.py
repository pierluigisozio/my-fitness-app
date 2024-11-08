import re


def is_valid_password(password):
    pattern = '^.{6,}$'

    if re.match(pattern, password):
        return True
    return False
