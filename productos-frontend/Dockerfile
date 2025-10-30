FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

FROM nginx:1.27
COPY --from=build /app/dist/productos-frontend /usr/share/nginx/html
EXPOSE 80



