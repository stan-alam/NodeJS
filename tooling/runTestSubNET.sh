#!/bin/bash
run ()
{
  local RESULT
  RESULT=$(ssh -A root@10.9.9.2 "~/git/testSUB_NET2.sh")
  echo $RESULT
}

run
exit $?
