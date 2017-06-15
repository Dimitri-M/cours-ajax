
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
  			let $element = jsonData[i];
  			$('<li id="user-'+$element.id+'" style="line-height:25px;"><a href="">'+$element.name+'</a> </<li>').appendTo('#listeJson');
  		}
// --------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

		$("#right_column ul > li").click(function(event)
		{
  			event.preventDefault();

  	//--------// RECUPERATION DE l'ID -----------

  			let idUser = $(this).attr("id"); 
  			console.log(idUser.split("-"));
  			idUser = idUser.split("-"); // on coupe l'id au niveau du tiret
  			// ce qui crée un tableau en deux morceaux avec e mot user
  			// d'un coté et le chiffre de l'autre

  			let ficheUser = $.ajax({
  				url: "https://jsonplaceholder.typicode.com/users",
  				method: "GET",
  				data: {id : idUser[1]}, // on appel dans le json le user
  				// dont l'ID correspond au chiffre qui est le deuxième
  				// élément di tableau idUser

  			});

  			ficheUser.done(function(dataUser)
  			{

  				console.log(dataUser[0].username+"  "+dataUser[0].email);
  			});

  			request.fail(function( jqXHR, textStatus ) 
  			{
  			alert( "Request failed: " + textStatus );
			});
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------			
  	});

  		

  	});


  	request.fail(function( jqXHR, textStatus ) 
  	{
  		alert( "Request failed: " + textStatus );
	});
	

  	


});

