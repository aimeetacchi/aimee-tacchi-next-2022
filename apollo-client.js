// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.datocms.com/",
    headers: {
        Authorization: "Bearer " + process.env.DATOCMS_API_KEY
    },
    cache: new InMemoryCache(),
});

export default client;