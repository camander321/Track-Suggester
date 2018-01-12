$(document).ready(function() {
	
	$("#form1").submit(function(event) {
		event.preventDefault();
		
		
		alert($("input:radio[name=q1]:checked").val());
		alert($("input:radio[name=q2]:checked").val());
	});
	
});
