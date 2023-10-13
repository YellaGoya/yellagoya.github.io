"use strict";(self.webpackChunkyellagoya_malog=self.webpackChunkyellagoya_malog||[]).push([[995],{9709:function(t,e,n){n.r(e),n.d(e,{default:function(){return et}});var s=n(7294);const i=n(1566).default.main.withConfig({displayName:"Search__Main",componentId:"sc-il670k-0"})(["margin:0 auto;max-width:960px;color:white;background-color:#1b1b1b;li{color:#fff;}"]);var r=n(4160);function c(t){return Array.isArray?Array.isArray(t):"[object Array]"===p(t)}const o=1/0;function h(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-o?"-0":e}(t)}function a(t){return"string"==typeof t}function l(t){return"number"==typeof t}function u(t){return!0===t||!1===t||function(t){return d(t)&&null!==t}(t)&&"[object Boolean]"==p(t)}function d(t){return"object"==typeof t}function g(t){return null!=t}function f(t){return!t.trim().length}function p(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const m=t=>`Missing ${t} property in key`,M=t=>`Property 'weight' in key '${t}' must be a positive integer`,x=Object.prototype.hasOwnProperty;class y{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=k(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function k(t){let e=null,n=null,s=null,i=1,r=null;if(a(t)||c(t))s=t,e=L(t),n=_(t);else{if(!x.call(t,"name"))throw new Error(m("name"));const c=t.name;if(s=c,x.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(M(c));e=L(c),n=_(c),r=t.getFn}return{path:e,id:n,weight:i,src:s,getFn:r}}function L(t){return c(t)?t:t.split(".")}function _(t){return c(t)?t.join("."):t}var v={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let n=[],s=!1;const i=(t,e,r)=>{if(g(t))if(e[r]){const o=t[e[r]];if(!g(o))return;if(r===e.length-1&&(a(o)||l(o)||u(o)))n.push(h(o));else if(c(o)){s=!0;for(let t=0,n=o.length;t<n;t+=1)i(o[t],e,r+1)}else e.length&&i(o,e,r+1)}else n.push(t)};return i(t,a(e)?e.split("."):e,0),s?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const S=/[^ ]+/g;class w{constructor({getFn:t=v.getFn,fieldNormWeight:e=v.fieldNormWeight}={}){this.norm=function(t=1,e=3){const n=new Map,s=Math.pow(10,e);return{get(e){const i=e.match(S).length;if(n.has(i))return n.get(i);const r=1/Math.pow(i,.5*t),c=parseFloat(Math.round(r*s)/s);return n.set(i,c),c},clear(){n.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,a(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();a(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!g(t)||f(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach(((e,s)=>{let i=e.getFn?e.getFn(t):this.getFn(t,e.path);if(g(i))if(c(i)){let t=[];const e=[{nestedArrIndex:-1,value:i}];for(;e.length;){const{nestedArrIndex:n,value:s}=e.pop();if(g(s))if(a(s)&&!f(s)){let e={v:s,i:n,n:this.norm.get(s)};t.push(e)}else c(s)&&s.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}n.$[s]=t}else if(a(i)&&!f(i)){let t={v:i,n:this.norm.get(i)};n.$[s]=t}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function C(t,e,{getFn:n=v.getFn,fieldNormWeight:s=v.fieldNormWeight}={}){const i=new w({getFn:n,fieldNormWeight:s});return i.setKeys(t.map(k)),i.setSources(e),i.create(),i}function I(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:i=v.distance,ignoreLocation:r=v.ignoreLocation}={}){const c=e/t.length;if(r)return c;const o=Math.abs(s-n);return i?c+o/i:o?1:c}const b=32;function $(t,e,n,{location:s=v.location,distance:i=v.distance,threshold:r=v.threshold,findAllMatches:c=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,includeMatches:h=v.includeMatches,ignoreLocation:a=v.ignoreLocation}={}){if(e.length>b)throw new Error(`Pattern length exceeds max of ${b}.`);const l=e.length,u=t.length,d=Math.max(0,Math.min(s,u));let g=r,f=d;const p=o>1||h,m=p?Array(u):[];let M;for(;(M=t.indexOf(e,f))>-1;){let t=I(e,{currentLocation:M,expectedLocation:d,distance:i,ignoreLocation:a});if(g=Math.min(t,g),f=M+l,p){let t=0;for(;t<l;)m[M+t]=1,t+=1}}f=-1;let x=[],y=1,k=l+u;const L=1<<l-1;for(let v=0;v<l;v+=1){let s=0,r=k;for(;s<r;){I(e,{errors:v,currentLocation:d+r,expectedLocation:d,distance:i,ignoreLocation:a})<=g?s=r:k=r,r=Math.floor((k-s)/2+s)}k=r;let o=Math.max(1,d-r+1),h=c?u:Math.min(d+r,u)+l,M=Array(h+2);M[h+1]=(1<<v)-1;for(let c=h;c>=o;c-=1){let s=c-1,r=n[t.charAt(s)];if(p&&(m[s]=+!!r),M[c]=(M[c+1]<<1|1)&r,v&&(M[c]|=(x[c+1]|x[c])<<1|1|x[c+1]),M[c]&L&&(y=I(e,{errors:v,currentLocation:s,expectedLocation:d,distance:i,ignoreLocation:a}),y<=g)){if(g=y,f=s,f<=d)break;o=Math.max(1,2*d-f)}}if(I(e,{errors:v+1,currentLocation:d,expectedLocation:d,distance:i,ignoreLocation:a})>g)break;x=M}const _={isMatch:f>=0,score:Math.max(.001,y)};if(p){const t=function(t=[],e=v.minMatchCharLength){let n=[],s=-1,i=-1,r=0;for(let c=t.length;r<c;r+=1){let c=t[r];c&&-1===s?s=r:c||-1===s||(i=r-1,i-s+1>=e&&n.push([s,i]),s=-1)}return t[r-1]&&r-s>=e&&n.push([s,r-1]),n}(m,o);t.length?h&&(_.indices=t):_.isMatch=!1}return _}function A(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<s-n-1}return e}class E{constructor(t,{location:e=v.location,threshold:n=v.threshold,distance:s=v.distance,includeMatches:i=v.includeMatches,findAllMatches:r=v.findAllMatches,minMatchCharLength:c=v.minMatchCharLength,isCaseSensitive:o=v.isCaseSensitive,ignoreLocation:h=v.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:s,includeMatches:i,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const a=(t,e)=>{this.chunks.push({pattern:t,alphabet:A(t),startIndex:e})},l=this.pattern.length;if(l>b){let t=0;const e=l%b,n=l-e;for(;t<n;)a(this.pattern.substr(t,b),t),t+=b;if(e){const t=l-b;a(this.pattern.substr(t),t)}}else a(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:s,distance:i,threshold:r,findAllMatches:c,minMatchCharLength:o,ignoreLocation:h}=this.options;let a=[],l=0,u=!1;this.chunks.forEach((({pattern:e,alphabet:d,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=$(t,e,d,{location:s+g,distance:i,threshold:r,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:h});f&&(u=!0),l+=p,f&&m&&(a=[...a,...m])}));let d={isMatch:u,score:u?l/this.chunks.length:1};return u&&n&&(d.indices=a),d}}class F{constructor(t){this.pattern=t}static isMultiMatch(t){return N(t,this.multiRegex)}static isSingleMatch(t){return N(t,this.singleRegex)}search(){}}function N(t,e){const n=t.match(e);return n?n[1]:null}class R extends F{constructor(t,{location:e=v.location,threshold:n=v.threshold,distance:s=v.distance,includeMatches:i=v.includeMatches,findAllMatches:r=v.findAllMatches,minMatchCharLength:c=v.minMatchCharLength,isCaseSensitive:o=v.isCaseSensitive,ignoreLocation:h=v.ignoreLocation}={}){super(t),this._bitapSearch=new E(t,{location:e,threshold:n,distance:s,includeMatches:i,findAllMatches:r,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class j extends F{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const s=[],i=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+i,s.push([e,n-1]);const r=!!s.length;return{isMatch:r,score:r?0:1,indices:s}}}const O=[class extends F{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},j,class extends F{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends F{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends F{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends F{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends F{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},R],W=O.length,z=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const K=new Set([R.type,j.type]);class J{constructor(t,{isCaseSensitive:e=v.isCaseSensitive,includeMatches:n=v.includeMatches,minMatchCharLength:s=v.minMatchCharLength,ignoreLocation:i=v.ignoreLocation,findAllMatches:r=v.findAllMatches,location:c=v.location,threshold:o=v.threshold,distance:h=v.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:s,findAllMatches:r,ignoreLocation:i,location:c,threshold:o,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(z).filter((t=>t&&!!t.trim())),s=[];for(let i=0,r=n.length;i<r;i+=1){const t=n[i];let r=!1,c=-1;for(;!r&&++c<W;){const n=O[c];let i=n.isMultiMatch(t);i&&(s.push(new n(i,e)),r=!0)}if(!r)for(c=-1;++c<W;){const n=O[c];let i=n.isSingleMatch(t);if(i){s.push(new n(i,e));break}}}return s}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let i=0,r=[],c=0;for(let o=0,h=e.length;o<h;o+=1){const s=e[o];r.length=0,i=0;for(let e=0,o=s.length;e<o;e+=1){const o=s[e],{isMatch:h,indices:a,score:l}=o.search(t);if(!h){c=0,i=0,r.length=0;break}if(i+=1,c+=l,n){const t=o.constructor.type;K.has(t)?r=[...r,...a]:r.push(a)}}if(i){let t={isMatch:!0,score:c/i};return n&&(t.indices=r),t}}return{isMatch:!1,score:1}}}const P=[];function q(t,e){for(let n=0,s=P.length;n<s;n+=1){let s=P[n];if(s.condition(t,e))return new s(t,e)}return new E(t,e)}const Q="$and",V="$or",B="$path",U="$val",D=t=>!(!t[Q]&&!t[V]),G=t=>({[Q]:Object.keys(t).map((e=>({[e]:t[e]})))});function H(t,e,{auto:n=!0}={}){const s=t=>{let i=Object.keys(t);const r=(t=>!!t[B])(t);if(!r&&i.length>1&&!D(t))return s(G(t));if((t=>!c(t)&&d(t)&&!D(t))(t)){const s=r?t[B]:i[0],c=r?t[U]:t[s];if(!a(c))throw new Error((t=>`Invalid value for key ${t}`)(s));const o={keyId:_(s),pattern:c};return n&&(o.searcher=q(c,e)),o}let o={children:[],operator:i[0]};return i.forEach((e=>{const n=t[e];c(n)&&n.forEach((t=>{o.children.push(s(t))}))})),o};return D(t)||(t=G(t)),s(t)}function T(t,e){const n=t.matches;e.matches=[],g(n)&&n.forEach((t=>{if(!g(t.indices)||!t.indices.length)return;const{indices:n,value:s}=t;let i={indices:n,value:s};t.key&&(i.key=t.key.src),t.idx>-1&&(i.refIndex=t.idx),e.matches.push(i)}))}function X(t,e){e.score=t.score}class Y{constructor(t,e={},n){this.options={...v,...e},this.options.useExtendedSearch,this._keyStore=new y(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof w))throw new Error("Incorrect 'index' type");this._myIndex=e||C(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){g(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,s=this._docs.length;n<s;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,s-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:s,shouldSort:i,sortFn:r,ignoreFieldNorm:c}=this.options;let o=a(t)?a(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=v.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:s,score:i})=>{const r=t?t.weight:null;n*=Math.pow(0===i&&r?Number.EPSILON:i,(r||1)*(e?1:s))})),t.score=n}))}(o,{ignoreFieldNorm:c}),i&&o.sort(r),l(e)&&e>-1&&(o=o.slice(0,e)),function(t,e,{includeMatches:n=v.includeMatches,includeScore:s=v.includeScore}={}){const i=[];return n&&i.push(T),s&&i.push(X),t.map((t=>{const{idx:n}=t,s={item:e[n],refIndex:n};return i.length&&i.forEach((e=>{e(t,s)})),s}))}(o,this._docs,{includeMatches:n,includeScore:s})}_searchStringList(t){const e=q(t,this.options),{records:n}=this._myIndex,s=[];return n.forEach((({v:t,i:n,n:i})=>{if(!g(t))return;const{isMatch:r,score:c,indices:o}=e.searchIn(t);r&&s.push({item:t,idx:n,matches:[{score:c,value:t,norm:i,indices:o}]})})),s}_searchLogical(t){const e=H(t,this.options),n=(t,e,s)=>{if(!t.children){const{keyId:n,searcher:i}=t,r=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:i});return r&&r.length?[{idx:s,item:e,matches:r}]:[]}const i=[];for(let r=0,c=t.children.length;r<c;r+=1){const c=t.children[r],o=n(c,e,s);if(o.length)i.push(...o);else if(t.operator===Q)return[]}return i},s=this._myIndex.records,i={},r=[];return s.forEach((({$:t,i:s})=>{if(g(t)){let c=n(e,t,s);c.length&&(i[s]||(i[s]={idx:s,item:t,matches:[]},r.push(i[s])),c.forEach((({matches:t})=>{i[s].matches.push(...t)})))}})),r}_searchObjectList(t){const e=q(t,this.options),{keys:n,records:s}=this._myIndex,i=[];return s.forEach((({$:t,i:s})=>{if(!g(t))return;let r=[];n.forEach(((n,s)=>{r.push(...this._findMatches({key:n,value:t[s],searcher:e}))})),r.length&&i.push({idx:s,item:t,matches:r})})),i}_findMatches({key:t,value:e,searcher:n}){if(!g(e))return[];let s=[];if(c(e))e.forEach((({v:e,i:i,n:r})=>{if(!g(e))return;const{isMatch:c,score:o,indices:h}=n.searchIn(e);c&&s.push({score:o,key:t,value:e,idx:i,norm:r,indices:h})}));else{const{v:i,n:r}=e,{isMatch:c,score:o,indices:h}=n.searchIn(i);c&&s.push({score:o,key:t,value:i,norm:r,indices:h})}return s}}Y.version="6.6.2",Y.createIndex=C,Y.parseIndex=function(t,{getFn:e=v.getFn,fieldNormWeight:n=v.fieldNormWeight}={}){const{keys:s,records:i}=t,r=new w({getFn:e,fieldNormWeight:n});return r.setKeys(s),r.setIndexRecords(i),r},Y.config=v,Y.parseQuery=H,function(...t){P.push(...t)}(J);var Z=n(9150),tt=n(5893);var et=({data:t})=>{const{searchQuery:e}=s.useContext(Z.c),[n,c]=s.useState(""),o=t.allMarkdownRemark.edges.map((({node:t})=>JSON.parse(t.fields.index))),h=new Y(o,{keys:["title","content","categories"]});return s.useEffect((()=>{const t=h.search(e).map((t=>t.item));c(t)}),[e]),(0,tt.jsx)(i,{children:(0,tt.jsx)("ul",{children:n&&n.map((t=>(0,tt.jsxs)("li",{onClick:()=>(0,r.navigate)(t.slug),children:[(0,tt.jsx)("h2",{children:t.title}),(0,tt.jsx)("p",{children:t.description})]},t.slug)))})})}}}]);
//# sourceMappingURL=component---src-pages-search-jsx-9e286dbca9fba55e3bbd.js.map