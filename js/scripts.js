//ruby, php, java, css, c#
var scores = [0,0,0,0,0];
var question = 1;

$(document).ready(function() {
	
	

	function addScore(index) {
		scores[index] += 1;
	}
	
	
	$("#form1").submit(function(event) {
		event.preventDefault();
	
		addScore(parseInt($("input:radio[name=q" + question + "]:checked").val()));
		question++;
		
		console.log(scores);
		
		if (question > 5) {
			question = 1;
			scores = [0,0,0,0,0];
		}
	});
	
});
