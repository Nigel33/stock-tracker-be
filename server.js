const cors = require('cors')
const express = require("express")
const Router = require("./routes")

function createServer() {
	const app = express()

	app.use(cors({
		origin: '*'		
	}))
	
	app.use(express.json())	
	app.use('/api/tables', Router.TableRouter)
	app.use('/api/chairs', Router.ChairRouter)
	app.use('/api/queues', Router.QueueRouter)
	
	return app
}

module.exports = createServer