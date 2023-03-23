from backend.models import Idea
from rest_framework import viewsets
from rest_framework import permissions
from frontend.serializers import IdeaSerializer

class IdeaViewSet(viewsets.ModelViewSet):
    queryset = Idea.objects.all()
    serializer_class = IdeaSerializer
    # permission_classes = [permissions.IsAuthenticated]


