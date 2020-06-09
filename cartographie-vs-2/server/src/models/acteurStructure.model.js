module.exports=mongoose=>{
  const ActeurStructure = mongoose.model(
    "acteurStructure",
    mongoose.Schema({
      nom: { type: String, required: true },
      description: { type: String, required: false },
      province:
      [{
       type:mongoose.Schema.Types.ObjectId,
       required:false,
       ref:'province'
     }],
      adresse:{
          itineraire:{type:String,required:false},
          longitude:{type:String,required:true},
          latitude:{type:String,required:true}
          
          // terrritoire:{type:String,required:true},
          // district:{type:String,required:true}
      },
      contact:{
          numerosTelephone:{type:String,required:false},
          numerosWhatsapp:{type:String,required:false},
          email:{type:String,required:false}
      },
      type:{type:String,required:true}
    })
  )
  return ActeurStructure;
}

