// ASCIIVideo art direct by afmika
// github.com/afmika

// Gestion de l image

//Du plus concentré au plus faible
var categories = ["MMHHI::.", "98657::.", "XPHOi::.", "XX%%@u;:", "BBMCH::.", "XX%%iiun", "WMHXKU/;:,_"];

function select(chaine, r, g, b) {
    var pic = chaine.split('');
    var x = (r + g + b) / 3; // N/B
	var dpix = 255 / chaine.length;
	for(var i=0; i < chaine.length; i++) {
		var inf = i * dpix,
			sup = inf + dpix;
		if(x >= inf && x < sup) {
			return pic[i];
		}
	}
	return pic[0];
}

function asciiArt(index) {
	var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
	//Du plus concentré au plus faible
	var chaine = categories[index]; 
	
	 //w*h*4 : w*4 se répétant h fois donc si i = 4w * k c.à.d, pour i(mod 4w)=0, 4w|i
	var taille = image.data.length;
	var txt = '';
	for (var i = 0; i < taille; i += 4) {
		if (i % (4 * canvas.width) === 0) {
			txt += '\n';
		} else {
			txt += " " + select(chaine, image.data[i], image.data[i + 1], image.data[i + 2]);
		}
	}
	
	document.getElementById("zonetexte").value = txt;
}

function rafraichirCamera() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(video,0,0, canvas.width, canvas.height);
	ctx.fillStyle = "white";
	ctx.fillText(atob("QSBmLiBNIGkgayBh"), 20, 10);
	// categ. 0 to categories.length - 1
	asciiArt(6);
}

var timer = setInterval(rafraichirCamera, 1000 / fps);