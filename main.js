const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

// Collection == table
// schema == object blueprint

mongoose.connect('mongodb+srv://abhi:abhi@cluster0.ohay7tz.mongodb.net/mydb', () => {
  console.log('Database connected successfully');
})

const singupModel = new mongoose.Schema({
  Name: String,
  Email: String,
  PhoneNo: Number
})

const signupCollection = mongoose.model('signup', singupModel);

app.get('/', async (req, res) =>  {
  const result = await signupCollection.find({});
  res.send(result);
});

app.post('/signup', async (req, res) =>  {
   const collection =  new signupCollection(req.body);
   const result = await collection.save();
   res.send({msg: 'Signed up successfully', result})
});

app.listen(5000, () => {
   console.log("Server started in Port 5000");
})

// mongodb+srv://abhi:abhi@cluster0.ohay7tz.mongodb.net/mydb