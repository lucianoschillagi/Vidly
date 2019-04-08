// Vidly excercise
const express = require('express');
const app = express();

app.use(express.json());

// Model
const movies = [
  { id: 1, name: 'El padrino', genre:'drama'},
  { id: 2, name: 'Duro de matar', genre: 'action'},
  { id: 3, name: 'El gordo y el flaco', genre:'comedia'},
  { id: 4, name: 'Tiburón', genre:'suspenso'},
  { id: 5, name: 'Poltergeist', genre: 'horror'},
  { id: 6, name: 'La ciénaga', genre: 'drama'},
  { id: 7, name: 'El código secreto', genre: 'thriller'}
];

// GET requests
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/api/genres', (req, res) => {
  res.send(movies);
});

app.get('/api/genres/:id', (req, res) => {
  const movie = movies.find(c => c.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie  with the given ID was not found.');
  res.send(movie);
});

// POST requests (escribir una película)
app.post('/api/genres', (req, res) => {

  const movie = {
    id: movies.length + 1,
    name: req.body.name,
    genre: req.body.genre
  };
  movies.push(movie);
  res.send(movie);

});

// TODO:
// implement request:

// 1.PUT (update)
// 2.POST (create)
// 3.DELETE (delete)

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});