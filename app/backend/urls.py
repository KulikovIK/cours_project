from django.urls import path
from backend import views
from django.views.generic import RedirectView

app_name = 'backend'

urlpatterns = [
    path("", RedirectView.as_view(url="index/")),
    path("index/", views.Temp.as_view(), name="index"),


    ]