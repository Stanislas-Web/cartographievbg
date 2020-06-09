module.exports=mongoose=>{
  var Vbg =mongoose.model(
    "vbg",
    mongoose.Schema({
      type_violence: { type: String, required: true },
      auteur_viol: { type: String, required: true },
      tranche_age_victime: { type: String, required: true },
      // categorie_victime: { type: String, required: true },
      sexe_victime:{type:String,required:false},
      province:
      [{
       type:mongoose.Schema.Types.ObjectId,
       required:false,
       ref:'province'
     }],
      date:{
          dateViol:{type:Date,required:true},
          dateSoumition:{type:Date,required:true}
      }
    })
  );
return Vbg;
}