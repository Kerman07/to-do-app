from django.db import models


class ItemManager(models.Manager):
    def create_item(self, content, author):
        item = self.create(content=content, author=author)
        return item


class Item(models.Model):
    content = models.TextField()
    author = models.TextField()

    objects = ItemManager()
