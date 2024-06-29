import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'


export const topicCreateValidator = vine.compile(
    vine.object({
        title: vine.string(),
        owner: vine.string()
    })
)

export const topicUpdateValidator = vine.compile(
    vine.object({
        title: vine.string(),
    })
)

export type CreateTopicValidator = Infer<typeof topicCreateValidator>
export type UpdateTopicValidator = Infer<typeof topicUpdateValidator>