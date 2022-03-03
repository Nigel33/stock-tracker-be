require('dotenv').config()

const mongoose = require('mongoose')

exports.connect = async () => {
  mongoose.connect(
		process.env.TEST_DATABASE_URL,
		{ useNewUrlParser: true }
	)

  const db = mongoose.connection 
  db.on('error', error => console.error(error))
};

exports.close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();  
}

exports.clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
}



