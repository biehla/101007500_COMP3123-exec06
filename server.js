import express from 'express';
import { urlencoded, json } from 'body-parser';
// import noteRoute from './routes/NoteRoutes';
const noteRoute = require('./routes/NoteRoutes')
import { mongoString } from './serverString.json';
import { connect } from 'mongoose';

const DB_URL = mongoString;
const app = express();
const port = 8081;

app.use(urlencoded({ extended: true }))
app.use(json())


connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.use("/api", noteRoute.router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
