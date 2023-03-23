from backend import models
from rest_framework import serializers



class IdeaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Idea
        fields = ['autor', 'title', 'rubrics', 'preview', 'body']

