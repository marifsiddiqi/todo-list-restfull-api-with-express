const express = require('express')
const app = express()

const db = require('./config/config.js')
const User = require('./models/User')

const rootRoutes = require('./routes')


const PORT = process.env.PORT || 3000



// app.get('/users', (req, res) => {
//     res.json({
//         messsage: "ini bagian users"
//     })
// })

// app.get('/todos', (req, res) => {
//     res.json({
//         messsage: "ini bagian todos"
//     })
// })

// async function testConnection() {
//     try {
//         await db.authenticate();
//         console.log('Connection has been established successfully.');

//         // await db.sync({ force: true });
//         // await User.sync({ force: true });
//         console.log("All models were synchronized successfully.");
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// testConnection()

app.use(express.json())
app.use(rootRoutes)

app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})
