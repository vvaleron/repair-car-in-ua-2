export default ($http) => {
  const urlBase = '/api/users';
  const UserFactory = {};

  UserFactory.getUsers = function () {
    return $http.get(urlBase);
  };

  UserFactory.getUser = function (id) {
    return $http.get(urlBase + '/' + id);
  };

  UserFactory.insertUser = function (cust) {
    return $http.post(urlBase, cust);
  };

  UserFactory.updateUser = function (cust) {
    return $http.put(urlBase + '/' + cust.ID, cust)
  };

  UserFactory.deleteUser = function (id) {
    return $http.delete(urlBase + '/' + id);
  };

  return UserFactory;
};