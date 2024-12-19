const mongoose = require('mongoose');
const connectDB = async () => {

  try {
    const conn = await mongoose.connect('mongodb+srv://swarna:swarna12345@cluster0.ut1hnqu.mongodb.net/shoppingCart?retryWrites=true&w=majority');
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
}
connectDB();