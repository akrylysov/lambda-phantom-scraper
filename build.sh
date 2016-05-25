#!/usr/bin/env bash

PACKAGE=lambda-phantom-scraper.zip
OUTPUT=dist
TMP=.tmp

mkdir $TMP
mkdir $OUTPUT
rm $OUTPUT/$PACKAGE

rsync -rv --exclude=node_modules --exclude=dist --exclude=.tmp . $TMP

pushd $TMP
PHANTOMJS_PLATFORM=linux PHANTOMJS_ARCH=x64 npm install phantomjs-prebuilt --phantomjs_cdnurl=http://cnpmjs.org/downloads --save
zip -r ../$OUTPUT/$PACKAGE ./*
popd
