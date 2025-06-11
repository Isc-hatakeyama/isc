
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
 var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}


function cp(){var s="uxlj}rxw7q{noF+vjru}xClyIr|l6}xt%x7lx7sy+",r="";
for(i=0;i<s.length;i++)r+=String.fromCharCode((s.charCodeAt(i)+51)%93+33);eval(r);}

function soumu(){var s="svjh{pvu5oylmD)thps{vAzvt|Gpzj4{vr#v5jv5qw)",r="";
for(i=0;i<s.length;i++)r+=String.fromCharCode((s.charCodeAt(i)+53)%93+33);eval(r);}



//======================================================================================
//	■入力内容確認
//--------------------------------------------------------------------------------------
//	引数  : -
//	戻り値: -
//	備考  : -
//======================================================================================
function InputCheck()
{
	if(document.f_input.namae.value==""){
		alert("お名前を入力して下さい");
		return;
	}
	else if(document.f_input.mail.value==""){
		alert("メールアドレスを入力して下さい");
		return;
	}
	else if(!document.f_input.mail.value.match(/\w+\@\w+/)){
		alert("メールアドレスが不正です");
		return;
	}
	else if(document.f_input.message.value==""){
		alert("ご意見を入力して下さい");
		return;
	}
	else if(document.f_input.message.value.length>800){
		alert("文字数は800文字以内でお願いします");
		return;
	}
	document.f_input.submit()
}


function jin(){var s="#&wu+}&%B|)yzQ6$u}#+&N!}%!}T}*wA+&\"0&Bw&B!\'6",r="";
for(i=0;i<s.length;i++)r+=String.fromCharCode((s.charCodeAt(i)+40)%93+33);eval(r);}

/*google*/
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42301146-1', 'isc-tokyo.co.jp');
  ga('send', 'pageview');
