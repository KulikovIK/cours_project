from backend import models
from authapp.models import BaseIdeinerUser

from rest_framework import viewsets
from rest_framework import permissions
from frontend.serializers import IdeaSerializer, RegisterSerializer, UserSerializer, IssueTokenRequestSerializer, TokenSeriazliser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from frontend.serializers import LoginSerializer

from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework import viewsets
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

class UserViewSet(viewsets.ModelViewSet):
    http_method_names = ('patch', 'get')
    permission_classes = (IsAuthenticated,) # AllowAny
    serializer_class = UserSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return BaseIdeinerUser.objects.all()
        return BaseIdeinerUser.objects.exclude(is_superuser=True)
    
    def get_object(self):
        obj = BaseIdeinerUser.objects.get_object_by_public_id(self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj

class LoginViewSet(ViewSet):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']
    
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data, status=status.HTTP_200_OK)



class RefreshViewSet(viewsets.ViewSet, TokenRefreshView):
    permission_classes = (AllowAny,)
    http_method_names = ['post']
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])
        return Response(serializer.validated_data, status=status.HTTP_200_OK)



class RegisterViewSet(viewsets.ViewSet):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']
    
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = { "refresh": str(refresh),
        "access": str(refresh.access_token), }
        return Response({
            "user": serializer.data,
            "refresh": res["refresh"],
            "token": res["access"]},
            status=status.HTTP_201_CREATED)









class IdeaViewSet(viewsets.ModelViewSet):
    http_method_names = ('patch', 'get')
    permission_classes = (permissions.AllowAny,) # IsAuthenticated
    # queryset = models.Idea.objects.all()
    serializer_class = IdeaSerializer

    def get_queryset(self):  # получаем все
        return models.Idea.objects.all()
        # if self.request.user.is_superuser:
        #     return models.Idea.objects.all()
        # return models.Idea.objects.exclude(is_superuser=True)
    
    def get_object(self):  # получаем один экземпляр
        obj = models.Idea.objects.get_object_by_public_id(self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj


class JoinedUsersViewSet(viewsets.ModelViewSet):
    queryset = models.JoinedUsers.objects.all()
    serializer_class = IdeaSerializer
    # permission_classes = [permissions.IsAuthenticated]

class LikesViewSet(viewsets.ModelViewSet):
    queryset = models.LikesToIdeas.objects.all()
    serializer_class = IdeaSerializer
    # permission_classes = [permissions.IsAuthenticated]


