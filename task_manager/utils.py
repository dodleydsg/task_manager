from rest_framework_simplejwt.tokens import RefreshToken
from tasks.models import Task, Category


def get_token(Profile):
    refresh = RefreshToken.for_user(Profile)

    return str(refresh.access_token)


def formulate_response(obj=None, type=None, message=None):
    if str(type).startswith('4'):
        return {
            'response': {
                'type': type,
                'message': message if message is not None else ''
            }
        }
    if isinstance(obj, Task):
        return {
            'id': obj.id,
            'title': obj.title,
            'description': obj.description,
            'created': obj.created,
            'category': obj.category.title,
            'state': obj.state,
            'response': {
                'type': type if type is not None else 200,
                'message': message if message is not None else '',
            }
        }

    elif isinstance(obj, Category):
        return {
            'id': obj.id,
            'title': obj.title,
            'description': obj.description,
            'created': obj.created,
            'response': {
                'type': type if type is not None else 200,
                'message': message if message is not None else '',
            }
        }
