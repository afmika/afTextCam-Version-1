// ASCIIVideo art direct by afmika
// github.com/afmika

'use strict';
// constantes
var video = document.querySelector('video'); // on prend la balise video et on attache le flux ici
var fps = 25;
var localStream = null; // le stream local qui permettra de produire la video
var canvas = document.getElementById("canvas"); // le canvas qui permettra d obtenir les datapixels
var ctx = canvas.getContext("2d");
const MediaParam = {
	video: true // on peut ajouter le param audio : true mais on va pas s en servir
};

// succes de production du flux on l ajoute tout simplement
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  video.srcObject = mediaStream;
  console.log("frameElement initialised!"); // succes !
}

// gestion des erreurs

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// fonctions utiles
// video.requestPictureInPicture(); // rend la video en miniature

// initialisation
navigator.mediaDevices.getUserMedia(MediaParam)
.then(gotLocalMediaStream)
.catch(handleLocalMediaStreamError);