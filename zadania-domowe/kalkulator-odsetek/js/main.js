function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
	if (podatek) {
		var oprocentowanieOpodatkowane = 0.81*oprocentowanie;
	} else {
		oprocentowanieOpodatkowane = oprocentowanie;
	}
	
	var kapital = Math.pow(wplata * (1 + oprocentowanieOpodatkowane/okresKapitalizacji), iloscLat*okresKapitalizacji);
	return (parseFloat(kapital)).toFixed(2);
}

function oblicz() {

	var wplata = parseInt(document.getElementById("wplata").value);
	var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
	var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
	var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value) / 100;
	var podatek;
	if (document.getElementById("podatek").checked) {
		podatek = true;
	} else {
		podatek = false;
	}
	
	var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
	document.getElementById("wynik").innerHTML = wynik;
	event.preventDefault();
}
