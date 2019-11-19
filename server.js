import express from 'express'

// Intialize express application
const app = express ();

// API Endpoints 
app.get('/', (req, res) => 
    res.send('http get request send to root api endpoint')
);

// Connection listener
app.listen(3000, () => console.log('Express server runnning on port 3000'));