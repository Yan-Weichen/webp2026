from django.urls import path
from . import views

urlpatterns = [
    path('', views.myIndex), # 代表 http://.../myhello/ 這層
]