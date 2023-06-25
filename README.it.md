# Portfolio

_Leggi questo articolo in altre lingue: [English](README.md), [Français](README.fr.md), [Deutsch](README.de.md), [Español](README.es.md), [Россия](README.ru.md)_

Realizzato con React

## Esecuzione locale

```bash
npm ci && npm start
```

Il sito web sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000) o [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Distribuzione

La distribuzione è resa semplice dall'uso di [Docker](https://docs.docker.com/).

### Docker buildx

#### Versione non-SSL

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:latest
docker run -p 80:80 -d saundersp/portfolio_no_ssl:latest
```

#### Versione SSL

Per questa versione sono necessari i certificati (chiavi pubbliche e private) che si trovano nella cartella **certificates** (denominati rispettivamente _pert.pem_ e _privkey.pem_).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:latest
docker run -p 443:443 -d saundersp/portfolio_ssl:latest
```

### Docker compose

#### Versione non-SSL

```bash
docker compose up -d no_ssl
```

#### Versione SSL

Per questa versione, sono necessari i certificati (chiavi pubbliche e private) che si trovano nella cartella **certificates** (denominati rispettivamente _pert.pem_ e _privkey.pem_).

```bash
docker compose up -d ssl
```
