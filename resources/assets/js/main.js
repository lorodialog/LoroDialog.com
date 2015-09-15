$( document ).ready(function() {
	
// ######################################################################################
// Aufrufen von Plugins nach dem Laden 
// ######################################################################################

	// WOW.js starten
	new WOW().init();

// ######################################################################################
// Menu Navigation 
// ######################################################################################
	
	// Aktiven Menüpunkt mit der Klasse "aktiv" bestimmen
	function loro_aktiven_menupunkt_bestimmen(loro_menupunkt) {
		$('nav a').each(function() {
			$(this).removeClass('aktiv');
		});
		$(loro_menupunkt).addClass('aktiv');
	}

	// Hashtag in der Adresszeile beim scrollen aktualisieren
	function loro_hashtag_aktualisieren(loro_hashtag,loro_wo_wir_sind) {
		window.location.hash = loro_hashtag;
		$(document).scrollTop(loro_wo_wir_sind);
	}

	// Die Scrollposition beobachten und sowohl Adresszeile als auch aktiven Menüpunkt aktualisieren
	function loro_scrollen_beobachten(loro_wo_wir_sind) {
		$('body.index nav a').each(function () {
        	var loro_link = $(this),
        		loro_seiten_id = $(loro_link.attr('href'));
        	if(loro_seiten_id.length) {
		        if(loro_seiten_id.position().top <= loro_wo_wir_sind && loro_seiten_id.position().top + loro_seiten_id.height() > loro_wo_wir_sind) {
		            $('nav a').removeClass('aktiv');
		            $(loro_link).addClass('aktiv');
		            //loro_hashtag_aktualisieren(loro_link.attr('href'),loro_wo_wir_sind);
		        }
		        else{
		            loro_link.removeClass('aktiv');
		        }
        	}
    	})
	}

	// Ankermenü für die Hauptnavigation
	$('a[href*=#]').stop().click(function(){
		if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var loro_link = this.hash;
			var loro_ziel = $(this.hash);
			if(loro_ziel.length){
				var loro_abstand_top = loro_ziel.offset().top;
				$('html,body').animate({scrollTop: loro_abstand_top},1000);
				return false;
			}
		}
	});	

	// Mobiles Menü animieren
	function loro_menue_toggle() {
		$('header').toggleClass('geoeffnet');
	}

	$('header button, header nav a').on('click', function() {
		loro_menue_toggle();
	});

	// Klicken und Scrollen außerhalb des Menüs
	$(document).on('click scroll', function(){
		if($('header').hasClass('geoeffnet')) {
			loro_menue_toggle();
		};
	});

	$('header').on('click', function(e){
		e.stopPropagation();
	});

// ######################################################################################
// Allgemeine Funktionen 
// ######################################################################################

	// Boxen in gleiche Höhe bringen
	function loro_boxen_gleich_gross_machen() {
		$('[data-loro-gleich-gross]').each(function(){
			var loro_groesste_box = 0;
				$(this).children().each(function(){
					$(this).css('height', 'auto');
					if($(this).height() > loro_groesste_box) 
           				loro_groesste_box = $(this).height();
				});
				$(this).children().height(loro_groesste_box);
		});
		return false;
	}

// ######################################################################################
// Scroll Event 
// ######################################################################################
	
	$(window).bind("scroll", function(e) {
		
		// Navigation starten
		loro_scrollen_beobachten($(document).scrollTop());

		// Header bekommt die Klasse "gross" wenn ganz nach oben gescrollt wurde...
	  	if ($(this).scrollTop() == 0) {
		    $('body.index header').removeClass('klein').addClass('gross');
	  	}

	  	// ...und "klein" wenn nicht
		else {
		    $('body.index header').removeClass('gross').addClass('klein');
		};
		
	});

// ######################################################################################
// Resize Event 
// ######################################################################################
	
	$(window).bind("load resize", function() {
	    
	    // Boxen gleich groß machen
	    loro_boxen_gleich_gross_machen();

	});
});