# Docker Express
> Just an Express server running inside Docker

```
$ docker-compose build
$ docker-compose up
```

Open your browser on `http://0.0.0.0:8080/`

## Optional Environment files

Set `APP_ENV` environment variable to proper value

eg.

```
$ export APP_ENV=development
```

Uncomment lines 15 and 16 inside the `docker-compose.yml` file

```yml
    env_file:
      - .docker/env/app.${APP_ENV}.env
```

Add some environment variables inside `/.docker/env/app.development.env`

Bootstrap your Docker container

```
$ docker-compose build
$ docker-compose up
```
