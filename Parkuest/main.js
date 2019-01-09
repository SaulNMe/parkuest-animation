$(function () {
	var controller = new ScrollMagic.Controller();
	
	let images = [];
	(function(){
		for (var i = 1; i <= 92; i++) {
			let urlImage = ""
			urlImage = "images/Trantition/p" + i + ".png"
			images.push(urlImage);
		}
		
	})(window);

	var obj = {curImg: 0}
	var tween = new TweenMax.to(obj, 0.5,
		{
			curImg: images.length-1,
			roundProps: "curImg",
			repeat: 0,
			immediateRender: true,
			ease: Linear.easeNone,
			onUpdate: function () {
				$("#myimg").attr("src", images[obj.curImg]);
			}	
		}
	);

	let parkuestAnimation = new ScrollMagic.Scene({
		triggerElement: ".text-container",
		triggerHook: 0.3,
		duration:200
	})
	.setTween(tween)
	.addIndicators({name: "parkuest animation"})
	.addTo(controller)

	$("form.move input[name=duration]:radio").change(function () {
		parkuestAnimation.duration($(this).val())
	})
});