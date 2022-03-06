const cors = require('cors')
const express = require("express")
const Router = require("./routes")

function createServer() {
	const app = express()

	app.use(cors({
		origin: '*'		
	}))
	
	app.use(express.json())	
	app.use('/api/users', Router.UserRouter)
	app.use('/api/ingredients', Router.IngredientRouter)
	app.use('/api/outlets', Router.OutletRouter)
	// app.use('/api/chairs', Router.ChairRouter)
	// app.use('/api/queues', Router.QueueRouter)
	
	return app
}

module.exports = createServer