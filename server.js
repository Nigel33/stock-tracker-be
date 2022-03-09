const cors = require('cors')
const express = require("express")
const Router = require("./routes")
const cookieParser = require("cookie-parser");

function createServer() {
	const app = express()

	app.use(cookieParser())

	app.use(cors({
		origin: '*'		
	}))
	
	app.use(express.json())	
	app.use('/api/users', Router.UserRouter)
	app.use('/api/ingredients', Router.IngredientRouter)
	app.use('/api/outlets', Router.OutletRouter)
	app.use('/api/auth', Router.AuthRouter)	
	
	return app
}

module.exports = createServer