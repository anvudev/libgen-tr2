import { Query, Resolver } from "@foadonis/graphql";

@Resolver()
export default class DemoResolver {
  @Query(() => String)
  async demo(): Promise<string> {
    return 'GraphQL is working!'
  }
}