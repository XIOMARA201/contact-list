let id = 0
const misContactos = [
{
        id: id++,
        nombre: 'Lorena',
        apellido: 'Lopez',
        teléfono: 123456,
        ubicacion: { ciudad: 'Westview', dirección: '1987 Street' }
},
{
        id: id++,
        nombre: 'Vincente',
        apellido: 'Jimenez',
        teléfono: 7891011,
        ubicacion: {ciudad: 'Nueva York', dirección: '5587 Village'},
 
},
];

const editarLista =  (id, key, valor) => {
    let ConfigContacto = misContactos.findIndex(Contacts => Contacts.id == id);
     
    if(ConfigContacto !== -1){
            if(key === "ciudad" || key === "dirección") {
                    misContactos[ConfigContacto].ubicacion[key] = valor;
                    }else{
                            misContactos[ConfigContacto][key] = valor;
                    }
    }
}

  editarLista(1, "nombre", "clea");

  /* imprimo la lista de mis contactos */
    const imprimeLista = () => {
    console.log(misContactos);
  }
  imprimeLista(); 
