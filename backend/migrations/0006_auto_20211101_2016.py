# Generated by Django 3.2 on 2021-11-01 14:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20211101_2008'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='contactno',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='degree',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='department',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='experience',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='fullname',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='goal',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='linkedin',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='obstacle',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pref_0',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pref_1',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pref_2',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pref_3',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pref_4',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='pref_5',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='rollno',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='sop',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='user',
        ),
    ]