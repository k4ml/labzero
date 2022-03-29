
[cookiecutter](docs/cookiecutter.md) Django project templates for LaLoka Labs.

## Usage

    cookiecutter gh:lalokalabs/labzero

That will generate new directory `<your_project_name>`.

    cd <your_project_name>
    poetry install
    poetry run <your_project_name> manage runserver

Python dependencies manager is using [Poetry](docs/poetry.md).

## Frontend Stack
- [Tailwind CSS](docs/tailwind.md)
- [Laravel Mix](docs/mix.md)
- [Yarn](docs/yarn.md)

## Structure

Main application code should be in `src/<your_project_name>/` - this will be your "[django project and app][projvsapp]".

```
├── package.json
├── pyproject.toml
├── src
│   └── myapp
│       ├── __init__.py
│       ├── settings.py
│       ├── urls.py
│       └── wsgi.py
├── sub-src
│   └── myapp_cli
│       ├── myapp_cli
│       │   └── __init__.py
│       └── setup.py
├── tailwind.config.js
└── webpack.mix.js
```

[projvsapp]:https://dev.to/k4ml/django-moving-away-from-project-vs-app-dichotomy-3e7
