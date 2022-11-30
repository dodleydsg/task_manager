from rest_framework_simplejwt.tokens import RefreshToken


def get_token(Profile):
    refresh = RefreshToken.for_user(Profile)

    return str(refresh.access_token)
