let miLista = [
    {
        "id": 01,
        "nombres": "Alejandro",
        "apellidos": "Lopez Salamanca",
        "telefonos": "3202090322",
        "ubicaciones": {"ciudad":"Cali", "direccion":"calle 18 # 28-58"}

    },
    {
        "id": 02,
        "nombres": "Maria",
        "apellidos": "Sanchez Murcia",
        "telefonos": "3222050422",
        "ubicaciones": {"ciudad":"Cali", "direccion":"calle 20 # 18-88"}

    },
    {
        "id": 03,
        "nombres": "Camila",
        "apellidos": "Castaño Lopez",
        "telefonos": "3135803596",
        "ubicaciones": {"ciudad":"Bogota", "direccion":"calle 45 # 22-88"}


    },
    {
        "id": 04,
        "nombres": "Lola",
        "apellidos": "Florez Triviño",
        "telefonos": "3217798973",
        "ubicaciones": {"ciudad":"Huila", "direccion":"calle 15 # 5-66"}


    }
]

   

    function eliminarContacto(){
        miLista.pop();
            return miLista;

}

    function imprimirList(){
         console.log(miListat);
            return miLista;
}

    console.log(miLista);
    console.log(eliminarContacto());
    console.log(añadirContacto("Lola Perez"));
    console.log(imprimirList());
