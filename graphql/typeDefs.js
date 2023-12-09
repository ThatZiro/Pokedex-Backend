const {gql} = require('apollo-server');

module.exports = gql`
  type Element {
      id: ID
      name: String
      Effective: [Element]
      Weak: [Element]
      Resistant: [Element]
  }
  
  type Query {
      getAllElements: [Element]
      getElementByID(ID : ID!): Element!
  }
  
  type Mutation {
      createElement(name: String!): Element!
      updateElement(ID : ID!, name: String!): Element!
      deleteElement(ID : ID!): Element!
      
      updateElementEffectiveness(ID: ID!, effective: [ID], weak: [ID], resistance: [ID]): Element!
  }
`;