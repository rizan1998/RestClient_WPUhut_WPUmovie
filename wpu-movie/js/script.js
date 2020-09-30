//ilustrasi saat di ketuk listnya muncul

function searchMovie() {
	// untuk mengosongkan hasil pencarian sebelumnya
	$("#movie-list").html("");
	//ketika button search di input
	//jika pake fungsi $.getJSON akan panjang jadi pake ajax
	$.ajax({
		url: "http://omdbapi.com", //alamat pengambillan data
		type: "get", //method pengambilan data
		dataType: "json", //data yang diambil ingin berbentuk apa bisa text,json,jsonv atau xml
		//data yang dikirim ke alamat pengambilan ini bentuk object karena data yang dikirimnya banyak
		data: {
			apikey: "4288113a", //mengirim api key pada omdbapi
			s: $("#search-input").val(), //ambil data yang sedang diketik diinput
		},
		success: function (result) {
			//jika success maka jalankan function dengan result(isi datanya) result adalah var jadi bisa apa saja
			//console.log(result);
			if (result.Response == "True") {
				//result objectnya tapi response adalah True atau False
				//Trur disini bukan bolean tapi sebuah string jadi T nya besar True
				let movies = result.Search; //untuk mengeluarkan object dari array
				$.each(movies, function (i, data) {
					$("#movie-list").append(
						`<div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src="` +
							data.Poster +
							`" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted"> ` +
							data.Year +
							`
                                </h6>
                                        <a href="#" data-toggle="modal"
                                        data-target="#exampleModal" data-id="` +
							data.imdbID +
							`" class="btn btn-primary see-detail">See Detail</a>
                            </div>
                            </div>
                    </div>`
					);
					$("#search-input").val("");
				});
			} else {
				//jika tidak ada
				$("#movie-list").html(
					//sintak dibawah pake backtik jadi tidak usah harus string disatukan dulu jadi bisa pake enter
					`
                <div class="col">
                    <h1 class="text-center">` +
						result.Error +
						`</h1>
                </div>`
				);
			}
		},
	});
}

$("#search-button").on("click", function () {
	searchMovie();
});

//kalau tombol di input

$("#search-input").on("keyup", function (e) {
	//e adalah sebuah parameter
	if (e.keyCode === 13) {
		//bisa juga pake which
		//13 adalah key unik keyboard untuk enter
		//googling saja keycode.info
		searchMovie();
	}
});

$("#movie-list").on("click", ".see-detail", function () {
	//even binding atau event delegaion cari class see-detail di movie-list
	//console.log($(this).data("id")); //ambil tombol ini lalu ambil data-id
	$.ajax({
		url: "http://omdbapi.com",
		dataType: "json",
		type: "get",
		data: {
			apikey: "4288113a",
			i: $(this).data("id"), // dari id yang sedang di click
		},
		success: function (movie) {
			if (movie.Response === "True") {
				$(".modal-body").html(
					`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="` +
						movie.Poster +
						`"   class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <li class="list-group-item">
                                    <h3>` +
						movie.Title +
						`</h3>
                                </li>
                                <li class="list-group-item"> Released: ` +
						movie.Released +
						`</li>
                                <li class="list-group-item"> Genre : ` +
						movie.Genre +
						`</li>
                        <li class="list-group-item"> Genre : ` +
						movie.Actors +
						`</li>
                            </div>
                        </div>
                    </div>
                        

                `
				);
			}
		},
	});
});
