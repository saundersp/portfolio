# Portfolio

_Read this in other languages: [Français](README.fr.md), [Deutsch](README.de.md), [Español](README.es.md), [Italiano](README.it.md), [Россия](README.ru.md)_

Made using React

## Run locally

```bash
npm ci && npm start
```

The website will be available either at [http://localhost:3000](http://localhost:3000) or [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Deployment

Deployment is made easy using [Docker](https://docs.docker.com/).

### Docker buildx

#### No-SSL Version

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:latest
docker run -p 80:80 -d saundersp/portfolio_no_ssl:latest
```

#### SSL Version

For this version you'll need certificates files (public and private keys) located in the **certificates** folder (_pert.pem_ and _privkey.pem_ named respectively).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:latest
docker run -p 443:443 -d saundersp/portfolio_ssl:latest
```

### Docker compose

#### No-SSL Version

```bash
docker compose up -d no_ssl
```

#### SSL Version

For this version you'll need certificates files (public and private keys) located in the **certificates** folder (_pert.pem_ and _privkey.pem_ named respectively).

```bash
docker compose up -d ssl
```
