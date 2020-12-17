#!/bin/bash
echo $@
echo "SET ETH_IF"
echo "first get JWT"
node --harmony  GetJWT.js
echo "Now turn run the DHCPRANGE0.js"
node --harmony DHCPRANGE0.js ETH_IF $@
