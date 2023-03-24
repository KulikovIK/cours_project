from django.urls import include, path
from rest_framework import routers
from frontend import views

router = routers.DefaultRouter()
router.register(r'ideas', views.IdeaViewSet)
router.register(r'jusers', views.JoinedUsersViewSet)
router.register(r'likes', views.LikesViewSet)

app_name = 'frontend'

urlpatterns = [
    path('', include(router.urls), name='api'),
]