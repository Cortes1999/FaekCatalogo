const input = document.querySelector('#inputId');
const button = document.querySelector('#boton');
const productocontainer = document.querySelector('.producto-container');

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerProducto(input.value);
})

function traerProducto(producto) {
    //https://pokeapi.co/api/v2/pokemon/
    //https://api.escuelajs.co/api/v1/products

    fetch(`https://api.escuelajs.co/api/v1/products/${producto}`)
        .then((res) => res.json())
        .then((data) => { 
            mostrarProducto(data)
        });
}

function mostrarProducto(producto) {
    const img = document.getElementById('imagenP');
    img.src = producto.images;

    const titulo = document.getElementById('titulo');
    titulo.textContent = producto.title;
    
    const precio = document.getElementById('precio');
    precio.textContent = producto.price;

    const descripcion = document.getElementById('descripcion');
    descripcion.textContent = producto.description;

    const categoria = document.getElementById('categoria');
    categoria.textContent = producto.category;
}
function agregarProducto(producto){
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}