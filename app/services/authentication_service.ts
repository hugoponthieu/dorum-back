import User from "../models/user.js";
import { CreateUserValidator } from "../validators/user.js";

export default class AuthenticationService {
    async signin(authUser: CreateUserValidator) {
        const user = await User.verifyCredentials(authUser.email, authUser.password)
        return User.accessTokens.create(user)
    }
}