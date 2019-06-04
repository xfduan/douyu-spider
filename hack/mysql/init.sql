create user 'spider'@'localhost' identified by 'spider';
create user 'spider'@'%' identified by 'spider';

create database if not exists spider default character set utf8mb4 collate utf8mb4_unicode_ci;

grant all on spider.* TO 'spider'@'localhost';
grant all on spider.* TO 'spider'@'%';

use spider;

create table chat_message
(
    id          int(11)   not null auto_increment comment '主键',
    room_id     int(11)   not null comment '房间 id',
    user_id     int(11)            default null comment '用户 id',
    user_name   varchar(32)        default null comment '用户昵称',
    content     varchar(32)        default null comment '用户发言',
    create_time timestamp not null default current_timestamp comment '创建时间',
    primary key (`id`),
    index room_id_idx (`room_id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci COMMENT ='聊天表';

