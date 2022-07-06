import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.config.productionTip = false

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://flowing-kingfish-74.hasura.app/v1/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
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
