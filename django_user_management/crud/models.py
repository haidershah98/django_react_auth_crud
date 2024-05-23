from django.db import models
from utils.reusable_classes import TimeStamps
from user_auth.models import User


class Make(TimeStamps):
    name = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, related_name="make_created_by", on_delete=models.CASCADE, null=True, blank=True)


class Vechile(TimeStamps):
    name = models.CharField(max_length=100)
    make = models.ForeignKey(Make, on_delete=models.CASCADE)
    model = models.IntegerField()
    color = models.CharField(max_length=100)
    purchase_rate = models.PositiveBigIntegerField(default=0)
    price = models.PositiveBigIntegerField(default=0)
    created_by = models.ForeignKey(User, related_name="vehicle_created_by", on_delete=models.CASCADE, null=True, blank=True)

