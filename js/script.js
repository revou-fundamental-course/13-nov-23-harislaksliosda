function replaceName() {
    let namaPengunjung = prompt("Silahkan isi dengan nama anda", "");
    document.getElementById("namaPengunjung").innerHTML = namaPengunjung;
}    
// replaceName();

function validateForm () {
    const name = document.forms["formPesan"]["nama"].value;
    const email = document.forms["formPesan"]["email"].value;
    const pesan = document.forms["formPesan"]["pesan"].value;

    if (name == "" || email == "" || pesan == "") {
        document.getElementById("data-kosong").innerHTML = "Data tidak boleh kosong!"
        // alert("Data tidak boleh kosong");
        return false;
    }
    setSenderUI(name, email, pesan);
    return false;
}
validateForm();

function setSenderUI(name, email, pesan){
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-pesan").innerHTML = pesan;
}
// setSenderUI();