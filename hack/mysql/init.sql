create user 'spider'@'localhost' identified by 'spider';
create user 'spider'@'%' identified by 'spider';

create database if not exists spider default character set utf8mb4 collate utf8mb4_unicode_ci;

grant all on spider.* TO 'spider'@'localhost';
grant all on spider.* TO 'spider'@'%';

use spider;

CREATE TABLE `chat_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `room_id` int(11) NOT NULL COMMENT '房间 id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户 id',
  `user_name` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户昵称',
  `content` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户发言',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `room_id_idx` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='聊天表';

CREATE TABLE `dou_yu_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `room_id` int(11) NOT NULL COMMENT '房间 id',
  `name` varchar(32) DEFAULT NULL COMMENT '名称',
  `stream_url` varchar(512) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '直播流地址',
  `chat_status` tinyint(2) DEFAULT '0' COMMENT '弹幕状态 0-新建 1-处理中 2-结束',
  `video_status` tinyint(2) DEFAULT '0' COMMENT '视频状态 0-新建 1-处理中 2-结束',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `room_id_idx` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='斗鱼视频录制任务表';
