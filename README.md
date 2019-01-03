# curl

This plugin runs entirely on the server and has no views.

It adds a new API endpoint with the shape...

```
/curl/:host/:path
```

...and fetches JSON API data from the requested URL. This helps bypass CORS
issues for plugins (such as `price` and `price-widget`) that need access
to "arbitrary" servers on the internet.

Currently we require custom branches of `bcurl` and `brq` that allow more
flexibility than usual. If those branches get merged into master we can remove
the custom dependencies:
  
https://github.com/pinheadmz/bcurl/tree/bpanel-dev

https://github.com/pinheadmz/brq/tree/patch-1