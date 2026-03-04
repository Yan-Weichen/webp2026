# from django.shortcuts import render
from django.http import HttpResponse

def myIndex(request):
    # 從 URL 參數取得 'name' 的值，如果沒給就預設為 "CGU"
    my_name = request.GET.get('name', "CGU")
    return HttpResponse("Hello " + my_name)
# Create your views here.
