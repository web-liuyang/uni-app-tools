#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .

git commit -m '🌟 update code'

git push gitee master

git push github master

cd -
