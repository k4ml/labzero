
[cookiecutter](docs/cookiecutter.md) Django project templates for LaLoka Labs.

## Usage

    cookiecutter gh:lalokalabs/labzero

That will generate new directory `<your_project_name>`.

    cd <your_project_name>
    poetry install
    poetry run <your_project_name> manage runserver
    nvm use 14.17.1
    npm install

Python dependencies manager is using [Poetry](docs/poetry.md). Make sure to add generated `poetry.lock` to your source control system.

## Frontend Stack
- [NVM](docs/nvm.md)
- [Tailwind CSS](docs/tailwind.md)
- [Laravel Mix](docs/mix.md)
- [Yarn](docs/yarn.md)

Refer [FE](docs/fe.md) for more details.

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

`sub-src/` directory is a workaround due to [poetry not installing] `console_scripts` entry-ppoints as real script and causing issue with django runserver command.

Read more details of the project setup [here](docs/zero.md).

## Deployment

Labzero based project can be deployed using [webship](https://github.com/lalokalabs/webship/).

On production, all cli should be accessed through `/app/<project_name>/current/.venv/bin/`. For example:-

    /app/myapp/current/.venv/bin/myapp manage shell

[projvsapp]:https://dev.to/k4ml/django-moving-away-from-project-vs-app-dichotomy-3e7
[poetry not installing]:https://github.com/python-poetry/poetry/issues/241#issuecomment-629754768
