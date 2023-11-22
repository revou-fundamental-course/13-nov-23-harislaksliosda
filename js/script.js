function replaceName() {
    let namaPengunjung = prompt("Silahkan isi dengan nama anda", "");
    document.getElementById("namaPengunjung").innerHTML = namaPengunjung;
}    
// replaceName();

function validateForm () {
    const nama = document.forms["formPesan"]["input-nama"].value
    const email = document.forms["formPesan"]["email"].value
    const pesan = document.forms["formPesan"]["pesan"].value

    if (nama == "" || email == "" || pesan == "") {
        document.getElementById("data-kosong").innerHTML = "Data tidak boleh kosong!"
        // alert("Data tidak boleh kosong");
        return false;
    }
    setSenderUI(nama, email, pesan);
    return false;
}
validateForm();

function setSenderUI(nama, email, pesan){
    document.getElementById("sender-name").innerHTML = nama;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-pesan").innerHTML = pesan;
    document.getElementById("data-kosong").innerHTML = "";  
}
// setSenderUI();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}