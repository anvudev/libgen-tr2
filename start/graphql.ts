import graphql from '@foadonis/graphql/services/main'

graphql.resolvers([
  () => import('#graphql/resolvers/demo_resolver'),
  () => import('#graphql/resolvers/author_resolver')
])
