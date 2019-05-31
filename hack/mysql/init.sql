create user 'spider'@'localhost' identified by 'spider';
create user 'spider'@'%' identified by 'spider';

create database if not exists spider default character set utf8mb4 collate utf8mb4_unicode_ci;

grant all on spider.* TO 'spider'@'localhost';
grant all on spider.* TO 'spider'@'%';

use spider;
