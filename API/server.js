const express = require('express');
const app = express();
const pool = require('./db.config');
const cors = require('cors');
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 
}
 
app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}))

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

//get all posts
app.get('/api/post', (req, res) => {
  try {

    const sqlQuery = 'SELECT * FROM posts ORDER BY id ASC';

    const queryPost = pool.query(sqlQuery, [], (err, result) => {
      if (err) {
        console.log(`Something went wrong while getting all posts:${err.message}`)
      } else {
        const data =  result.rows;
        res.json({data})
      }
    });

  }catch(err) {
    console.log(err.message)
  }
});

//get post one by one
app.get('/api/post/:id', (req, res) => {
  try {

    const sqlQuery = 'SELECT * FROM posts WHERE id=$1';
    const {id} = req.params
    const queryPost = pool.query(sqlQuery, [id], (err, result) => {
      if (err) {
        console.log(`Something went wrong when getting post one by one:${err.message}`)
      } else {
        const data =  result.rows[0];
        res.json({data})
      }
    });

  }catch(err) {
    console.log(err.message)
  }
});

//add new post
app.post('/api/create/post', (req,res) => {
  try{

    const sqlQuery = 'INSERT INTO posts (title, author, content) VALUES ($1, $2, $3)';
    const { title, author, content } = req.body;

    const addPost = pool.query(sqlQuery, [title, author, content], (err) => {
      if (err) {
        console.log(`Something went wrong while adding new post:${err.message}`)
      }
    });

  }catch(err) {
    console.log(err.message)
  }
});

//Edit post
app.post('/api/edit/post/:id', (req,res) => {
  try{

    const sqlQuery = 'UPDATE posts SET title = $1, author = $2, content = $3 WHERE id = $4';
    const { title, author, content } = req.body;
    const {id} = req.params;

    const updatePost = pool.query(sqlQuery, [title, author, content, id], (err) => {
      if (err) {
        console.log(`Something went wrong while editting a post:${err.message}`)
      }
    });

  }catch(err) {
    console.log(err.message)
  }
});

//Delete post
app.delete('/api/delete/post/:id', (req,res) => {
  try{

    const sqlQuery = 'DELETE FROM posts WHERE id = $1';
    const {id} = req.params;

    const deletePost = pool.query(sqlQuery, [id], (err) => {
      if (err) {
        console.log(`Something went wrong while deleting a content:${err.message}`)
      }
    });

  }catch(err) {
    console.log(err.message)
  }
});