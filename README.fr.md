# Portfolio

_Lisez ceci dans d'autres langues: [English](README.md), [Deutsch](README.ge.md)_

Réalisé avec React

## Exécution locale

```bash
npm i && npm start
```

Le site web sera disponible à l'adresse [http://localhost:3000](http://localhost:3000) ou [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Déploiement

Le déploiement est rendu facile par l'utilisation de [Docker](https://docs.docker.com/).

### Version Non-SSL

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:latest
docker run -p 80:80 -d saundersp/portfolio_no_ssl:latest
```

### Version SSL

Pour cette version, vous aurez besoin des certificats (clés publiques et privées) situés dans le dossier **certificates** (respectivement nommé _pert.pem_ et _privkey.pem_).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:latest
docker run -p 443:443 -d saundersp/portfolio_ssl:latest
```
