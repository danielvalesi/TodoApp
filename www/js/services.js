app.factory('TodoService', function() {
	 var tarefas = JSON.parse(window.localStorage.getItem('dbtarefas') || '[]');
   
   var persistir = function(){
    window.localStorage.setItem('dbtarefas', JSON.stringify(tarefas));
   }
  
  /* 
   [
      {
        "id" : 1,
        "texto" : "Estudar mais",
        "concluida" : false
      },
      {
        "id" : 2,
        "texto" : "Fazer o TCC",
        "concluida" : false
      },
      {
        "id" : 3,
        "texto" : "Virar um zumbi",
        "concluida" : true
      },
      {
        "id" : 4,
        "texto" : "Dormir menos",
        "concluida" : true
      }
    ];
    */
    
    return {
    	// Metodos do CRUD
    	
    	read: function() {
    		return tarefas;
        persistir();
    	},
      
      readOne: function(id) {
        for (var i = 0; i < tarefas.length; i++) {
          if (tarefas[i].id == id) {
            return tarefas[i];
          }
        }
        persistir();
      },
      
      create: function(tarefa) {
        tarefas.push(tarefa);
        persistir();
      },
      
      update: function(tarefa) {
        for (var i = 0; i < tarefas.length; i++) {
          if (tarefas[i].id == tarefa.id) {
            tarefas[i].texto = tarefa.texto;
            break;
          }
        }
        persistir();
      },
      
      
      
      concluir: function(id) {
        for (var i = 0; i < tarefas.length; i++) {
          if (tarefas[i].id == id) {
            tarefas[i].concluida = true;
            break;
          }
        }
        persistir();
      },
      
      
      
      abrir: function(id) {
        for (var i = 0; i < tarefas.length; i++) {
          if (tarefas[i].id == id) {
            tarefas[i].concluida = false;
            break;
          }
        }
        persistir();
      },
      
      apagar: function(id) {
        for (var i = 0; i < tarefas.length; i++) {
          if (tarefas[i].id == id) {
            tarefas.splice(i, 1);
          }
        }
        persistir();
      },
      
      
    }
});
