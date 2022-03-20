#!/bin/bash
PRINTER=$1
PERIOD=$2
PAGE=$3
KBYTE=$4

lpadmin -p $PRINTER -o job-quota-period=$PERIOD -o job-page-limit=$PAGE -o job-k-limit=$KBYTE
sudo service cups restart
