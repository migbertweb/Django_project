from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import reverse
 
from jinja2 import Environment
from jinja2_pluralize import pluralize_dj

 
def environment(**options):
    env = Environment(**options)
    env.globals.update({
        'static': staticfiles_storage.url,
        'url': reverse,
    })
    env.filters['pluralize'] = pluralize_dj

    return env
