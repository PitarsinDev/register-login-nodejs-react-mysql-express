const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_register_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connection to database');
    } else {
        console.log('Connected to database');
    }
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, result) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else {
        if (result.length > 0) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      }
    });
});
  
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else {
        res.status(201).send('User registered successfully');
      }
    });
});

app.listen(port, () => {
    console.log('Server is running');
});