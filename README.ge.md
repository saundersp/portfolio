# Portfolio

*Dies in anderen Sprachen lesen: [English](README.md), [Français](README.fr.md)*

Erstellt mit React

## Installation

```bash
npm i
npm run build
```

Die erstellte Website wird im Ordner __build__ verfügbar sein.

## Deployment

Das Deployment wird durch die Verwendung von Docker vereinfacht.

### Keine SSL-Version

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:1.0
docker run -p 80:80 -d saundersp/portfolio_no_ssl:1.0
```

### SSL-Version

Für diese Version benötigen Sie Zertifikatsdateien (öffentliche und private Schlüssel), die sich im Ordner __certificates__ befinden (_pert.pem_ bzw. _privkey.pem_ genannt).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:1.0
docker run -p 443:443 -d saundersp/portfolio_ssl:1.0
```
