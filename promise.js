let aceitar = false;

console.log("Pedir uber");

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido aceito!')
  }

  return reject('pedifo negado!')
});

promessa
.then(result => console.log(result))
.catch(erro => console.error(erro))
.finally(() => console.log('Corrida finalizada'))

console.log('aguardando...')

