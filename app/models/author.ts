import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import  Book from './book.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Author extends BaseModel {
  static table = 'author'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

   @column()
  declare bio: string

  @column.date()
  declare birth_date: DateTime

  @hasMany(() => Book)
  declare books: HasMany<typeof Book>

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime | null
}