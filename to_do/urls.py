from django.contrib import admin
from django.urls import path, include
from .views import ItemView, RegisterView, UserView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from rest_framework import routers
from rest_framework.authtoken import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r"todos", ItemView, "todo")
router.register(r"users", UserView, "user")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("user/register/", RegisterView.as_view()),
    path("api-token-auth/", views.obtain_auth_token),
    path("", TemplateView.as_view(template_name="index.html")),
]

urlpatterns += staticfiles_urlpatterns()
