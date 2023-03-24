from backend import models
from rest_framework import viewsets
from rest_framework import permissions
from frontend.serializers import IdeaSerializer

class IdeaViewSet(viewsets.ModelViewSet):
    queryset = models.Idea.objects.all()
    serializer_class = IdeaSerializer

class JoinedUsersViewSet(viewsets.ModelViewSet):
    queryset = models.JoinedUsers.objects.all()
    serializer_class = IdeaSerializer
    # permission_classes = [permissions.IsAuthenticated]

class LikesViewSet(viewsets.ModelViewSet):
    queryset = models.LikesToIdeas.objects.all()
    serializer_class = IdeaSerializer
    # permission_classes = [permissions.IsAuthenticated]