require('dotenv').config()

const mongoose = require("mongoose")
const createServer = require("./server") 

mongoose
	.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
	.then(() => {
		const app = createServer() 

		app.listen(3001, () => {
			console.log("Server has started!")
			console.log(process.env.DATABASE_URL)
		})	
	})

const db = mongoose.connection 
db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to db")) 