const express = require("express");
const mongoose=require('mongoose')
const hotelRouter=require('./routes/hotel.router');
const connectDB=require('./config/dbConfig')

const app = express();

app.use(express.json())
connectDB();

const PORT = 3500;

app.get("/", (req, res) => {
  res.send("Hello Travellers");
});

app.use("/api/hotels",hotelRouter)

mongoose.connection.once("open",()=>{
  app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
  });
})



