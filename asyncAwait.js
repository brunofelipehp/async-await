const promessa = new Promise((resolve, reject) => {
  return reject('error')
})

async function start() {
  try {
    const result = await promessa
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('rodar sempre');
  }
}

start()