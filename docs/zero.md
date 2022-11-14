
## Python
At least 3.8 and above.

## Environment Settings
Settings that differ between environment (prod/dev/staging/etc) and also sensitive data such as credentials should be in `.env` file and we use [django-environ] to populate the file's value into `os.environ`.

Take note that `.env` file should never being checked into source control. We will have separate repo `<project_name>_deploy` which will have the env file checked into. Refer [webship] for more details.

## Upload
Use [django-storages] with [boto3] to handle file upload to S3 bucket.

### Notes
- When using django-storages S3 backend for the `STATICFILES_STORAGE`, `STATIC_URL` settings will have no impact as the url will be generated the storage backend instead. 

## Testing
`pytest_djangoapp` plugins originally used for testing reusable app without having to setup temporary project but it also usable for testing whole project. The config is in `src/<project_name>/tests/conftest.py`. Running test then just similar to other pytest's tests:-

    poetry run pytest -s -x src/<project_name>/tests/test_app.py

Use `-k` flag to run specific test.

    poetry run pytest -s -x src/<project_name>/tests/test_app.py -k test_user
    
 Most of the time, we will only write integration tests, with some unit tests when really necessary. Our testing philosophy basically similar to what mentioned in `Rule #12` of Alex Krupp [article][alex].

[django-environ]:https://django-environ.readthedocs.io/en/latest/
[django-storages]:https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html
[webship]:https://github.com/lalokalabs/webship/
[boto3]:https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html
[alex]:http://web.archive.org/web/20221114075804/https://alexkrupp.typepad.com/sensemaking/2021/06/django-for-startup-founders-a-better-software-architecture-for-saas-startups-and-consumer-apps.html#rule12
