# 从git拉取最新代码
git pull

# 上传到服务器 /www/wwwroot/any.yuanki.cn/ 目录下 忽略 exclude.txt 中的文件
rsync -av --exclude-from='exclude.txt' ./ root@150.158.167.230:/www/wwwroot/any.yuanki.cn/

# 进入目标目录
ssh -t root@150.158.167.230 "cd /www/wwwroot/any.yuanki.cn/ ; bash"

# 安装依赖
#yarn install

# 打包
#yarn build
