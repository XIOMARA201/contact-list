let contactlist = ["Alejandro Lopez", "Elena Bernal", "Julian Salamanca", "Cesar Velasco", "Ana Arevalo"];

function añadirContacto(nuevoContacto){
    contactlist.push(nuevoContacto);
    return contactlist;
}

function eliminarContacto(){
    contactlist.pop();
    return contactlist;

}

function imprimirList(){
    console.log(contactlist);
    return contactlist;
}

console.log(contactlist);
console.log(eliminarContacto());
console.log(añadirContacto("Lola Perez"));
console.log(imprimirList());
