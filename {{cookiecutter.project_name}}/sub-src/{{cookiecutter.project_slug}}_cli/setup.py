# -*- coding: utf-8 -*-
#
from setuptools import setup, find_packages

setup(
    name="{{cookiecutter.project_name}}_cli",
    version="{{cookiecutter.project_version}}",
    packages=find_packages(),
    install_requires=[
        "django>=3.0.3",
        "click",
    ],
    entry_points={
        "console_scripts": [
            "{{cookiecutter.project_name}}={{cookiecutter.project_slug}}_cli:main",
        ]
    },
)
