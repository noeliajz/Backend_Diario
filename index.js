import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import './src/database/dbConnection'
import usuarioRouter from './src/routes/usuario.routes'
import articuloRouter from './src/routes/articulo.routes'


const app = express()
app.set('port', process.env.PORT || 3500)
app.listen(app.get('port'), () => {
    console.log('estoy en el puerto'+ app.get('port'))
})

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/public')))
app.use('/apiDiario', usuarioRouter)
app.use('/apiDiario', articuloRouter)