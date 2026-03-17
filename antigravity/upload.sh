#!/bin/bash
API_KEY="LtSeC9tH3JsuDt7kDCKT3G9Yf5kP8lAlxsGL"
BRAIN_DIR="/Users/yusuke/.gemini/antigravity/brain/4ae72a25-f96e-43e3-91ee-7417f3010ca1"

upload_and_patch() {
  id=$1
  file=$2
  echo "Uploading $file for $id..."
  res=$(curl -s -X POST -H "X-MICROCMS-API-KEY: $API_KEY" -F "file=@$BRAIN_DIR/$file" https://tryfunds.microcms-management.io/api/v1/media)
  url=$(echo $res | jq -r .url)
  if [ "$url" != "null" ] && [ -n "$url" ]; then
    echo "Uploaded: $url"
    curl -s -X PATCH -H "X-MICROCMS-API-KEY: $API_KEY" -H "Content-Type: application/json" -d "{\"image\": \"$url\"}" "https://tryfunds.microcms.io/api/v1/case-studies/$id"
    echo " -> Patched $id"
  else
    echo "Failed to upload $file: $res"
  fi
}

upload_and_patch "yhzwic4365" "cs_regional_town_real_1773759403160.png"
upload_and_patch "7tbhj224du" "cs_inbound_tourism_real_1773759421033.png"
upload_and_patch "ci8w6msq2" "cs_recycling_yard_real_1773759438910.png"
upload_and_patch "hac4izqpi" "cs_ny_highrise_real_1773759454640.png"
upload_and_patch "8r1o4iho34e" "cs_aerial_store_real_1773759498177.png"
upload_and_patch "9q6nybsa0b9" "cs_restaurant_jv_real_1773759515496.png"
upload_and_patch "cjg91fli-aj2" "cs_dx_server_real_1773759531823.png"
upload_and_patch "6iry87_ioe3" "cs_turnaround_room_real_1773759582158.png"
upload_and_patch "w9n2hils89" "cs_startup_office_real_1773759598766.png"
