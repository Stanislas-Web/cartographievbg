module.exports=mongoose=>{
    const CasSoumis = mongoose.model(
        "casSoumis",
        mongoose.Schema({
            prenom: { type: String, required: true },
            nom: { type: String, required: true },
            age: { type: Number, required: false },
            sexe:{type:String,required:true},
            ville:
            [{
             type:mongoose.Schema.Types.ObjectId,
             required:false,
             ref:'ville'
           }],
          acteurStructure:
          [{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:'acteurStructure'
          }]
        })
    );
      return CasSoumis;
}
