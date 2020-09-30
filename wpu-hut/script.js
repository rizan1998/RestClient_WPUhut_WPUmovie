function tampilkanSemuaMenu() {
	//$.getJSON adalah singkatan dari $.ajax
	$.getJSON("data/pizza.json", function (data) {
		//dapatkan data terlebih dahulu
		let menu = data.menu; //keluarkan data dari object menu terlebih dahulu
		//kalau di php seperti $menu = $menu['menu'];
		$.each(menu, function (i, data) {
			//each dalah function javascript untuk pengulangan seperti foreach
			//
			// i adalah index dari datanya dimana jumlah index di data ini adalah 0-14
			// dan data adalah data yang di looping
			$("#daftar-menu").append(
				//append adalah sebuah function tambahkan setelah tag id yng di selector
				'<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
					data.gambar +
					'" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
					data.nama +
					'</h5><p class="card-text">' +
					data.deskripsi +
					'</p><h5 class="card-title">Rp. ' +
					data.harga +
					'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
			);
		});
	});
}
tampilkanSemuaMenu();

$("nav-link").on("click", function () {
	$(".nav-link").removeClass("active");
	$(this).addClass("active"); //this disini adalah link yang sedang di click

	let kategori = $(this).html(); // ambil nama link yang di click
	$("h1").html(kategori);

	//jigat disini untk menampilkan all menu
	if (kategori == "All Menu") {
		tampilkanSemuaMenu();
		return; //untk menghentikan function program
	}

	$.getJSON("data/pizza.json", function (data) {
		let menu = data.menu;
		let content = ""; //untuk looping sehingg nantinya akan terus bertambah
		$.each(menu, function (i, data) {
			if (data.kategori == kategori.toLowerCase()) {
				//toLowerCase adalah sebuah cara supaya tulisannya kecil semua
				//jika data kategori dari json sama dengan kategori yang diambil pada html yang sedang
				//aktiv tadi maka =
				content +=
					'<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
					data.gambar +
					'" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
					data.nama +
					'</h5><p class="card-text">' +
					data.deskripsi +
					'</p><h5 class="card-title">Rp. ' +
					data.harga +
					'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
				//content akan terus bertambah dengan += dan menambah terus cardnya
			}
		});
		$("#daftar-menu").html(content); //terakhir timpa di id selector daftar-menu
	});
});
