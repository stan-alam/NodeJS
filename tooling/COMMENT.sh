#!/bin/bash
echo $@
echo "SET DHCPD_RANGE0_COMMENT"
echo "first get JWT"
node --harmony  GetJWT.js
echo "Now turn run the DHCPRANGE0.js"
node --harmony DHCPRANGE0.js COMMENT $@
