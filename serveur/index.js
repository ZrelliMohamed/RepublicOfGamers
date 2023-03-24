const { urlencoded } = require('express')
const express = require('express')
const app = express()
const port = 3000
const teamRoute = require('./routes/teams');
const usersRoute = require('./routes/users');
app.use(express.json())
app.use(urlencoded({extended:true}))
const db = require('./databases/index.js')
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
app.use('/api/teams', teamRoute);
app.use('/api/users', usersRoute)