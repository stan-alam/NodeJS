#!/bin/bash
echo "Turn OFF DHCP"
echo "first get JWT"
node --harmony GetJWT.js
echo "Now turn DHCP OFF"
node --harmony DHCP_OFF.js

