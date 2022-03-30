

## Environment Settings
Settings that differ between environment (prod/dev/staging/etc) and also sensitive data such as credentials should be in `.env` file and we use `django-environ` to populate the file's value into `os.environ`.

Take note that `.env` file should never being checked into source control. We will have separate repo `<project_name>_deploy` which will have the env file checked into. Refer [webship] for more details.

## Upload
Use [django-storages] to handle file upload to S3 bucket.

### Notes
- When using django-storages S3 backend for the `STATICFILES_STORAGE`, `STATIC_URL` settings will have no impact as the url will be generated the storage backend instead. 

[django-storages]:https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html
[webship]:https://github.com/lalokalabs/webship/
