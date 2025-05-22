import Author from "#models/author";
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver(Author)
export default class AuthorResolver {
    // @Query(() => [Author])
    // async authors(): Promise<Author[]> {
    //     return Author.all()
    // }

    // Mutation: Gửi dữ liệu
  @Mutation(() => String)
  sayHello(@Arg('name') name: string) {
    return `Hello, ${name}!`
  }
    
}