# 上传到服务器 /www/wwwroot/any.yuanki.cn/ 目录下 忽略 exclude.txt 中的文件
rsync -av --exclude-from='exclude.txt' ./ root@150.158.167.230:/www/wwwroot/nuxt
