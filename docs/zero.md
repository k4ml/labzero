
## Upload
Use [django-storages] to handle file upload to S3 bucket.

### Notes
- When using django-storages S3 backend for the `STATICFILES_STORAGE`, `STATIC_URL` settings will have no impact as the url will be generated the storage backend instead. 

[django-storages]:https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html
