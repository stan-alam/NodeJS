#!/bin/bash
run ()
{
local RESULT
RESULT=$(ssh -A root@0.0.0.0 "~/git/testActiveLeases.sh")
echo $RESULT
}

run
exit $?
