const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 8000
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors())

let data = [{
    "date": "22.12.1995",
    "name": "День Рождения",
    "quantity": "26",
    "distance": "30 км"
  },
  {
    "date": "13.05.2000",
    "name": "Победа",
    "quantity": "5",
    "distance": "15м"
  },
  {
    "date": "22.12.1995",
    "name": "День Рождения",
    "quantity": "26",
    "distance": "30 км"
  },
  {
    "date": "13.05.2000",
    "name": "Победа",
    "quantity": "5",
    "distance": "15м"
  }
]
  
app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

app.get('/', (req, res) => {
  res.json({"data": data, "total": 2})
})

app.listen(port, () => {
  console.log(`Example app listening on port 
${port}`)
})