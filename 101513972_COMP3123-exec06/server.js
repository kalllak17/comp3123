const express = require('express');
const mongoose = require('mongoose');

// - Update your mongoDB Atals Url here to Connect to the database
const DB_URL = process.env.DB_URL || "will not upload database uri to github";
const PORT = process.env.PORT || 8081;

const notesRouter = require("./routes/NoteRoutes");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note-taking application - Week06 Exercise</h1>");
});

app.use('/api', notesRouter);




// Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
    app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
});
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
