#!/bin/bash

echo $INDIGO_UI_REVISION
export BODY="{\"manifestUrl\":\"https://assets-cdn.keboola.com/indigo-ui/$INDIGO_UI_REVISION/manifest.json\",\"activate\":true}"
curl -X POST \
  -H X-KBC-ManageApiToken:$KBC_MANAGE_API_TOKEN \
  -H "Content-Type:application/json" \
  -d $BODY \
  https://connection.keboola.com/manage/ui-apps
