app.factory('TodoService', function() {
	 var tarefas = 
   
   
   
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
    
    return {
    	// Metodos do CRUD
    	
    	read: function() {
    		return tarefas;
    	}
    }
});
