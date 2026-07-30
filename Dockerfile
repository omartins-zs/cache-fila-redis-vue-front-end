FROM php:8.4-fpm-alpine

# Instalador de extensões PHP (não-interativo)
ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions \
    && install-php-extensions pdo_sqlite mbstring bcmath zip \
    && apk add --no-cache git unzip nodejs npm

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

# Instala dependências PHP e compila os assets do Vue (Vite)
RUN composer install --no-interaction --prefer-dist --optimize-autoloader \
    && npm ci \
    && npm run build \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
