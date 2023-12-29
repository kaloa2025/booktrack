const mongoose =require('mongoose');
const mongoURI="mongodb+srv://kaloa2025:**********@cluster0.xgpa9vt.mongodb.net/booktrack?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      
      const fetched_data = mongoose.connection.db.collection("books");
        const data = await fetched_data.find({}).toArray();

        const category = mongoose.connection.db.collection("category");
        const catData = await category.find({}).toArray();

        const users = mongoose.connection.db.collection("users");
        const userData = await users.find({}).toArray();

        global.books = data;
        global.bookcat = catData;
        global.user = userData;

        console.log('Data fetched and stored successfully.');
        
    } catch (error) {
      console.log('err: ', error);
    }
  };
  module.exports=mongoDB;
