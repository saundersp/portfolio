# Portfolio

_Léelo en otros idiomas: [English](README.md), [Français](README.fr.md), [Deutsch](README.de.md), [Italiano](README.it.md), [Россия](README.ru.md)_

Creado con React

## Ejecución local

```bash
npm ci && npm start
```

El sitio web estará disponible en [http://localhost:3000](http://localhost:3000) o [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Despliegue

El despliegue se facilita mediante el uso de [Docker](https://docs.docker.com/).

### Docker buildx

#### Versión no SSL

```bash
docker build . -f Dockerfile.no_ssl -t saundersp/portfolio_no_ssl:latest
docker run -p 80:80 -d saundersp/cartera_no_ssl:latest
```

#### Versión SSL

Para esta versión, necesitarás certificados (claves pública y privada) ubicados en la carpeta **certificates** (llamados _pert.pem_ y _privkey.pem_ respectivamente).

```bash
docker build . -f Dockerfile._ssl -t saundersp/portfolio_ssl:latest
docker run -p 443:443 -d saundersp/portfolio_ssl:latest
```

### Docker compose

#### Versión no SSL

```bash
docker compose up -d no_ssl
```

#### Versión SSL

Para esta versión, necesitará certificados (claves pública y privada) ubicados en la carpeta **certificates** (denominados _pert.pem_ y _privkey.pem_ respectivamente).

```bash
docker compose up -d ssl
```
