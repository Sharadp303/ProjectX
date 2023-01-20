require('dotenv').config()
	let serverPort = process.env.PORT||5000
    
    module.exports={
        serverPort: serverPort
    }
