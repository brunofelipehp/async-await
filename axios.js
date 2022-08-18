//const axios = require('axios');

/*
axios
  .get("https://api.github.com/users/brunofelipehp")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((err) => console.log(err));
*/

Promise.all([
  axios.get("https://api.github.com/users/brunofelipehp"),
  axios.get("https://api.github.com/users/brunofelipehp/repos")
]).then((res) => {
  console.log(res[0].data.login);
  console.log(res[1].data.length);
});
