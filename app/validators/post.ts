import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'


export const postCreateValidator = vine.compile(
    vine.object({
        content: vine.string(),
        author: vine.string()
    })
)

export const postUpdateValidator = vine.compile(
    vine.object({
        content: vine.string(),
    })
)

export type CreatePostValidator = Infer<typeof postCreateValidator>
export type UpdatePostValidator = Infer<typeof postUpdateValidator>