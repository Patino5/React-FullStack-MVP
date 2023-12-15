const express = require('express')
const { pool } = require('pg')


const PORT = 3000

const app = express()

app.use(express.json())
app.use(express.static('public'))

// Get all Clubs 
app.get('/api/clubs', async (req, res) => {
    try {
        const { rows } =  await pool.query(`SELECT * FROM clubs;`)
        res.send({ rows }).status(200)
        console.log({rows});
    } catch {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
})

// Get one Club
app.get('/api/clubs/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await pool.query(`SELECT * FROM clubs WHERE id = ${id}`)

        if (rows.length === 1) {
            res.send({rows}).status(200)
        } else {
            res.send('Not found').status(404)
        }
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
})

// Add a Club
app.post('/api/clubs', async (req, res) => {
    try {
        const {title, author, rating, status} = req.body
        const { rows } = await pool.query(`INSERT INTO books (title, author, rating, status)
        VALUES ('${title}', '${author}', ${rating}, '${status}') RETURNING *;`)
        res.status(201).json(rows[0])
    } catch (error) {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
})

// Update a Club
app.put('/api/clubs/:id', async (req, res) => {
    try {
      const { id } = req.params
      const { clubName, clubType, brandName } = req.body
      const { rows } = await pool.query(
        `UPDATE clubs SET clubName = '${clubName}', clubType = '${clubType}', brandName = '${brandName}', WHERE id = ${id} RETURNING *;`)
  
      if (rows.length === 1) {
        res.status(200).json(rows)
      } else {
        res.status(404).json({ error: 'Not Found' })
      }
    } catch (error) {
      console.error(error.message)
      res.status(500).json({ error: error.message })
    }
  })

// Delete a Club
app.delete('/api/clubs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await pool.query(`DELETE FROM clubs WHERE id = ${id} RETURNING *;`)
  
      if (rows.length === 1) {
        res.status(200).json(rows)
      } else {
        res.status(404).json({ error: 'Not Found' })
      }
    } catch (error) {
      console.error(error.message)
      res.status(500).json({ error: error.message })
    }
  })

// listener
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
} )