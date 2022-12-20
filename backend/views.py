# from django.shortcuts import render
# from django.contrib.auth.models import User
# from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
# from django.contrib.auth import login, authenticate
# from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
# from django.http import HttpResponse

# from django.contrib.auth.decorators import login_required
# #from .forms import UserRegisterForm, UserUpdateForm, ProfileUpdateForm
# import math
# import random
# from django.contrib.auth.models import User
# from .models import Mentor, Profile
# from django.contrib import messages
# from django.conf import settings
# from django.core.mail import send_mail, BadHeaderError
# from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
# from django.contrib.auth import login, authenticate

# from . import models, serializers
# from models import Profile
# from django.contrib import messages
# from django.conf import settings
# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# @api_view(['GET'])
# def projectList(request):
#     projects = models.Project.objects.all()
#     data_serializer = serializers.projectSerializer(projects, many=True)
#     return Response(data_serializer.data)
    

# class Profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     otp = models.CharField(max_length=6)
#     password = models.CharField(max_length=20)
#     fullname = models.CharField(max_length=100, blank=True)
#     rollno = models.CharField(max_length=100, blank=True)
#     department = models.CharField(max_length=100, blank=True)
#     degree = models.CharField(max_length=100, blank=True)
#     contactno = models.CharField(max_length=100, blank=True)
#     sop = models.CharField(max_length=500, blank=True)

# def login1(request):
#     if request.method == 'POST':
#         email = request.POST.get('email')
#         password = request.POST.get('password')
#         user = User.objects.filter(email=email).first()
#         if user is None:
#             context = {'message': 'User not found', 'class': 'danger'}
#             return render(request, 'login_ritwik.html', context)
#         requested_profile = Profile.objects.filter(user=user).first()
#         if password == requested_profile.password:
#             login(request, user)
#             context = {'email': email}
#             return redirect('profile')
#         context = {'message': 'Incorrect Password', 'class': 'danger'}
#         return render(request, 'login_ritwik.html', context)
#     return render(request, 'login_ritwik.html')



# def register(request):
#     if request.method == 'POST':
#         email = request.POST.get('email')
#         name = request.POST.get('name')
#         password = request.POST.get('password')
#         check_user = User.objects.filter(email=email).first()
#         # if not email.split('@')[1]=='iitb.ac.in':
#         #     context = {'message': 'Please login using your LDAP ID', 'class':'danger'}
#         #     return render(request, 'register.html', context)
#         if check_user:
#             context = {'message': 'User already exists', 'class': 'danger'}
#             return render(request, 'register.html', context)

#         #user = User(email=email, username=name)
#         # user.save()
#         #otp = str(random.randint(1000, 9999))
#         #profile = Profile(user=user, mobile=mobile, otp=otp)
#         # profile.save()
#         #email_success, mobile_success = send_otp(email, mobile, otp)
#         otp = generateOTP()
#         request.session['email'] = email
#         request.session['name'] = name
#         request.session['password'] = password
#         request.session['otp'] = otp
#         send_otp(email, otp)
#         return redirect('otp')

#         # if not email_success and not mobile_success:
#         #context = {'message': 'OTP failed to generate', 'class': 'danger'}
#         # return render(request, 'regiser.html', context)
#         # return redirect('otp')
#     return render(request, 'register.html')



from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from django.contrib.auth import login, authenticate

from . import models, serializers
from django.contrib import messages
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def projectList(request):
    projects = models.Project.objects.all()
    data_serializer = serializers.projectSerializer(projects, many=True)
    return Response(data_serializer.data)
    
@api_view(['POST'])
def addPreference(request):
    profile = models.Profile.objects.get(user=request.user)
    prefdata = request.data
    profile.pref_1 = prefdata['pref_1']
    profile.pref_2 = prefdata['pref_2']
    profile.pref_3 = prefdata['pref_3']
    profile.pref_4 = prefdata['pref_4']
    profile.pref_5 = prefdata['pref_5']
    profile.save()
    pref_serializer = serializers.prefSerializer(profile)
    return Response(pref_serializer.data)
# def login1(request):
#     if request.method == 'POST':
#         email = request.POST.get('email')
#         password = request.POST.get('password')
#         user = User.objects.filter(email=email).first()
#         if user is None:
#             context = {'message': 'User not found', 'class': 'danger'}
#             return render(request, 'login_ritwik.html', context)
#         requested_profile = Profile.objects.filter(user=user).first()
#         if password == requested_profile.password:
#             login(request, user)
#             context = {'email': email}
#             return redirect('profile')
#         context = {'message': 'Incorrect Password', 'class': 'danger'}
#         return render(request, 'login_ritwik.html', context)
#     return render(request, 'login_ritwik.html')

@api_view(['POST'])
def register(request):
    reqdata = request.data
    reg,created = models.Profile.objects.get_or_create(email = reqdata['email'])
    if created:
        reg.password = reqdata['password']
        reg.save()
        reg_serializer = serializers.regSerializer(reg)
        return Response(reg_serializer.data)
