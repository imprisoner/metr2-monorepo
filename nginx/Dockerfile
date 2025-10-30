FROM nginx:alpine

# Install apache2-utils to get 'htpasswd' command
RUN apk add --no-cache apache2-utils

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/*

# Create directory for auth files
RUN mkdir -p /etc/nginx/auth

# Create an htpasswd file with a user (replace with your preferred username/password)
# NOTE: For production, avoid hardcoding credentials; use build args or secrets instead
ARG NGINX_BASIC_AUTH_USER
ARG NGINX_BASIC_AUTH_PASS

RUN htpasswd -bc /etc/nginx/auth/.htpasswd $NGINX_BASIC_AUTH_USER $NGINX_BASIC_AUTH_PASS

# Copy your custom Nginx configuration
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]