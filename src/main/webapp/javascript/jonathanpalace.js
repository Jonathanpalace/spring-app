/*---------------NavBar logic-----------*/
$(document).ready(function() {
	$("#content").load("content/welcome.html");
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#about_button").on("touchstart", function(e) {
			$("#about_dropdown").removeClass("invisible");
			$("#links_dropdown").addClass("invisible");
		});
		$("#links_button").on("touchstart", function(e) {
			$("#links_dropdown").removeClass("invisible");
			$("#about_dropdown").addClass("invisible");
		});
		$("#about_dropdown").on("touchstart", function(e) {
			$("#about_dropdown").addClass("invisible");
			$("#links_dropdown").addClass("invisible");
		});
		$("#links_dropdown").on("touchstart", function(e) {
			$("#about_dropdown").addClass("invisible");
			$("#links_dropdown").addClass("invisible");
		});
		$("#content").on("touchstart", function(e) {
			$("#about_dropdown").addClass("invisible");
			$("#links_dropdown").addClass("invisible");
		});
	}
	else{
		$("#about_button").mouseenter(function(e) {
			$("#about_dropdown").removeClass("invisible");
		});
		$("#about_dropdown").mouseenter(function(e) {
			$("#about_dropdown").removeClass("invisible");
		});
		$("#about_button").mouseleave(function(e) {
			$("#about_dropdown").addClass("invisible");
		});
		$("#links_button").mouseenter(function(e) {
			$("#links_dropdown").removeClass("invisible");
		});
		$("#links_dropdown").mouseenter(function(e) {
			$("#links_dropdown").removeClass("invisible");
		});
		$("#links_button").mouseleave(function(e) {
			$("#links_dropdown").addClass("invisible");
		});
	}
	/*------------------Click Removal logic-------------*/
	$("#about_dropdown").click(function(e) {
		$("#about_dropdown").addClass("invisible");
	});
	$("#links_dropdown").click(function(e) {
		$("#links_dropdown").addClass("invisible");
	});
	/*--------------Invisible subsection logic--------------*/
	var contentLoading = false;
		if(!contentLoading){
			$("#header").click(function(e) {
				contentLoading == true;
				$("#content").load("content/welcome.html");
			});
			$("#about").click(function(e) {
				contentLoading == true;
				$("#content").load("content/about.html");
			});
			$("#contact").click(function(e) {
				contentLoading == true;
				$("#content").load("content/contact.html");
			});
			$("#mylinks").click(function(e) {
				contentLoading == true;
				$("#content").load("content/links.html");
			});
			$("#phpexample").click(function(e) {
				contentLoading == true;
				$("#content").load("content/phpexample.html");
			});
		contentLoading == false;
	}
});

