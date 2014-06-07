      function projectMenuController($scope) {
        $scope.menuState = { show: false };
        $scope.directory = [
          {name: 'Blackout 2003', image: , description: 'A detailed process of the 2003 blackout event.',}
          {name: 'Blackout 2003', image: , description: 'A detailed process of the 2003 blackout event.',}
          {name: 'Blackout 2003', image: , description: 'A detailed process of the 2003 blackout event.',}
        ];

        $scope.toggleMenu = function() {
          $scope.menuState.show = !$scope.menuState.show;
        };

        $scope.projectName = function() {
          $scope.menuState = { show: false };
        };

        $scope.projectImage = function() {

        };

        $scope.projectDescription = function() {

        };
        
      }