import mongoose, {Schema} from "mongoose";

export class User {
    
    nome?: {type: String, required: true}  
    email?: String 
    password?: String
    
    constructor(user: any){
        this.nome = user.nome,
        this.email = user.email,
        this.password = user.password
    }
}

var userDataSchema = new Schema(User, {collection: 'users'});

export var Users = mongoose.model('User', userDataSchema);