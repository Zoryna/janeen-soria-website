const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

/*html files*/
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./", "index.html")));

app.get("/index.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "index.html"))
);

/*images*/
app.use('/img',express.static(__dirname +'/img'));

/*css files*/
app.use('/css',express.static(__dirname +'/css'));

/*js files*/
app.use('/js',express.static(__dirname +'/js'));

app.listen(port, () => console.log(`App listening on port ${port}! Go to 'http://localhost:3000/'`))
