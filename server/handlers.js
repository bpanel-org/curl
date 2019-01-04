const bcurl = require('bcurl');

async function curl(req, res) {
  const { logger, params, query } = req;
  const url = params.host + '/' + query.path;
  try {
    logger.info('Fetching json from ' + url);
    const client = bcurl.client(params.host);
    const json = await client.get(query.path);
    return res.status(200).json(json);
  } catch (e) {
    logger.warning(e);
    return res.status(500).json({
      error: {
        message: `There was a problem fetching ${url}`,
        code: 500
      }
    });
  }
}

module.exports = { curl }; 