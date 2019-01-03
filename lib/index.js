// Entry point for your plugin
// This should expose your plugin's modules
/* START IMPORTS */
/* END IMPORTS */

/* START EXPORTS */

export const metadata = {
  name: 'bpanel-curl',
  pathName: 'bpanel-curl',
  displayName: 'bpanel-curl',
  author: 'Matthew Zipkin',
  description:
    'Backend plugin for bPanel that adds curl endpoint for fetching arbitrary JSON-API data without CORS',
  version: require('../package.json').version
};

/* END EXPORTS */