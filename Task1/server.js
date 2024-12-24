const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs file
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  res.render('result', { name, email }); // Pass data to result.ejs
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
