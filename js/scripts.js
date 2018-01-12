$(document).ready(function() {
	
	//ruby, php, java, css, c#
	var scores = [0,0,0,0,0];
	var question = 0;
	
	function getNameFromIndex(index) {
		if (index === 0) {
			return "ruby";
		} else if (index === 1) { 
			return "php";
		} else if (index === 2) {
			return "java";
		} else if (index === 3) {
			return "css";
		} else {
			return "csharp"
		}
	}
	
	function getWinner() {
		console.log(scores);
		var winner = 0;
		
		for (i = 1; i < scores.length; i++) { 
			if (scores[winner] < scores[i]) {
				winner = i;
			} else if (scores[winner] === scores[i] && Math.random() > 0.5) {
				winner = i;
			}
		}
		return getNameFromIndex(winner);
	}

	function addScore(index) {
		scores[index] += 1;
	}
	
	function nextQuestion() {
		$(".question").hide();
		$("#q" + (question + 1) + ".question").fadeIn();
	}
	
	$("#form1").submit(function(event) {
		event.preventDefault();
		
		if (question === 0) {
			nextQuestion();
			$("button").text("Next Question");
		} 
		else if (question === $(".question").length) {		// GET RESULT
			addScore(parseInt($("input:radio[name=q" + question + "]:checked").val()));
			$(".question").hide();
			$("button").text("Restart");
			
			console.log(".result-" + getWinner());
			$("#result-" + getWinner()).fadeIn();
		} 
		else if (question === $(".question").length + 1) { // RESET QUIZ
			question = -1;
			scores = [0,0,0,0,0];
			$(".panel").hide();
			$("button").text("Begin Quiz!");
		} 
		else {
			nextQuestion();
			if (question === $(".question").length - 1)
				$("button").text("Get Results!");
			
			addScore(parseInt($("input:radio[name=q" + question + "]:checked").val()));
		}
		
		question++;
	});
	
});
