from django.db import models

class Board(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"{self.pk} {self.title}"