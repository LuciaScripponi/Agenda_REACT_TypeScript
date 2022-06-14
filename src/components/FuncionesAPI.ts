import Contacto from "./Contacto";

export async function getContactosJSONFetch() {
  let urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php";
  let response = await fetch(urlServer, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
  console.log(response);
  return await response.json();
}

export async function getContactosXindiceFetch(letra:string) {
  let urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=" + letra;
  let response = await fetch(urlServer, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  });
  console.log(response);
  return await response.json();
}

export async function deleteContactoPorId(id: number) {
  console.log("Eliminar Contacto ID " + id);
	let urlServer = 'http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=' + id;
	await fetch(urlServer, {
		    method: 'DELETE',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
}

export async function saveContacto(contacto?: Contacto) {
  let urlServer = 'http://168.194.207.98:8081/api_contacto/post_contacto.php';
	let method:string = "POST";
	if(contacto && contacto.id > 0){
		urlServer = 'http://168.194.207.98:8081/api_contacto/put_contacto.php';
		method = "PUT";
	}
	await fetch(urlServer, {
	  "method": method,
	  "body": JSON.stringify(contacto),
	  "headers": {
		"Content-Type": 'application/json'
	  }
	});
}
