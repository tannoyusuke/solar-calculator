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

upload_and_patch "hac4izqpi" "cs_ny_aerial_real_1773760753491.png"
upload_and_patch "ci8w6msq2" "cs_waste_crane_real_1773760772013.png"
upload_and_patch "6iry87_ioe3" "cs_oyster_bar_real_1773760790885.png"
upload_and_patch "cjg91fli-aj2" "cs_logistics_warehouse_real_1773760810311.png"
upload_and_patch "w9n2hils89" "cs_sustech_advanced_real_1773760892219.png"
