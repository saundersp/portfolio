# Portfolio

_Dies in anderen Sprachen lesen: [English](README.md), [Français](README.fr.md)_

Erstellt mit React

## Lokal ausführen

```bash
npm i && npm start
```

Die Website wird entweder unter [http://localhost:3000](http://localhost:3000) oder [http://127.0.0.1:3000](http://127.0.0.1:3000) verfügbar sein.

## Deployment

Das Deployment wird durch die Verwendung von [Docker](https://docs.docker.com/) vereinfacht.

### Keine SSL-Version

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:latest
docker run -p 80:80 -d saundersp/portfolio_no_ssl:latest
```

### SSL-Version

Für diese Version benötigen Sie Zertifikatsdateien (öffentliche und private Schlüssel), die sich im Ordner **certificates** befinden (_pert.pem_ bzw. _privkey.pem_ genannt).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:latest
docker run -p 443:443 -d saundersp/portfolio_ssl:latest
```
