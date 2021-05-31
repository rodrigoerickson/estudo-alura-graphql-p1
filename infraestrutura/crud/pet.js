const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = 'SELECT * FROM Pets'

    return executaQuery( sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(item) {
    const { nome, donoId, tipo, observacoes } = item

    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`

    return executaQuery(sql).then(res => ({
      id: res.id, 
      nome, donoId, tipo, observacoes
    }))
  }

  atualiza(novoItem) {
    const {id, nome, donoId, tipo, observacoes } = novoItem

    const sql = `UPDATE Pets SET nome='${nome}', donoId=${donoId}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}`

    return executaQuery(sql).then(() => novoItem)
  }

  deleta(id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`

    return executaQuery(sql).then(()=>id)
  }
}

module.exports = new Pet
