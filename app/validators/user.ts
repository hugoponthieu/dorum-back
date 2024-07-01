import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createUserValidator = vine.compile(
    vine.object({
        email: vine.string(),
        password: vine.string(),
    })
)

export type CreateUserValidator = Infer<typeof createUserValidator>