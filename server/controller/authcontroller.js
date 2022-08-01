
import user from './../models/auth.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signin=async(req,res)=>{
    const {email,password}=req.body;
    //console.log(email);
    try {
        
        const existinguser=await user.findOne({email});
        if(!existinguser) return res.status(404).json({message:'user not existing'});
        
        const ispasswordcorrect=await bcrypt.compare(password,existinguser.password);
        if(!ispasswordcorrect) return  res.status(400).json({message:'Wrong password'});
        
        const token=jwt.sign({email:existinguser.email,id:existinguser._id},'test',{expiresIn:'2h'});
        res.status(200).json({result:existinguser,token});
    }catch (error) { 
        res.status(500).json({message:'something went wrong'});
    }
}

export const signup=async(req,res)=>{
    const {email,password,name}=req.body;
    //console.log(email);
     try {
        const existinguser=await user.findOne({email}); 
        if(existinguser) return res.status(400).json({message:'user already existing'});
        const hashedpassword=await bcrypt.hash(password,12);
        const result=await user.create({email,password:hashedpassword,name:name});
        const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'});
        res.status(200).json({result,token});    
    } catch (error) { 
        res.status(500).json({message:'something went wrong'});
     }
}
