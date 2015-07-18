var xhr = new XMLHttpRequest();
xhr.open('GET', '/img/image.jpg', true);
xhr.responseType = 'arraybuffer';
xhr.onload = function(e) {
	var arr = new Uint8Array(this.response);
	var raw = "";
	for (var i = 0; i < arr.byteLength; i++) {
		raw += String.fromCharCode(arr[i]);
	}
	data = btoa(raw);
	
	document.getElementById("image").src = "data:image/jpeg;base64," + data;
	
	var so = new jsSHA("SHA-1", "B64");
	so.update(data);
	var hash = so.getHash("HEX");
	
	chash = document.getElementById("chash");
	chash.innerHTML = hash;
	if (document.getElementById("shash").innerHTML != hash) {
		chash.style.color = "red";
	}
	else {
		chash.style.color = "green";
	}
}
xhr.send(null);

