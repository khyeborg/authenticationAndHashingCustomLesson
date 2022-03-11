//Create HASHING Objects here
// new MD5 instance
var MD5 = new Hashes.MD5
// new SHA1 instance
var SHA1 = new Hashes.SHA1
// new SHA256 instance
var SHA256 =  new Hashes.SHA256
// new SHA512 instace
var SHA512 = new Hashes.SHA512
// new RIPEMD-160 instace
var RMD160 = new Hashes.RMD160

//Create references to HTML elements using the DOM
let userInputElement = document.querySelector("#userInput");
let hashButtonElement = document.querySelector("#hashButton");

let hashContainerElement = document.querySelector("#hashContainer");

hashButtonElement.onclick = function hash(event) {
    event.preventDefault();

    let userInput = userInputElement.value;

    //Generate HASHES using various algorithms
    let md5Hash = MD5.hex(userInput);
    let sha1Hash = SHA1.hex(userInput);
    let sha256Hash = SHA256.hex(userInput);
    let sha512Hash = SHA512.hex(userInput);

    //Renders p elements using the DOM
    let md5P = document.createElement("p");
    md5P.innerText = 'MD5 ' + md5Hash;
    hashContainerElement.appendChild(md5P);

    let sha1P = document.createElement("p");
    sha1P.innerText = 'SHA-1 ' + sha1Hash;
    hashContainerElement.appendChild(sha1P);

    let sha256P = document.createElement("p");
    sha256P.innerText = 'SHA-256 ' + sha256Hash;
    hashContainerElement.appendChild(sha256P);

    let sha512P = document.createElement("p");
    sha512P.innerText = 'SHA-512 ' + sha512Hash;
    hashContainerElement.appendChild(sha512P);
}