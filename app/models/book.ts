import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Author from './author.js';

export default class Book extends BaseModel {
    @column({ isPrimary: true })
  declare id: string

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare published_year: number

  @column()
  declare author_id: string

  @belongsTo(() => Author)
  declare author: BelongsTo<typeof Author>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null

}