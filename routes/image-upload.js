const express = require('express'); //import express

// 1. Create an express router object to set up our routes
const router = express.Router();
// 2.Import our image controller from our controllers/image-upload.js file
const imageController = require('../controllers/image-upload');
// 3.Create our first route with the controller function as the callback to handle the request.
router.post('/image-upload', imageController.newImage);
// 4.Export the route to use in our server.js
module.exports = router; //export to use in server.js

