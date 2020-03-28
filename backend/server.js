const mongoose = require ('mongoose');
const express = require ('express');
const cors = require ('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use (cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } );
//useNewUrlParser : true is added b/c MongoDB Node.js driver rewrote tool it uses to parse MongoDB connection strings

const connection = mongoose.connection;
connection.once ('open', () => {
	console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {
	console.log('Server is running on port: ${port}');
});


