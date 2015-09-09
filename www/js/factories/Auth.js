app.factory("Auth", function($firebaseAuth) {
  var endPoint = 'https://blistering-inferno-3867.firebaseio.com';
  var usersRef = new Firebase(endPoint);
  return $firebaseAuth(usersRef);
});