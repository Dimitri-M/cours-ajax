
$(function(){


	let images =[ // tableau avec 3 images
	"http://p.fod4.com/p/media/77030e144a/c=sq/s=w700/o=90/IDhHZh1NRcyuPqDP2IJr_lol-cat-303363.jpg",
	"http://screenheaven.com/walls/sports/lolcat-136368-1920x1080.jpg",
	"https://weilerpsiblog.files.wordpress.com/2009/12/lolcat-wtf-i-am-smiling.jpg"];
	let index = 0;

	setInterval(function(){ // fonction anonyme avec timer



		if(index == images.length) // si l'index arrive à la 3eme image on
			// on retourne à 0
			index = 0;

		$("#sliderImage").attr("src", images[index]); // modification de
		// la source de l'image via le tableau array

		index++; // incrémentation de l'index

	},3000000);



	let request = $.ajax({
  		url: "https://jsonplaceholder.typicode.com/users",
  		method: "GET",
  	});

  	request.done(function(jsonData)
  	{
  		for (i = 0; i < jsonData.length; i++) // foreach uniquement
  			// sur un array
  		{
  			let $nom = jsonData[i].name;
  			$('<li style="line-height:25px;">'+$nom+'</<li>').appendTo('#listeJson');
  		}

  	});


  	request.fail(function( jqXHR, textStatus ) 
  	{
  		alert( "Request failed: " + textStatus );
	});
	

});

