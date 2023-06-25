# Портфолио

_Прочтите это на других языках: [English](README.md), [Français](README.fr.md), [Deutsch](README.de.md), [Español](README.es.md), [Italiano](README.it.md)_

Сделано с помощью React

## Локальное выполнение

``bash
npm ci && npm start
```

Сайт будет доступен по адресу [http://localhost:3000](http://localhost:3000) или [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Развертывание

Развертывание упрощается благодаря использованию [Docker](https://docs.docker.com/).

### Docker buildx

#### Не-SSL версия

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:latest
docker run -p 80:80 -d saundersp/portfolio_no_ssl:latest
```

#### Версия SSL

Для этой версии вам понадобятся сертификаты (открытый и закрытый ключи), расположенные в папке **certificates** (с именами _pert.pem_ и _privkey.pem_ соответственно).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:latest
docker run -p 443:443 -d saundersp/portfolio_ssl:latest
```

### Docker compose

#### Версия без SSL

```bash
docker compose up -d no_ssl
```

#### SSL версия

Для этой версии вам понадобятся сертификаты (открытый и закрытый ключи), расположенные в папке **certificates** (с именами _pert.pem_ и _privkey.pem_ соответственно).

```bash
docker compose up -d ssl
```
