$(document).ready(function() {
	
	//ruby, php, java, css, c#
	var scores = [0,0,0,0,0];

	function addScore(index) {
		scores[index] += 1;
	}
	
	var question = 0;
	$("#form1").submit(function(event) {
		event.preventDefault();
		
		question++;
		

		if (question === $(".question").length + 1) {
			alert("results");
		} else if (question === $(".question").length + 2) {
			question = 0;
			scores = [0,0,0,0,0];
			alert("reseting");
		} else {
			addScore(parseInt($("input:radio[name=q" + question + "]:checked").val()));
		}
		
		
		$(".row").hide();
		$("#q" + question + ".row").fadeIn();
		console.log(scores);
	});
	
});
