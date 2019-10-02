#!/bin/bash

# skip if build is triggered by pull request
if [ $TRAVIS_PULL_REQUEST == "true" ]; then
  echo "This is a PR, exiting"
  exit 0
fi

# enable error reporting to the console
set -e

# cleanup "_site"
rm -rf _site
mkdir _site

# clone a remote repo to "_site"
if [ $TRAVIS_REPO_SLUG == "jjmpsp/jjmpsp.github.io" ]; then
  git clone https://${GH_TOKEN}@github.com/jjmpsp/jjmpsp.github.io.git --branch master _site
elif [ $TRAVIS_REPO_SLUG == "jjmpsp-staging/jjmpsp-staging.github.io" ]; then
  git clone https://${GH_TOKEN}@github.com/jjmpsp-staging/jjmpsp-staging.github.io.git --branch master _site
else
  echo "Invalid repository - see cibuild.sh source code for more info..."
  exit 0
fi

# build with Jekyll into "_site"
JEKYLL_ENV=production bundle exec jekyll build

# push
cd _site
git config user.email "contact@joel-murphy.co.uk"
git config user.name "Joel Murphy"
git add --all
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --force origin master