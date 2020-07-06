function validateForm() {
	csaladnev = document.getElementById("csaladnev").value;
	keresztnev= document.getElementById("keresztnev").value;
	azonositoszam = document.getElementById("azonositoszam").value;
	cnp = document.getElementById("cnp").value;

    if (csaladnev == "") {
        alert("Családnév hiányzik!");
        return false;
    }
    if (keresztnev == "") {
        alert("Keresztnév hiányzik!");
        return false;
    }
    if (azonositoszam == "") {
    	alert("Azonosító szám hiányzik!");
    	return false;
    }

    if (cnp == "") {
    	alert("CNP hiányzik!");
    	return false;
    }

	document.getElementById("welcome").textContent="Minden rendben, " + csaladnev + " " + keresztnev;
    document.getElementById("welcome").style.display='block';
}