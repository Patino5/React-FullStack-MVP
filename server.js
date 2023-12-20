import express from 'express'
import pkg from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const dbString = process.env.DATABASE_URL
const PORT = process.env.PORT || 3000


const { Pool } = pkg;

const pool = new Pool ({
  connectionString: dbString
})

// const pool = new Pool ({
//     user: 'ryanpatino',
//     host: 'localhost',
//     database: 'clubs',
//     password: 'Ryan',
//     port: 5432,
// })

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))

// Get all Clubs 
app.get('/api/clubs', async (req, res) => {
    try {
        const result =  await pool.query(`SELECT * FROM golf_clubs;`)
        res.json(result.rows).status(200)
    } catch {
        console.error(error.message)
        res.status(500).json({error: error.message})
    }
})

// Get one Club
app.get('/api/clubs/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { rows } = await pool.query(`SELECT * FROM golf_clubs WHERE id = ${id}`)

        if (rows.length === 1) {
            res.json(rows[0]).status(200)
            
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
      const { clubName, clubType, brandName } = req.body;
  
      const { rows } = await pool.query(
        'INSERT INTO golf_clubs (club_name, club_type, brand) VALUES ($1, $2, $3) RETURNING *',
        [clubName, clubType, brandName]
      );
  
      res.status(201).json(rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  });  

// Update a Club
app.put('/api/clubs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { clubName, clubType, brandName } = req.body;
  
      const { rows } = await pool.query(
        'UPDATE golf_clubs SET club_name = $1, club_type = $2, brand = $3 WHERE id = $4 RETURNING *',
        [clubName, clubType, brandName, id]
      );
  
      if (rows.length === 1) {
        res.status(200).json(rows);
      } else {
        res.status(404).json({ error: 'Not Found' });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: error.message });
    }
  });
  

// Delete a Club
app.delete('/api/clubs/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { rows } = await pool.query(`DELETE FROM golf_clubs WHERE id = ${id} RETURNING *;`)
  
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

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });


// listener
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
} )