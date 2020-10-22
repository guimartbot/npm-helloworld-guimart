//Archivo para crear funciones y luego cuando vaya a importar este modulo
//Se importan las funciones

const axios = require('axios') //Para instalar la dependencia npm i axios

const greet = name  => 'Hello' + name;

const users = async () => {
    //Web del api: jsonplaceholder
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2');
    return res.data;
}

module.exports = {
    users,
    greet
}

//users().then(res => console.log(res));

//Para probar la respuesta del servidor
//node src/index.js