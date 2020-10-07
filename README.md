# Angular 9 & Server Side Rendering with Leaflet Content Tech Demo

## To Run Server

To start rendering your app with Universal on your local system, use the following command.

```bash
npm run dev:ssr
```

### Notes

WHy is Leaflet accessed from a service?

https://github.com/angular/universal/blob/master/docs/gotchas.md

## "window is not defined"

One of the most common issues when using Angular Universal is the lack of browser global
variables in the server environment. This is because the Universal project uses
[domino](https://github.com/fgnass/domino) as the server DOM rendering engine. As a result,
there is certain functionality that won't be present or supported on the server. This
includes the `window` and `document` global objects, cookies, certain HTML elements (like canvas),
and several others. There is no exhaustive list, so please be aware of the fact that if you
see an error like this, where a previously-accessible global is not defined, it's likely because
that global is not available through domino.