$(document).ready(function() {
	
	//ruby, php, java, css, c#
	var scores = [0,0,0,0,0];
	var question = 0;

	function addScore(index) {
		scores[index] += 1;
	}
	
	function nextQuestion() {
		$(".row").hide();
		$("#q" + (question + 1) + ".row").fadeIn();
	}
	
	$("#form1").submit(function(event) {
		event.preventDefault();
		
		if (question === 0) {
			nextQuestion();
			$("button").text("Next Question");
		} 
		else if (question === $(".question").length) {
			addScore(parseInt($("input:radio[name=q" + question + "]:checked").val()));
			console.log(scores + " | Q#" + question);
			alert("results");
			$(".row").hide();
			$("button").text("Restart");
		} 
		else if (question === $(".question").length + 1) {
			question = -1;
			scores = [0,0,0,0,0];
			$("button").text("Begin Quiz!");
		} 
		else {
			nextQuestion();
			if (question === $(".question").length - 1)
				$("button").text("Get Results!");
			
			addScore(parseInt($("input:radio[name=q" + question + "]:checked").val()));
			console.log(scores + " | Q#" + question);
		}
		
		question++;
	});
	
});
