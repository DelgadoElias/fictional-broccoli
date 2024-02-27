// Crearemos dos clases
// Oferta, es el contenedor grande
export class Oferta {
    titulo;
    descripcion;
    lista;
    precio;
    link_redireccion;

    constructor(titulo, descripcion, lista, precio, link_redireccion){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.lista = lista;
        this.precio = precio;
        this.link_redireccion = link_redireccion;
    }
}


// Caracteristica / Beneficio
 class Beneficio {
    titulo;
    valor;

    constructor(titulo, valor){
        this.titulo = titulo;
        this.valor = valor;
    }
}

const listaBeneficiosPrimeraOferta = [
    new Beneficio('soporte', 'No'),
    new Beneficio('Peticiones diarias', 'No'),
    new Beneficio('Websocket', 'No'),
    new Beneficio('Http Protocol', 'No'),
];

const listaBeneficiosSegundaOferta = [
    new Beneficio('soporte', 'Email'),
    new Beneficio('Peticiones diarias', '1k'),
    new Beneficio('Websocket', 'No'),
    new Beneficio('Http Protocol', 'No'),
];


const primeraOferta = 
    new Oferta(
        'FREE',
        'descripcion normal', 
        listaBeneficiosPrimeraOferta, 
        4, 
        'link_redirect'
    );

const segundaOferta = 
    new Oferta(
        'BASIC',
        'Descripcion normal',
        listaBeneficiosSegundaOferta,
        7,
        'link_redirect'
    );


const database = [
    primeraOferta,
    segundaOferta
]

export default database;