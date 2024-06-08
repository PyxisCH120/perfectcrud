/**
 * Nome do arquivo: exemplo.js
 * Data de criação: 24/04/2024
 * Autor: mateus micael peixoto
 * Matrícula: 01609372
 *
 * Descrição:
 *  Este código implementa um servidor HTTP utilizando o framework Next.js.
 *  Ele define rotas para manipular pedidos (orders) relacionados a um sistema 
 * de serviço. Quando recebe uma requisição, verifica o método HTTP. Se for GET,
 *  retorna uma lista de pedidos. Se for POST, adiciona um novo pedido à lista. Se for
 *  PUT, atualiza os dados de um pedido existente. Se for DELETE, remove um pedido da lista.
 *  Se a requisição não corresponder a nenhum desses métodos, retorna um código de status 405
 *  (Método não permitido).
 *
 * Este script é parte o curso de ADS.
 */


let orders = [
  {
    id: 1,
    personId: 1,
    description: "Corrigir problema no computador",
    status: "pendente",
  },
  { id: 2, personId: 2, description: "Instalar software", status: "concluído" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(orders);
  } else if (req.method === "POST") {
    const { personId, description, status } = req.body;
    const newOrder = { id: orders.length + 1, personId, description, status };
    orders.push(newOrder);
    res.status(201).json(newOrder);
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { personId, description, status } = req.body;
    const orderIndex = orders.findIndex((order) => order.id === parseInt(id));
    if (orderIndex !== -1) {
      orders[orderIndex] = { id: parseInt(id), personId, description, status };
      res.status(200).json(orders[orderIndex]);
    } else {
      res.status(404).json({ message: "Ordem de serviço não encontrada" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    const orderIndex = orders.findIndex((order) => order.id === parseInt(id));
    if (orderIndex !== -1) {
      orders.splice(orderIndex, 1);
      res
        .status(200)
        .json({ message: "Ordem de serviço excluída com sucesso" });
    } else {
      res.status(404).json({ message: "Ordem de serviço não encontrada" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
