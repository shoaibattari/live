<<<<<<< HEAD
const express = require('express')
const log = console.log;
const { dirname } = require('path');
const path = require('path')
const app = express()
const port = 3000
const fs = require('fs')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'));
})
app.post('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
        // console.log(data)
    })
    req.on('end', () => {
        fs.readFile('./file.txt', 'utf8', (err, olddata) => {
            const newdata = olddata + '\n' + data.split('&')
            fs.writeFile('./file.txt', newdata, () => {
                console.log(data.split('&'))
            })
        })

    })
})

app.get('*', (req, res) => {
    res.write('404')
    res.end()
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

=======
const express = require('express')
const log = console.log;
const { dirname } = require('path');
const path = require('path')
const app = express()
const port = 3000
const fs = require('fs')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'));
})
app.post('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
        // console.log(data)
    })
    req.on('end', () => {
        fs.readFile('./file.txt', 'utf8', (err, olddata) => {
            const newdata = olddata + '\n' + data.split('&')
            fs.writeFile('./file.txt', newdata, () => {
                console.log(data.split('&'))
            })
        })

    })
})

app.get('*', (req, res) => {
    res.write('404')
    res.end()
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

>>>>>>> 7a111659bca1837e5297f0113892aa231b25ae27
