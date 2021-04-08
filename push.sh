#! /bin/zsh
git add .
m=$1
date=$(date "+%Y-%m-%d-%H:%M:%S")
git commit -m "$date $m"
git push origin master