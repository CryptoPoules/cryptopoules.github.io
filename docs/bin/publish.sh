#!/usr/bin/env bash

JEKYLL_ENV=production NODE_ENV=production bundle exec jekyll build -d docs
git add docs
git commit
git push origin master
