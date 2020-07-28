//Consumir la API de github para traer la información del usuario

const https = require('https');

let username = 'ImAleexDz';

let CHROME_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
let FIREFOX_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0';
let IE_USER_AGENT = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)';

let options = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: {'user-agent': CHROME_USER_AGENT}
};

let request = https.request(options, (response)=>{
    let body = '';
    //esta respuesta es evaluado en estos escenarios, como ejemplo cuando obtenemos la data
    response.on('data', (out)=>{
        //la salida (out) es almacenada en una variable body
        body += out;
    });
    //evalua escenario cuando termina de procesar la data
    response.on('end', (out)=>{
        let json = JSON.parse(body);
        console.log(json);
    });
});

//Evaluamos si la petición fue incorrecta

request.on('error', (e)=>{
    console.log(e);
});
//Se cierra la petición
request.end();