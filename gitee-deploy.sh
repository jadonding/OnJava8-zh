#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'http://jadonding.github.io/doc-onjava8/' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
# git push -f git@github.com:wangxifa/qinFeng.git master:gh-pages
git push -f https://github.com/jadonding/OnJava8-zh.git master:gh-pages

cd -