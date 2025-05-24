import Author from '#models/author'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Author.createMany([
      {
        name: 'Nguyễn Nhật Ánh',
        bio: 'Nhà văn nổi tiếng với truyện thiếu nhi.',
        birth_date: DateTime.fromISO('2000-02-01'),
      },
      {
        name: 'Haruki Murakami',
        bio: 'Nhà văn Nhật Bản hiện đại.',
        birth_date: DateTime.fromISO('1949-01-12'),
      },
      {
        name: 'J.K. Rowling',
        bio: 'Tác giả Harry Potter.',
        birth_date: DateTime.fromISO('1965-07-31'),
      },
    ])
  }
}