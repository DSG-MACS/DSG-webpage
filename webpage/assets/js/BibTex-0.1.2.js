/*!*
 * Javascript BibTex Parser v0.1
 * Copyright (c) 2008 Simon Fraser University
 * @author Steve Hannah <shannah at sfu dot ca>
 * 
 *
 * License:
 * 
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 * 
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 * 
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Credits:
 *
 * This library is a port of the PEAR Structures_BibTex parser written
 * in PHP (http://pear.php.net/package/Structures_BibTex).
 *
 * In order to make porting the parser into javascript easier, I have made
 * use of many phpjs functions, which are distributed here under the MIT License:
 *
 * 
 * More info at: http://kevin.vanzonneveld.net/techblog/category/php2js
 * 
 * php.js is copyright 2008 Kevin van Zonneveld.
 * 
 * Portions copyright Ates Goral (http://magnetiq.com), Legaev Andrey,
 * _argos, Jonas Raoni Soares Silva (http://www.jsfromhell.com),
 * Webtoolkit.info (http://www.webtoolkit.info/), Carlos R. L. Rodrigues, Ash
 * Searle (http://hexmen.com/blog/), Tyler Akins (http://rumkin.com), mdsjack
 * (http://www.mdsjack.bo.it), Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Bayron Guevara, Cord, David, Karol
 * Kowalski, Leslie Hoare, Lincoln Ramsay, Mick@el, Nick Callen, Peter-Paul
 * Koch (http://www.quirksmode.org/js/beat.html), Philippe Baumann, Steve
 * Clay, booeyOH
 * 
 * Licensed under the MIT (MIT-LICENSE.txt) license.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES 
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 *
 * Synopsis:
 * ----------
 *
 * This class provides the following functionality:
 *    1. Parse BibTex into a logical data javascript data structure.
 *    2. Output parsed BibTex entries as HTML, RTF, or BibTex.
 *
 *  
 * The following usage instructions have been copyed and adapted from the PHP instructions located
 * at http://pear.php.net/manual/en/package.structures.structures-bibtex.intro.php
 * Introduction
 * --------------
 * Overview
 * ----------
 * This package provides methods to access information stored in a BibTex
 * file. During parsing it is possible to let the data be validated. In
 * addition. the creation of BibTex Strings as well as RTF Strings is also
 * supported. A few examples
 * 
 * Example 1. Loading a BibTex File and printing the parsed array
 * <script src="BibTex.js"></script>
 * <script>
 * bibtex = new BibTex();
 * bibtex.content = content; // the bibtex content as a string
 * 
 * bibtex->parse();
 * alert(print_r($bibtex->data,true));
 * </script>
 * 
 * 
 * Options
 * --------
 * Options can be set either in the constructor or with the method
 * setOption(). When setting in the constructor the options are given in an
 * associative array. The options are:
 * 
 * 	-	stripDelimiter (default: true) Stripping the delimiter surrounding the entries. 
 * 	-	validate (default: true) Validation while parsing. 
 * 	-	unwrap (default: false) Unwrapping entries while parsing. 
 * 	-	wordWrapWidth (default: false) If set to a number higher one
 * 	    that the entries are wrapped after that amount of characters. 
 * 	-	wordWrapBreak (default: \n) String used to break the line (attached to the line). 
 * 	-	wordWrapCut (default: 0) If set to zero the line will we
 * 	    wrapped at the next possible space, if set to one the line will be
 * 	    wrapped exactly after the given amount of characters. 
 * 	-	removeCurlyBraces (default: false) If set to true Curly Braces will be removed. 
 * 
 * Example of setting options in the constructor:
 * 
 * Example 2. Setting options in the constructor
 * bibtex = new BibTex({'validate':false, 'unwrap':true});
 * 
 * 
 * Example of setting options using the method setOption():
 * 
 * Example 62-3. Setting options using setOption
 * bibtex = new BibTex();
 * bibtex.setOption('validate', false);
 * bibtex.setOption('unwrap', true);
 * 
 * Stored Data
 * ------------
 * The data is stored in the class variable data. This is a a list where
 * each entry is a hash table representing one bibtex-entry. The keys of
 * the hash table correspond to the keys used in bibtex and the values are
 * the corresponding values. Some of these keys are:
 * 
 * 	-	cite - The key used in a LaTeX source to do the citing. 
 * 	-	entryType - The type of the entry, like techreport, book and so on. 
 * 	-	author - One or more authors of the entry. This entry is also a
 * 	    list with hash tables representing the authors as entries. The
 * 	    author has table is explained later. 
 * 	-	title - Title of the entry. 
 * 
 * Author
 * ------
 * As described before the authors are stored in a list. Every entry
 * representing one author as a has table. The hash table consits of four
 * keys: first, von, last and jr. The keys are explained in the following
 * list:
 * 
 * 	-	first - The first name of the author. 
 * 	-	von - Some names have a 'von' part in their name. This is usually a sign of nobleness. 
 * 	-	last - The last name of the author. 
 * 	-	jr - Sometimes a author is the son of his father and has the
 * 	    same name, then the value would be jr. The same is true for the
 * 	    value sen but vice versa. 
 * 
 * Adding an entry
 * ----------------
 * To add an entry simply create a hash table with the needed keys and
 * values and call the method addEntry().
 * Example 4. Adding an entry
 * bibtex                         = new BibTex();
 * var addarray                   = {};
 * addarray['entryType']          = 'Article';
 * addarray['cite']               = 'art2';
 * addarray['title']              = 'Titel of the Article';
 * addarray['author'] = [];
 * addarray['author'][0]['first'] = 'John';
 * addarray['author'][0]['last']  = 'Doe';
 * addarray['author'][1]['first'] = 'Jane';
 * addarray['author'][1]['last']  = 'Doe';
 * bibtex.addEntry(addarray);
 */function array(){return Array.prototype.slice.call(arguments)}function array_key_exists(b,a){return!(!a||a.constructor!==Array&&a.constructor!==Object)&&b in a}function array_keys(b,c,d){var e=new Array,d=!!d,a=!0,f=0;for(key in b)a=!0,c!=void 0&&(d&&b[key]!==c?a=!1:b[key]!=c&&(a=!1)),a&&(e[f]=key,f++);return e}function array_values(a){var b=[],c='';if(a&&typeof a=='object'&&a.change_key_case)return a.values();for(c in a)b[b.length]=a[c];return b}function in_array(d,b,a){var e=!1,c,a=!!a;for(c in b)if(a&&b[c]===d||!a&&b[c]==d){e=!0;break}return e}function sizeof(a,b){return count(a,b)}function count(a,b){var c,d=0;b=='COUNT_RECURSIVE'&&(b=1),b!=1&&(b=0);for(c in a)d++,b==1&&a[c]&&(a[c].constructor===Array||a[c].constructor===Object)&&(d+=count(a[c],1));return d}function explode(a,b,c){var f={0:''},d,e,g;return arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined'?null:!(a===''||a===!1||a===null)&&(typeof a=='function'||typeof a=='object'||typeof b=='function'||typeof b=='object'?f:(a===!0&&(a='1'),!c)?b.toString().split(a.toString()):(d=b.toString().split(a.toString()),e=d.splice(0,c-1),g=d.join(a.toString()),e.push(g),e))}function implode(b,a){return a instanceof Array?a.join(b):a}function join(a,b){return implode(a,b)}function split(a,b){return explode(a,b)}function str_replace(e,f,i){var c=e,b=f,a=i,g=is_array(b),h=is_array(a),d;for(c=[].concat(c),b=[].concat(b),d=(a=[].concat(a)).length;j=0,d--;)while(a[d]=a[d].split(c[j]).join(g?b[j]||"":b[0]),++j in c);return h?a:a[0]}function strlen(a){return(""+a).length}function strpos(b,c,d){var a=b.indexOf(c,d);return a>=0&&a}function strrpos(b,c,d){var a=b.lastIndexOf(c,d);return a>=0&&a}function strtolower(a){return a.toLowerCase()}function strtoupper(a){return a.toUpperCase()}function substr(c,b,a){return b<0&&(b+=c.length),a==void 0?a=c.length:a<0?a+=c.length:a+=b,a<b&&(a=b),c.substring(b,a)}function trim(a,d){var c,b;if(!a)return'';d?c=d.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1'):c=' \n\r	\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';for(b=0;b<a.length;b++)if(c.indexOf(a.charAt(b))===-1){a=a.substring(b);break}for(b=a.length-1;b>=0;b--)if(c.indexOf(a.charAt(b))===-1){a=a.substring(0,b+1);break}return c.indexOf(a.charAt(0))===-1?a:''}function wordwrap(f,i,j,k){var e=i,l=j,h=k,c,a,g,b,d;if(e<1)return f;for(c=-1,g=(d=f.split("\n")).length;++c<g;d[c]+=b)for(b=d[c],d[c]="";b.length>e;d[c]+=b.slice(0,a)+((b=b.slice(a)).length?l:""))a=h==2||(a=b.slice(0,e+1).match(/\S*(\s)?$/))[1]?e:a.input.length-a[0].length||h==1&&e||a.input.length+(a=b.slice(e).match(/^\S*/)).input.length;return d.join("\n")}function is_string(a){return typeof a=='string'}function ord(a){return a.charCodeAt(0)}function array_unique(e){var a,c,d,b=e;for(c=b.length;c;)for(a=--c;a>0;)if(b[c]===b[--a]){for(d=a;--a&&b[c]===b[a];);c-=b.splice(a+1,d-a).length}return b}function print_r(g,d){var a="",e=" ",f=4,c=function(a,f,g,h){var i,j,e,d;if(f>0&&f++,i=b(g*f,h),j=b(g*(f+1),h),e="",a instanceof Array||a instanceof Object){e+="Array\n"+i+"(\n";for(d in a)a[d]instanceof Array||a[d]instanceof Object?e+=j+"["+d+"] => "+c(a[d],f+1,g,h):e+=j+"["+d+"] => "+a[d]+"\n";e+=i+")\n"}else e=a.toString();return e},b=function(c,d){for(var a="",b=0;b<c;b++)a+=d;return a};return a=c(g,0,f,e),d!==!0?(document.write("<pre>"+a+"</pre>"),!0):a}function is_array(a){return a instanceof Array}function BibTex(a){typeof a=='undefined'&&(a={}),this.data,this.content,this._delimiters,this.warnings,this._options,this.rtfstring,this.htmlstring,this.allowedEntryTypes,this.authorstring,this._delimiters={'"':'"','{':'}'},this.data=[],this.content='',this.warnings=[],this._options={stripDelimiter:!0,validate:!0,unwrap:!1,wordWrapWidth:!1,wordWrapBreak:"\n",wordWrapCut:0,removeCurlyBraces:!1,extractAuthors:!0};for(option in a)test=this.setOption(option,a[option]),this.isError(test);this.rtfstring='AUTHORS, "{ TITLE}", {i JOURNAL}, YEAR',this.htmlstring='AUTHORS, "<strong>TITLE</strong>", <em>JOURNAL</em>, YEAR<br />',this.allowedEntryTypes=array('article','book','booklet','confernce','inbook','incollection','inproceedings','manual','masterthesis','misc','phdthesis','proceedings','techreport','unpublished'),this.authorstring='VON LAST, JR, FIRST'}BibTex.prototype={setOption:function(a,b){return ret=!0,array_key_exists(a,this._options)?this._options[a]=b:ret=this.raiseError('Unknown option '+a),ret},parse:function(){var g,b,e,c,h,d,a,f;this.warnings=[],this.data=[],g=!0,b=0,e=!1,c='',h='',d='';for(a=0;a<strlen(this.content);a++)c=substr(this.content,a,1),0!=b&&'@'==c&&(this._checkAt(d)||(this._generateWarning('WARNING_MISSING_END_BRACE','',d),c='}',a--)),0==b&&'@'==c?e=!0:e&&'{'==c&&'\\'!=h?b++:e&&'}'==c&&'\\'!=h&&(b--,b<0&&(g=!1),0==b&&(e=!1,f=this._parseEntry(d),f&&(this.data[this.data.length]=f),d='')),e&&(d+=c),h=c;if(1==b&&(f=this._parseEntry(d),f?(this.data[this.data.length]=f,d='',b=0):g=!1),0!=b&&(g=!1),this._options.validate){cites=[];for(a=0;a<this.data.length;a++)cites[cites.length]=this.data[a].cite;if(unique=array_unique(cites),cites.length!=sizeof(unique)){notuniques=[];for(a=0;a<cites.length;a++)''==unique[a]&&(notuniques[notuniques.length]=cites[a]);this._generateWarning('WARNING_MULTIPLE_ENTRIES',implode(',',notuniques))}}return g?(this.content='',!0):this.raiseError('Unbalanced parenthesis')},_parseEntry:function(a){var c='',b,d;if(this._options.validate&&(c=a),b={},'@string'==strtolower(substr(a,0,7)))this._options.validate&&this._generateWarning('STRING_ENTRY_NOT_YET_SUPPORTED','',a+'}');else if('@preamble'==strtolower(substr(a,0,9)))this._options.validate&&this._generateWarning('PREAMBLE_ENTRY_NOT_YET_SUPPORTED','',a+'}');else{while(strrpos(a,'=')!==!1){for(position=strrpos(a,'='),proceed=!0,substr(a,position-1,1)=='\\'&&(proceed=!1),proceed&&(proceed=this._checkEqualSign(a,position));!proceed;)substring=substr(a,0,position),position=strrpos(substring,'='),proceed=!0,substr(a,position-1,1)=='\\'&&(proceed=!1),proceed&&(proceed=this._checkEqualSign(a,position));value=trim(substr(a,position+1)),a=substr(a,0,position),','==substr(value,strlen(value)-1,1)&&(value=substr(value,0,-1)),this._options.validate&&this._validateValue(value,c),this._options.stripDelimiter&&(value=this._stripDelimiter(value)),this._options.unwrap&&(value=this._unwrap(value)),this._options.removeCurlyBraces&&(value=this._removeCurlyBraces(value)),position=strrpos(a,','),field=strtolower(trim(substr(a,position+1))),b[field]=value,a=substr(a,0,position)}d=a.split('{'),b.cite=trim(d[1]),b.entryType=strtolower(trim(d[0])),'@'==b.entryType.substring(0,1)&&(b.entryType=substr(b.entryType,1)),this._options.validate&&(this._checkAllowedEntryType(b.entryType)||this._generateWarning('WARNING_NOT_ALLOWED_ENTRY_TYPE',b.entryType,a+'}')),in_array('author',array_keys(b))&&this._options.extractAuthors&&(b.author=this._extractAuthors(b.author)),in_array('editor',array_keys(b))&&this._options.extractAuthors&&(b.editor=this._extractAuthors(b.editor))}return b},_checkEqualSign:function(b,e){for(var c=!0,f=strlen(b),d=0,a=f-1;a>=e;a--)precedingchar=substr(b,a-1,1),charv=substr(b,a,1),'{'==charv&&'\\'!=precedingchar&&d++,'}'==charv&&'\\'!=precedingchar&&d--;if(0!=d&&(c=!1),c)if(entrycopy=trim(b),lastchar=substr(entrycopy,strlen(entrycopy)-1,1),','==lastchar&&(lastchar=substr(entrycopy,strlen(entrycopy)-2,1)),'"'==lastchar){c=!1,found=0;for(a=f;a>=e;a--)if(precedingchar=substr(b,a-1,1),charv=substr(b,a,1),'"'==charv&&'\\'!=precedingchar&&found++,2==found){c=!0;break}}return c},_checkAllowedEntryType:function(a){return in_array(a,this.allowedEntryTypes)},_checkAt:function(a){var c=!1,d=array_keys(this._delimiters),e=array_values(this._delimiters),b;if(strrpos(a,'=')!==!1){for(position=strrpos(a,'='),proceed=!0,substr(a,position-1,1)=='\\'&&(proceed=!1);!proceed;)substring=substr(a,0,position),position=strrpos(substring,'='),proceed=!0,substr(a,position-1,1)=='\\'&&(proceed=!1);value=trim(substr(a,position+1)),open=0,charv='',lastchar='';for(b=0;b<strlen(value);b++)charv=substr(this.content,b,1),in_array(charv,d)&&'\\'!=lastchar?open++:in_array(charv,e)&&'\\'!=lastchar&&open--,lastchar=charv;open>0&&(c=!0)}return c},_stripDelimiter:function(a){for(var d=array_keys(this._delimiters),e=strlen(a),b=substr(a,0,1),c=substr(a,-1,1);in_array(b,d);){if(c==this._delimiters[b])a=substr(a,1,-1);else break;b=substr(a,0,1),c=substr(a,-1,1)}return a},_unwrap:function(a){return a=a.replace(/\s+/,' '),trim(a)},_wordwrap:function(a){return''!=a&&is_string(a)&&(a=wordwrap(a,this._options.wordWrapWidth,this._options.wordWrapBreak,this._options.wordWrapCut)),a},_extractAuthors:function(o){var i,j,l,k,g,e,m,a,d,n,h,b,f,c;o=this._unwrap(o),i=o.split(' and ');for(j=0;j<i.length;j++){if(l=trim(i[j]),k='',g='',e='',m='',strpos(l,',')===!1)if(a=l.split(' |~'),d=a.length,1==d)e=a[0];else if(2==d)k=a[0],e=a[1];else{n=!1,h=!1;for(b=0;b<d-1;b++)if(h)e+=' '+a[b];else if(n)if(c=this._determineCase(a[b]),this.isError(c));else if(0==c||-1==c){islast=!0;for(f=b+1;f<d-1;f++)futurecase=this._determineCase(a[f]),this.isError(c)||0==futurecase&&(islast=!1);islast?(h=!0,-1==c?e+=' '+a[b]:g+=' '+a[b]):g+=' '+a[b]}else g+=' '+a[b];else c=this._determineCase(a[b]),this.isError(c)||(0==c?(n=!0,g+=' '+a[b]):k+=' '+a[b]);e+=' '+a[d-1]}else{if(a=[],a=explode(',',l),vonlastarray=[],vonlastarray=explode(' ',a[0]),d=sizeof(vonlastarray),1==d)e=vonlastarray[0];else{h=!1;for(b=0;b<d-1;b++)if(h)e+=' '+vonlastarray[b];else if(0!=this._determineCase(vonlastarray[b])){islast=!0;for(f=b+1;f<d-1;f++)this._determineCase(vonlastarray[f]),c=this._determineCase(vonlastarray[f]),this.isError(c)||0==c&&(islast=!1);islast?(h=!0,e+=' '+vonlastarray[b]):g+=' '+vonlastarray[b]}else g+=' '+vonlastarray[b];e+=' '+vonlastarray[d-1]}3==a.length&&(m=a[1]),k=a[a.length-1]}i[j]={first:trim(k),von:trim(g),last:trim(e),jr:trim(m)}}return i},_determineCase:function(b){var d=-1,g=trim(b),e,f,c,h,a;if(is_string(b)&&strlen(g)>0)for(e=0,f=!1,c=0;!f&&e<=strlen(b);)h=substr(g,e,1),a=ord(h),a==123&&c++,a==125&&c--,a>=65&&a<=90&&0==c?(d=1,f=!0):a>=97&&a<=122&&0==c?(d=0,f=!0):e++;else d=this.raiseError('Could not determine case on word: '+b);return d},isError:function(a){return typeof a=='Object'&&a.isError==1},_validateValue:function(a,f){var c,d,b,e;a.match(/^{.*@.*}/)&&this._generateWarning('WARNING_AT_IN_BRACES',a,f),a.match(/^\".*\\".*\"/)&&this._generateWarning('WARNING_ESCAPED_DOUBLE_QUOTE_INSIDE_DOUBLE_QUOTES',a,f),c=0,d='',b='';for(e=0;e<strlen(a);e++)b=substr(a,e,1),'{'==b&&'\\'!=d&&c++,'}'==b&&'\\'!=d&&c--,d=b;0!=c&&this._generateWarning('WARNING_UNBALANCED_AMOUNT_OF_BRACES',a,f)},_removeCurlyBraces:function(a){for(var f=array_keys(this._delimiters),b=substr(a,0,1),c=substr(a,-1,1),d='',e='',h,g;in_array(b,f);){if(c==this._delimiters[b])d+=b,e+=c,a=substr(a,1,-1);else break;b=substr(a,0,1),c=substr(a,-1,1)}return h='/([^\\\\]){(+*?[^\\\\])}/',g='12',a=a.replace(/([^\\\\])\{(.*?[^\\\\])\}/,g),a=d+a+e,a},_generateWarning:function(c,d,b){typeof b=='undefined'&&(b='');var a={};a.warning=c,a.entry=d,a.wholeentry=b,this.warnings[this.warnings.length]=a},clearWarnings:function(){this.warnings=array()},hasWarning:function(){return sizeof(this.warnings)>0},amount:function(){return sizeof(this.data)},_formatAuthor:function(a){return array_key_exists('von',a)?a.von=trim(a.von):a.von='',array_key_exists('last',a)?a.last=trim(a.last):a.last='',array_key_exists('jr',a)?a.jr=trim(a.jr):a.jr='',array_key_exists('first',a)?a.first=trim(a.first):a.first='',ret=this.authorstring,ret=str_replace("VON",a.von,ret),ret=str_replace("LAST",a.last,ret),ret=str_replace("JR",a.jr,ret),ret=str_replace("FIRST",a.first,ret),trim(ret)},bibTex:function(){for(var b='',c=0,a,d,e;c<this.data.length;c++){a=this.data[c],b+='@'+strtolower(a.entryType)+' { '+a.cite+",\n";for(key in a)d=a[key],this._options.wordWrapWidth>0&&(d=this._wordWrap(d)),in_array(key,array('cite','entryType','author'))||(b+="	"+key+' = {'+d+"},\n");if(array_key_exists('author',a))if(this._options.extractAuthors){tmparray=[];for(j in a.author)e=a.author[j],tmparray[tmparray.length]=this._formatAuthor(e);author=join(' and ',tmparray)}else author=a.author;else author='';b+="	author = {"+author+"}\n",b+="}\n\n"}return b},addEntry:function(a){this.data[this.data.length]=a},getStatistic:function(){for(var a=array(),b=0,c;b<this.data.length;b++)c=this.data[b],array_key_exists(c.entryType,a)?a[c.entryType]++:a[c.entryType]=1;return a},rtf:function(){for(var b="{\\rtf\n",c=0,a,d,e;c<this.data.length;c++){if(a=this.data[c],line=this.rtfstring,title='',journal='',year='',authors='',array_key_exists('title',a)&&(title=this._unwrap(a.title)),array_key_exists('journal',a)&&(journal=this._unwrap(a.journal)),array_key_exists('year',a)&&(year=this._unwrap(a.year)),array_key_exists('author',a))if(this._options.extractAuthors){tmparray=[];for(d in a.author)e=a.author[d],tmparray[tmparray.length]=this._formatAuthor(e);authors=join(', ',tmparray)}else authors=a.author;''!=title||''!=journal||''!=year||''!=authors?(line=str_replace("TITLE",title,line),line=str_replace("JOURNAL",journal,line),line=str_replace("YEAR",year,line),line=str_replace("AUTHORS",authors,line),line+="\n\\par\n",b+=line):this._generateWarning('WARNING_LINE_WAS_NOT_CONVERTED','',print_r(a,1))}return b+='}',b},html:function(i,k){var f,h,a,b,d,e,g,c,l;typeof i=='undefined'&&(i=0),typeof k=='undefined'&&(k=this.data.length),f="<p>\n";for(h=i;h<k;h++){if(a=this.data[h],b=this.htmlstring,d='',e='',g='',c='',array_key_exists('title',a)&&(d=this._unwrap(a.title)),array_key_exists('journal',a)&&(e=this._unwrap(a.journal)),array_key_exists('year',a)&&(g=this._unwrap(a.year)),array_key_exists('author',a))if(this._options.extractAuthors){tmparray=[];for(j in a.author)l=a.author[j],tmparray[tmparray.length]=this._formatAuthor(l);c=join(', ',tmparray)}else c=a.author;''!=d||''!=e||''!=g||''!=c?(b=str_replace("TITLE",d,b),b=str_replace("JOURNAL",e,b),b=str_replace("YEAR",g,b),b=str_replace("AUTHORS",c,b),b+="\n",f+=b):this._generateWarning('WARNING_LINE_WAS_NOT_CONVERTED','',print_r(a,1))}return f+="</p>\n",f}}