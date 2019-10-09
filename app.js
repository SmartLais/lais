const express = require('express');
const bodyParser = require = ('body-parser');
const bd = require('./bd');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('<h1>App online!</h1>');
});

app.get('/alunos', (req,res) => {
    res.json(bd.getAlunos());
});

app.post('/alunos/id', (req, res) => {
    const idAluno = req.params.id;
    res.json(bd.getAlunoPorId(idAluno));
});

app.post('/alunos', (req, res) => {
    bd.addAluno(req,body);
    res.sed('Aluno adicionado com sucesso!');

});

app.get('/professores', (req, res) => {
    res.json(bd.get());
})

app.post('/professores', (req, res) => {
    bd.add(req,body);
    res.sed('Professores adicionados com sucesso!');
});


app.listen(3000, () => console.log('Servidor online na porta 3000'));
