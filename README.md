# Portfolio

*Read this in other languages: [Français](README.fr.md), [Deutsch](README.ge.md)*

Made using React

## Installation

```bash
npm i
npm run build
```

The builded website will be available in the __build__ folder.

## Deployment

Deployment is made easy using Docker.

### No-SSL Version

```bash
docker build . -f Dockerfile._no_ssl -t saundersp/portfolio_no_ssl:1.0
docker run -p 80:80 -d saundersp/portfolio_no_ssl:1.0
```

### SSL Version

For this version you'll need certificates files (public and private keys) located in the __certificates__ folder (_pert.pem_ and _privkey.pem_ named respectively).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:1.0
docker run -p 443:443 -d saundersp/portfolio_ssl:1.0
```
