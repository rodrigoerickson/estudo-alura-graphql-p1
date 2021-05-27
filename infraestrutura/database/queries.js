const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise ((resolve, reject)=>{

    return conexao.query(query, (erro, resultados, campos) => {
      console.log('executou a query!')
      if (erro) {
        rejec(erro)
      } else {
        resolve(resultados)
      }
  
    })
  })
}

module.exports = executaQuery
