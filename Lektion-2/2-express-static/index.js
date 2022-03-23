const express = require('express')
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('server runnign at http://localhost:' + PORT))