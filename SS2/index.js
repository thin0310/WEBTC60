const express = require('express')
const app = express()

const teacherRouter = require('./teachers')
const studentRouter = require('./students')

app.use('/teacher', teacherRouter)
app.use('/student', studentRouter)


const port = 3000

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})