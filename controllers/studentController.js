 const students = require ('../Models/studentModel')

 exports.addStudents = async (req, res) => {
   try{
      const teacherId=req.payload
   const {name,batch,phone}=req.body
   const image=req.file.filename
   const newStudent=new students({ 
     name,batch,phone,image,teacherId
   }) 
    await newStudent.save()
    res.status(200).json(newStudent)
   } 
    catch(err){
      console.log(err);
      res.status(400).json(err)
    }         
 } 
 exports.getStudents =async(req,res)=>{
   const search=req.query.search
   // console.log(search);
   try{
      const teacherId=req.payload
      const studentlist=await students.find({teacherId,name:{$regex: search,$options: 'i'}})
      res.status(200).json(studentlist)
   } 
   catch(err){
       console.log(err);
       res.status(400).json(err)
   }
 }
 
 exports.deleteStudents=async(req,res)=>{
   try{
      const {id}=req.params
      const result=await students.findOneAndDelete({_id:id})
      res.status(200).json(result)
   }catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }
 
 exports.updateStudents=async(req,res)=>{
   try{
      const{id}=req.params
      if(req.file){
         var image=req.file.filename
         var {name,batch,phone}=req.body
      }else{
         var{name,batch,phone,image}=req.body
      }
         const existingStudent=await students.findById(id)
         existingStudent.name=name
         existingStudent.batch=batch
         existingStudent.phone=phone
         existingStudent.image=image
         await existingStudent.save()
         res.status(200).json(existingStudent)
   }catch(err){
      console.log(err);
      res.status(400).json(err)
   }
 }
