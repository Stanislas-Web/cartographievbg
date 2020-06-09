module.exports=mongoose=>{
  const  User =mongoose.model(
    "user",
    mongoose.Schema({
      prenom: { type: String, required: true },
      nom: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      role_user: { type: String, required: true }
    })
  )
  return User;
}
