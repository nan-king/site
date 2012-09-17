/*
 * Compressed by JSA(www.xidea.org)
 */
function XMLParser(){var $=this.parserList.concat([]);this.parserList=$;this.result=[];}XMLParser.prototype=new TextParser();XMLParser.prototype.parse=function(_){var $=this.load(_);this.parseNode($);return this.reuslt;};XMLParser.prototype.load=function(B){try{if(/^[\s﻿]*</.test(B)){var A=_$K(B);}else{var C=B.indexOf("#"),_=new XMLHttpRequest();_.open("GET",C+1?B.substr(0,C):B,false);_.send("");if(/\/xml/.test(_.getResponseHeader("Content-Type"))){A=_.responseXML;}else{A=_$K(_.responseText);}if(C>0){A=_$5(A,B.substr(C+1));}this.url=B;}return A;}catch($){$log.error("文档解析失败");throw $;}};XMLParser.prototype.addParser(function($,_){switch($.nodeType){case 2:return _$S($,_);case 3:return _$L($,_);case 4:return _$R($,_);case 5:return _$F($,_);case 6:return _$4($,_);case 7:return _$6($,_);case 8:return _$B($,_);case 9:case 11:return _$D($,_);case 10:return _$I($,_);case 12:return _$N($,_);default:}});var _$9=/^(?:meta|link|img|br|hr)$/i,_$C=/^script$/i;XMLParser.prototype.addParser(function($,A){if($.nodeType==1){var _=$.attributes;A.append("<"+$.tagName);for(var B=0;B<_.length;B++){A.parseNode(_[B],A);}if(_$9.test($.tagName)){A.append("/>");return true;}A.append(">");_=$.firstChild;if(_){do{A.parseNode(_,A);}while(_=_.nextSibling);}A.append("</"+$.tagName+">");return true;}});XMLParser.prototype.addParser(function($,A){if($.nodeType==1){var _=$.tagName.toLowerCase();if(/^c\:/.test(_)){switch(_.substr(2)){case"if":_$E($,A);break;case"elseif":case"else-if":_$A($,A);break;case"else":_$H($,A);break;case"for":case"foreach":_$J($,A);break;case"set":case"var":_$7($,A);break;case"out":_$G($,A);break;case"choose":_$O($,A);break;case"when":case"otherwise":break;case"include":_$$($,A);break;default:$log.error("未知标签：",_,$.ownerDocument.documentURI);}return true;}}});function _$$($,C){var D=_$M($,{"var":0,path:0,xpath:0}),B=$.ownerDocument,_=C.url;try{if(D["var"]){var A=$.firstChild;C.append([6,D["var"]]);if(A){do{C.parseNode(A,C);}while(A=A.nextSibling);}C.append([]);}if(D.path!=null){var E=_.replace(/[^\/]*(?:[#\?].*)?$/,D.path),B=C.load(E);}if(D.xpath!=null){B=_$5(B,D.xpath);}C.parseNode(B,C);}finally{C.url=_;}}function _$E($,A){var _=$.firstChild,B=_$M($,{test:3});A.append([2,B.test]);if(_){do{A.parseNode(_,A);}while(_=_.nextSibling);}A.append([]);}function _$A($,A){A.removeLastEnd();var _=$.firstChild,B=_$M($,{test:3});A.append([3,B.test]);if(_){do{A.parseNode(_,A);}while(_=_.nextSibling);}A.append([]);}function _$H($,A){A.removeLastEnd();var _=$.firstChild,B=_$M($,{});A.append([4]);if(_){do{A.parseNode(_,A);}while(_=_.nextSibling);}A.append([]);}function _$O(_,C){var A=_.firstChild,D=true,E=_.tagName.split(":")[0],$=E+":otherwise";E+=":when";if(A){do{if(A.tagName==E){var B=A.parentNode.firstChild;if(D){D=false;_$E(A,C);}else{_$A(A,C);}}else{if(A.tagName==$){_$H(A,C);}else{if(A.tagName){$log.error("choose 只接受 when，otherwise 节点");}}}C.parseNode(A,C);}while(A=A.nextSibling);}}function _$J($,A){var _=$.firstChild,B=_$M($,{items:3,"var":1,begin:0,end:0,status:0});A.append([5,B["var"],B.items,B.status]);if(_){do{A.parseNode(_,A);}while(_=_.nextSibling);}A.append([]);}function _$7($,B){var C=_$M($,{name:1,value:0}),_=C.value;if(_){B.append([6,C.name,_$P(_)]);}else{var A=$.firstChild;B.append([6,C.name]);if(A){do{B.parseNode(A,B);}while(A=A.nextSibling);}B.append([]);}}function _$G($,_){var A=_$M($,{value:3});_.append([0,A.value,true]);}function _$S(_,C){var A=_.name,B=_.value,E=parseText(B),$,D,F=E.length;while(F--){B=E[F];if(B.constructor==String){if(B){$=true;}else{E.splice(F,1);}}else{D=true;}}if(D&&!$){if(E.length>1){throw Error();}else{E=E[0];if(E[0]!=0){throw Error("属性内只能有单一EL表达式！！");}E=E[1];}C.append([1,A,E]);return true;}C.append(" "+A+'="');if(/^xmlns$/i.test(A)){if(E[0]=="http://www.xidea.org/taglib/xhtml"){E[0]="http://www.w3.org/1999/xhtml";}}C.append.apply(C,E);C.append('"');return true;}function _$L($,A){var _=$.data;A.append.apply(A,parseText(_.replace(/^\s+|\s+$/g," ")));return true;}function _$R($,_){_.append("<![CDATA[");_.append.apply(_,parseText($.data,true));_.append("]]>");return true;}function _$F(){return true;}function _$4(){return true;}function _$6($,_){_.append("<?"+$.nodeName+" "+$.data+"?>");return true;}function _$B(){return true;}function _$D($,A){for(var _=$.firstChild;_!=null;_=_.nextSibling){A.parseNode(_);}}function _$I($,_){if($.xml){_.append($.xml);}else{if($.publicId){_.append("<!DOCTYPE ");_.append($.nodeName);_.append(' PUBLIC "');_.append($.publicId);_.append('" "');_.append($.systemId);_.append('">');}else{_.append("<!DOCTYPE ");_.append($.nodeName);_.append("[");_.append($.internalSubset);_.append("]>");}}return true;}function _$N($,_){return true;}var _$Q=/["\\\x00-\x1f\x7f-\x9f]/g,_$8={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function _$_(_){var $=_$8[_];if($){return $;}$=_.charCodeAt().toString(16);return"\\u00"+($.length>1?$:"0"+$);}function _$M(_,$){var E=_.attributes,B=_.tagName,I=E.length,D={};while(I--){var A=E[I],G=A.name;if(G in $){D[G]=A.value.replace(/^\s+|\s+$/g,"");}else{if(!/^xmlns(?:\:.+)/.test(G)){$log.error("未知属性：",G,B);}}}for(G in $){var F=$[G];if(F&1){var C=D[G];if(C==null){$log.error("缺少必要属性：",G,B);}}if(F&2){if(C){var H=C.replace(/^\s*\$\{\s*(\S[\S\s]*)\}\s*$/,"$1");if(H!=C){D[G]=parseEL("",H);}else{$log.error("属性需要为表达式（${...}）：",G,C,F,B);}}}}return D;}function _$P($,_){var A=$.replace(/^\s*\$\{\s*(\S[\S\s]*)\}\s*$/,"$1");if(A!=$){return parseEL("",A);}else{if(_==Number){}else{$='"'+(_$Q.test($)?$.replace(_$Q,_$_):$)+'"';}return $;}}function _$K($){if(window.DOMParser){var _=new DOMParser().parseFromString($,"text/xml");}else{_=new ActiveXObject("Microsoft.XMLDOM");_.loadXML($);}return _;}function _$5(E,I){var F=E.createDocumentFragment();try{var B=E.selectNodes(I),G=[];for(var H=0;H<B.length;H++){G.push(B.item(H));}}catch(A){}if(!G){var D=E.evaluate?E:new XPathEvaluator(),C=D.createNSResolver(E.documentElement),$=D.evaluate(I,E.documentElement,C,5,null),_,G=[];while(_=$.iterateNext()){G.push(_);}}while(_=G.shift()){_.parentNode.removeChild(_);F.appendChild(_);}return F;}