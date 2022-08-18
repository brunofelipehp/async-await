async function start() {
  try {
    const url = "https://api.github.com/users/brunofelipehp"
    const user = await fetch(url).then(res => res.json())
    const userRepo = await fetch(user.repos_url).then(res => res.json())
    console.log(userRepo);
  } catch (error) {
    console.log(error)
  } finally {
    console.log("busca por repositório terminada");
  }
}

start()