import { defineConfig } from '@adonisjs/lucid'
import config from 'config'



const db = config.get<DbConfig>('db')

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: db.primary.host,
        port: db.primary.port,
        user: db.username,
        password: db.password,
        database: db.database,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      debug: db.log.enabled,
    },
  },
})

export default dbConfig


interface DbConfig {
  primary: {
    host: string
    port: number
  }
  username: string
  password: string
  database: string
  log: {
    enabled: boolean
  }

}
