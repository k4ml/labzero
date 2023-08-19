#!/bin/bash

set -euo pipefail

/app/.venv/bin/{{cookiecutter.project_slug}} manage collectstatic --no-input
/app/.venv/bin/{{cookiecutter.project_slug}} run-gunicorn -b 0.0.0.0:8000 --serve-static
