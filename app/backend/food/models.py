from django.db import models

# Create your models here.

class Image(models.Model):
    '''
    food_image: The image itself
    '''
    food_image = models.ImageField(blank=True, null=True)

    def __str__(self):
        return 'image'
