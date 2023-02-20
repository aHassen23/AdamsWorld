const express = require('express')
const app = express()
const projectsRouter = require('./routes/projects')
const contactsRouter = require('./routes/contact')


app.set('view engine', 'ejs')
app.use('/projects', projectsRouter)
app.use('/contact', contactsRouter)

app.get('/' , (req,res) => {
    res.render('index')
})
app.listen(5000)
