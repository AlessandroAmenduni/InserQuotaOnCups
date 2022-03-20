#!/bin/bash
PRINTER=$1
lpadmin -p $PRINTER -o job-quota-period=0 -o job-page-limit=0 -o job-k-limit=0
sudo service cups restart
