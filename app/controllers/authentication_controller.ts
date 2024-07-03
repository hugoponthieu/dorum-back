import AuthenticationService from "#services/authentication_service";
import UserService from "#services/user_service";
import { HttpContext } from "@adonisjs/core/http";
import { createUserValidator } from "#validators/user";
import { inject } from "@adonisjs/core";

@inject()
export default class AuthenticationController {
    constructor(private authenticationService: AuthenticationService, private userService: UserService) { }

    async signin({ request }: HttpContext) {
        const signinAuth = await request.validateUsing(createUserValidator)
        return this.authenticationService.signin(signinAuth)
    }

    async signup({ request }: HttpContext) {
        const signupAuth = await request.validateUsing(createUserValidator)
        return this.userService.create(signupAuth)
    }
}