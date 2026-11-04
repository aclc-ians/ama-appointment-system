FROM php:8.2-apache

RUN for module in mpm_event mpm_worker; do \
      if [ -e "/etc/apache2/mods-enabled/${module}.load" ]; then a2dismod "$module"; fi; \
    done \
    && a2enmod mpm_prefork \
    && docker-php-ext-install mysqli

COPY . /var/www/html/

CMD ["sh", "-c", "port=\"${PORT:-8080}\"; sed -ri \"s/Listen 80/Listen ${port}/\" /etc/apache2/ports.conf; sed -ri \"s/<VirtualHost \\*:80>/<VirtualHost *:${port}>/\" /etc/apache2/sites-available/000-default.conf; exec apache2-foreground"]
