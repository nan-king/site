/*
 * Compressed by JSA(www.xidea.org)
 */
$JSI.preload('org.jside','element.js',function(){eval(this.varText);function E($){if($.constructor==String){$=document.getElementById($);}var _=_$a;if($.wrapVersion==_.wrapVersion){return $;}for(var A in _){$[A]=_[A];}return $;}var Element=function($){if($.constructor==String){$=document.createElement($);}return E($);},_$b=0,_$V={uid:function(_){var $=_.id||_.uniqueID;if(!$){_.id=$="__$puid"+_$b++;}return $;},attach:function($,_,A){if($.attachEvent){$.attachEvent("on"+_,A);}else{$.addEventListener(_,A,false);}return $;},detach:function($,_,A){if($.detachEvent){$.detachEvent("on"+_,A);}else{$.removeEventListener(_,A,false);}return $;},show:function($,_){$.style.display=_||"";return $;},hide:function($){$.style.display="none";return $;},setStyle:function(_,$,A){if(arguments.length==2){if($.constructor==String){_.style.cssText=$;_.setAttribute("style",$);}else{for(A in $){_.style[A]=$[A];}}}else{_.style[$]=A;}return _;},addClass:function(_,$){return this.replaceClass(_,$,$);},removeClass:function(_,$){return this.replaceClass(_,$,null);},replaceClass:function(B,_,$){var A=B.className;if(A){A=A.split(/\s+/);if(_){var C=A.length;while(C--){if(A[C]==_){A.splice(C,1);}}}}$&&A&&A.push($);B.className=A&&A.join(" ")||$;return B;},setOpacity:function($,_){if(!$.currentStyle||!$.currentStyle.hasLayout){$.style.zoom=1;}if(window.ActiveXObject){$.style.filter=(_==1)?"":"alpha(opacity="+_*100+")";}$.style.opacity=_;return $;},getRuntimeStyle:function($){return $.runtimeStyle||document.defaultView.getComputedStyle($,null);},getPosition:function(_){var A=0,B=0;do{A+=_.offsetLeft||0;B+=_.offsetTop||0;var $=this.getRuntimeStyle(_);A-=_$W($.marginLeft);B-=_$W($.marginTop);}while(_=_.offsetParent);return{left:Math.floor(A),top:Math.floor(B)};},
getRegion:function(A){if(A.getBoundingClientRect){var D=A.getBoundingClientRect(),C=_$X.scrollLeft,E=_$X.scrollTop,$={left:D.left+C,right:D.right+C,top:D.top+E,bottom:D.bottom+E};}else{var $=this.getPosition(A),_=this.getRuntimeStyle(A),B=$.top+=_$W(_.marginTop);$.bottom=B+A.offsetHeight;B=$.left+=_$W(_.marginLeft);$.right=B+A.offsetWidth;}return $;}},_$X=document.documentElement,_$a=Element.prototype={wrapVersion:0},_$Z={};function _$Y(_,$){Element[_]=$;_$a[_]=function(){var _=[this];_.push.apply(_,arguments);return $.apply(Element,_);};}function _$W(A,_){if(_&&_.charAt(0)!="0"){var B=_.replace(/(\d*).*/,"$1"),$=_.substr(B.length).toLowerCase();switch($){case"%":B=A.offsetParent.clientWidth*100/B;break;case"px":B=B*1;break;default:return B*_$U($);}return parseInt(B,10)||0;}return 0;}function _$U($){var _=_$Z[$];if(!_){var A=new Element("div");document.body.appendChild(A);A.style.width=128+$;_=_$Z[$]=A.clientWidth/128;document.body.removeChild(A);}return _;}Element.extend=function($){for(var _ in $){_$Y(_,$[_]);}_$a.wrapVersion++;};Element.extend(_$V);})