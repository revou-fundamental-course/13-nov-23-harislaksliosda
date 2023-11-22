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

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex-1].style.display = "block";
}

var slidePackage0 = 1;
showPackage0(slidePackage0);

function plusPackage0(n) {
    showPackage0((slidePackage0 += n));
}

function showPackage0(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesPackage0");
    if (n > x.length) {slidePackage0 = 1;}
    if (n < 1) {slidePackage0 = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slidePackage0-1].style.display = "block";
}

var slidePackage1 = 1;
showPackage1(slidePackage1);

function plusPackage1(n) {
    showPackage1((slidePackage1 += n));
}

function showPackage1(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesPackage1");
    if (n > x.length) {slidePackage1 = 1;}
    if (n < 1) {slidePackage1 = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slidePackage1-1].style.display = "block";
}

var slidePackage2 = 1;
showPackage2(slidePackage2);

function plusPackage2(n) {
    showPackage2((slidePackage2 += n));
}

function showPackage2(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesPackage2");
    if (n > x.length) {slidePackage2 = 1;}
    if (n < 1) {slidePackage2 = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slidePackage2-1].style.display = "block";
}


var slidePackage3 = 1;
showPackage3(slidePackage3);

function plusPackage3(n) {
    showPackage3((slidePackage3 += n));
}

function showPackage3(n) {
    var i;
    var x = document.getElementsByClassName("mySlidesPackage3");
    if (n > x.length) {slidePackage3 = 1;}
    if (n < 1) {slidePackage3 = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slidePackage3-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000);

setInterval(() => {
    plusPackage0(1);
    plusPackage1(1);
    plusPackage2(1);
    plusPackage3(1);
}, 1500);