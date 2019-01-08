function licz(){
	var ilosc = document.getElementById('ilosc_o').value;
	var znizka=document.getElementById('ogloszenie').checked;
	var cena=0;
	var wynik=document.getElementById('wynik');
	
	if (ilosc>=1 &&ilosc<=10)
	{
		if (znizka)
		{
			cena=ilosc*(1-0.2);
		}
		else
		{
			cena=ilosc*1;
		}
	}
	
	if (ilosc>=11 &&ilosc<=50)
	{
		if(znizka)
		{
			cena=ilosc*(0.8-0.2);
		}
		else
		{
			cena=ilosc*0.8;
		}
	}
	
	if (ilosc>=51)
	{
		if(znizka)
		{
			cena=ilosc*(0.6-0.2);
		}
		else
		{
			cena=ilosc*0.6;
		}
	}

	wynik.innerHTML='Koszt usługi : '+cena+' zł';
}
	