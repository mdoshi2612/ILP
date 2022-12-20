from django.contrib.auth.models import User
from django.db.models import fields
from django.contrib.auth import login, authenticate
from rest_framework import serializers
from . import models

class projectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = '__all__'

class prefSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ('pref_1', 'pref_2', 'pref_3', 'pref_4', 'pref_5') 
#     def save(self):
#         profile=models.Profile.objects.get(user=user)
#         profile.pref_0=self.validated_data['pref0'] 
#         profile.pref_1=self.validated_data['pref1']  
#         profile.pref_2=self.validated_data['pref2'] 
#         profile.pref_3=self.validated_data['pref3'] 
#         profile.pref_4=self.validated_data['pref4'] 
#         profile.pref_5=self.validated_data['pref5']  
#         profile.save()
#         return profile   

class regSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

# class logSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'
#     def save(self):
#         account=User(email=self.validated_data['email'],password=self.validated_data['password'])
#         email=self.validated_data['email']
#         password=self.validated_data['password']
#         check_user = User.objects.filter(email=email).first()
#         if check_user is None:
#                  raise serializers.ValidationError({'email':'User does not exist'})
#         requested_profile = models.Profile.objects.filter(user=check_user).first()
#         #if password == requested_profile.password:
#             #login(request, user)
# #             context = {'email': email}
# #             return redirect('profile')
# #         context = {'message': 'Incorrect Password', 'class': 'danger'}
# #         return render(request, 'login_ritwik.html', context)
# #     return render(request, 'login_ritwik.html')
