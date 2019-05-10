import express from 'express'
//Comment the following line before building for production
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import {MongoClient} from 'mongodb'

const app = express();
devBundle.compile(app); //lines 2 and 4 are only meant for development mode and should be commented out when building the application code for production. In development mode, when these lines are executed, Webpack will compile and bundle the React code to place it in dist/bundle.js
/**
 * Webpack will compile client-side code in both development and production
   mode, then place the bundled files in the dist folder. To make these static files
   available on requests from the client side, we will add the following code
   in server.js to serve static files from dist/folder.
 */
const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));
/**
 * When the server receives a request at the root URL /, we will render 
   template.js in the browser via using the following route handling code (receive GET requests at /)
*/
app.get('/', (req, res) => {
    res.status(200).send(template());
})

// Add the specific port to listen for incoming requests.
let port = process.env.PORT || 3000;
app.listen(port, function onStart(err){
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', port);
})
/**
 * Connect the Node Server to MongoDB by using the 'MongoClient' driver
 */
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
MongoClient.connect(url, (err, db) =>  {
    console.log("Connected successfully to mongodb server");
    db.close();
});
