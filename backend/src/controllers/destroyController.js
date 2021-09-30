const Dev = require('../models/dev.js');

module.exports = {
  async destroy(request, response) {
    const { github_username } = request.body;
    
    const devs = await Dev.find({
      github_username
    });
    console.log(devs);
    return response.json(devs);
  }
}