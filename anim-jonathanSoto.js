$(document).ready(function() {
	$('.playBtn').click(function() {
		var participants = [];
		
		for(var i = 0; i < participantes.length; i += 2) {
			participants.push({number: participantes[i], name: participantes[i + 1]});
		}
		
		participants = _.shuffle(participants);
		
		$('.slot').html('').css('top', '0px');
		for(var ind in participants) {
			$('#name').append('<li>' + participants[ind].name + '</li>');
			$('#number').append('<li>' + participants[ind].number + '</li>');
		}
		
		var quantityOfLoops = 4;
		var nameContent = $('#name').children().clone();
		var numberContent = $('#number').children().clone();
		
		for(var currentLoop = 1; currentLoop < quantityOfLoops; ++currentLoop) {
			$('#name').append(nameContent.clone());
			$('#number').append(numberContent.clone());
		}
		
		var currentNameLoop = 0;
		startNameSlotMachine();
		var currentNumberLoop = 0;
		startNumberSlotMachine();
		
		function startNameSlotMachine() {
			if(currentNameLoop < quantityOfLoops) {
				++currentNameLoop;
				$('#name').animate({
					top: '-=669px'
				}, 1500, 'linear', startNameSlotMachine);
			}
		}
		
		function startNumberSlotMachine() {
			if(currentNumberLoop < quantityOfLoops) {
				++currentNumberLoop;
				$('#number').animate({
					top: '-=669px'
				}, 1500, 'linear', startNumberSlotMachine);
			}
		}
	});
});