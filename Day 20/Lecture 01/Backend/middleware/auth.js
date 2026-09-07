import dotenv from 'dotenv'
dotenv.config()

export const auth = (req, res, next) => {
    if(req.header.authorization === process.env.SECRET_KEY){
        next();
    }
    else{
        res.status(401).json({
            message: "unauthorized"
        });
    }
}
