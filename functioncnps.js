var datanastere;
var CNP1;
var year;
var month;
var day;
var M = 1;
var N = 2;
var gender;
var yearCNP;
var monthCNP;
var dayCNP;

// exemplu CNP 1971711176090
function verifycnp() {
    datanastere = document.getElementById("DataNastere").value;
    CNP1 = document.getElementById("CNP").value;
    gender = parseInt(CNP1.substr(0, 1));
    year = parseInt(datanastere.substr(8, 2));
    yearCNP = parseInt(CNP1.substr(1, 2));
    month = parseInt(datanastere.substr(3, 4));
    monthCNP = parseInt(CNP1.substr(3, 2))
    day = parseInt(datanastere.substr(0, 2));
    dayCNP = parseInt(CNP1.substr(5, 2))

    if (document.form.sex.selectedIndex == "0") {
        document.form.sex.selectedIndex == "0" == M;
        alert("GENUL SELECTAT ESTE MASCULIN")
    }

    else if (document.form.sex.selectedIndex == "1") {

        document.form.sex.selectedIndex == "1" == N;
        alert("GENUL SELECTAT ESTE FEMININ")

    }


    if (document.form.sex.selectedIndex == "0" == M && M == gender) {
        alert("GENUL  SE POTRIVESTE CU CNP");
    }

    else if (document.form.sex.selectedIndex == "0" == M && M != gender) {
        alert("GENUL NU SE POTRIVESTE CU CNP")
    }

    if (document.form.sex.selectedIndex == "1" && N == gender) {
        alert("GENUL SE POTRIVESTE CU CNP");
    }

    else if (document.form.sex.selectedIndex == "1" && N != gender) {
        alert("GENUL NU SE POTRIVESTE CU CNP")
    }


    if (yearCNP == year) {
        alert("ANUL ESTE BUN");
    }

    else if (yearCNP != year) {
        alert("ANUL NU ESTE BUN");
    }
    if (monthCNP == month) {
        alert("LUNA ESTE BUNA");
    }

    else if (monthCNP != month) {
        alert("LUNA NU ESTE BUNA");
    }

    if (dayCNP == day) {
        alert("ZIUA ESTE BUNA");
    }

    else if (dayCNP != day) {
        alert("ZIUA NU ESTE BUNA");
    }

    if (CNP1.length < 13) {
        alert("NU SUNT DESTULE CARACTERE");

    }

    if (yearCNP == year && dayCNP == day && monthCNP == month && document.form.sex.selectedIndex == "1" && N == gender || document.form.sex.selectedIndex == "0" == M && M == gender) {
        document.getElementById("VERIFICAT").innerHTML = "CNP ESTE VALID ";
        //document.getElementById("VERIFICAT").style= "color:red; margin-top:5%; font-size: 20px;";
        var element = document.getElementById("VERIFICAT");
        element.classList.add("mystyle2"); 

    }



    else {
        
      //  document.getElementById("VERIFICAT").style= "color:red; margin-top:5%; font-size: 20px;";
        document.getElementById("VERIFICAT").innerHTML = "CNP NU ESTE VALID ";
        var element = document.getElementById("VERIFICAT");
        element.classList.add("mystyle"); 
       
    }



}