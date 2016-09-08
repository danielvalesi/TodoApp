app.controller('listCtrl', function($scope, TodoService) {
    
    //$scope.msg = "Hello World";
    
   
    
    $scope.tarefas = TodoService.read();

});
