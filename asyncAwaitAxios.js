//const axios = require('axios');

async function fetchRepos() {
  try {
    const url = "https://api.github.com/users/brunofelipehp"
    const user = await axios.get(url)
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data);
  } catch (error) {
    console.log(error);
  }
}

fetchRepos()