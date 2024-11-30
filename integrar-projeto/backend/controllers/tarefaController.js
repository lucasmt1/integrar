const Tarefa = require('../models/Tarefa');

exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll({
      where: { usuarioId: req.usuario.id }
    });
    res.json(tarefas);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar tarefas' });
  }
};

exports.criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, pontos } = req.body;
    const tarefa = await Tarefa.create({
      titulo,
      descricao,
      pontos,
      usuarioId: req.usuario.id
    });
    res.status(201).json(tarefa);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao criar tarefa' });
  }
};

exports.completarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findOne({
      where: { id, usuarioId: req.usuario.id }
    });

    if (!tarefa) {
      return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
    }

    tarefa.completada = true;
    await tarefa.save();
    res.json(tarefa);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao completar tarefa' });
  }
};