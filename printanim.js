const {
	gsap: { set, to, timeline, from, fromTo }
} = window;

set(["#paper"], { scaleY: 0 });
set("#paper-top", { scaleY: 1 });

timeline({
	ease: "none",
	repeat: -1
}).to("#printer-frame", {
	transformOrigin: "50% 100%",
	scaleX: 0.99,
	scaleY: 1.02,
	duration: 0.5,
	y: -2
});

timeline({
	ease: "none",
	repeat: -1
})
	.to("#button-2", { css: { fill: "green" } })
	.add("print", 1.2)
	.to(
		"#paper-top",
		{ duration: 6, scaleY: 0, transformOrigin: "50% 100%" },
		"print"
	)
	.fromTo(
		"#paper",
		{ transformOrigin: "0 0", scaleY: 0 },
		{ scaleY: 1, duration: 6, delay: 5 },
		"print"
	)
	.add("complete", 9)
	.to("#paper", { y: "+=70", skewX: 30, ease: Power4.easeOut }, "complete");
