const express = require('express')


const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.static('public'))

// Get all Clubs 


// Get one Club


// Add a Club


// Update a Club


// Delete a Club


// listener
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
} )