from django.urls import path, include
from rest_framework.routers import DefaultRouter
from user import views
from django.contrib import admin

# Create a router and register the viewset
router = DefaultRouter()
router.register(r'users', views.CustomUserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
