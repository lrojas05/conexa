
import { registerAs } from '@nestjs/config'

export default registerAs ('config', () =>{
    return {
        mongo:{
            name: process.env.MONGO_NAME,
            uri: process.env.MONGO_URI,
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD, 
            port: process.env.MONGO_PORT,
        },

        jwtSecret: process.env.SECRET,

        sever:{
            url: process.env.URL,
            port: process.env.PORT,
        }
    }

})
