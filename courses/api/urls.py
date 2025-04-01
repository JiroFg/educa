from django.urls import path, include
from .views import CourseViewSet, SubjectViewSet
from rest_framework import routers

app_name = 'api'

router = routers.DefaultRouter()
router.register('courses', CourseViewSet)
router.register('subjects', SubjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('courses/<pk>/enroll/', CourseEnrollView.as_view(), name='course_enroll'),
]
