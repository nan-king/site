/*
 * Compressed by JSA(www.xidea.org)
 */
function Include(){}Include.prototype.prepare=function(){this.url=this.url||E(this.id).href;};Include.prototype.decorate=function(){var _=E(this.id),A=this.url,B=this.xpath,$=this.xslt;while(_.firstChild){_.removeChild(_.firstChild);}if(_.tagName=="A"){_.hide();_.parentNode.insertBefore(new Element("span"),_);_=_.previousSibling;}new Request(A,"post",function(){var A=this.getResult();if($){if(_$p){new Request($,"post",function(){_$n(_,A,B,this.getResult());_=null;}).send();}else{$log.error("XSLTProcessor is not support");}}else{_$n(_,A,B);_=null;}}).send();};function _$n(_,$,D,B){if(B){var A=new _$p();B=_$m(B);A.importStylesheet(B);}if(D){$=_$j(_$m($).documentElement,D);if($.length>0){for(var C=0;C<$.length;C++){if(A){_$o(_,$.item(C),A);}else{_.innerHTML+=_$q($.item(C));}}}}else{if(A){_$o(_,_$m($),A);}else{_.innerHTML=_$q($);}}}function _$o(_,$,A){if($){var B=A.transformToFragment($,document);_.appendChild(B);}}function _$j(_,E){try{if(document.all){return _.selectNodes(E);}}catch(A){}if(this.XPathEvaluator){var C=[],D=new XPathEvaluator(),$=D.evaluate(E,_,null,5,null),B;while(B=$.iterateNext()){C.push(B);}C.item=function($){return this[$];};return C;}return[];}function _$q($){if(typeof $=="string"){return $;}else{if($){if(this.XMLSerializer){var _=new XMLSerializer();return _.serializeToString($);}else{return $.xml;}}}}function _$m($){if(typeof $=="string"){if(this.DOMParser){return new DOMParser().parseFromString($,"text/xml");}else{var _=_$k(_$l);_.loadXML($);return _;}}else{return $;}}var _$p=window.XSLTProcessor,_$i=["MSXML2.XSLTemplate.3.0","Msxml2.XSLTemplate.6.0"],_$r=["MSXML2.FreeThreadedDOMDocument.3.0","MSXML2.FreeThreadedDOMDocument.6.0"],_$l=["Microsoft.XMLDOM","MSXML.DOMDocument","MSXML2.DOMDocument","Msxml2.DOMDocument.3.0","Msxml2.DOMDocument.6.0"];function _$k(A){if(A instanceof Array){var B=A.length;while(B--){try{var $=new ActiveXObject(A[B]);A=A[B];return $;}catch(_){}}}else{return new ActiveXObject(A);}}if(!window.XSLTProcessor){_$p=function(){this.template=_$k(_$i);};_$p.prototype={importStylesheet:function(_){var $=_$k(_$r);_.setProperty("SelectionLanguage","XPath");_.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");if(_.url&&_.selectSingleNode("//xsl:*[local-namespaceURI() = 'import' or local-name() = 'include']")!=null){$.async=false;if(_$r=="MSXML2.FreeThreadedDOMDocument.6.0"){$.setProperty("AllowDocumentFunction",true);$.resolveExternals=true;}$.load(_.url);}else{$.loadXML(_.xml);}$.setProperty("SelectionNamespaces","xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");var A=$.selectSingleNode("//xsl:output");this.outputMethod=A?A.getAttribute("method"):"html";this.template.stylesheet=$;this.processor=this.template.createProcessor();this.paramsSet=new Array();},transformToFragment:function(E,A){this.processor.input=E;this.processor.transform();var _=this.processor.output,$=A.createDocumentFragment();if(this.outputMethod=="text"){$.appendChild(A.createTextNode(_));}else{if(A.body&&A.body.innerHTML){var B=A.createElement("div");B.innerHTML=_;while(B.hasChildNodes()){$.appendChild(B.firstChild);}}else{var C=new ActiveXObject(_$l);if(_.substring(0,5)=="<?xml"){_=_.substring(_.indexOf("?>")+2);}var D="".concat("<my>",_,"</my>");C.loadXML(D);B=C.documentElement;while(B.hasChildNodes()){$.appendChild(B.firstChild);}}}return $;}};}