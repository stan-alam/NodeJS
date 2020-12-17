#!/bin/bash
echo $@
echo "SET RANGE0_DNS_IP"
echo "first get JWT"
node --harmony  GetJWT.js
echo "Now turn run the DHCPRANGE0.js"
node --harmony DHCPRANGE0.js DNS_IP $@
