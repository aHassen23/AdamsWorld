const express = require('express')
const app = express()
const projectsRouter = require('./routes/projects')

app.set('view engine', 'ejs')
app.use('/projects', projectsRouter)

app.get('/' , (req,res) => {
    res.render('index')
})
app.listen(5000)
