const express = require('express');
const app = express();
const cors = require('cors');
const upload = require('express-fileupload')
const port = process.env.PORT || 5500

// --------------Live Server---------------------
const root = require('path').join(__dirname, 'dist')
app.use(express.static(root));
// --------------Live Server---------------------

app.use(express.static(__dirname+'/assets'))
app.use(upload())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/', require('./AllRoutes/AllRouter'));

// --------------Live Server---------------------
app.get('*', (req, res)=>{
  res.sendFile('index.html', {root})
})
// --------------Live Server---------------------

app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});