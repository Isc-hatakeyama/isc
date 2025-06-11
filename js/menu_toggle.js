$(function() {
	$('.button-toggle').click(function(){
		$('.menu_toggle').toggle();
	});
});




// ********** Google Analytics ********** 
// <!-- Global site tag (gtag.js) - Google Analytics -->
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-42301146-1"></script>');
// <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-42301146-1');
// </script>
//
// <!-- Global site tag (gtag.js) - Google Analytics -->
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23264077-1"></script>');
// <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-23264077-1', {
    'linker': {
    'domains': ['iscw.jp', 'isc-tokyo.co.jp'] }
  });
// </script>
// ********** end, Google Analytics. ********** 
