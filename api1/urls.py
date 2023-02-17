from django.contrib import admin
from django.urls import path,include
from .views import QuestionViewSet,OptionViewSet
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'questions',QuestionViewSet)
router.register(r'options',OptionViewSet)
urlpatterns=[
    path('',include(router.urls)),
    # path('create/',questioncreate,name='question')
]
# urlpatterns = [
# # path('questions/',views.questions_list),
# # re_path(r'^questions/([0-9])$',views.question_detail),
# # path('options/',views.option_list),
# # re_path(r'^options/([0-9])$',views.option_detail),
# path('questions/',views.QuestionViewSet.as_view({'get': 'list'})),
# path('options/',views.OptionViewSet.as_view({'get': 'list'})),

# ]