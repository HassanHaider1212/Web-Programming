const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Leaderboard = require('./model/Leaderboard');
const app = express();
const PORT = 5000;
const db = 'mongodb://localhost:27017/LeaderBoard';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware for JSON parsing
app.use(express.json());

// Use cors middleware to allow cross-origin requests
app.use(cors());

// app.get("/api", (req, res) => {
//   res.json({"users": ["userone", "usertwo", "userthree"]});
// });

app.get('/getleaderboard', async (req, res) => {
  try {
    console.log('Getting all records...');
    const leaderboards = await Leaderboard.find({});
    console.log(leaderboards);
    res.json(leaderboards);
  } catch (err) {
    console.log('Error fetching leaderboard records:', err);
    res.status(500).send('Error fetching leaderboard records');
  }
});

app.post('/leaderboard', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { teamName, totalGamesPlayed, score } = req.body;
    const newLeaderboard = new Leaderboard({
      
      teamName,
      totalGamesPlayed,
      score
    });
    const savedLeaderboard = await newLeaderboard.save();
    console.log('Leaderboard record saved:', savedLeaderboard);
    res.json(savedLeaderboard);
  } catch (err) {
    console.log('Error saving leaderboard record:', err);
    res.status(500).send('Error saving leaderboard record');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
