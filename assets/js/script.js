/* Subscriber Counter */
function loadChannel() {
	var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCVakUMLREDImL9CsGCas0tg&key=AIzaSyDzQ0PPeHO60z7pwVRPPBvWtv3VFxADmFw";
	$.getJSON(url, function(data) {
		$("#ytcounter").html(data.items[0].statistics.subscriberCount);
	});
}

loadChannel();

setInterval(function() {
	var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCVakUMLREDImL9CsGCas0tg&key=AIzaSyDzQ0PPeHO60z7pwVRPPBvWtv3VFxADmFw";
	$.getJSON(url, function(data) {
		$("#ytcounter").html(data.items[0].statistics.subscriberCount);
	});
}, 2000);

$("#update").click(function(){
	loadChannel();
});


/* nav */
function navBtnToggle(x) {
	x.classList.toggle("change");
	$("#nav")[0].classList.toggle("change");
}