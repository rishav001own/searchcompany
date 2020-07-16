const express = require('express');
const mongo = require('mongo');
const port = process.env.PORT || 8100;
const app = express();




app.listen(port,()=> console.log(`server started at port 8100`));

