const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/quizDB');

const quizSchema = new mongoose.Schema({
  category: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

const scoreSchema = new mongoose.Schema({
  username: String,
  category: String,
  score: Number,
});

const Quiz = mongoose.model('Quiz', quizSchema);
const Score = mongoose.model('Score', scoreSchema);


app.get('/quiz/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const quiz = await Quiz.findOne({ category }).exec();
    if (quiz) {
      res.json(quiz.questions);
    } else {
      res.status(404).send('Category not found');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/score', async (req, res) => {
  const { username, category, score } = req.body;
  const newScore = new Score({ username, category, score });
  try {
    await newScore.save();
    res.status(201).send('Score submitted');
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get('/scores', async (req, res) => {
  try {
    const scores = await Score.find({}).exec();
    res.json(scores);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
