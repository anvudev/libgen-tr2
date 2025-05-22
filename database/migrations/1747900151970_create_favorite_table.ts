import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'favorite'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE')
      table.integer('book_id').unsigned().nullable().references('id').inTable('book').onDelete('CASCADE')
      table.integer('author_id').unsigned().nullable().references('id').inTable('author').onDelete('CASCADE')
      

      table.unique(['user_id', 'book_id', 'author_id'])

      table.timestamp('created_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}