#!/bin/sh
# shellcheck shell=sh
set -e

psql "postgresql://$POSTGRES_USER@:5432/$POSTGRES_DB" -v ON_ERROR_STOP=1 <<-EOSQL
  CREATE USER zero_dev WITH PASSWORD 'secret';
  CREATE DATABASE zero_dev;
  GRANT ALL PRIVILEGES ON DATABASE zero_dev TO zero_dev;
  ALTER USER zero_dev SUPERUSER;
EOSQL

psql -v ON_ERROR_STOP=1 "postgresql://$POSTGRES_USER@:5432/zero_dev" <<-EOSQL
  CREATE EXTENSION IF NOT EXISTS pgcrypto;
  SELECT gen_random_uuid();
EOSQL