from backend import models
from rest_framework import serializers


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