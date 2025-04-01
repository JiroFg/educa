from django.urls import path
from .views import StudentRegistrationView, StudentEnrollCourseView, StudentCourseListView, StudentCourseDetailView
from django.views.decorators.cache import cache_page

app_name = 'students'

urlpatterns = [
    path('register/', StudentRegistrationView.as_view(), name='student_registration'),
    path('enroll-course/', StudentEnrollCourseView.as_view(), name='student_enroll_course'),
    path('courses/', StudentCourseListView.as_view(), name='student_course_list'),
    path('course/<pk>/', cache_page(60*15)(StudentCourseDetailView.as_view()), name='student_course_detail'),
    path('course/<pk>/<module_id>/', cache_page(60*15)(StudentCourseDetailView.as_view()), name='student_course_detail_module'),
]
