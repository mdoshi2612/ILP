from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.projectList),
    path('preference/', views.addPreference),
    path('register/', views.register),
]