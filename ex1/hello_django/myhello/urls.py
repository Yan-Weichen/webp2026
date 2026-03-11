from django.urls import path
from . import views

urlpatterns = [
    path('', views.myhello_api, name='index'), # 更新這裡
]