"""
ASGI config for django_project project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_project.settings')
django_asgi_app = get_asgi_application()
from chat.routing import websocket_urlpatterns
application = ProtocolTypeRouter({'http': django_asgi_app, 'websocket': AllowedHostsOriginValidator(AuthMiddlewareStack(URLRouter(websocket_urlpatterns))),})
