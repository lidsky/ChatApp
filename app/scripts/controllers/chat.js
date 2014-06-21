'use strict';
//@TODO: 1. refactor code into functions
//       2. change to dynamic data (query mongodb)
//       3. connect to socket.io

angular.module('chatAppApp')
  .controller('ChatCtrl', function ($scope) {
    var chatData = {
      'sayyid': [{name:'Hasbro', message:['yo ko ape kaba']}, {name:'Sayyid', message:['kaba baik']}],
      'zaimi': [{name:'zaimi', message:['cibai ko la']}],
      'kta': [{name:'kta', message:['wtf bro??!!!']}]
    };
    var users = [];
    for(var i in chatData){
      users.push(i);
    }
  	$scope.users = users;
    $scope.chatList = chatData[users[0]];
    $scope.message = '';

    $scope.submitted = function() {
      // user anon if not logged in
      var currentUser;
      if ($scope.currentUser === null){
        currentUser = 'anon';
      } else {
        currentUser = $scope.currentUser.name;
      }
    	// append to current message array if previous chatList is the same person
    	if ($scope.chatList[$scope.chatList.length - 1].name === currentUser) {
    		$scope.chatList[$scope.chatList.length - 1].message.push($scope.message);
    	} else {
    		$scope.chatList.push({name: currentUser, message: [$scope.message]});
    	}
      // last messaged user appears the top most of the list 
      for (var i in chatData) {
        if (chatData[i] === $scope.chatList){
          var tempIndex = $scope.users.indexOf(i);
          $scope.users.splice(tempIndex,1);
          $scope.users.unshift(i);
        }
      }
    	$scope.message = '';
    };

    //change chat box to clicked user
    $scope.doClickUser = function(user) {
      $scope.chatList = chatData[user];
    };
    

  });
