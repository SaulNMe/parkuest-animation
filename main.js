$(function () {
	var controller = new ScrollMagic.Controller();
	let images = [
		"images/Parkuest trantition/Comp 1_00001.png",
		"images/Parkuest trantition/Comp 1_00002.png",
		"images/Parkuest trantition/Comp 1_00003.png",
		"images/Parkuest trantition/Comp 1_00004.png",
		"images/Parkuest trantition/Comp 1_00005.png",
		"images/Parkuest trantition/Comp 1_00006.png",
		"images/Parkuest trantition/Comp 1_00007.png",
		"images/Parkuest trantition/Comp 1_00008.png",
		"images/Parkuest trantition/Comp 1_00009.png",
		"images/Parkuest trantition/Comp 1_00010.png",
		"images/Parkuest trantition/Comp 1_00011.png",
		"images/Parkuest trantition/Comp 1_00012.png",
		"images/Parkuest trantition/Comp 1_00013.png",
		"images/Parkuest trantition/Comp 1_00014.png",
		"images/Parkuest trantition/Comp 1_00015.png",
		"images/Parkuest trantition/Comp 1_00016.png",
		"images/Parkuest trantition/Comp 1_00017.png",
		"images/Parkuest trantition/Comp 1_00018.png",
		"images/Parkuest trantition/Comp 1_00019.png",
		"images/Parkuest trantition/Comp 1_00020.png",
		"images/Parkuest trantition/Comp 1_00021.png",
		"images/Parkuest trantition/Comp 1_00022.png",
		"images/Parkuest trantition/Comp 1_00023.png",
		"images/Parkuest trantition/Comp 1_00024.png",
		"images/Parkuest trantition/Comp 1_00025.png",
		"images/Parkuest trantition/Comp 1_00026.png",
		"images/Parkuest trantition/Comp 1_00027.png",
		"images/Parkuest trantition/Comp 1_00028.png",
		"images/Parkuest trantition/Comp 1_00029.png",
		"images/Parkuest trantition/Comp 1_00030.png",
		"images/Parkuest trantition/Comp 1_00031.png",
		"images/Parkuest trantition/Comp 1_00032.png",
		"images/Parkuest trantition/Comp 1_00033.png",
		"images/Parkuest trantition/Comp 1_00034.png",
		"images/Parkuest trantition/Comp 1_00035.png",
		"images/Parkuest trantition/Comp 1_00036.png",
		"images/Parkuest trantition/Comp 1_00037.png",
		"images/Parkuest trantition/Comp 1_00038.png",
		"images/Parkuest trantition/Comp 1_00039.png",
		"images/Parkuest trantition/Comp 1_00040.png",
		"images/Parkuest trantition/Comp 1_00041.png",
		"images/Parkuest trantition/Comp 1_00042.png",
		"images/Parkuest trantition/Comp 1_00043.png",
		"images/Parkuest trantition/Comp 1_00044.png",
		"images/Parkuest trantition/Comp 1_00045.png",
		"images/Parkuest trantition/Comp 1_00046.png"
	]
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
		duration:100
	})
	.setTween(tween)
	.addIndicators({name: "parkuest animation"})
	.addTo(controller)

	$("form.move input[name=duration]:radio").change(function () {
		walamaScene.duration($(this).val())
	})
});