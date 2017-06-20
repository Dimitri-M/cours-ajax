
$(function(){

// let =/= var, var redéfini la valeur dans tout le code
// let ne la redéfinie que dans la fonction de façon locale (voir doc en ligne)

	let images =[ // tableau avec 3 images
	"http://p.fod4.com/p/media/77030e144a/c=sq/s=w700/o=90/IDhHZh1NRcyuPqDP2IJr_lol-cat-303363.jpg",
	"http://screenheaven.com/walls/sports/lolcat-136368-1920x1080.jpg",
	"https://weilerpsiblog.files.wordpress.com/2009/12/lolcat-wtf-i-am-smiling.jpg"];
	let index = 0;

	setInterval(function(){ // fonction anonyme avec interval
		// interval = TOUTE les ... secondes
		// timer = une fois AU BOUT de ... sec



		if(index == images.length) // si l'index arrive à la 3eme image on
			// on retourne à 0
			index = 0;

		$("#sliderImage").attr("src", images[index]); // modification de
		// la source de l'image via le tableau array

		index++; // incrémentation de l'index

	},3000000);



	let request = $.ajax({
  		url: "http://localhost/cours-ajax/basic-89/formulaire.php",
  		method: "GET",
  	});

  	request.done(function(jsonData)
  	{
  		jsonData = JSON.parse(jsonData)
  		for (i = 0; i < jsonData.length; i++) // foreach uniquement
  			// sur un array
  		{
  			let $element = jsonData[i];
  			$('<li id="user-'+$element.id+'" style="line-height:25px;"><a href="">'+$element.firstname+' '+$element.lastname+'</a> </<li>').appendTo('#listeJson');
  			//console.log($element);
  		}
  		
// --------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

		$("#right_column ul > li").click(function(event)
		{
  			event.preventDefault();

  	//--------// RECUPERATION DE l'ID -----------

  			let idUser = $(this).attr("id"); 
  			//console.log(idUser.split("-"));
  			idUser = idUser.split("-"); // on coupe l'id au niveau du tiret
  			// ce qui crée un tableau en deux morceaux avec le mot user
  			// d'un coté et le chiffre de l'autre

  			let ficheUser = $.ajax({
  				url: "http://localhost/cours-ajax/basic-89/formulaire.php",
  				method: "GET",
  				data: {id : idUser[1]}, // on appel dans le json le user
  				// dont l'ID correspond au chiffre qui est le deuxième
  				// élément di tableau idUser

  			});

  			ficheUser.done(function(dataUser)
  			{
  				dataUser = JSON.parse(dataUser)
  				console.log(dataUser[0].firstname+"  "+dataUser[0].lastname);
  				$("#nom").val(dataUser[0].firstname);
  				$("#prenom").val(dataUser[0].lastname);
  				$("#date").val(dataUser[0].dateNaissance);
  				$("#id").val(dataUser[0].id);
  			
  				$("#poste option[value="+dataUser[0].poste+"]").prop("selected",true);
  				
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
	
// -----------------------------------------------------------------------
//------JOURNEE 2  VENDREDI------------- EXO REMPLACER LES 4 POST -------------------------------
  	
  	$.ajax({ // AJAX SANS VARIABLE, SYNTAXE DIFFERENT MAIS MEME FONCTIONNEMENT
  		url: "https://jsonplaceholder.typicode.com/posts",
  		method: "GET",
  	}) // PAS DE POINT VIRGULE CAR ON CONCATENE


  	.done(function(dataPosts){

  		for (let i = 0; i < 4; i++) 
  		{
  			$(".one_quarter > strong").eq(i).text(dataPosts[i].title);
  			$(".jsDescription").eq(i).text(dataPosts[i].body.slice(0, 97)+"...");
  			//dataPosts[i].body.slice(0,97)+"...";

  			$(".one_quarter a").eq(i).click(function(e){
  				e.preventDefault();

  				if ($(this).text() != "Less") 
  				{
  					$(".jsDescription").eq(i).text(dataPosts[i].body.slice(0, 150)+"...");
  					$(this).text("Less");
  				
  				}
  				else
  				{
  					$(".jsDescription").eq(i).text(dataPosts[i].body.slice(0,97)+"...");
  					$(this).text("Read More >>");
  				}
  				
  			});
  		
  		}

  		

  	})

  	.fail(function( jqXHR, textStatus){

  		alert( "Request failed: " + textStatus );
  	});

  

// ----------------- EXO IMAGES ----------------------------------------------------

	let increment = 0;
	let pictures;

	$.get( "https://jsonplaceholder.typicode.com/photos" )
	.done(function( data ){

		for(let a = 0; a < 3; a++) // si pas de crochet pour une boucle
			// alors une seule occurance
			$(".one_third").eq(a).children().attr('src',data[a].url);
		
		pictures = data;

	});


	$("figcaption > a").click(function(e){
		e.preventDefault();
		var content = "";
		var indexLi = $(".one_third").length;

		for(let i = increment ; i < increment+10 ; i++)
		{	
			if((indexLi+1)%3 == 0)
				classHtml = 'lastbox';
				content += '<li class="one_third"><img src="'+pictures[i].url+'" width="290" height="180 alt="></li>';
				indexLi ++;
		}
		$(".clear").append(content);
		increment += 10;
		
	});

//	---------------------------------------------------------------
//----------JOURNEE 3  MARDI------------- EXO


	$("#submit").submit(function(e){
		e.preventDefault();
		$.ajax({ 
	  		url: "http://localhost/cours-ajax/basic-89/formulaire.php",
	  		method: "POST",
	  		data: $('form').serialize()
	  	})

		.done(function(dataPosts){
			$("#message_ajax").html("<div><strong> Success !</strong></div>")
			console.log("User register");
	  		

	  		

	  	})

	  	.fail(function( jqXHR, textStatus){

	  		alert( "Request failed: " + textStatus );
	  	});

	})



	$("#deleteUser").click(function(e){
		e.preventDefault();
		console.log("test");

		$.ajax({ 
	  		url: "http://localhost/cours-ajax/basic-89/formulaire.php",
	  		method: "POST",
	  		data: {id : $("#id").val()}
	  	})

		.done(function(dataPosts){
			
	  		

	  		

	  	})

	  	.fail(function( jqXHR, textStatus){

	  		alert( "Request failed: " + textStatus );
	  	});
	})























});

