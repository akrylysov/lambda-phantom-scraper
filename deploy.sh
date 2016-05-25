#!/usr/bin/env bash

PACKAGE=lambda-phantom-scraper.zip
OUTPUT=dist

aws lambda update-function-code \
--region us-east-1 \
--function-name lambda-phantom-scraper  \
--zip-file fileb://$PWD/$OUTPUT/$PACKAGE
