import jwt from "jsonwebtoken"
export const verifyToken = (req,res, next)=>{
    const token = req.headers.authorization.split(" ")[1]
    const verify = jwt.verify(token,"mon code")
    if(!verify){
        throw new Error("Token expiré !!!")
    }
    else{
        req.user = verify   
    }
    next(); 
}

export const isAuthenticated = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ status: false, message: "Utilisateur non connecté" });
    }
  
    next();
};
  