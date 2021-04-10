# Portfolio

*Lisez ceci dans d'autres langues: [English](README.md), [Deutsch](README.ge.md)*

Réalisé avec React

## Installation

```bash
npm i
npm run build
```

Le site web compilé sera disponible dans le dossier __build__.

## Déploiement

Le déploiement est rendu facile par l'utilisation de Docker.

### Version Non-SSL

```bash
docker build . -f Dockerfile._no_ssl -t saundersp/portfolio_no_ssl:1.0
docker run -p 80:80 -d saundersp/portfolio_no_ssl:1.0
```

### Version SSL

Pour cette version, vous aurez besoin des certificats (clés publiques et privées) situés dans le dossier __certificates__ (respectivement nommé _pert.pem_ et _privkey.pem_).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:1.0
docker run -p 443:443 -d saundersp/portfolio_ssl:1.0
```
