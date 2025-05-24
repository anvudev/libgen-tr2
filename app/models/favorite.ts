import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Book from './book.js'
import Author from './author.js'

export default class Favorite extends BaseModel {
  static table = 'favorite'
  
 @column({ isPrimary: true })
  declare id: string

  @column()
  declare user_id: string

  @column()
  declare book_id?: string

  @column()
  declare author_id?: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Book)
  declare book: BelongsTo<typeof Book>

  @belongsTo(() => Author)
  declare author: BelongsTo<typeof Author>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

}