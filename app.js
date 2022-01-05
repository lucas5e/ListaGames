const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())


const listaDeGames = []

app.post('/api/games', (req, res) =>{

    try {
        const game = req.body
    
        if (!game.nome || !game.plataforma){
            throw new Error('Dados inválidos!')
        }
    
        listaDeGames.push(game)
        res.send(JSON.stringify(game))
    } catch (err) {
        res.send(JSON.stringify(
            {
                mensagem: err.message
            }
        ))
    }
    
})

app.get('/api/games', (req, res) => {
    res.send(JSON.stringify(listaDeGames))
})

app.listen(3000, () => console.log('API rodando!'))