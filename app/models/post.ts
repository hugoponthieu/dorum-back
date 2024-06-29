

import { DateTime } from 'luxon'
import { BaseModel, beforeSave, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Topic from './topic.js'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare author: string
  
  @column()
  declare content: string

  @column()
  declare topicId: number

  @belongsTo(() => Topic)
  declare post: BelongsTo<typeof Topic>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  public static async updatePostCount(post: Post) {
    const topic = await Topic.find(post.topicId)
    if (topic) {
      topic.postcount += 1
      await topic.save()
    }
  }
}