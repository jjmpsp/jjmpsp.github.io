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

# clone a remote repo to "_site" and build it
if [ $TRAVIS_REPO_SLUG == "jjmpsp/jjmpsp.github.io" ]; then
  git clone https://${GH_TOKEN}@github.com/jjmpsp/jjmpsp.github.io.git --branch master _site

  # build with Jekyll into "_site" with production config
  JEKYLL_ENV=production bundle exec jekyll build
elif [ $TRAVIS_REPO_SLUG == "jjmpsp-staging/jjmpsp-staging.github.io" ]; then
  git clone https://${GH_TOKEN}@github.com/jjmpsp-staging/jjmpsp-staging.github.io.git --branch master _site

  # build with Jekyll into "_site" with staging config
  JEKYLL_ENV=production bundle exec jekyll build --config _config-staging.yml
else
  echo "Invalid repository - see cibuild.sh source code for more info..."
  exit 0
fi

# push
cd _site

if [ $TRAVIS_REPO_SLUG == "jjmpsp-staging/jjmpsp-staging.github.io" ]; then
  echo "staging.joel-murphy.co.uk" > CNAME
  echo -e "User-agent: *\nDisallow: /" > robots.txt
fi

git config user.email "contact@joel-murphy.co.uk"
git config user.name "Joel Murphy"
git add --all
git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
git push --force origin master