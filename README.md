# Angular 9 & Server Side Rendering with Leaflet Content Tech Demo

### Production (also for testing SSR/Pre-rendering locally)

**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.


### Deployment

1. `npm run build:ssr`
2. Move the dist over to your server
3. install PM2
4. npm install pm2 -g
On your server, use PM2 to run the server bundled app
pm2 start dist/server.js
If you're using Nginx, or other web servers, make sure to redirect requests to the port that the app started with PM2 is listening on.

### Notes

Why is Leaflet accessed from a service?

https://github.com/angular/universal/blob/master/docs/gotchas.md

## "window is not defined"

> One of the most common issues when using Angular Universal is the lack of browser global
variables in the server environment. This is because the Universal project uses
[domino](https://github.com/fgnass/domino) as the server DOM rendering engine. As a result,
there is certain functionality that won't be present or supported on the server. This
includes the `window` and `document` global objects, cookies, certain HTML elements (like canvas),
and several others. There is no exhaustive list, so please be aware of the fact that if you
see an error like this, where a previously-accessible global is not defined, it's likely because
that global is not available through domino.