#!/bin/bash
echo "Turn on DHCP"
echo "first get JWT"
node --harmony  GetJWT.js
echo "Now turn DHCP ON"
node --harmony DHCP_ON.js

