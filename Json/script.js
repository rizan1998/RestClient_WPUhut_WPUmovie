// untuk javascript ke json
let mahasiswa = [
	{
		nama: "muahamad rijan alpalah",
		npm: "5520116027",
		email: "rizanalfalah@gmail.com",
	},
	{
		nama: "muahamad rijan alpalah",
		npm: "5520116027",
		email: "rizanalfalah@gmail.com",
	},
];
//console.log(mahasiswa); //ini akan berbentuk array

console.log(JSON.stringify(mahasiswa));

//untuk json ke js menggunakan vanila js
var xhr = new XMLHttpRequest(); //panggil object ajax
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
		//let data = this.responseText; // ini masihjadi string
		let data = JSON.parse(this.responseText);
		console.log(data);
	}
};
xhr.open("GET", "coba.json", true); //parameter true adaalah ASC karena ajax ASC jika false maka akan DSC
xhr.send();

// Json ke Js menggunakan Jquery
$.getJSON("coba.json", function (data) {
	//ambil data jika berhasil jalankan fungsi berikut ini fungsinya
	// berisi parameter hasilnya atau datanya hasilnya sudah dalam bentruk object
	console.log(data);
});
