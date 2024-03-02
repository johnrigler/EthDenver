#!/bin/bash

# apikey=P2VD4Q197F12TVGTQT8982EAQI254DNJ4Z
address=0x5a2220d56f56db9c9f5b0cb83ff35b42746503a2
base="https://api.polygonscan.com/api"
startblock=47028833
curl "$base?module=account&action=txlist&address=$address&sort=desc&startblock=$startblock&endblock=99999999" > trans.json
php trans.php
sleep 2

address=0x0076416C84c7151CaEfA74C3e09d6eBF2f296BA0
startblock=46908770
curl "$base?module=account&action=txlist&address=$address&sort=desc&startblock=$startblock&endblock=99999999" > trans.json
php trans.php

