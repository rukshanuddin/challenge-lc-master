export default {
  baseUrl: "http://localhost:3000/api/",
  resources: {
    Postes: {
      controller: "postes"
    },
    Operators: {
      controller: "operators"
    },
    Products: {
      controller: "products"
    },
    Items: {
      controller: "items"
    },
    OperatorsPoste: {
      controller: "operators_poste"
    }
  },
  fetchParams: {
    headers: {
      'content-type':'application/json; charset=utf-8'
    }
  }
};
