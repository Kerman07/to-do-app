from django.contrib.auth.models import User
from .models import Item
from rest_framework import generics, permissions, viewsets
from .serializers import ItemSerializer, RegisterSerializer, UserSerializer


class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Item.objects.filter(author=self.request.user)


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()
