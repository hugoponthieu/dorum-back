import User from "../models/user.js";
import { CreateUserValidator } from "../validators/user.js";

export default class UserService {
    create(newUser: CreateUserValidator) {
        return User.create(newUser)
    }
    show(userId: number){
        return User.findOrFail(userId)
    }
}