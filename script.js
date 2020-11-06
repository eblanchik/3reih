jQuery('document').ready(function(){
	
jQuery('button').on('click', function(){
	let hui=jQuery('#gay').val();
	if(hui=="Введите сюда код."){
	alert("Ты не ввел код, сука!");
	}
	if(hui=="Россия" || hui=="россия"){
	alert("Держи гимн России, брат!");
	}
	if(hui=="Хуй" || hui=="хуй"){
	alert("Тот который у тебя во рту? А? М?");
	}
	if(hui=="Таджик" || hui=="таджик"){
	alert("Самир????");
	}
	if(hui=="Дискриминант" || hui=="дискриминант"){ // вот эта махина внизу это какой-то пиздец, я хуй знаю как с этим работать... ну это подобие SPA только кривое, короче похуй главное, что должно работать........
	document.write("<link href=\"style.css\" rel=\"stylesheet\" type=\"text/css\"/> <script type=\"text/javascript\ \" src=\"jquery.js\"></script> <script type=\"text/javascript\" src=\"script.js\"></script> <body><br/> <div class=\"nikita, message\">Чел.. Тебе нужно посчитать дискриминант? Так бы сразу! <br/> Введите ниже чему равно число a <br/> <input id=\"a\" type=\"number\"><br/> Введите внизу чему равно число b<br/><input id=\"b\" type=\"number\"/><br/>Введите внизу чему равно число c <br/><input id=\"c\" type=\"number\"><br/> <button id=\"clen\"\">Посчитать</button></div></body>");
	diskr = (b*b)+(4*a*c);
	jQuery('#clen').on('click', function(){
	let a=jQuery('#a').val();
	let b=jQuery('#b').val();
	let c=jQuery('#c').val();
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	let diskr;
	diskr = (b*b)-(4*a*c);
	if(diskr > 0){
	let a1;
	let a2;
	a1= (-b - Math.sqrt(diskr))/(2*a)
	a2= (-b + Math.sqrt(diskr))/(2*a)
	alert("1 корень = " + a1 + "\n 2 корень = " + a2 +"\n дискриминант = " +diskr);
	//jQuery('bod').append("<div class=\"otvet\">1 корень - " + a1 +"<br/> 2 корень - " + a2 +"<br/> дискриминант - " + diskr);	
	}
	if(diskr == 0){
	a1= (-b - Math.sqrt(diskr))/(2*a)
	alert("1 корень = " + a1 + "\n 2 дискриминант = " + diskr + "\n корень один т.к дискриминант = 0");
	// jQuery('bod').append("<div class=\"otvet\">1 корень - " + a1 +"<br/> дискриминант - " + diskr +" <br/> корень один т.к дискриминант равен нулю. </div>");
	}
	if(diskr <0){
    alert("Корней нет.");
	}
	});
	}
	if(hui=="удалить" || hui=="Удалить" ||hui=="rm rf"){
	jQuery('div').remove();
	jQuery('audio').remove();
	jQuery('img').remove();
	}
	if(hui=="СССР" || hui=="ссср"||hui=="Союз Советских Социалистических Республик" ||hui=="Ссср"){
	jQuery('div').remove();
	jQuery('audio').remove();
	jQuery('img').remove();
	jQuery('body').append('<iframe width="560" height="315" src=\"https://www.youtube.com/embed/aWt9bGilBa0\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>');
	}
	if(hui=="Кто автор этого шедевра?"|| hui=="автор" ||hui=="Автор" ||hui=="Связь с создателем" || hui=="Создатель"||hui=="создатель"||hui=="кто автор этого шедевра?" ||hui=="Телеграм"||hui=="телеграм"){
	alert("Телеграм создателя: @l_moron");	
	}
	if(hui=="аниме "){
		
	}
});
});