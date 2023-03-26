from backend import models
from authapp.models import BaseIdeinerUser
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login

class UserSerializer(serializers.ModelSerializer):
    # id = serializers.UUIDField(source='public_id', read_only=True, format='hex')
    # created = serializers.DateTimeField(read_only=True)
    # updated = serializers.DateTimeField(read_only=True)

    class Meta:
        model = BaseIdeinerUser
        fields = ['username', 'first_name', 'surname', 'email', 'age', 'password', 'is_superuser']
        read_only_field = ['is_active']


class RegisterSerializer(UserSerializer):
    password = serializers.CharField(max_length=128,
        min_length=8, write_only=True, required=True)
    
    class Meta:
        model = BaseIdeinerUser
        fields = ['id', 'email', 'username',
            'first_name', 'surname', 'password']
        
    def create(self, validated_data):
        return BaseIdeinerUser.objects.create_user(**validated_data)


class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)
        return data



class IssueTokenRequestSerializer(serializers.Serializer):
    model = BaseIdeinerUser

    nickname = serializers.CharField(required=True)
    password = serializers.CharField(required=True)


class TokenSeriazliser(serializers.ModelSerializer):

    class Meta:
        model = Token
        fields = ['key']





class IdeaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Idea
        fields = ['autor', 'title', 'rubrics', 'preview', 'body']

class JoinedUsersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.JoinedUsers
        fields = ['idea', 'autor']

class LikesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.LikesToIdeas
        fields = ['idea', 'autor']