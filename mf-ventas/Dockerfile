# Etapa 1: Build Angular
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: servir con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/mf-ventas/browser /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
