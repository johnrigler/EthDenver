#!/bin/bash

first=$1
shift
/usr/bin/python3 /var/www/html/easyBase/lib/unspendable.py $first "$*"
