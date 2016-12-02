#!/usr/bin/env bash
cd dist
tar -zcvf ./../dist-portal.tar.gz * ./../node_modules ./../bower_components --totals
cd ..
scp -i ./deployKey.pem dist-portal.tar.gz ubuntu@54.152.103.212:/home/ubuntu
ssh -i ./deployKey.pem ubuntu@54.152.103.212 "\
mkdir -p portal && \
cd portal && \
tar -xzvf ./../dist-portal.tar.gz --totals && \
cd .. && \
rm -f dist-portal.tar.gz && \
exit"
rm -f dist-portal.tar.gz
