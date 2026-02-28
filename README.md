# Guide Docker du projet Linux Command

Ce projet utilise `docker-compose.yml` avec **un seul service**.

## Nom du service / conteneur

Dans ce projet, le service et le conteneur ont le même nom :

- Service Compose : `linux-guide`
- Conteneur : `linux-guide`
- Image construite : `linux-command:latest`
- Port exposé : `3006` (local) vers `80` (dans le conteneur)

---

## Commandes essentielles

À lancer depuis la racine du projet.

### Workflow Docker pur (sans Compose)

```bash
docker build -t linux-command:latest .
```

```bash
docker run -d \
  --name linux-command \
  -p 3006:80 \
  linux-command:latest
```

Pour redémarrer ensuite ce conteneur :

```bash
docker start linux-command
```

> Important : ici le nom du conteneur est `linux-command` (car défini avec `--name linux-command`).

### 1) Construire et démarrer le service

```bash
docker compose up -d --build
```

### 2) Démarrer un conteneur déjà créé

```bash
docker start linux-guide
```

> Cette commande est valable si tu utilises le conteneur créé par Compose (`container_name: linux-guide`).

### 3) Arrêter le conteneur

```bash
docker stop linux-guide
```

### 4) Vérifier l'état

```bash
docker ps -a
```

### 5) Voir les logs

```bash
docker logs -f linux-guide
```

### 6) Ouvrir le site

```text
http://localhost:3006
```

---

## Différence importante : `docker compose` vs `docker start`

- `docker compose up -d --build` :
  - construit l'image si besoin,
  - crée le conteneur s'il n'existe pas,
  - démarre le service.
- `docker start linux-guide` :
  - démarre **uniquement** un conteneur déjà existant.
  - Si le conteneur n'existe pas encore, il faut faire `docker compose up -d --build` d'abord.

---

## Explication rapide du `docker-compose.yml`

- `services.linux-guide` : nom du service.
- `image: linux-command:latest` : nom/tag de l'image finale.
- `build.context: .` : build depuis le dossier courant.
- `build.dockerfile: Dockerfile` : fichier Docker utilisé.
- `container_name: linux-guide` : nom explicite du conteneur.
- `ports: "3006:80"` : accès via `localhost:3006`.
- `restart: "no"` : pas de redémarrage automatique.
- `environment: NODE_ENV=production` : variable d'environnement.
- `networks: guide-network` : réseau bridge dédié.

---

## Dépannage rapide

### Erreur `No such container: linux-guide`
Le conteneur n'a jamais été créé :

```bash
docker compose up -d --build
```

### Changer de port (si 3006 déjà occupé)
Modifier dans `docker-compose.yml` :

```yaml
ports:
  - "3006:80"
```

Puis relancer :

```bash
docker compose up -d --build
```
