from .base import *
from environs import env

env.read_env()

DEBUG = False
ADMINS = [('jirofg', 'jirofg@email.com'),]
ALLOWED_HOSTS = ['127.0.0.1']
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env("POSTGRES_DB"),
        'USER': env("POSTGRES_USER"),
        'PASSWORD': env("POSTGRES_PASSWORD"),
        'HOST': 'db',
        'PORT': '5432',
    }
}
REDIS_URL = 'redis://cache:6379'
CACHES['default']['LOCATION'] = REDIS_URL
CHANNEL_LAYERS['default']['CONFIG']['hosts'] = [REDIS_URL]