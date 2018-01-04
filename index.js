const { json } = require("micro");
const axios = require("axios");

const POST_URL = "https://circleci.com/api/v1.1/project/{vcs-type}/{username}/{branch_name}?circle-token={token}";

module.exports = async function(req, res) {
  const data = await json(req);

  if (data !== undefined) {
    console.log(data);

    axios
      .post(POST_URL)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    return data;
  } else {
    return "no data";
  }
};
