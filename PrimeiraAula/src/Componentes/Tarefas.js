const express = require ("express");//chamar o express no require
const bodyParser = require("body-parser");// chamar o bodyParser no require
//inicializar o app
const app = express ()
const PORT = 3000;

app.use(bodyParser.json())

//////////////////////////

let tarefas =[
   { id: 1, descricao: 'revisar o NodeJs'},
   {id: 2, descricao: 'escrever um texto'}
];

// Listar as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Criar uma tarefa
app.post('/tarefas', (req, res) => {
    const {descricao} = req.body;
    //!:
    if (!descricao) {
        return res.status(400).json;
    }
    const novaTarefa = { id: tarefas.length + 1, descricao }; // numeros de elementos do array
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

// Editar tarefa
app.put('/tarefas/:id', (req, res) => {
    const {id} = req.params;
    const {descricao} = req.body;
    const tarefa = tarefas.find(t => t.id === parseInt(id));
    if (!tarefa) {
        return res.status(404).json;
    }
    tarefa.descricao = descricao || tarefa.descricao;// ||: ou
    res.json(tarefa);
});

// Deletar tarefa
app.delete('/tarefas/:id', (req, res) => {
    const {id} = req.params;
    tarefas = tarefas.filter(t => t.id != id);
    res.json({ message: "Tarefa removida com sucesso" });
});

