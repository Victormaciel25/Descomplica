var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado)

var numerosfiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerosfiltrados);

function buscarvalores(valor){
    return valor < 5;
}

var numerosencontrados = numeros.filter(buscarvalores);
console.log(numerosencontrados);

var r1 = numeros.filter((valor) =>{
    return valor > 5;
})

console.log(r1);

var r2 = numeros.filter(valor =>valor > 5);

var funcionarios = [
    {nome: "Luiz", idade:62},
    {nome: "Davi", idade:22},
    {nome: "Arthur", idade:18},
    {nome: "Lucas", idade:40},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
       return valor.nome.length < 5
})

console.log(pessoasListagem);

var produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletronico"},
    {id: 2, descricao: "Notebook", categoria: "Eletronico"},
    {id: 3, descricao: "Geladeira", categoria: "Domestico"},
    {id: 4, descricao: "TV", categoria: "Domestico"},
]

var cate = produtos.filter(
    function(valor){
       return valor.categoria == "Eletronico"
})

console.log(cate)