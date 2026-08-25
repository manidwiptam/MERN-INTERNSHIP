import dotenv from "dotenv"
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY

const auth=(req,res,next)=>{
    if(req.headers.authorization===SECRET_KEY)
        {
        next()
    }else{
            res.status(401).json(
                {error:" NOt allowed "}
            )
    }
}   

export  default auth

