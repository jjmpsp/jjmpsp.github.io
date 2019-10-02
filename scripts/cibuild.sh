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

# clone remote repo to "_site"
git clone https://${GH_TOKEN}@github.com/jjmpsp/jjmpsp.github.io.git --branch master _site

# build with Jekyll into "_site"
JEKYLL_ENV=production bundle exec jekyll build



# Push source files of website to 'staging-build' branch
if [ $TRAVIS_BRANCH == "staging" ]; then
  cd _site
  git config user.email "contact@joel-murphy.co.uk"
  git config user.name "Joel Murphy"
  git add --all
  git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
  git push --set-upstream origin staging-build
  git push --force origin staging-build

  echo "Staging branch has been deployed to staging repository...."
  exit 0
fi

exit 0