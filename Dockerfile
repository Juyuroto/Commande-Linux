# Stage 1: Build
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration npm
COPY package.json pnpm-lock.yaml* ./

# Installer pnpm et les dépendances
RUN npm install -g pnpm && \
    pnpm install --no-frozen-lockfile

# Copier le code source
COPY . .

# Build de l'application React
RUN pnpm run build

# Stage 2: Production avec Nginx
FROM nginx:alpine

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
