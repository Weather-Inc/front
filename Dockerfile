FROM nginx:1.13.12-alpine

# Set workspace directory to 'app'
WORKDIR /app

# Copy package sources from build/ directory
COPY build/ ./

COPY ci/front.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

COPY /build /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]