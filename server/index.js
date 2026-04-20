
const express = require('express');
const cors = require('cors');
const http = require('http');
const connectToMongo = require('./db');
const app = express();



app.set('view engine','ejs')
app.use(express.static('public'))

const PORT = process.env.PORT || 8181;


// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
  credentials: true

}

));

// Connect to MongoDB
connectToMongo();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/reviews', require('./routes/reviews'));
app.use("/api/user", require("./routes/user"));
app.use("/api/reports", require("./routes/reports"));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


  // Start the server
app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
});
