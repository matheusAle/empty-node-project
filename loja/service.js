var url = "https://clienteweb2017.000webhostapp.com/loja/categoria/";
var loja = "43406E41981A";

var categoriaService = {
    buscarDados() {
        $.get(url+"getCategorias.php?loja="+loja)
        .done(function(data){
            var obj = JSON.parse(data)
            montarLinhas(obj.categorias);
            $("#divForm").slideUp();
        })
        .fail(function(){
            alert("falha");
        });   
    },
    incluirDados({ nome }) {			
        $.get(url+"createCategoria.php?nome=" + nome +"&loja="+ loja)
        .done(function(data){
            console.log(data);
            buscarDados();
        })
        .fail(function(){
            alert("falha");
        });		
    },
    alterarDados(categoria) {			
        $.get(url+"updateCategoria.php?codigo="+ categoria.id +"&nome=" + categoria.nome + "&loja="+loja)
        .done(function(data){
            console.log(data);
            buscarDados();
        })
        .fail(function(){
            alert("falha");
        });		
    } 
}