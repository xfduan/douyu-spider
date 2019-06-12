## TIPS
个人自用，若有疑问可提 ISSUE

### 弹幕（弹幕使用 python 获取）
1. 调用斗鱼公开 api，此处将域名换为 ip，解决部分 dns 解析异常问题；
2. 分析 ws 数据，对返回数据做好分类处理；
	
### 视频（视频使用 node 获取）
1. 获取签名获取方法
	1. 分析 Charles 得知视频源地址是通过接口 `/lapi/live/getH5Play/room_id` 获得；
	2. web 抓取 source code，找到对应接口的调用处，分析 sign 的拼接方式；
	3. sign 调用了随着版本变化的挂载在 window 中的动态生成出来的方法，想获取此方法，先获取它的生成方法；
	4. 目前几个小版本变化，生成方法在 window 中名称为 ub98484234（可能变化）；
	5. 取出生成方法，末尾返回前添加 `console.log(strc);`，本地调用，得出最终的 strc 值，此即为 sign 的生成方法；
	6. 生成方法中，使用了包 `CryptoJS`，提前安装；
	7. 方法三个参数：
		1. roomId: 直播间 id;
		2. did: 57d9f117a64441b743119c6200011501;
    	3. time: parseInt((new Date).getTime() / 1e3, 10); 

2. 调用接口，获取返回视频流地址
	1. 接口地址 /lapi/live/getH5Play/room_id；
	2. 视频录制：ffmpeg -i https://hdls1a.douyucdn.cn/live/252140rVxJYAHhPj_1200p.flv?wsAuth=3b0c43e946eca7f38f2ab80e88d8c3cd&token=web-h5-0-252140-4a0485261c3115821f34a1b19e5942620465e005cb9c0a86&logo=0&expire=0&did=628c6bafe17ac403c0374d8500001501&ver=Douyu_219052805&pt=2&st=0&mix=0&isp= -y ./cap.mp4；
