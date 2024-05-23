from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from utils.base_authentication import JWTAuthentication
from user_auth.user_controller import *
from .user_serializer import (LoginSerializer, UserSerializer, ChangePasswordSerializer, VerifyOtpSerializer, ForgetPasswordSerializer)


register_controller = RegisterController()
login_controller = LoginController()
logout_controller = LogoutController()
forget_password_controller = ForgetPasswordController()
verify_otp_controller = VerifyOtpController()
change_password_controller = ChangePasswordController()


class RegisterAPIView(ModelViewSet):
    serializer_class = UserSerializer
    def create(self,request):
        return register_controller.create(request)

class LoginAPIView(ModelViewSet):
    serializer_class = LoginSerializer
    def login(self,request):
        return login_controller.login(request)
    
class LogoutAPIView(ModelViewSet):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)
    def logout(self,request):
        return logout_controller.logout(request)
    
class ChangePasswordAPIView(ModelViewSet):
    authentication_classes = (JWTAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer
    def post(self,request):
        return change_password_controller.change_password(request)

class VerifyOtpAPIView(ModelViewSet):
    serializer_class = VerifyOtpSerializer
    def post(self,request):
        return verify_otp_controller.verify_otp(request)

class ForgetPasswordAPIView(ModelViewSet):
    serializer_class = ForgetPasswordSerializer
    def post(self,request):
        return forget_password_controller.forget_password(request)
    

    
    
