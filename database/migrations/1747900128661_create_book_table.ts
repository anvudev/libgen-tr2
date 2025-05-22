import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'book'  // Changed from 'book' to 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('description').nullable()
      table.integer('published_year').nullable()
      
      // Change this to match the actual table name in your author migration
      table.integer('author_id').unsigned().references('id').inTable('author').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
