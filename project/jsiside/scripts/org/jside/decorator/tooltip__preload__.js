/*
 * Compressed by JSA(www.xidea.org)
 */
$JSI.preload('org.jside.decorator','tooltip.js',function(){eval(this.varText);function Tooltip(){}Tooltip.prototype.before=function(){var A=_$U0(this),$=this.getContainer(),_=E(_$V0($));$.style.display="none";_.attach("mouseover",_$W0(this));_.attach("mouseout",A);_.attach("click",A);};Tooltip.prototype.initialize=function(){this.initialize=null;var $=this.getContainer(),_=document.createElement("div"),B=this.attributes,A;$.insertBefore(_,$.firstChild);while(A=_.nextSibling){$.removeChild(A);_.appendChild(A);}_.style.display="none";_.style.position="absolute";_.style.zIndex=100;_.style.backgroundColor="infobackground";_.style.border="2px threedlightshadow solid";_.style.borderBottom="4px threedshadow solid";_.style.borderRight="4px threedshadow solid";_.style.padding="3pt";if(A=B.get("width")){_.style.width=A;}if(A=B.get("height")){_.style.height=A;}$.style.display="";};Tooltip.prototype.decorate=function(){};function _$X0($){$="scroll"+$;return document.documentElement[$]||document.body[$]||0;}function _$W0($){return function(A){if($.initialize){$.initialize();}var _=$.getContainer();_.firstChild.style.left=A.clientX+_$X0("Left")+"px";_.firstChild.style.top=A.clientY+_$X0("Top")+"px";_.firstChild.style.display="block";};}function _$U0($){return function(A){var _=$.getContainer();_.firstChild.style.display="none";};}function _$V0($){var _=$.previousSibling;while(_){if(_.nodeType==1){break;}_=_.previousSibling;}return _||$.parentNode;}})