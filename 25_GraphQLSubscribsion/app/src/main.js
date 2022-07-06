import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

Vue.config.productionTip = false

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://still-cougar-41.hasura.app/v1/graphql',
})

const wsLink = new WebSocketLink({
  uri: 'ws://still-cougar-41.hasura.app/v1/graphql',
  options: {
    reconnect: true,
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
  },
  wsLink,
  httpLink
)

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')