const itens = [
    {
        id:0,
        nome:'capinhas',
        img:'',
        quantidade:'',
    },
    {
        id:1,
        nome:'fones',
        img:'',
        quantidade:'',
    },
    {
        id:2,
        nome:'peliculas',
        img:'',
        quantidade:'',
    },
    {
        id:3,
        nome:'caixinhas de som',
        img:'',
        quantidade:'',
    },
    {
        id:4,
        nome:'carregadores',
        img:'',
        quantidade:'',
    },
]

inicializarLoja = () =>{
    var containerProdutos = document.getElementById('produtos');
    itens.map((val)=>{
        containerProdutos.innerHTML+=

        <div class="produto-single"> 
            <img src="'+val.img+'">
            <p>'+val.nome+'</p>
            <a key="'val.id'" href="">Adicionar ao carrinho!</a>
        </div>
        
    })
}    
inicializarLoja();