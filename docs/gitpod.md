`labzero` development is done on Gitpod. Once your workspace is launched, you can create new project for testing under `/workspace/yourapp`.

```
cd /workspace
cookiecutter labzero/ # we use local labzero instead of one on pypi
project_name [myapp]: 
project_author_name [My Name]: 
project_author_email [myname@myapp.co]: 
project_version [0.0.0]: 
project_description [Some description]: 
project_slug [myapp]:
```

After that you can `cd` into your newly created app:-

```
cd /workspace/myapp
poetry install
```

In a separate terminal, run docker compose to have postgresql and redis running:-

```
cd /workspace/labzero
docker compose up
```

On another terminal:-

```
cd /workspace/myapp
poetry run myapp manage migrate
poetry run myapp manage runserver
```

The following environment variables already set as Gitpod settings variables:-

```
env | grep DATABASE
```

In the end, you'll have 2 directories in your `/workspace`:-

```
gitpod /workspace $ tree -L 1
.
├── labzero
└── myapp

2 directories, 0 file
```