import Author from "#models/author";

const resolvers = {
  Query: {
    authors: async (_: any, args: { page?: number; limit?: number; name?: string }) => {
      const page = args.page || 1
      const limit = args.limit || 10
      const name = args.name

      let query = Author.query()

      if (name) {
        query = query.whereILike('name', `%${name}%`)
      }

      const total = await query.clone().count('* as total').then(r => Number(r[0].$extras.total))
      const data = await query.offset((page - 1) * limit).limit(limit)

      return {
        data: data.map(a => a.toJSON()),
        total,
        page,
        limit,
      }
    }
  }
}

export default resolvers