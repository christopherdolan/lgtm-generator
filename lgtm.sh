#!/bin/bash
DICT=${DICT:-./index.dic}
l=$(grep -io '^l[^/]*' $DICT | sort -R | head -1)
g=$(grep -io '^g[^/]*' $DICT | sort -R | head -1)
t=$(grep -io '^t[^/]*' $DICT | sort -R | head -1)
m=$(grep -io '^m[^/]*' $DICT | sort -R | head -1)

echo $l $g $t $m
