# Simultaneously with Keboola Connection (Docker only)

Since development version of Keboola Connection is served through https, you need to use indigo-ui
library with https too.

There's `https-proxy` service prepared in `docker-compose.yml` file. This service will allow you to
proxy requests to local instance of Storybook (`localhost:9009`) and serve it through https
protocol. Additional headers are added to responses, check `.dev/nginx/nginx.conf` file for more
information.

The following command:

```
docker-compose up node https-proxy
```

starts `node` and `https-proxy` services. After that, Storybook will be available on
[http://localhost:9009/](http://localhost:9009/) (same as above) and Nginx server serving same
Storybook through SSL will be available on [https://localhost:9010/](https://localhost:9010/).

## Registering to Keboola Connection

Replace UPPERCASE marked variables and run the following command to register Storybook to your
development instance of Keboola Connection:

```bash
curl \
  -X POST \
  -H X-KBC-ManageApiToken:DEV_KBC_SUPER_API_TOKEN \
  -H "Content-Type:application/json" \
  -d '{"manifestUrl":"http://STORYBOOK_HOST_AVAILABLE_FROM_DEV_KBC_HOST:9009/kbc-dev-manifest.json","activate":true}' \
  http://DEV_KBC_HOST:8800/manage/ui-apps
```

`DEV_KBC_SUPER_API_TOKEN` can be created in the `Manage Apps` section of your local connection.  You need to provide the token with the scope: `connection:ui-manage`

You can find `kbc-dev-manifest.json` file in `public` folder in this repository.

You'll also need to add your local storybook host to Keboola Connection's CSP for styles and fonts.  Update the `public/index.php` and add `STORYBOOK_HOST_AVAILABLE_FROM_DEV_KBC_HOST:9010` to the `style-src` and `font-src` sections.

Also, please note that you'll need to visit your `STORYBOOK_HOST_AVAILABLE_FROM_DEV_KBC_HOST:9010` and accept the self signed cert manually so that your browser will begin to allow it.
