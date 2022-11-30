from rest_framework_simplejwt.tokens import RefreshToken
from tasks.models import Task, Category


def get_token(Profile):
    refresh = RefreshToken.for_user(Profile)

    return str(refresh.access_token)


def formulate_response(obj, type=None, message=None):
    if isinstance(obj, Task):
        return {
            'id': obj.id,
            'title': obj.title,
            'description': obj.description,
            'created': obj.created,
            'category': obj.category.title,
            'state': obj.state,
        }

    elif isinstance(obj, Category):
        return {
            'id': obj.id,
            'title': obj.title,
            'description': obj.description,
            'created': obj.created
        }
