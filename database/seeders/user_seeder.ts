import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'
import User from '#models/user'
import { UserRoleEnum } from '#config/enum'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const users = []
    for (let i = 0; i < 10; i++) {
      users.push({
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: UserRoleEnum.USER,
      })
    }

    await User.createMany(users)
  }
}