console.log("--------Objeto URL (location)-------");
console.log(location);
console.log(location.origin);
console.log("location.protocol: "+location.protocol);
console.log("location.host: "+location.host);
console.log("location.hostname: "+location.hostname);
console.log("location.port: "+location.port);
console.log("location.href: "+location.href);
console.log("location.hash: "+location.hash);
console.log("location.pathname: "+location.pathname);

console.log("--------Objeto history-------");
console.log(history);//estos objetos cuelgan del window
console.log(history.length); //las paginas que hemos visitado
//console.log(history.back(3));  nos permire retroceder para las paguinas que hemos navegado en este caso regresa tras paginas
// history.go()  nos permite ir a una pagina determinada # pisitivos para ir adelante y # negativos para ir atras

console.log("--------Objeto navigator-------");
console.log(navigator);
console.log(navigator.connection);
console.log("--------geolocalizacion-------");
console.log(navigator.geolocation);
console.log("--------mediaDevices-------");
console.log(navigator.mediaDevices);
console.log("--------mimeTypes-------");
console.log(navigator.mimeTypes);
console.log("--------online-------");
console.log(navigator.onLine);
console.log("--------serviceWorker-------");
console.log(navigator.serviceWorker); //es una api que nos permite instar una pagina web como si fuera una app
console.log("--------storage-------");
console.log(navigator.storage);
console.log("--------usb-------");
console.log(navigator.usb);
console.log("--------userAgent-------");
console.log(navigator.userAgent);
