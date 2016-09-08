app.controller('listCtrl', function($scope, TodoService) {
    
    //$scope.msg = "Hello World";
    $scope.tarefas = TodoService.read();

});

app.controller('NovoCtrl', function($scope, TodoService, $state) {
    
    $scope.salvar = function() {
      
      var tarefa = 
      {
        "id" : new Date().getTime(),
        "texto" : $scope.tarefa.texto,
        "concluida" : false
      }
      
      TodoService.create(tarefa);
      
      $state.go('lista');
      
    }

});
