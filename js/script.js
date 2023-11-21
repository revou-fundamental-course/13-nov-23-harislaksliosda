function replaceName() {
    let namaPengunjung = prompt("Silahkan isi dengan nama anda", "");
    document.getElementById("namaPengunjung").innerHTML = namaPengunjung;
}    
// replaceName();

function validateForm () {
    const nama = document.forms["formPesan"]["nama"].value;
    const email = document.forms["formPesan"]["email"].value;
    const pesan = document.forms["formPesan"]["pesan"].value;

    if (nama == "" || email == "" || pesan == "") {
        alert("Data tidak boleh kosong");
        return false;
    }
    setSenderUI(nama, email, pesan);
    return false;
}
// validateForm();

function setSenderUI(nama, email, pesan){
    document.getElementById("sender-name").innerHTML = nama;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-pesan").innerHTML = pesan;
}
// setSenderUI();