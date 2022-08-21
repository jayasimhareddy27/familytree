import user from './../models/auth.js'

export const postdata=async(req,res)=>{
    const {form,email}=req.body;
    const data=form;
    try {
        let userdata=await user.findOne({email:email});
        let branch=userdata.trees.filter(x => x.id != data.id)
        userdata.trees=branch
        userdata.trees.push(data);
        const newdata=new user(userdata);
        await newdata.save()
        res.status(200).json(userdata.trees);    
    } catch (error) { 
        res.status(500).json({message:'something went wrong'});
     }
}
export const getd=async (req,res)=>{
    const {email}=req.body;
    try {        
        const userdata=await user.findOne({email:email});
        await res.status(200).json(userdata.trees);  
    }
    catch (error) {
            res.status(404).json({message:error.message});
    }
}
export const shared=async (req,res)=>{
    const {email}=req.body;
    console.log(email);
    try {        
        const userdata=await user.findOne({email:email});
        await res.status(200).json(userdata.trees);  
    }
    catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const getid=async (req,res)=>{
    const {id,email}=req.params;
    try {        
        const userdata=await user.findOne({email:email});
        const branch=userdata.trees.filter(data => data.id == id)
        await res.status(200).json(branch);  
    }
    catch (error) {
            res.status(404).json({message:error.message});
    }
}


export const del=async (req,res)=>{
    const a=req.params.a;
    const b=req.params.b;
    console.log(a,b);
    try {          
        const userdata=await user.findOne({email:b});
        var trees=userdata.trees;
        var remainingArr = trees.filter(data => data.id != a);
        userdata.trees=remainingArr;
        const newdata=new user(userdata);
        await newdata.save()
        //console.log(remainingArr);
        res.send("deleted");
    }
    catch (error) {
            res.status(404).json({message:error.message});
    }
}