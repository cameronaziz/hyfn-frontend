import { mockServer } from "graphql-tools";
import { print } from "graphql/language/printer";

class MockNetworkInterface {
  constructor(schema, mocks = {}) {
    if (!schema) {
      throw new Error('Cannot create Mock Api without specifying a schema');
    }
    this.mockServer = mockServer(schema, mocks);
  }

  query(request) {
    return this.mockServer.query(print(request.query), request.variables);
  }
}

export default MockNetworkInterface;