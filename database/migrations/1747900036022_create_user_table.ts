import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  async up() {
    this.schema.raw(`
      CREATE TYPE user_role_enum AS ENUM ('ADMIN', 'USER', 'MODERATOR');
    `)

    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('user_name')
      table.enum('role', ['admin', 'user', 'guest']).defaultTo('user')
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
     this.schema.raw(`DROP TYPE IF EXISTS user_role_enum`)
  }
}