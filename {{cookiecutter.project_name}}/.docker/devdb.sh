#!/bin/sh
# shellcheck shell=sh
set -e

psql "postgresql://$POSTGRES_USER@:5432/$POSTGRES_DB" -v ON_ERROR_STOP=1 <<-EOSQL
  CREATE USER {{cookiecutter.project_slug}}_dev WITH PASSWORD 'secret';
  CREATE DATABASE {{cookiecutter.project_slug}}_dev;
  GRANT ALL PRIVILEGES ON DATABASE {{cookiecutter.project_slug}}_dev TO {{cookiecutter.project_slug}}_dev;
  ALTER USER {{cookiecutter.project_slug}}_dev SUPERUSER;
EOSQL

psql -v ON_ERROR_STOP=1 "postgresql://$POSTGRES_USER@:5432/{{cookiecutter.project_slug}}_dev" <<-EOSQL
  CREATE EXTENSION IF NOT EXISTS pgcrypto;
  SELECT gen_random_uuid();
EOSQL
