微信小程序button修改样式无效
当你给button已经清除过默认样式了，还是有问题

可能是微信小程序的基础样式已经升级到v2版本了，在app.json中可以查阅到：

 

"style": "v2", //基础样式升级
"sitemapLocation": "sitemap.json"

 

把"style": "v2", 删除就可以了！