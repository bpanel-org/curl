const bcurl = require('bcurl');

async function curl(req, res) {
  const { logger, params } = req;
  const url = params.host + '/' + params.path;
  try {
    logger.info('Fetching json from ' + url);
    const client = bcurl.client(params.host);
    const json = await client.get(params.path);
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