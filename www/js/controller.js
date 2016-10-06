app.controller('listCtrl', function($scope, TodoService, $state) {
    
    //$scope.msg = "Hello World";
    $scope.tarefas = TodoService.read();
    
    $scope.editar = function(id) {
      // vai navegar para a pagina edita e o id recebe id da tarefa
      $state.go('edita', {id: id});
    }
    
    $scope.concluir = function(id) {
      TodoService.concluir(id);
    }
    
    $scope.apagar = function(id) {
      TodoService.apagar(id);
    }
    
    $scope.abrir = function(id) {
      TodoService.abrir(id);
    }

});



app.controller('NovoCtrl', function($scope, TodoService, $state) {
  
  $scope.tarefa = {}
    
    $scope.salvar = function() {
      
      var tarefa = 
      {
        "id" : new Date().getTime(),
        "texto" : $scope.tarefa.texto,
        "concluida" : false
      }
      
      TodoService.create(tarefa);
      
      $state.go('lista');
      
    };
});


app.controller('EditaCtrl', function($scope, TodoService, $state, $stateParams) {
  
  var id = $stateParams.id;
  
  //acessa o serviço e retorna a tarefa do mesmo id, pega a tarefa e add no scope
  $scope.tarefa = TodoService.readOne(id);
    
    $scope.salvar = function() {
      
      var tarefa = 
      {
        "id" : new Date().getTime(),
        "texto" : $scope.tarefa.texto,
        "concluida" : false
      }
      
      TodoService.update(tarefa);
      
      $state.go('lista');
      
    };

});




