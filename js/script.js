//nu eto u menya fullpage

new fullpage('#fullPage', {
	autoScrolling: true,
	scrollingSpeed: 500,
	navigation: true,
	anchors: ['section1','section2','section3','section4','section5','section6','section7','section8','section9']
});

//eto u menya pervii accordion

$(".accordion__header").on('click', function(){         
    $(this).toggleClass('active').next().slideToggle();
})