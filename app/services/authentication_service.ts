import User from "../models/user.js";
import { CreateUserValidator } from "../validators/user.js";

export default class AuthenticationService {
    async signin(authUser: CreateUserValidator) {
        const user = await User.verifyCredentials(authUser.email, authUser.password)
        const token = await User.accessTokens.create(user)
        return { user: authUser.email, token: token.value!.release() }
    }
}