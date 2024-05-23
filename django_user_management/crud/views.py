from .serializers import MakeSerializer, VechileSerializer
from .filters import VechileFilter, MakeFilter
from utils.common_crud import BaseAPIView
from rest_framework.permissions import IsAuthenticated
from utils.base_authentication import JWTAuthentication


class MakeAPIView(BaseAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    serializer_class = MakeSerializer
    filterset_class = MakeFilter

class VechileAPIView(BaseAPIView):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)

    serializer_class = VechileSerializer
    filterset_class = VechileFilter
    prefetch_related_args = ['make']