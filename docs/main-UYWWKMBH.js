var j0=Object.defineProperty,$0=Object.defineProperties;var q0=Object.getOwnPropertyDescriptors;var Oh=Object.getOwnPropertySymbols;var X0=Object.prototype.hasOwnProperty,Y0=Object.prototype.propertyIsEnumerable;var Fh=(n,e,t)=>e in n?j0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ee=(n,e)=>{for(var t in e||={})X0.call(e,t)&&Fh(n,t,e[t]);if(Oh)for(var t of Oh(e))Y0.call(e,t)&&Fh(n,t,e[t]);return n},Et=(n,e)=>$0(n,q0(e));var Uh=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var kh=null;var xl=1;function nn(n){let e=kh;return kh=n,e}var Bh={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Z0(n){if(!(bl(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===xl)){if(!n.producerMustRecompute(n)&&!Ml(n)){n.dirty=!1,n.lastCleanEpoch=xl;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=xl}}function Vh(n){return n&&(n.nextProducerIndex=0),nn(n)}function Hh(n,e){if(nn(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(bl(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)El(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Ml(n){qo(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(Z0(t),i!==t.version))return!0}return!1}function zh(n){if(qo(n),bl(n))for(let e=0;e<n.producerNode.length;e++)El(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function El(n,e){if(K0(n),qo(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)El(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];qo(r),r.producerIndexOfThis[i]=e}}function bl(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function qo(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function K0(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function J0(){throw new Error}var Q0=J0;function Gh(n){Q0=n}function Ne(n){return typeof n=="function"}function vr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Xo=vr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Ls(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Rt=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ne(i))try{i()}catch(s){e=s instanceof Xo?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Wh(s)}catch(o){e=e??[],o instanceof Xo?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Xo(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Wh(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&Ls(t,e)}remove(e){let{_finalizers:t}=this;t&&Ls(t,e),e instanceof n&&e._removeParent(this)}};Rt.EMPTY=(()=>{let n=new Rt;return n.closed=!0,n})();var wl=Rt.EMPTY;function Yo(n){return n instanceof Rt||n&&"closed"in n&&Ne(n.remove)&&Ne(n.add)&&Ne(n.unsubscribe)}function Wh(n){Ne(n)?n():n.unsubscribe()}var Mn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var yr={setTimeout(n,e,...t){let{delegate:i}=yr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=yr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Zo(n){yr.setTimeout(()=>{let{onUnhandledError:e}=Mn;if(e)e(n);else throw n})}function Os(){}var jh=(()=>Sl("C",void 0,void 0))();function $h(n){return Sl("E",void 0,n)}function qh(n){return Sl("N",n,void 0)}function Sl(n,e,t){return{kind:n,value:e,error:t}}var Ui=null;function _r(n){if(Mn.useDeprecatedSynchronousErrorHandling){let e=!Ui;if(e&&(Ui={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Ui;if(Ui=null,t)throw i}}else n()}function Xh(n){Mn.useDeprecatedSynchronousErrorHandling&&Ui&&(Ui.errorThrown=!0,Ui.error=n)}var ki=class extends Rt{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Yo(e)&&e.add(this)):this.destination=n_}static create(e,t,i){return new Zn(e,t,i)}next(e){this.isStopped?Cl(qh(e),this):this._next(e)}error(e){this.isStopped?Cl($h(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?Cl(jh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},e_=Function.prototype.bind;function Tl(n,e){return e_.call(n,e)}var Al=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ko(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ko(i)}else Ko(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ko(t)}}},Zn=class extends ki{constructor(e,t,i){super();let r;if(Ne(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Mn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&Tl(e.next,s),error:e.error&&Tl(e.error,s),complete:e.complete&&Tl(e.complete,s)}):r=e}this.destination=new Al(r)}};function Ko(n){Mn.useDeprecatedSynchronousErrorHandling?Xh(n):Zo(n)}function t_(n){throw n}function Cl(n,e){let{onStoppedNotification:t}=Mn;t&&yr.setTimeout(()=>t(n,e))}var n_={closed:!0,next:Os,error:t_,complete:Os};var xr=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function Wt(n){return n}function Dl(...n){return Il(n)}function Il(n){return n.length===0?Wt:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var it=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=r_(t)?t:new Zn(t,i,r);return _r(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Yh(i),new i((r,s)=>{let o=new Zn({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[xr](){return this}pipe(...t){return Il(t)(this)}toPromise(t){return t=Yh(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Yh(n){var e;return(e=n??Mn.Promise)!==null&&e!==void 0?e:Promise}function i_(n){return n&&Ne(n.next)&&Ne(n.error)&&Ne(n.complete)}function r_(n){return n&&n instanceof ki||i_(n)&&Yo(n)}function Rl(n){return Ne(n?.lift)}function je(n){return e=>{if(Rl(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Qe(n,e,t,i,r){return new Pl(n,e,t,i,r)}var Pl=class extends ki{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Mr(){return je((n,e)=>{let t=null;n._refCount++;let i=Qe(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Er=class extends it{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Rl(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Rt;let t=this.getSubject();e.add(this.source.subscribe(Qe(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Rt.EMPTY)}return e}refCount(){return Mr()(this)}};var Zh=vr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var jt=(()=>{class n extends it{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Jo(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Zh}next(t){_r(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){_r(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){_r(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?wl:(this.currentObservers=null,s.push(t),new Rt(()=>{this.currentObservers=null,Ls(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new it;return t.source=this,t}}return n.create=(e,t)=>new Jo(e,t),n})(),Jo=class extends jt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:wl}};var Lt=class extends jt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Zt=new it(n=>n.complete());function Kh(n){return n&&Ne(n.schedule)}function Nl(n){return n[n.length-1]}function Jh(n){return Ne(Nl(n))?n.pop():void 0}function Fn(n){return Kh(Nl(n))?n.pop():void 0}function Qh(n,e){return typeof Nl(n)=="number"?n.pop():e}function tp(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function ep(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Bi(n){return this instanceof Bi?(this.v=n,this):new Bi(n)}function np(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(f){i[f]&&(r[f]=function(p){return new Promise(function(g,v){s.push([f,p,g,v])>1||a(f,p)})})}function a(f,p){try{c(i[f](p))}catch(g){d(s[0][3],g)}}function c(f){f.value instanceof Bi?Promise.resolve(f.value.v).then(l,u):d(s[0][2],f)}function l(f){a("next",f)}function u(f){a("throw",f)}function d(f,p){f(p),s.shift(),s.length&&a(s[0][0],s[0][1])}}function ip(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ep=="function"?ep(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Qo=n=>n&&typeof n.length=="number"&&typeof n!="function";function ea(n){return Ne(n?.then)}function ta(n){return Ne(n[xr])}function na(n){return Symbol.asyncIterator&&Ne(n?.[Symbol.asyncIterator])}function ia(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function s_(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ra=s_();function sa(n){return Ne(n?.[ra])}function oa(n){return np(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Bi(t.read());if(r)return yield Bi(void 0);yield yield Bi(i)}}finally{t.releaseLock()}})}function aa(n){return Ne(n?.getReader)}function pt(n){if(n instanceof it)return n;if(n!=null){if(ta(n))return o_(n);if(Qo(n))return a_(n);if(ea(n))return c_(n);if(na(n))return rp(n);if(sa(n))return l_(n);if(aa(n))return u_(n)}throw ia(n)}function o_(n){return new it(e=>{let t=n[xr]();if(Ne(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function a_(n){return new it(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function c_(n){return new it(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Zo)})}function l_(n){return new it(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function rp(n){return new it(e=>{d_(n,e).catch(t=>e.error(t))})}function u_(n){return rp(oa(n))}function d_(n,e){var t,i,r,s;return tp(this,void 0,void 0,function*(){try{for(t=ip(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Kt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ca(n,e=0){return je((t,i)=>{t.subscribe(Qe(i,r=>Kt(i,n,()=>i.next(r),e),()=>Kt(i,n,()=>i.complete(),e),r=>Kt(i,n,()=>i.error(r),e)))})}function la(n,e=0){return je((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function sp(n,e){return pt(n).pipe(la(e),ca(e))}function op(n,e){return pt(n).pipe(la(e),ca(e))}function ap(n,e){return new it(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function cp(n,e){return new it(t=>{let i;return Kt(t,e,()=>{i=n[ra](),Kt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ne(i?.return)&&i.return()})}function ua(n,e){if(!n)throw new Error("Iterable cannot be null");return new it(t=>{Kt(t,e,()=>{let i=n[Symbol.asyncIterator]();Kt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function lp(n,e){return ua(oa(n),e)}function up(n,e){if(n!=null){if(ta(n))return sp(n,e);if(Qo(n))return ap(n,e);if(ea(n))return op(n,e);if(na(n))return ua(n,e);if(sa(n))return cp(n,e);if(aa(n))return lp(n,e)}throw ia(n)}function vt(n,e){return e?up(n,e):pt(n)}function Ie(...n){let e=Fn(n);return vt(n,e)}function br(n,e){let t=Ne(n)?n:()=>n,i=r=>r.error(t());return new it(e?r=>e.schedule(i,0,r):i)}function Ll(n){return!!n&&(n instanceof it||Ne(n.lift)&&Ne(n.subscribe))}var Kn=vr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(n,e){return je((t,i)=>{let r=0;t.subscribe(Qe(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:f_}=Array;function h_(n,e){return f_(e)?n(...e):n(e)}function dp(n){return rt(e=>h_(n,e))}var{isArray:p_}=Array,{getPrototypeOf:m_,prototype:g_,keys:v_}=Object;function fp(n){if(n.length===1){let e=n[0];if(p_(e))return{args:e,keys:null};if(y_(e)){let t=v_(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function y_(n){return n&&typeof n=="object"&&m_(n)===g_}function hp(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function da(...n){let e=Fn(n),t=Jh(n),{args:i,keys:r}=fp(n);if(i.length===0)return vt([],e);let s=new it(__(i,e,r?o=>hp(r,o):Wt));return t?s.pipe(dp(t)):s}function __(n,e,t=Wt){return i=>{pp(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)pp(e,()=>{let l=vt(n[c],e),u=!1;l.subscribe(Qe(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function pp(n,e,t){n?Kt(t,n,e):e()}function mp(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},p=v=>l<i?g(v):c.push(v),g=v=>{s&&e.next(v),l++;let m=!1;pt(t(v,u++)).subscribe(Qe(e,h=>{r?.(h),s?p(h):e.next(h)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<i;){let h=c.shift();o?Kt(e,o,()=>g(h)):g(h)}f()}catch(h){e.error(h)}}))};return n.subscribe(Qe(e,p,()=>{d=!0,f()})),()=>{a?.()}}function Tt(n,e,t=1/0){return Ne(e)?Tt((i,r)=>rt((s,o)=>e(i,s,r,o))(pt(n(i,r))),t):(typeof e=="number"&&(t=e),je((i,r)=>mp(i,r,n,t)))}function Fs(n=1/0){return Tt(Wt,n)}function gp(){return Fs(1)}function wr(...n){return gp()(vt(n,Fn(n)))}function fa(n){return new it(e=>{pt(n()).subscribe(e)})}function Ol(...n){let e=Fn(n),t=Qh(n,1/0),i=n;return i.length?i.length===1?pt(i[0]):Fs(t)(vt(i,e)):Zt}function En(n,e){return je((t,i)=>{let r=0;t.subscribe(Qe(i,s=>n.call(e,s,r++)&&i.next(s)))})}function mi(n){return je((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Qe(t,void 0,void 0,o=>{s=pt(n(o,mi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function vp(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(Qe(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function Sr(n,e){return Ne(e)?Tt(n,e,1):Tt(n,1)}function gi(n){return je((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Jn(n){return n<=0?()=>Zt:je((e,t)=>{let i=0;e.subscribe(Qe(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function Fl(n){return rt(()=>n)}function Ul(n,e=Wt){return n=n??x_,je((t,i)=>{let r,s=!0;t.subscribe(Qe(i,o=>{let a=e(o);(s||!n(r,a))&&(s=!1,r=a,i.next(o))}))})}function x_(n,e){return n===e}function ha(n=M_){return je((e,t)=>{let i=!1;e.subscribe(Qe(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function M_(){return new Kn}function Us(n){return je((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Un(n,e){let t=arguments.length>=2;return i=>i.pipe(n?En((r,s)=>n(r,s,i)):Wt,Jn(1),t?gi(e):ha(()=>new Kn))}function Tr(n){return n<=0?()=>Zt:je((e,t)=>{let i=[];e.subscribe(Qe(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function kl(n,e){let t=arguments.length>=2;return i=>i.pipe(n?En((r,s)=>n(r,s,i)):Wt,Tr(1),t?gi(e):ha(()=>new Kn))}function Bl(n,e){return je(vp(n,e,arguments.length>=2,!0))}function pa(n={}){let{connector:e=()=>new jt,resetOnError:t=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return s=>{let o,a,c,l=0,u=!1,d=!1,f=()=>{a?.unsubscribe(),a=void 0},p=()=>{f(),o=c=void 0,u=d=!1},g=()=>{let v=o;p(),v?.unsubscribe()};return je((v,m)=>{l++,!d&&!u&&f();let h=c=c??e();m.add(()=>{l--,l===0&&!d&&!u&&(a=Vl(g,r))}),h.subscribe(m),!o&&l>0&&(o=new Zn({next:C=>h.next(C),error:C=>{d=!0,f(),a=Vl(p,t,C),h.error(C)},complete:()=>{u=!0,f(),a=Vl(p,i),h.complete()}}),pt(v).subscribe(o))})(s)}}function Vl(n,e,...t){if(e===!0){n();return}if(e===!1)return;let i=new Zn({next:()=>{i.unsubscribe(),n()}});return pt(e(...t)).subscribe(i)}function Hl(...n){let e=Fn(n);return je((t,i)=>{(e?wr(n,t,e):wr(n,t)).subscribe(i)})}function rn(n,e){return je((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Qe(i,c=>{r?.unsubscribe();let l=0,u=s++;pt(n(c,u)).subscribe(r=Qe(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function zl(n){return je((e,t)=>{pt(n).subscribe(Qe(t,()=>t.complete(),Os)),!t.closed&&e.subscribe(t)})}function Pt(n,e,t){let i=Ne(n)||e||t?{next:n,error:e,complete:t}:n;return i?je((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(Qe(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Wt}function lt(n){for(let e in n)if(n[e]===lt)return e;throw Error("Could not find renamed property on target object.")}function Jt(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(Jt).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function yp(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var E_=lt({__forward_ref__:lt});function Zp(n){return n.__forward_ref__=Zp,n.toString=function(){return Jt(this())},n}function fn(n){return Kp(n)?n():n}function Kp(n){return typeof n=="function"&&n.hasOwnProperty(E_)&&n.__forward_ref__===Zp}function Jp(n){return n&&!!n.\u0275providers}var Re=class extends Error{constructor(e,t){super(Lu(e,t)),this.code=e}};function Lu(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var b_=lt({\u0275cmp:lt}),w_=lt({\u0275dir:lt}),S_=lt({\u0275pipe:lt}),T_=lt({\u0275mod:lt}),Ma=lt({\u0275fac:lt}),ks=lt({__NG_ELEMENT_ID__:lt}),_p=lt({__NG_ENV_ID__:lt});function C_(n){return typeof n=="string"?n:n==null?"":String(n)}function A_(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():C_(n)}function D_(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new Re(-200,`Circular dependency in DI detected for ${n}${t}`)}function Ou(n,e){let t=e?` in ${e}`:"";throw new Re(-201,!1)}function I_(n,e){n==null&&R_(e,n,null,"!=")}function R_(n,e,t,i){throw new Error(`ASSERTION ERROR: ${n}`+(i==null?"":` [Expected=> ${t} ${i} ${e} <=Actual]`))}function Ve(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Fa(n){return{providers:n.providers||[],imports:n.imports||[]}}function Ua(n){return xp(n,em)||xp(n,tm)}function Qp(n){return Ua(n)!==null}function xp(n,e){return n.hasOwnProperty(e)?n[e]:null}function P_(n){let e=n&&(n[em]||n[tm]);return e||null}function Mp(n){return n&&(n.hasOwnProperty(Ep)||n.hasOwnProperty(N_))?n[Ep]:null}var em=lt({\u0275prov:lt}),Ep=lt({\u0275inj:lt}),tm=lt({ngInjectableDef:lt}),N_=lt({ngInjectorDef:lt}),$e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),Ql;function L_(){return Ql}function kn(n){let e=Ql;return Ql=n,e}function nm(n,e,t){let i=Ua(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;Ou(Jt(n),"Injector")}var Bs=globalThis;var tt=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Ve({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var O_={},zs=O_,F_="__NG_DI_FLAG__",Ea="ngTempTokenPath",U_="ngTokenPath",k_=/\n/gm,B_="\u0275",bp="__source",Vs;function Cr(n){let e=Vs;return Vs=n,e}function V_(n,e=$e.Default){if(Vs===void 0)throw new Re(-203,!1);return Vs===null?nm(n,void 0,e):Vs.get(n,e&$e.Optional?null:void 0,e)}function et(n,e=$e.Default){return(L_()||V_)(fn(n),e)}function ge(n,e=$e.Default){return et(n,ka(e))}function ka(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function eu(n){let e=[];for(let t=0;t<n.length;t++){let i=fn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Re(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],c=H_(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(et(r,s))}else e.push(et(i))}return e}function H_(n){return n[F_]}function z_(n,e,t,i){let r=n[Ea];throw e[bp]&&r.unshift(e[bp]),n.message=G_(`
`+n.message,r,t,i),n[U_]=r,n[Ea]=null,n}function G_(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==B_?n.slice(2):n;let r=Jt(e);if(Array.isArray(e))r=e.map(Jt).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):Jt(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(k_,`
  `)}`}function Ba(n){return{toString:n}.toString()}var im=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(im||{}),zn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(zn||{}),Gs={},Bn=[];function rm(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function tu(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];j_(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function W_(n){return n===3||n===4||n===6}function j_(n){return n.charCodeAt(0)===64}function Fu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?wp(n,t,r,null,e[++i]):wp(n,t,r,null,null))}}return n}function wp(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var sm="ng-template";function $_(n,e,t){let i=0,r=!0;for(;i<n.length;){let s=n[i++];if(typeof s=="string"&&r){let o=n[i++];if(t&&s==="class"&&rm(o.toLowerCase(),e,0)!==-1)return!0}else if(s===1){for(;i<n.length&&typeof(s=n[i++])=="string";)if(s.toLowerCase()===e)return!0;return!1}else typeof s=="number"&&(r=!1)}return!1}function om(n){return n.type===4&&n.value!==sm}function q_(n,e,t){let i=n.type===4&&!t?sm:n.value;return e===i}function X_(n,e,t){let i=4,r=n.attrs||[],s=K_(r),o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!bn(i)&&!bn(c))return!1;if(o&&bn(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!q_(n,c,t)||c===""&&e.length===1){if(bn(i))return!1;o=!0}}else{let l=i&8?c:e[++a];if(i&8&&n.attrs!==null){if(!$_(n.attrs,l,t)){if(bn(i))return!1;o=!0}continue}let u=i&8?"class":c,d=Y_(u,r,om(n),t);if(d===-1){if(bn(i))return!1;o=!0;continue}if(l!==""){let f;d>s?f="":f=r[d+1].toLowerCase();let p=i&8?f:null;if(p&&rm(p,l,0)!==-1||i&2&&l!==f){if(bn(i))return!1;o=!0}}}}return bn(i)||o}function bn(n){return(n&1)===0}function Y_(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return J_(e,n)}function Z_(n,e,t=!1){for(let i=0;i<e.length;i++)if(X_(n,e[i],t))return!0;return!1}function K_(n){for(let e=0;e<n.length;e++){let t=n[e];if(W_(t))return e}return n.length}function J_(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Sp(n,e){return n?":not("+e.trim()+")":e}function Q_(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!bn(o)&&(e+=Sp(s,r),r=""),i=o,s=s||!bn(i);t++}return r!==""&&(e+=Sp(s,r)),e}function ex(n){return n.map(Q_).join(",")}function tx(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!bn(r))break;r=s}i++}return{attrs:e,classes:t}}function Va(n){return Ba(()=>{let e=dm(n),t=Et(Ee({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===im.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||zn.Emulated,styles:n.styles||Bn,_:null,schemas:n.schemas||null,tView:null,id:""});fm(t);let i=n.dependencies;return t.directiveDefs=Cp(i,!1),t.pipeDefs=Cp(i,!0),t.id=rx(t),t})}function nx(n){return zi(n)||am(n)}function ix(n){return n!==null}function Ha(n){return Ba(()=>({type:n.type,bootstrap:n.bootstrap||Bn,declarations:n.declarations||Bn,imports:n.imports||Bn,exports:n.exports||Bn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Tp(n,e){if(n==null)return Gs;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s=r;Array.isArray(r)&&(s=r[1],r=r[0]),t[r]=i,e&&(e[r]=s)}return t}function Uu(n){return Ba(()=>{let e=dm(n);return fm(e),e})}function zi(n){return n[b_]||null}function am(n){return n[w_]||null}function cm(n){return n[S_]||null}function lm(n){let e=zi(n)||am(n)||cm(n);return e!==null?e.standalone:!1}function um(n,e){let t=n[T_]||null;if(!t&&e===!0)throw new Error(`Type ${Jt(n)} does not have '\u0275mod' property.`);return t}function dm(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Gs,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||Bn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Tp(n.inputs,e),outputs:Tp(n.outputs),debugInfo:null}}function fm(n){n.features?.forEach(e=>e(n))}function Cp(n,e){if(!n)return null;let t=e?cm:nx;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(ix)}function rx(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483647+1,"c"+e}var ei=0,qe=1,Ge=2,wt=3,wn=4,Tn=5,nu=6,ba=7,yi=8,Pr=9,Ws=10,Gn=11,js=12,Ap=13,Ks=14,Wn=15,Js=16,Ar=17,Hn=18,za=19,hm=20,Hs=21,Gl=22,Gi=23,Nr=25,pm=1,mm=2,iu=6,Wi=7,wa=8,Lr=9;var sn=11;function Vi(n){return Array.isArray(n)&&typeof n[pm]=="object"}function Sn(n){return Array.isArray(n)&&n[pm]===!0}function gm(n){return(n.flags&4)!==0}function ku(n){return n.componentOffset>-1}function sx(n){return(n.flags&1)===1}function Qs(n){return!!n.template}function ox(n){return(n[Ge]&512)!==0}function Or(n,e){let t=n.hasOwnProperty(Ma);return t?n[Ma]:null}var ru=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function Ga(){return vm}function vm(n){return n.type.prototype.ngOnChanges&&(n.setInput=cx),ax}Ga.ngInherit=!0;function ax(){let n=_m(this),e=n?.current;if(e){let t=n.previous;if(t===Gs)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function cx(n,e,t,i){let r=this.declaredInputs[t],s=_m(n)||lx(n,{previous:Gs,current:null}),o=s.current||(s.current={}),a=s.previous,c=a[r];o[r]=new ru(c&&c.currentValue,e,a===Gs),n[i]=e}var ym="__ngSimpleChanges__";function _m(n){return n[ym]||null}function lx(n,e){return n[ym]=e}var Dp=null;var vi=function(n,e,t){Dp?.(n,e,t)},ux="svg",dx="math";function _i(n){for(;Array.isArray(n);)n=n[ei];return n}function ti(n,e){return _i(e[n.index])}function fx(n,e){return n.data[e]}function eo(n,e){let t=e[n];return Vi(t)?t:t[ei]}function hx(n){return(n[Ge]&4)===4}function Bu(n){return(n[Ge]&128)===128}function px(n){return Sn(n[wt])}function Ip(n,e){return e==null?null:n[e]}function xm(n){n[Ar]=0}function mx(n){n[Ge]&1024||(n[Ge]|=1024,Bu(n)&&Wa(n))}function Mm(n){n[Ge]&9216&&Wa(n)}function Wa(n){let e=n[wt];for(;e!==null&&!(Sn(e)&&e[iu]||Vi(e)&&e[Ge]&8192);){if(Sn(e))e[iu]=!0;else if(e[Ge]|=8192,!Bu(e))break;e=e[wt]}}function gx(n,e){if((n[Ge]&256)===256)throw new Re(911,!1);n[Hs]===null&&(n[Hs]=[]),n[Hs].push(e)}var at={lFrame:Am(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function vx(){return at.lFrame.elementDepthCount}function yx(){at.lFrame.elementDepthCount++}function _x(){at.lFrame.elementDepthCount--}function Em(){return at.bindingsEnabled}function xx(){return at.skipHydrationRootTNode!==null}function Mx(n){return at.skipHydrationRootTNode===n}function Ex(){at.skipHydrationRootTNode=null}function on(){return at.lFrame.lView}function ja(){return at.lFrame.tView}function ni(){let n=bm();for(;n!==null&&n.type===64;)n=n.parent;return n}function bm(){return at.lFrame.currentTNode}function bx(){let n=at.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Vu(n,e){let t=at.lFrame;t.currentTNode=n,t.isParent=e}function wm(){return at.lFrame.isParent}function wx(){at.lFrame.isParent=!1}function Sx(n){return at.lFrame.bindingIndex=n}function Tx(){return at.lFrame.inI18n}function Cx(n,e){let t=at.lFrame;t.bindingIndex=t.bindingRootIndex=n,su(e)}function Ax(){return at.lFrame.currentDirectiveIndex}function su(n){at.lFrame.currentDirectiveIndex=n}function Sm(){return at.lFrame.currentQueryIndex}function Hu(n){at.lFrame.currentQueryIndex=n}function Dx(n){let e=n[qe];return e.type===2?e.declTNode:e.type===1?n[Tn]:null}function Tm(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=Dx(s),r===null||(s=s[Ks],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=at.lFrame=Cm();return i.currentTNode=e,i.lView=n,!0}function zu(n){let e=Cm(),t=n[qe];at.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Cm(){let n=at.lFrame,e=n===null?null:n.child;return e===null?Am(n):e}function Am(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Dm(){let n=at.lFrame;return at.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Im=Dm;function Gu(){let n=Dm();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function Ix(){return at.lFrame.selectedIndex}function ji(n){at.lFrame.selectedIndex=n}function Rx(){return at.lFrame.currentNamespace}var Rm=!0;function Px(){return Rm}function Nx(n){Rm=n}function Lx(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=vm(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Pm(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function ma(n,e,t){Nm(n,e,3,t)}function ga(n,e,t,i){(n[Ge]&3)===t&&Nm(n,e,t,i)}function Wl(n,e){let t=n[Ge];(t&3)===e&&(t&=16383,t+=1,n[Ge]=t)}function Nm(n,e,t,i){let r=i!==void 0?n[Ar]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Ar]+=65536),(a<s||s==-1)&&(Ox(n,t,e,c),n[Ar]=(n[Ar]&4294901760)+c+2),c++}function Rp(n,e){vi(4,n,e);let t=nn(null);try{e.call(n)}finally{nn(t),vi(5,n,e)}}function Ox(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Ge]>>14<n[Ar]>>16&&(n[Ge]&3)===e&&(n[Ge]+=16384,Rp(a,s)):Rp(a,s)}var Rr=-1,$s=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function Fx(n){return n instanceof $s}function Ux(n){return(n.flags&8)!==0}function kx(n){return(n.flags&16)!==0}function Lm(n){return n!==Rr}function Sa(n){let e=n&32767;return n&32767}function Bx(n){return n>>16}function Ta(n,e){let t=Bx(n),i=e;for(;t>0;)i=i[Ks],t--;return i}var ou=!0;function Pp(n){let e=ou;return ou=n,e}var Vx=256,Om=Vx-1,Fm=5,Hx=0,Vn={};function zx(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ks)&&(i=t[ks]),i==null&&(i=t[ks]=Hx++);let r=i&Om,s=1<<r;e.data[n+(r>>Fm)]|=s}function Um(n,e){let t=km(n,e);if(t!==-1)return t;let i=e[qe];i.firstCreatePass&&(n.injectorIndex=e.length,jl(i.data,n),jl(e,null),jl(i.blueprint,null));let r=Wu(n,e),s=n.injectorIndex;if(Lm(r)){let o=Sa(r),a=Ta(r,e),c=a[qe].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function jl(n,e){n.push(0,0,0,0,0,0,0,0,e)}function km(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Wu(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Gm(r),i===null)return Rr;if(t++,r=r[Ks],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Rr}function Gx(n,e,t){zx(n,e,t)}function Bm(n,e,t){if(t&$e.Optional||n!==void 0)return n;Ou(e,"NodeInjector")}function Vm(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),!(t&($e.Self|$e.Host))){let r=n[Pr],s=kn(void 0);try{return r?r.get(e,i,t&$e.Optional):nm(e,i,t&$e.Optional)}finally{kn(s)}}return Bm(i,e,t)}function Hm(n,e,t,i=$e.Default,r){if(n!==null){if(e[Ge]&2048&&!(i&$e.Self)){let o=qx(n,e,t,i,Vn);if(o!==Vn)return o}let s=zm(n,e,t,i,Vn);if(s!==Vn)return s}return Vm(e,t,i,r)}function zm(n,e,t,i,r){let s=jx(t);if(typeof s=="function"){if(!Tm(e,n,i))return i&$e.Host?Bm(r,t,i):Vm(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))Ou(t);else return o}finally{Im()}}else if(typeof s=="number"){let o=null,a=km(n,e),c=Rr,l=i&$e.Host?e[Wn][Tn]:null;for((a===-1||i&$e.SkipSelf)&&(c=a===-1?Wu(n,e):e[a+8],c===Rr||!Lp(i,!1)?a=-1:(o=e[qe],a=Sa(c),e=Ta(c,e)));a!==-1;){let u=e[qe];if(Np(s,a,u.data)){let d=Wx(a,e,t,o,i,l);if(d!==Vn)return d}c=e[a+8],c!==Rr&&Lp(i,e[qe].data[a+8]===l)&&Np(s,a,e)?(o=u,a=Sa(c),e=Ta(c,e)):a=-1}}return r}function Wx(n,e,t,i,r,s){let o=e[qe],a=o.data[n+8],c=i==null?ku(a)&&ou:i!=o&&(a.type&3)!==0,l=r&$e.Host&&s===a,u=va(a,o,t,c,l);return u!==null?Fr(e,o,u,a):Vn}function va(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let p=d;p<f;p++){let g=o[p];if(p<c&&t===g||p>=c&&g.type===t)return p}if(r){let p=o[c];if(p&&Qs(p)&&p.type===t)return c}return null}function Fr(n,e,t,i){let r=n[t],s=e.data;if(Fx(r)){let o=r;o.resolving&&D_(A_(s[t]));let a=Pp(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?kn(o.injectImpl):null,u=Tm(n,i,$e.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Lx(t,s[t],e)}finally{l!==null&&kn(l),Pp(a),o.resolving=!1,Im()}}return r}function jx(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ks)?n[ks]:void 0;return typeof e=="number"?e>=0?e&Om:$x:e}function Np(n,e,t){let i=1<<n;return!!(t[e+(n>>Fm)]&i)}function Lp(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var Hi=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Hm(this._tNode,this._lView,e,ka(i),t)}};function $x(){return new Hi(ni(),on())}function ju(n){return Ba(()=>{let e=n.prototype.constructor,t=e[Ma]||au(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Ma]||au(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function au(n){return Kp(n)?()=>{let e=au(fn(n));return e&&e()}:Or(n)}function qx(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Ge]&2048&&!(o[Ge]&512);){let a=zm(s,o,t,i|$e.Self,Vn);if(a!==Vn)return a;let c=s.parent;if(!c){let l=o[hm];if(l){let u=l.get(t,Vn,i);if(u!==Vn)return u}c=Gm(o),o=o[Ks]}s=c}return r}function Gm(n){let e=n[qe],t=e.type;return t===2?e.declTNode:t===1?n[Tn]:null}function Xx(n){return typeof n=="function"}function Yx(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function Zx(n){return n.flat(Number.POSITIVE_INFINITY)}function $u(n,e){n.forEach(t=>Array.isArray(t)?$u(t,e):e(t))}function Wm(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ca(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Kx(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}var to=new tt("ENVIRONMENT_INITIALIZER"),jm=new tt("INJECTOR",-1),$m=new tt("INJECTOR_DEF_TYPES"),Aa=class{get(e,t=zs){if(t===zs){let i=new Error(`NullInjectorError: No provider for ${Jt(e)}!`);throw i.name="NullInjectorError",i}return t}};function $a(n){return{\u0275providers:n}}function Jx(...n){return{\u0275providers:qm(!0,n),\u0275fromNgModule:!0}}function qm(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return $u(e,o=>{let a=o;cu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Xm(r,s),t}function Xm(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];qu(r,s=>{e(s,i)})}}function cu(n,e,t,i){if(n=fn(n),!n)return!1;let r=null,s=Mp(n),o=!s&&zi(n);if(!s&&!o){let c=n.ngModule;if(s=Mp(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)cu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{$u(s.imports,u=>{cu(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&Xm(l,e)}if(!a){let l=Or(r)||(()=>new r);e({provide:r,useFactory:l,deps:Bn},r),e({provide:$m,useValue:r,multi:!0},r),e({provide:to,useValue:()=>et(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;qu(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function qu(n,e){for(let t of n)Jp(t)&&(t=t.\u0275providers),Array.isArray(t)?qu(t,e):e(t)}var Qx=lt({provide:String,useValue:lt});function Ym(n){return n!==null&&typeof n=="object"&&Qx in n}function eM(n){return!!(n&&n.useExisting)}function tM(n){return!!(n&&n.useFactory)}function lu(n){return typeof n=="function"}var qa=new tt("Set Injector scope."),ya={},nM={},$l;function Xu(){return $l===void 0&&($l=new Aa),$l}var pn=class{},Da=class extends pn{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,du(e,o=>this.processProvider(o)),this.records.set(jm,Dr(void 0,this)),r.has("environment")&&this.records.set(pn,Dr(void 0,this));let s=this.records.get(qa);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get($m,Bn,$e.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let t of this._ngOnDestroyHooks)t.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let t of e)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Cr(this),i=kn(void 0),r;try{return e()}finally{Cr(t),kn(i)}}get(e,t=zs,i=$e.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(_p))return e[_p](this);i=ka(i);let r,s=Cr(this),o=kn(void 0);try{if(!(i&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=cM(e)&&Ua(e);l&&this.injectableDefInScope(l)?c=Dr(uu(e),ya):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&$e.Self?Xu():this.parent;return t=i&$e.Optional&&t===zs?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ea]=a[Ea]||[]).unshift(Jt(e)),s)throw a;return z_(a,e,"R3InjectorError",this.source)}else throw a}finally{kn(o),Cr(s)}}resolveInjectorInitializers(){let e=Cr(this),t=kn(void 0),i;try{let r=this.get(to,Bn,$e.Self);for(let s of r)s()}finally{Cr(e),kn(t)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(Jt(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Re(205,!1)}processProvider(e){e=fn(e);let t=lu(e)?e:fn(e&&e.provide),i=rM(e);if(!lu(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Dr(void 0,ya,!0),r.factory=()=>eu(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}else{let r=this.records.get(t)}this.records.set(t,i)}hydrate(e,t){return t.value===ya&&(t.value=nM,t.value=t.factory()),typeof t.value=="object"&&t.value&&aM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}injectableDefInScope(e){if(!e.providedIn)return!1;let t=fn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function uu(n){let e=Ua(n),t=e!==null?e.factory:Or(n);if(t!==null)return t;if(n instanceof tt)throw new Re(204,!1);if(n instanceof Function)return iM(n);throw new Re(204,!1)}function iM(n){let e=n.length;if(e>0){let i=Kx(e,"?");throw new Re(204,!1)}let t=P_(n);return t!==null?()=>t.factory(n):()=>new n}function rM(n){if(Ym(n))return Dr(void 0,n.useValue);{let e=sM(n);return Dr(e,ya)}}function sM(n,e,t){let i;if(lu(n)){let r=fn(n);return Or(r)||uu(r)}else if(Ym(n))i=()=>fn(n.useValue);else if(tM(n))i=()=>n.useFactory(...eu(n.deps||[]));else if(eM(n))i=()=>et(fn(n.useExisting));else{let r=fn(n&&(n.useClass||n.provide));if(oM(n))i=()=>new r(...eu(n.deps));else return Or(r)||uu(r)}return i}function Dr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function oM(n){return!!n.deps}function aM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function cM(n){return typeof n=="function"||typeof n=="object"&&n instanceof tt}function du(n,e){for(let t of n)Array.isArray(t)?du(t,e):t&&Jp(t)?du(t.\u0275providers,e):e(t)}function Op(n,e=null,t=null,i){let r=Zm(n,e,t,i);return r.resolveInjectorInitializers(),r}function Zm(n,e=null,t=null,i,r=new Set){let s=[t||Bn,Jx(n)];return i=i||(typeof n=="object"?void 0:Jt(n)),new Da(s,e||Xu(),i||null,r)}var Br=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return Op({name:""},r,i,"");{let s=i.name??"";return Op({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=zs,e.NULL=new Aa,e.\u0275prov=Ve({token:e,providedIn:"any",factory:()=>et(jm)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var fu;function Km(n){fu=n}function lM(){if(fu!==void 0)return fu;if(typeof document<"u")return document;throw new Re(210,!1)}var Yu=new tt("AppId",{providedIn:"root",factory:()=>uM}),uM="ng",Zu=new tt("Platform Initializer"),Vr=new tt("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var Ku=new tt("CSP nonce",{providedIn:"root",factory:()=>lM().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Jm(n){return n instanceof Function?n():n}function Qm(n){return(n.flags&128)===128}var qi=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(qi||{});var eg=new Map,dM=0;function fM(){return dM++}function hM(n){eg.set(n[za],n)}function pM(n){eg.delete(n[za])}var Fp="__ngContext__";function Ur(n,e){Vi(e)?(n[Fp]=e[za],hM(e)):n[Fp]=e}var mM;function Ju(n,e){return mM(n,e)}function Qu(n){let e=n[wt];return Sn(e)?e[wt]:e}function tg(n){return ig(n[js])}function ng(n){return ig(n[wn])}function ig(n){for(;n!==null&&!Sn(n);)n=n[wn];return n}function Ir(n,e,t,i,r){if(i!=null){let s,o=!1;Sn(i)?s=i:Vi(i)&&(o=!0,i=i[ei]);let a=_i(i);n===0&&t!==null?r==null?ag(e,t,a):Ia(e,t,a,r||null,!0):n===1&&t!==null?Ia(e,t,a,r||null,!0):n===2?PM(e,a,o):n===3&&e.destroyNode(a),s!=null&&LM(e,n,s,t,r)}}function rg(n,e,t){return n.createElement(e,t)}function gM(n,e){let t=e[Gn];no(n,e,t,2,null,null),e[ei]=null,e[Tn]=null}function vM(n,e,t,i,r,s){i[ei]=r,i[Tn]=e,no(n,i,t,1,r,s)}function yM(n,e){no(n,e,e[Gn],2,null,null)}function _M(n){let e=n[js];if(!e)return ql(n[qe],n);for(;e;){let t=null;if(Vi(e))t=e[js];else{let i=e[sn];i&&(t=i)}if(!t){for(;e&&!e[wn]&&e!==n;)Vi(e)&&ql(e[qe],e),e=e[wt];e===null&&(e=n),Vi(e)&&ql(e[qe],e),t=e&&e[wn]}e=t}}function xM(n,e,t,i){let r=sn+i,s=t.length;i>0&&(t[r-1][wn]=e),i<s-sn?(e[wn]=t[r],Wm(t,sn+i,e)):(t.push(e),e[wn]=null),e[wt]=t;let o=e[Js];o!==null&&t!==o&&MM(o,e);let a=e[Hn];a!==null&&a.insertView(n),Mm(e),e[Ge]|=128}function MM(n,e){let t=n[Lr],r=e[wt][wt][Wn];e[Wn]!==r&&(n[mm]=!0),t===null?n[Lr]=[e]:t.push(e)}function sg(n,e){let t=n[Lr],i=t.indexOf(e),r=e[wt];t.splice(i,1)}function hu(n,e){if(n.length<=sn)return;let t=sn+e,i=n[t];if(i){let r=i[Js];r!==null&&r!==n&&sg(r,i),e>0&&(n[t-1][wn]=i[wn]);let s=Ca(n,sn+e);gM(i[qe],i);let o=s[Hn];o!==null&&o.detachView(s[qe]),i[wt]=null,i[wn]=null,i[Ge]&=-129}return i}function og(n,e){if(!(e[Ge]&256)){let t=e[Gn];e[Gi]&&zh(e[Gi]),t.destroyNode&&no(n,e,t,3,null,null),_M(e)}}function ql(n,e){if(!(e[Ge]&256)){e[Ge]&=-129,e[Ge]|=256,bM(n,e),EM(n,e),e[qe].type===1&&e[Gn].destroy();let t=e[Js];if(t!==null&&Sn(e[wt])){t!==e[wt]&&sg(t,e);let i=e[Hn];i!==null&&i.detachView(n)}pM(e)}}function EM(n,e){let t=n.cleanup,i=e[ba];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[ba]=null);let r=e[Hs];if(r!==null){e[Hs]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function bM(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof $s)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];vi(4,a,c);try{c.call(a)}finally{vi(5,a,c)}}else{vi(4,r,s);try{s.call(r)}finally{vi(5,r,s)}}}}}function wM(n,e,t){return SM(n,e.parent,t)}function SM(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[ei];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===zn.None||s===zn.Emulated)return null}return ti(i,t)}}function Ia(n,e,t,i,r){n.insertBefore(e,t,i,r)}function ag(n,e,t){n.appendChild(e,t)}function Up(n,e,t,i,r){i!==null?Ia(n,e,t,i,r):ag(n,e,t)}function TM(n,e,t,i){n.removeChild(e,t,i)}function ed(n,e){return n.parentNode(e)}function CM(n,e){return n.nextSibling(e)}function AM(n,e,t){return IM(n,e,t)}function DM(n,e,t){return n.type&40?ti(n,t):null}var IM=DM,kp;function RM(n,e,t,i){let r=wM(n,i,e),s=e[Gn],o=i.parent||e[Tn],a=AM(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Up(s,r,t[c],a,!1);else Up(s,r,t,a,!1);kp!==void 0&&kp(s,i,e,t,r)}function _a(n,e){if(e!==null){let t=e.type;if(t&3)return ti(e,n);if(t&4)return pu(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return _a(n,i);{let r=n[e.index];return Sn(r)?pu(-1,r):_i(r)}}else{if(t&32)return Ju(e,n)()||_i(n[e.index]);{let i=cg(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Qu(n[Wn]);return _a(r,i)}else return _a(n,e.next)}}}return null}function cg(n,e){if(e!==null){let i=n[Wn][Tn],r=e.projection;return i.projection[r]}return null}function pu(n,e){let t=sn+n+1;if(t<e.length){let i=e[t],r=i[qe].firstChild;if(r!==null)return _a(i,r)}return e[Wi]}function PM(n,e,t){let i=ed(n,e);i&&TM(n,i,e,t)}function td(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&Ur(_i(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)td(n,e,t.child,i,r,s,!1),Ir(e,n,r,a,s);else if(c&32){let l=Ju(t,i),u;for(;u=l();)Ir(e,n,r,u,s);Ir(e,n,r,a,s)}else c&16?NM(n,e,i,t,r,s):Ir(e,n,r,a,s);t=o?t.projectionNext:t.next}}function no(n,e,t,i,r,s){td(t,i,n.firstChild,e,r,s,!1)}function NM(n,e,t,i,r,s){let o=t[Wn],c=o[Tn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ir(e,n,r,u,s)}else{let l=c,u=o[wt];Qm(i)&&(l.flags|=128),td(n,e,l,u,r,s,!0)}}function LM(n,e,t,i,r){let s=t[Wi],o=_i(t);s!==o&&Ir(e,n,i,s,r);for(let a=sn;a<t.length;a++){let c=t[a];no(c[qe],c,n,e,i,s)}}function OM(n,e,t){n.setAttribute(e,"style",t)}function lg(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function ug(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&tu(n,e,i),r!==null&&lg(n,e,r),s!==null&&OM(n,e,s)}var FM="h",UM="b";var kM=(n,e,t)=>null;function nd(n,e,t=!1){return kM(n,e,t)}var mu=class{},Ra=class{};function BM(n){let e=Error(`No component factory found for ${Jt(n)}.`);return e[VM]=n,e}var VM="ngComponent";var gu=class{resolveComponentFactory(e){throw BM(e)}},Xa=(()=>{let e=class e{};e.NULL=new gu;let n=e;return n})();function HM(){return Hr(ni(),on())}function Hr(n,e){return new Xi(ti(n,e))}var Xi=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=HM;let n=e;return n})();function zM(n){return n instanceof Xi?n.nativeElement:n}var qs=class{};var GM=(()=>{let e=class e{};e.\u0275prov=Ve({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),kr=class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}},WM=new kr("17.0.2"),Xl={};function Pa(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(_i(s)),Sn(s)&&jM(s,i);let o=t.type;if(o&8)Pa(n,e,t.child,i);else if(o&32){let a=Ju(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=cg(e,t);if(Array.isArray(a))i.push(...a);else{let c=Qu(e[Wn]);Pa(c[qe],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function jM(n,e){for(let t=sn;t<n.length;t++){let i=n[t],r=i[qe].firstChild;r!==null&&Pa(i[qe],i,r,e)}n[Wi]!==n[ei]&&e.push(n[Wi])}var dg=[];function $M(n){return n[Gi]??qM(n)}function qM(n){let e=dg.pop()??Object.create(YM);return e.lView=n,e}function XM(n){n.lView[Gi]!==n&&(n.lView=null,dg.push(n))}var YM=Et(Ee({},Bh),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{Wa(n.lView)},consumerOnSignalRead(){this.lView[Gi]=this}}),ZM="ngOriginalError";function Yl(n){return n[ZM]}var Qn=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&Yl(e);for(;t&&Yl(t);)t=Yl(t);return t||null}};var fg=!1,KM=new tt("",{providedIn:"root",factory:()=>fg});var hg={};function JM(n,e,t,i){if(!i)if((e[Ge]&3)===3){let s=n.preOrderCheckHooks;s!==null&&ma(e,s,t)}else{let s=n.preOrderHooks;s!==null&&ga(e,s,0,t)}ji(t)}function id(n,e=$e.Default){let t=on();if(t===null)return et(n,e);let i=ni();return Hm(i,t,fn(n),e)}function QM(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)ji(~r);else{let s=r,o=t[++i],a=t[++i];Cx(o,s);let c=e[s];a(2,c)}}}finally{ji(-1)}}function Ya(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ei]=r,d[Ge]=i|4|128|8,(l!==null||n&&n[Ge]&2048)&&(d[Ge]|=2048),xm(d),d[wt]=d[Ks]=n,d[yi]=t,d[Ws]=o||n&&n[Ws],d[Gn]=a||n&&n[Gn],d[Pr]=c||n&&n[Pr]||null,d[Tn]=s,d[za]=fM(),d[nu]=u,d[hm]=l,d[Wn]=e.type==2?n[Wn]:d,d}function pg(n,e,t,i,r){let s=n.data[e];if(s===null)s=eE(n,e,t,i,r),Tx()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=bx();s.injectorIndex=o===null?-1:o.injectorIndex}return Vu(s,!0),s}function eE(n,e,t,i,r){let s=bm(),o=wm(),a=o?s:s&&s.parent,c=n.data[e]=cE(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function mg(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function gg(n,e,t,i,r){let s=Ix(),o=i&2;try{ji(-1),o&&e.length>Nr&&JM(n,e,Nr,!1),vi(o?2:0,r),t(i,r)}finally{ji(s),vi(o?3:1,r)}}function vg(n,e,t){if(gm(e)){let i=nn(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];a.contentQueries&&a.contentQueries(1,t[o],o)}}finally{nn(i)}}}function tE(n,e,t){Em()&&(hE(n,e,t,ti(t,e)),(t.flags&64)===64&&Mg(n,e,t))}function nE(n,e,t=ti){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function yg(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=_g(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function _g(n,e,t,i,r,s,o,a,c,l,u){let d=Nr+i,f=d+r,p=iE(d,f),g=typeof l=="function"?l():l;return p[qe]={type:n,blueprint:p,template:t,queries:null,viewQuery:a,declTNode:e,data:p.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function iE(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:hg);return t}function rE(n,e,t,i){let s=i.get(KM,fg)||t===zn.ShadowDom,o=n.selectRootElement(e,s);return sE(o),o}function sE(n){oE(n)}var oE=n=>null;function aE(n,e,t,i){let r=wE(e);r.push(t),n.firstCreatePass&&SE(n).push(i,r.length-1)}function cE(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return xx()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Bp(n,e,t,i){for(let r in n)if(n.hasOwnProperty(r)){t=t===null?{}:t;let s=n[r];i===null?Vp(t,e,r,s):i.hasOwnProperty(r)&&Vp(t,e,i[r],s)}return t}function Vp(n,e,t,i){n.hasOwnProperty(t)?n[t].push(e,i):n[t]=[e,i]}function lE(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,p=f?f.inputs:null,g=f?f.outputs:null;c=Bp(d.inputs,u,c,p),l=Bp(d.outputs,u,l,g);let v=c!==null&&o!==null&&!om(e)?EE(c,u,o):null;a.push(v)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function uE(n,e,t,i){if(Em()){let r=i===null?null:{"":-1},s=mE(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&xg(n,e,t,o,r,a),r&&gE(t,i,r)}t.mergedAttrs=Fu(t.mergedAttrs,t.attrs)}function xg(n,e,t,i,r,s){for(let l=0;l<i.length;l++)Gx(Um(t,e),n,i[l].type);yE(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=mg(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=Fu(t.mergedAttrs,u.hostAttrs),_E(n,t,e,c,u),vE(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}lE(n,t,s)}function dE(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;fE(o)!=a&&o.push(a),o.push(t,i,s)}}function fE(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function hE(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;ku(t)&&xE(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Um(t,e),Ur(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=Fr(e,n,a,t);if(Ur(l,e),o!==null&&ME(e,a-r,l,c,t,o),Qs(c)){let u=eo(t.index,e);u[yi]=Fr(e,n,a,t)}}}function Mg(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Ax();try{ji(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];su(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&pE(c,l)}}finally{ji(-1),su(o)}}function pE(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function mE(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(Z_(e,o.selectors,!1))if(i||(i=[]),Qs(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;vu(n,e,c)}else i.unshift(o),vu(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function vu(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function gE(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Re(-301,!1);i.push(e[r],s)}}}function vE(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Qs(e)&&(t[""]=n)}}function yE(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function _E(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Or(r.type,!0)),o=new $s(s,Qs(r),id);n.blueprint[i]=o,t[i]=o,dE(n,e,i,mg(n,t,r.hostVars,hg),r)}function xE(n,e,t){let i=ti(e,n),r=yg(t),s=n[Ws].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=rd(n,Ya(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function ME(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++];Eg(i,t,c,l,u)}}function Eg(n,e,t,i,r){let s=nn(null);try{let o=n.inputTransforms;o!==null&&o.hasOwnProperty(i)&&(r=o[i].call(e,r)),n.setInput!==null?n.setInput(e,r,t,i):e[i]=r}finally{nn(s)}}function EE(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=2)if(o[a]===e){i.push(s,o[a+1],t[r+1]);break}}r+=2}return i}function bE(n,e,t,i){return[n,!0,!1,e,null,i,!1,t,null,null,null]}function bg(n,e){let t=n.contentQueries;if(t!==null){let i=nn(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];Hu(s),a.contentQueries(2,e[o],o)}}}finally{nn(i)}}}function rd(n,e){return n[js]?n[Ap][wn]=e:n[js]=e,n[Ap]=e,e}function yu(n,e,t){Hu(0);let i=nn(null);try{e(n,t)}finally{nn(i)}}function wE(n){return n[ba]||(n[ba]=[])}function SE(n){return n.cleanup||(n.cleanup=[])}function TE(n,e){let t=n[Pr],i=t?t.get(Qn,null):null;i&&i.handleError(e)}function wg(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=e[o],l=n.data[o];Eg(l,c,i,a,r)}}var CE=100;function AE(n,e,t,i=!0){let r=e[Ws],s=r.rendererFactory,o=r.afterRenderEventManager,a=!1;a||(s.begin?.(),o?.begin());try{Sg(n,e,n.template,t),DE(e)}catch(c){throw i&&TE(e,c),c}finally{a||(s.end?.(),r.inlineEffectRunner?.flush(),o?.end())}}function DE(n){let e=0;for(;n[Ge]&9216||n[Gi]?.dirty;){if(e===CE)throw new Re(103,!1);e++,Ag(n,1)}}function Sg(n,e,t,i){let r=e[Ge];if((r&256)===256)return;let s=!1;!s&&e[Ws].inlineEffectRunner?.flush(),zu(e);let o=null,a=null;!s&&IE(n)&&(a=$M(e),o=Vh(a));try{xm(e),Sx(n.bindingStartIndex),t!==null&&gg(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&ma(e,d,null)}else{let d=n.preOrderHooks;d!==null&&ga(e,d,0,null),Wl(e,0)}if(RE(e),Tg(e,0),n.contentQueries!==null&&bg(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&ma(e,d)}else{let d=n.contentHooks;d!==null&&ga(e,d,1),Wl(e,1)}QM(n,e);let l=n.components;l!==null&&Dg(e,l,0);let u=n.viewQuery;if(u!==null&&yu(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&ma(e,d)}else{let d=n.viewHooks;d!==null&&ga(e,d,2),Wl(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[Gl]){for(let d of e[Gl])d();e[Gl]=null}s||(e[Ge]&=-73)}catch(c){throw Wa(e),c}finally{a!==null&&(Hh(a,o),XM(a)),Gu()}}function IE(n){return n.type!==2}function Tg(n,e){for(let t=tg(n);t!==null;t=ng(t)){t[iu]=!1;for(let i=sn;i<t.length;i++){let r=t[i];Cg(r,e)}}}function RE(n){for(let e=tg(n);e!==null;e=ng(e)){if(!e[mm])continue;let t=e[Lr];for(let i=0;i<t.length;i++){let r=t[i],s=r[wt];mx(r)}}}function PE(n,e,t){let i=eo(e,n);Cg(i,t)}function Cg(n,e){Bu(n)&&Ag(n,e)}function Ag(n,e){let i=n[qe],r=n[Ge],s=n[Gi],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Ml(s)),s&&(s.dirty=!1),n[Ge]&=-9217,o)Sg(i,n,i.template,n[yi]);else if(r&8192){Tg(n,1);let a=i.components;a!==null&&Dg(n,a,1)}}function Dg(n,e,t){for(let i=0;i<e.length;i++)PE(n,e[i],t)}function Ig(n){for(;n;){n[Ge]|=64;let e=Qu(n);if(ox(n)&&!e)return n;n=e}return null}var $i=class{get rootNodes(){let e=this._lView,t=e[qe];return Pa(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[yi]}set context(e){this._lView[yi]=e}get destroyed(){return(this._lView[Ge]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[wt];if(Sn(e)){let t=e[wa],i=t?t.indexOf(this):-1;i>-1&&(hu(e,i),Ca(t,i))}this._attachedToViewContainer=!1}og(this._lView[qe],this._lView)}onDestroy(e){gx(this._lView,e)}markForCheck(){Ig(this._cdRefInjectingView||this._lView)}detach(){this._lView[Ge]&=-129}reattach(){Mm(this._lView),this._lView[Ge]|=128}detectChanges(){AE(this._lView[qe],this._lView,this.context,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Re(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,yM(this._lView[qe],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Re(902,!1);this._appRef=e}},Za=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=NE;let n=e;return n})();function NE(n){return LE(ni(),on(),(n&16)===16)}function LE(n,e,t){if(ku(n)&&!t){let i=eo(n.index,e);return new $i(i,i)}else if(n.type&47){let i=e[Wn];return new $i(i,e)}return null}var Hp=new Set;function Rg(n){Hp.has(n)||(Hp.add(n),performance?.mark?.("mark_use_counter",{detail:{feature:n}}))}var _u=class extends jt{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=Zl(s),r&&(r=Zl(r)),o&&(o=Zl(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Rt&&e.add(a),a}};function Zl(n){return e=>{setTimeout(n,void 0,e)}}var hn=_u;function zp(...n){}function OE(){let n=typeof Bs.requestAnimationFrame=="function",e=Bs[n?"requestAnimationFrame":"setTimeout"],t=Bs[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var bt=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new hn(!1),this.onMicrotaskEmpty=new hn(!1),this.onStable=new hn(!1),this.onError=new hn(!1),typeof Zone>"u")throw new Re(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=OE().nativeRequestAnimationFrame,kE(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Re(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Re(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,FE,zp,zp);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},FE={};function sd(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function UE(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(Bs,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,xu(n),n.isCheckStableRunning=!0,sd(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),xu(n))}function kE(n){let e=()=>{UE(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(BE(a))return t.invokeTask(r,s,o,a);try{return Gp(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Wp(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Gp(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Wp(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,xu(n),sd(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function xu(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Gp(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Wp(n){n._nesting--,sd(n)}var Pg=new tt("",{providedIn:"root",factory:Ng});function Ng(){let n=ge(bt),e=!0,t=new it(r=>{e=n.isStable&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks,n.runOutsideAngular(()=>{r.next(e),r.complete()})}),i=new it(r=>{let s;n.runOutsideAngular(()=>{s=n.onStable.subscribe(()=>{bt.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!n.hasPendingMacrotasks&&!n.hasPendingMicrotasks&&(e=!0,r.next(!0))})})});let o=n.onUnstable.subscribe(()=>{bt.assertInAngularZone(),e&&(e=!1,n.runOutsideAngular(()=>{r.next(!1)}))});return()=>{s.unsubscribe(),o.unsubscribe()}});return Ol(t,i.pipe(pa()))}function BE(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}var VE=(()=>{let e=class e{constructor(){this.renderDepth=0,this.handler=null,this.internalCallbacks=[]}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){if(this.renderDepth--,this.renderDepth===0){for(let i of this.internalCallbacks)i();this.internalCallbacks.length=0,this.handler?.execute()}}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Ve({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function HE(n,e){let t=eo(e,n),i=t[qe];zE(i,t);let r=t[ei];r!==null&&t[nu]===null&&(t[nu]=nd(r,t[Pr])),od(i,t,t[yi])}function zE(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function od(n,e,t){zu(e);try{let i=n.viewQuery;i!==null&&yu(1,i,t);let r=n.template;r!==null&&gg(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),n.staticContentQueries&&bg(n,e),n.staticViewQueries&&yu(2,n.viewQuery,t);let s=n.components;s!==null&&GE(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Ge]&=-5,Gu()}}function GE(n,e){for(let t=0;t<e.length;t++)HE(n,e[t])}function Mu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=yp(r,a);else if(s==2){let c=a,l=e[++o];i=yp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Na=class extends Xa{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=zi(e);return new Xs(t,this.ngModule)}};function jp(n){let e=[];for(let t in n)if(n.hasOwnProperty(t)){let i=n[t];e.push({propName:i,templateName:t})}return e}function WE(n){let e=n.toLowerCase();return e==="svg"?ux:e==="math"?dx:null}var Eu=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=ka(i);let r=this.injector.get(e,Xl,i);return r!==Xl||t===Xl?r:this.parentInjector.get(e,t,i)}},Xs=class extends Ra{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=jp(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return jp(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=ex(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){r=r||this.ngModule;let s=r instanceof pn?r:r?.injector;s&&this.componentDef.getStandaloneInjector!==null&&(s=this.componentDef.getStandaloneInjector(s)||s);let o=s?new Eu(e,s):e,a=o.get(qs,null);if(a===null)throw new Re(407,!1);let c=o.get(GM,null),l=o.get(VE,null),u={rendererFactory:a,sanitizer:c,inlineEffectRunner:null,afterRenderEventManager:l},d=a.createRenderer(null,this.componentDef),f=this.componentDef.selectors[0][0]||"div",p=i?rE(d,i,this.componentDef.encapsulation,o):rg(d,f,WE(f)),g=4608,v=this.componentDef.onPush?576:528,m=this.componentDef.signals?g:v,h=null;p!==null&&(h=nd(p,o,!0));let C=_g(0,null,null,1,0,null,null,null,null,null,null),M=Ya(null,C,null,m,null,null,u,d,o,null,h);zu(M);let b,S;try{let I=this.componentDef,T,G=null;I.findHostDirectiveDefs?(T=[],G=new Map,I.findHostDirectiveDefs(I,T,G),T.push(I)):T=[I];let x=jE(M,p),w=$E(x,p,I,T,M,u,d);S=fx(C,Nr),p&&YE(d,I,p,i),t!==void 0&&ZE(S,this.ngContentSelectors,t),b=XE(w,I,T,G,M,[KE]),od(C,M,null)}finally{Gu()}return new bu(this.componentType,b,Hr(S,M),M,S)}},bu=class extends mu{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new $i(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;wg(s[qe],s,r,e,t),this.previousInputValues.set(e,t);let o=eo(this._tNode.index,s);Ig(o)}}get injector(){return new Hi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function jE(n,e){let t=n[qe],i=Nr;return n[i]=e,pg(t,i,2,"#host",null)}function $E(n,e,t,i,r,s,o){let a=r[qe];qE(i,n,e,o);let c=null;e!==null&&(c=nd(e,r[Pr]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Ya(r,yg(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&vu(a,n,i.length-1),rd(r,d),r[n.index]=d}function qE(n,e,t,i){for(let r of n)e.mergedAttrs=Fu(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Mu(e,e.mergedAttrs,!0),t!==null&&ug(i,t,e))}function XE(n,e,t,i,r,s){let o=ni(),a=r[qe],c=ti(o,r);xg(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,f=Fr(r,a,d,o);Ur(f,r)}Mg(a,r,o),c&&Ur(c,r);let l=Fr(r,a,o.directiveStart+o.componentOffset,o);if(n[yi]=r[yi]=l,s!==null)for(let u of s)u(l,e);return vg(a,o,n),l}function YE(n,e,t,i){if(i)tu(n,t,["ng-version",WM.full]);else{let{attrs:r,classes:s}=tx(e.selectors[0]);r&&tu(n,t,r),s&&s.length>0&&lg(n,t,s.join(" "))}}function ZE(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function KE(){let n=ni();Pm(on()[qe],n)}function $p(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";wg(n,t,s[o],o,i)}var E2=new RegExp(`^(\\d+)*(${UM}|${FM})*(.*)`);var JE=(n,e)=>null;function qp(n,e){return JE(n,e)}function QE(n,e,t,i){let r=e.tView,o=n[Ge]&4096?4096:16,a=Ya(n,r,t,o,null,e,null,null,null,i?.injector??null,i?.dehydratedView??null),c=n[e.index];a[Js]=c;let l=n[Hn];return l!==null&&(a[Hn]=l.createEmbeddedView(r)),od(r,a,t),a}function Xp(n,e){return!e||Qm(n)}function eb(n,e,t,i=!0){let r=e[qe];if(xM(r,e,n,t),i){let s=pu(t,n),o=e[Gn],a=ed(o,n[Wi]);a!==null&&vM(r,n[Tn],o,e,a,s)}}var zr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=tb;let n=e;return n})();function tb(){let n=ni();return Og(n,on())}var nb=zr,Lg=class extends nb{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Hr(this._hostTNode,this._hostLView)}get injector(){return new Hi(this._hostTNode,this._hostLView)}get parentInjector(){let e=Wu(this._hostTNode,this._hostLView);if(Lm(e)){let t=Ta(e,this._hostLView),i=Sa(e),r=t[qe].data[i+8];return new Hi(r,t)}else return new Hi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Yp(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-sn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=qp(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Xp(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!Xx(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new Xs(zi(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let v=(o?l:this.parentInjector).get(pn,null);v&&(s=v)}let u=zi(c.componentType??{}),d=qp(this._lContainer,u?.id??null),f=d?.firstChild??null,p=c.create(l,r,f,s);return this.insertImpl(p.hostView,a,Xp(this._hostTNode,d)),p}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(px(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[wt],l=new Lg(c,c[Tn],c[wt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return eb(o,r,s,i),e.attachToViewContainerRef(),Wm(Kl(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Yp(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=hu(this._lContainer,t);i&&(Ca(Kl(this._lContainer),t),og(i[qe],i))}detach(e){let t=this._adjustIndex(e,-1),i=hu(this._lContainer,t);return i&&Ca(Kl(this._lContainer),t)!=null?new $i(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Yp(n){return n[wa]}function Kl(n){return n[wa]||(n[wa]=[])}function Og(n,e){let t,i=e[n.index];return Sn(i)?t=i:(t=bE(i,e,null,n),e[n.index]=t,rd(e,t)),rb(t,e,n,i),new Lg(t,n,e)}function ib(n,e){let t=n[Gn],i=t.createComment(""),r=ti(e,n),s=ed(t,r);return Ia(t,s,i,CM(t,r),!1),i}var rb=sb;function sb(n,e,t,i){if(n[Wi])return;let r;t.type&8?r=_i(i):r=ib(e,t),n[Wi]=r}function ob(n,e,t,i,r,s){let o=e.consts,a=Ip(o,r),c=pg(e,n,2,i,a);return uE(e,t,c,Ip(o,s)),c.attrs!==null&&Mu(c,c.attrs,!1),c.mergedAttrs!==null&&Mu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function Fg(n,e,t,i){let r=on(),s=ja(),o=Nr+n,a=r[Gn],c=s.firstCreatePass?ob(o,s,r,e,t,i):s.data[o],l=ab(s,r,c,a,e,n);r[o]=l;let u=sx(c);return Vu(c,!0),ug(a,l,c),(c.flags&32)!==32&&Px()&&RM(s,r,l,c),vx()===0&&Ur(l,r),yx(),u&&(tE(s,r,c),vg(s,c,r)),i!==null&&nE(r,c),Fg}function Ug(){let n=ni();wm()?wx():(n=n.parent,Vu(n,!1));let e=n;Mx(e)&&Ex(),_x();let t=ja();return t.firstCreatePass&&(Pm(t,n),gm(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&Ux(e)&&$p(t,e,on(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&kx(e)&&$p(t,e,on(),e.stylesWithoutHost,!1),Ug}function io(n,e,t,i){return Fg(n,e,t,i),Ug(),io}var ab=(n,e,t,i,r,s)=>(Nx(!0),rg(i,r,Rx()));var La="en-US";var cb=La;function lb(n){I_(n,"Expected localeId to be defined"),typeof n=="string"&&(cb=n.toLowerCase().replace(/_/g,"-"))}function ro(n){return!!n&&typeof n.then=="function"}function kg(n){return!!n&&typeof n.subscribe=="function"}var xi=class{},Ys=class{};var wu=class extends xi{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Na(this);let r=um(e);this._bootstrapComponents=Jm(r.bootstrap),this._r3Injector=Zm(e,t,[{provide:xi,useValue:this},{provide:Xa,useValue:this.componentFactoryResolver},...i],Jt(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Su=class extends Ys{constructor(e){super(),this.moduleType=e}create(e){return new wu(this.moduleType,e,[])}};var Oa=class extends xi{constructor(e){super(),this.componentFactoryResolver=new Na(this),this.instance=null;let t=new Da([...e.providers,{provide:xi,useValue:this},{provide:Xa,useValue:this.componentFactoryResolver}],e.parent||Xu(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function ad(n,e,t=null){return new Oa({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var ub=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=qm(!1,i.type),s=r.length>0?ad([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Ve({token:e,providedIn:"environment",factory:()=>new e(et(pn))});let n=e;return n})();function Ka(n){Rg("NgStandalone"),n.getStandaloneInjector=e=>e.get(ub).getOrCreateStandaloneInjector(n)}function db(){return this._results[Symbol.iterator]()}var Tu=class n{get changes(){return this._changes||(this._changes=new hn)}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;let t=n.prototype;t[Symbol.iterator]||(t[Symbol.iterator]=db)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=Zx(e);(this._changesDetected=!Yx(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}},Zs=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=pb;let n=e;return n})(),fb=Zs,hb=class extends fb{constructor(e,t,i){super(),this._declarationLView=e,this._declarationTContainer=t,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,t){return this.createEmbeddedViewImpl(e,t)}createEmbeddedViewImpl(e,t,i){let r=QE(this._declarationLView,this._declarationTContainer,e,{injector:t,dehydratedView:i});return new $i(r)}};function pb(){return cd(ni(),on())}function cd(n,e){return n.type&4?new hb(e,n,Hr(n,e)):null}var Cu=class n{constructor(e){this.queryList=e,this.matches=null}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Au=class n{constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)Hg(e,t).matches!==null&&this.queries[t].setDirty()}},Du=class{constructor(e,t,i=null){this.predicate=e,this.flags=t,this.read=i}},Iu=class n{constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Ru=class n{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,mb(t,s)),this.matchTNodeWithReadOption(e,t,va(t,e,s,!1,!1))}else i===Zs?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,va(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Xi||r===zr||r===Zs&&t.type&4)this.addMatch(t.index,-2);else{let s=va(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function mb(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function gb(n,e){return n.type&11?Hr(n,e):n.type&4?cd(n,e):null}function vb(n,e,t,i){return t===-1?gb(e,n):t===-2?yb(n,e,i):Fr(n,n[qe],t,e)}function yb(n,e,t){if(t===Xi)return Hr(e,n);if(t===Zs)return cd(e,n);if(t===zr)return Og(e,n)}function Bg(n,e,t,i){let r=e[Hn].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(vb(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Pu(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=Bg(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=sn;d<u.length;d++){let f=u[d];f[Js]===f[wt]&&Pu(f[qe],f,l,i)}if(u[Lr]!==null){let d=u[Lr];for(let f=0;f<d.length;f++){let p=d[f];Pu(p[qe],p,l,i)}}}}}return i}function ld(n){let e=on(),t=ja(),i=Sm();Hu(i+1);let r=Hg(t,i);if(n.dirty&&hx(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=r.crossesNgTemplate?Pu(t,e,i,[]):Bg(t,e,r,i);n.reset(s,zM),n.notifyOnChanges()}return!0}return!1}function Vg(n,e,t){let i=ja();i.firstCreatePass&&(Mb(i,new Du(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),xb(i,on(),e)}function ud(){return _b(on(),Sm())}function _b(n,e){return n[Hn].queries[e].queryList}function xb(n,e,t){let i=new Tu((t&4)===4);aE(n,e,i,i.destroy),e[Hn]===null&&(e[Hn]=new Au),e[Hn].queries.push(new Cu(i))}function Mb(n,e,t){n.queries===null&&(n.queries=new Iu),n.queries.track(new Ru(e,t))}function Hg(n,e){return n.queries.getByIndex(e)}var zg=new tt("Application Initializer"),Gg=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=ge(zg,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(ro(o))i.push(o);else if(kg(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Ja=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function Eb(){return typeof $localize<"u"&&$localize.locale||La}var dd=new tt("LocaleId",{providedIn:"root",factory:()=>ge(dd,$e.Optional|$e.SkipSelf)||Eb()});var fd=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Lt(!1)}add(){this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Nu=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},hd=(()=>{let e=class e{compileModuleSync(i){return new Su(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=um(i),o=Jm(s.declarations).reduce((a,c)=>{let l=zi(c);return l&&a.push(new Xs(l)),a},[]);return new Nu(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Wg=new tt("");var xa=null;var jg=new tt("PlatformDestroyListeners"),pd=new tt("appBootstrapListener");function bb(){Gh(()=>{throw new Re(600,!1)})}function wb(n){return n.isBoundToModule}function Sb(n=[]){if(xa)return xa;let e=Cb(n);return xa=e,bb(),Tb(e),e}function Tb(n){n.get(Zu,null)?.forEach(t=>t())}function $g(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=Sb(i),s=[Nb(),...t||[]],a=new Oa({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1}).injector,c=a.get(bt);return c.run(()=>{a.resolveInjectorInitializers();let l=a.get(Qn,null),u;c.runOutsideAngular(()=>{u=c.onError.subscribe({next:p=>{l.handleError(p)}})});let d=()=>a.destroy(),f=r.get(jg);return f.add(d),a.onDestroy(()=>{u.unsubscribe(),f.delete(d)}),Db(l,c,()=>{let p=a.get(Gg);return p.runInitializers(),p.donePromise.then(()=>{let g=a.get(dd,La);lb(g||La);let v=a.get(so);return e!==void 0&&v.bootstrap(e),v})})})}catch(e){return Promise.reject(e)}}function Cb(n=[],e){return Br.create({name:e,providers:[{provide:qa,useValue:"platform"},{provide:jg,useValue:new Set([()=>xa=null])},...n]})}function Ab(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}function Db(n,e,t){try{let i=t();return ro(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var so=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=ge(qg),this.zoneIsStable=ge(Pg),this.componentTypes=[],this.components=[],this.isStable=ge(fd).hasPendingTasks.pipe(rn(i=>i?Ie(!1):this.zoneIsStable),Ul(),pa()),this._injector=ge(pn)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof Ra;if(!this._injector.get(Gg).done){let g="Cannot bootstrap as there are still asynchronous initializers running."+(!s&&lm(i)?"":" Bootstrap components in the `ngDoBootstrap` method of the root module.");throw new Re(405,!1)}let a;s?a=i:a=this._injector.get(Xa).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=wb(a)?void 0:this._injector.get(xi),l=r||a.selector,u=a.create(Br.NULL,[],l,c),d=u.location.nativeElement,f=u.injector.get(Wg,null);return f?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Jl(this.components,u),f?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){if(this._runningTick)throw new Re(101,!1);try{this._runningTick=!0;for(let i of this._views)i.detectChanges()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Jl(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(pd,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Jl(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new Re(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Jl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var qg=new tt("",{providedIn:"root",factory:()=>ge(Qn).handleError.bind(void 0)});function Ib(){let n=ge(bt),e=ge(Qn);return t=>n.runOutsideAngular(()=>e.handleError(t))}var Rb=(()=>{let e=class e{constructor(){this.zone=ge(bt),this.applicationRef=ge(so)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Pb(n){return[{provide:bt,useFactory:n},{provide:to,multi:!0,useFactory:()=>{let e=ge(Rb,{optional:!0});return()=>e.initialize()}},{provide:qg,useFactory:Ib},{provide:Pg,useFactory:Ng}]}function Nb(n){let e=Pb(()=>new bt(Ab(n)));return $a([[],e])}var md=null;function Gr(){return md}function Kg(n){md||(md=n)}var ec=class{},an=new tt("DocumentToken"),Jg=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>ge(kb))(),providedIn:"platform"});let n=e;return n})();var kb=(()=>{let e=class e extends Jg{constructor(){super(),this._doc=ge(an),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Gr().getBaseHref(this._doc)}onPopState(i){let r=Gr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=Gr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>new e)(),providedIn:"platform"});let n=e;return n})();function Qg(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Xg(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function Yi(n){return n&&n[0]!=="?"?"?"+n:n}var nc=(()=>{let e=class e{historyGo(i){throw new Error("Not implemented")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>ge(ev))(),providedIn:"root"});let n=e;return n})(),Bb=new tt("appBaseHref"),ev=(()=>{let e=class e extends nc{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??ge(an).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Qg(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+Yi(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+Yi(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+Yi(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(et(Jg),et(Bb,8))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var oo=(()=>{let e=class e{constructor(i){this._subject=new hn,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=zb(Xg(Yg(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+Yi(r))}normalize(i){return e.stripTrailingSlash(Hb(this._basePath,Yg(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Yi(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+Yi(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)})),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=Yi,e.joinWithSlash=Qg,e.stripTrailingSlash=Xg,e.\u0275fac=function(r){return new(r||e)(et(nc))},e.\u0275prov=Ve({token:e,factory:()=>Vb(),providedIn:"root"});let n=e;return n})();function Vb(){return new oo(et(nc))}function Hb(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Yg(n){return n.replace(/\/index.html$/,"")}function zb(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function tv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var gd=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Ha({type:e}),e.\u0275inj=Fa({});let n=e;return n})(),nv="browser",Gb="server";function vd(n){return n===Gb}var tc=class{};var xd=class extends ec{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Md=class n extends xd{static makeCurrent(){Kg(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=jb();return t==null?null:$b(t)}resetBaseElement(){ao=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return tv(document.cookie,e)}},ao=null;function jb(){return ao=ao||document.querySelector("base"),ao?ao.getAttribute("href"):null}var ic;function $b(n){ic=ic||document.createElement("a"),ic.setAttribute("href",n);let e=ic.pathname;return e.charAt(0)==="/"?e:`/${e}`}var qb=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac});let n=e;return n})(),Ed=new tt("EventManagerPlugins"),ov=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new Re(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(et(Ed),et(bt))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac});let n=e;return n})(),rc=class{constructor(e){this._doc=e}},yd="ng-app-id",av=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=vd(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${yd}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(yd),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(yd,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(et(an),et(Yu),et(Ku,8),et(Vr))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac});let n=e;return n})(),_d={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},wd=/%COMP%/g,cv="%COMP%",Xb=`_nghost-${cv}`,Yb=`_ngcontent-${cv}`,Zb=!0,Kb=new tt("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>Zb});function Jb(n){return Yb.replace(wd,n)}function Qb(n){return Xb.replace(wd,n)}function lv(n,e){return e.map(t=>t.replace(wd,n))}var iv=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=vd(c),this.defaultRenderer=new co(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===zn.ShadowDom&&(r=Et(Ee({},r),{encapsulation:zn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof sc?s.applyToHost(i):s instanceof lo&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer;switch(r.encapsulation){case zn.Emulated:o=new sc(l,u,r,this.appId,d,a,c,f);break;case zn.ShadowDom:return new bd(l,u,i,r,a,c,this.nonce,f);default:o=new lo(l,u,r,d,a,c,f);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(et(ov),et(av),et(Yu),et(Kb),et(an),et(Vr),et(bt),et(Ku))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac});let n=e;return n})(),co=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(_d[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(rv(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(rv(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Re(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=_d[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=_d[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(qi.DashCase|qi.Important)?e.style.setProperty(t,i,r&qi.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&qi.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e[t]=i}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=Gr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function rv(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var bd=class extends co{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=lv(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},lo=class extends co{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?lv(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},sc=class extends lo{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=Jb(l),this.hostAttr=Qb(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},ew=(()=>{let e=class e extends rc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(et(an))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac});let n=e;return n})(),sv=["alt","control","meta","shift"],tw={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},nw={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},iw=(()=>{let e=class e extends rc{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Gr().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),sv.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=tw[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),sv.forEach(a=>{if(a!==s){let c=nw[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(et(an))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac});let n=e;return n})();function uv(n,e){return $g(Ee({rootComponent:n},rw(e)))}function rw(n){return{appProviders:[...lw,...n?.providers??[]],platformProviders:cw}}function sw(){Md.makeCurrent()}function ow(){return new Qn}function aw(){return Km(document),document}var cw=[{provide:Vr,useValue:nv},{provide:Zu,useValue:sw,multi:!0},{provide:an,useFactory:aw,deps:[]}];var lw=[{provide:qa,useValue:"root"},{provide:Qn,useFactory:ow,deps:[]},{provide:Ed,useClass:ew,multi:!0,deps:[an,bt,Vr]},{provide:Ed,useClass:iw,multi:!0,deps:[an]},iv,av,ov,{provide:qs,useExisting:iv},{provide:tc,useClass:qb,deps:[]},[]];function uw(){return new Sd(et(an))}var Sd=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(et(an))},e.\u0275prov=Ve({token:e,factory:function(r){let s=null;return r?s=new r:s=uw(),s},providedIn:"root"});let n=e;return n})();var ke="primary",So=Symbol("RouteTitle"),Id=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Xr(n){return new Id(n)}function fw(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function hw(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!jn(n[t],e[t]))return!1;return!0}function jn(n,e){let t=n?Rd(n):void 0,i=e?Rd(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!vv(n[r],e[r]))return!1;return!0}function Rd(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function vv(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function yv(n){return n.length>0?n[n.length-1]:null}function bi(n){return Ll(n)?n:ro(n)?vt(Promise.resolve(n)):Ie(n)}var pw={exact:xv,subset:Mv},_v={exact:mw,subset:gw,ignored:()=>!0};function dv(n,e,t){return pw[t.paths](n.root,e.root,t.matrixParams)&&_v[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function mw(n,e){return jn(n,e)}function xv(n,e,t){if(!Ki(n.segments,e.segments)||!cc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!xv(n.children[i],e.children[i],t))return!1;return!0}function gw(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>vv(n[t],e[t]))}function Mv(n,e,t){return Ev(n,e,e.segments,t)}function Ev(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Ki(r,t)||e.hasChildren()||!cc(r,t,i))}else if(n.segments.length===t.length){if(!Ki(n.segments,t)||!cc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!Mv(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Ki(n.segments,r)||!cc(n.segments,r,i)||!n.children[ke]?!1:Ev(n.children[ke],e,s,i)}}function cc(n,e,t){return e.every((i,r)=>_v[t](n[r].parameters,i.parameters))}var Mi=class{constructor(e=new st([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Xr(this.queryParams)),this._queryParamMap}toString(){return _w.serialize(this)}},st=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return lc(this)}},Zi=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=Xr(this.parameters)),this._parameterMap}toString(){return wv(this)}};function vw(n,e){return Ki(n,e)&&n.every((t,i)=>jn(t.parameters,e[i].parameters))}function Ki(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function yw(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===ke&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==ke&&(t=t.concat(e(r,i)))}),t}var nf=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>new dc)(),providedIn:"root"});let n=e;return n})(),dc=class{parse(e){let t=new Nd(e);return new Mi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${uo(e.root,!0)}`,i=Ew(e.queryParams),r=typeof e.fragment=="string"?`#${xw(e.fragment)}`:"";return`${t}${i}${r}`}},_w=new dc;function lc(n){return n.segments.map(e=>wv(e)).join("/")}function uo(n,e){if(!n.hasChildren())return lc(n);if(e){let t=n.children[ke]?uo(n.children[ke],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==ke&&i.push(`${r}:${uo(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=yw(n,(i,r)=>r===ke?[uo(n.children[ke],!1)]:[`${r}:${uo(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[ke]!=null?`${lc(n)}/${t[0]}`:`${lc(n)}/(${t.join("//")})`}}function bv(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function oc(n){return bv(n).replace(/%3B/gi,";")}function xw(n){return encodeURI(n)}function Pd(n){return bv(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function uc(n){return decodeURIComponent(n)}function fv(n){return uc(n.replace(/\+/g,"%20"))}function wv(n){return`${Pd(n.path)}${Mw(n.parameters)}`}function Mw(n){return Object.keys(n).map(e=>`;${Pd(e)}=${Pd(n[e])}`).join("")}function Ew(n){let e=Object.keys(n).map(t=>{let i=n[t];return Array.isArray(i)?i.map(r=>`${oc(t)}=${oc(r)}`).join("&"):`${oc(t)}=${oc(i)}`}).filter(t=>!!t);return e.length?`?${e.join("&")}`:""}var bw=/^[^\/()?;#]+/;function Td(n){let e=n.match(bw);return e?e[0]:""}var ww=/^[^\/()?;=#]+/;function Sw(n){let e=n.match(ww);return e?e[0]:""}var Tw=/^[^=?&#]+/;function Cw(n){let e=n.match(Tw);return e?e[0]:""}var Aw=/^[^&#]+/;function Dw(n){let e=n.match(Aw);return e?e[0]:""}var Nd=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new st([],{}):new st([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[ke]=new st(e,t)),i}parseSegment(){let e=Td(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Re(4009,!1);return this.capture(e),new Zi(uc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=Sw(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Td(this.remaining);r&&(i=r,this.capture(i))}e[uc(t)]=uc(i)}parseQueryParam(e){let t=Cw(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=Dw(this.remaining);o&&(i=o,this.capture(i))}let r=fv(t),s=fv(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=Td(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new Re(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=ke);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[ke]:new st([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Re(4011,!1)}};function Sv(n){return n.segments.length>0?new st([],{[ke]:n}):n}function Tv(n){let e={};for(let i of Object.keys(n.children)){let r=n.children[i],s=Tv(r);if(i===ke&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new st(n.segments,e);return Iw(t)}function Iw(n){if(n.numberOfChildren===1&&n.children[ke]){let e=n.children[ke];return new st(n.segments.concat(e.segments),e.children)}return n}function Yr(n){return n instanceof Mi}function Rw(n,e,t=null,i=null){let r=Cv(n);return Av(r,e,t,i)}function Cv(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new st(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Sv(i);return e??r}function Av(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return Cd(r,r,r,t,i);let s=Pw(e);if(s.toRoot())return Cd(r,r,new st([],{}),t,i);let o=Nw(s,r,n),a=o.processChildren?po(o.segmentGroup,o.index,s.commands):Iv(o.segmentGroup,o.index,s.commands);return Cd(r,o.segmentGroup,a,t,i)}function fc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function vo(n){return typeof n=="object"&&n!=null&&n.outlets}function Cd(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Dv(n,e,t);let a=Sv(Tv(o));return new Mi(a,s,r)}function Dv(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Dv(s,e,t)}),new st(n.segments,i)}var hc=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&fc(i[0]))throw new Re(4003,!1);let r=i.find(vo);if(r&&r!==yv(i))throw new Re(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Pw(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new hc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new hc(t,e,i)}var $r=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function Nw(n,e,t){if(n.isAbsolute)return new $r(e,!0,0);if(!t)return new $r(e,!1,NaN);if(t.parent===null)return new $r(t,!0,0);let i=fc(n.commands[0])?0:1,r=t.segments.length-1+i;return Lw(t,r,n.numberOfDoubleDots)}function Lw(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new Re(4005,!1);r=i.segments.length}return new $r(i,!1,r-s)}function Ow(n){return vo(n[0])?n[0].outlets:{[ke]:n}}function Iv(n,e,t){if(n||(n=new st([],{})),n.segments.length===0&&n.hasChildren())return po(n,e,t);let i=Fw(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new st(n.segments.slice(0,i.pathIndex),{});return s.children[ke]=new st(n.segments.slice(i.pathIndex),n.children),po(s,0,r)}else return i.match&&r.length===0?new st(n.segments,{}):i.match&&!n.hasChildren()?Ld(n,e,t):i.match?po(n,0,r):Ld(n,e,t)}function po(n,e,t){if(t.length===0)return new st(n.segments,{});{let i=Ow(t),r={};if(Object.keys(i).some(s=>s!==ke)&&n.children[ke]&&n.numberOfChildren===1&&n.children[ke].segments.length===0){let s=po(n.children[ke],e,t);return new st(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Iv(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new st(n.segments,r)}}function Fw(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(vo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!pv(c,l,o))return s;i+=2}else{if(!pv(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ld(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(vo(s)){let c=Uw(s.outlets);return new st(i,c)}if(r===0&&fc(t[0])){let c=n.segments[e];i.push(new Zi(c.path,hv(t[0]))),r++;continue}let o=vo(s)?s.outlets[ke]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&fc(a)?(i.push(new Zi(o,hv(a))),r+=2):(i.push(new Zi(o,{})),r++)}return new st(i,{})}function Uw(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Ld(new st([],{}),0,i))}),e}function hv(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function pv(n,e,t){return n==t.path&&jn(e,t.parameters)}var mo="imperative",mn=class{constructor(e,t){this.id=e,this.url=t}},yo=class extends mn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=0,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ji=class extends mn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ei=class extends mn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Qi=class extends mn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=16}},_o=class extends mn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},pc=class extends mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Od=class extends mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fd=class extends mn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ud=class extends mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},kd=class extends mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bd=class{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Vd=class{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Hd=class{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zd=class{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gd=class{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Wd=class{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var xo=class{},Mo=class{constructor(e){this.url=e}};var jd=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new xc,this.attachRef=null}},xc=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new jd,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),mc=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=$d(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=$d(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=qd(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return qd(e,this._root).map(t=>t.value)}};function $d(n,e){if(n===e.value)return e;for(let t of e.children){let i=$d(n,t);if(i)return i}return null}function qd(n,e){if(n===e.value)return[e];for(let t of e.children){let i=qd(n,t);if(i.length)return i.unshift(e),i}return[]}var cn=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function jr(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var gc=class extends mc{constructor(e,t){super(e),this.snapshot=t,sf(this,e)}toString(){return this.snapshot.toString()}};function Rv(n,e){let t=kw(n,e),i=new Lt([new Zi("",{})]),r=new Lt({}),s=new Lt({}),o=new Lt({}),a=new Lt(""),c=new Zr(i,r,o,a,s,ke,e,t.root);return c.snapshot=t.root,new gc(new cn(c,[]),t)}function kw(n,e){let t={},i={},r={},s="",o=new Eo([],t,r,s,i,ke,e,null,{});return new vc("",new cn(o,[]))}var Zr=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(rt(l=>l[So]))??Ie(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(rt(e=>Xr(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(rt(e=>Xr(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function rf(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:Ee(Ee({},e.params),n.params),data:Ee(Ee({},e.data),n.data),resolve:Ee(Ee(Ee(Ee({},n.data),e.data),r?.data),n._resolvedData)}:i={params:n.params,data:n.data,resolve:Ee(Ee({},n.data),n._resolvedData??{})},r&&Nv(r)&&(i.resolve[So]=r.title),i}var Eo=class{get title(){return this.data?.[So]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Xr(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Xr(this.queryParams)),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},vc=class extends mc{constructor(e,t){super(t),this.url=e,sf(this,t)}toString(){return Pv(this._root)}};function sf(n,e){e.value._routerState=n,e.children.forEach(t=>sf(n,t))}function Pv(n){let e=n.children.length>0?` { ${n.children.map(Pv).join(", ")} } `:"";return`${n.value}${e}`}function Ad(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,jn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),jn(e.params,t.params)||n.paramsSubject.next(t.params),hw(e.url,t.url)||n.urlSubject.next(t.url),jn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Xd(n,e){let t=jn(n.params,e.params)&&vw(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Xd(n.parent,e.parent))}function Nv(n){return typeof n.title=="string"||n.title===null}var Bw=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=ke,this.activateEvents=new hn,this.deactivateEvents=new hn,this.attachEvents=new hn,this.detachEvents=new hn,this.parentContexts=ge(xc),this.location=ge(zr),this.changeDetector=ge(Za),this.environmentInjector=ge(pn),this.inputBinder=ge(of,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Re(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Re(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Re(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new Re(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Yd(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=Uu({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Ga]});let n=e;return n})(),Yd=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===Zr?this.route:e===xc?this.childContexts:this.parent.get(e,t)}},of=new tt("");function Vw(n,e,t){let i=bo(n,e._root,t?t._root:void 0);return new gc(i,e)}function bo(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=Hw(n,e,t);return new cn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>bo(n,a)),o}}let i=zw(e.value),r=e.children.map(s=>bo(n,s));return new cn(i,r)}}function Hw(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return bo(n,i,r);return bo(n,i)})}function zw(n){return new Zr(new Lt(n.url),new Lt(n.params),new Lt(n.queryParams),new Lt(n.fragment),new Lt(n.data),n.outlet,n.component,n)}var Lv="ngNavigationCancelingError";function Ov(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Yr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Fv(!1,0,e);return r.url=t,r.navigationBehaviorOptions=i,r}function Fv(n,e,t){let i=new Error("NavigationCancelingError: "+(n||""));return i[Lv]=!0,i.cancellationCode=e,t&&(i.url=t),i}function Gw(n){return Uv(n)&&Yr(n.url)}function Uv(n){return n&&n[Lv]}var Ww=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Va({type:e,selectors:[["ng-component"]],standalone:!0,features:[Ka],decls:1,vars:0,template:function(r,s){r&1&&io(0,"router-outlet")},dependencies:[Bw],encapsulation:2});let n=e;return n})();function jw(n,e){return n.providers&&!n._injector&&(n._injector=ad(n.providers,e,`Route: ${n.path}`)),n._injector??e}function af(n){let e=n.children&&n.children.map(af),t=e?Et(Ee({},n),{children:e}):Ee({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==ke&&(t.component=Ww),t}function $n(n){return n.outlet||ke}function $w(n,e){let t=n.filter(i=>$n(i)===e);return t.push(...n.filter(i=>$n(i)!==e)),t}function To(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var qw=(n,e,t,i)=>rt(r=>(new Zd(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Zd=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),Ad(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=jr(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=jr(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=jr(e);for(let o of Object.keys(s))this.deactivateRouteAndItsChildren(s[o],r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=jr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Wd(s.value.snapshot))}),e.children.length&&this.forwardEvent(new zd(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(Ad(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Ad(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=To(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},yc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},qr=class{constructor(e,t){this.component=e,this.route=t}};function Xw(n,e,t){let i=n._root,r=e?e._root:null;return fo(i,r,t,[i.value])}function Yw(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Jr(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Qp(n)?n:e.get(n):i}function fo(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=jr(e);return n.children.forEach(o=>{Zw(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>go(a,t.getContext(o),r)),r}function Zw(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=Kw(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new yc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?fo(n,e,a?a.children:null,i,r):fo(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new qr(a.outlet.component,o))}else o&&go(e,a,r),r.canActivateChecks.push(new yc(i)),s.component?fo(n,null,a?a.children:null,i,r):fo(n,null,t,i,r);return r}function Kw(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Ki(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Ki(n.url,e.url)||!jn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Xd(n,e)||!jn(n.queryParams,e.queryParams);case"paramsChange":default:return!Xd(n,e)}}function go(n,e,t){let i=jr(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?go(o,e.children.getContext(s),t):go(o,null,t):go(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new qr(e.outlet.component,r)):t.canDeactivateChecks.push(new qr(null,r)):t.canDeactivateChecks.push(new qr(null,r))}function Co(n){return typeof n=="function"}function Jw(n){return typeof n=="boolean"}function Qw(n){return n&&Co(n.canLoad)}function eS(n){return n&&Co(n.canActivate)}function tS(n){return n&&Co(n.canActivateChild)}function nS(n){return n&&Co(n.canDeactivate)}function iS(n){return n&&Co(n.canMatch)}function kv(n){return n instanceof Kn||n?.name==="EmptyError"}var ac=Symbol("INITIAL_VALUE");function Kr(){return rn(n=>da(n.map(e=>e.pipe(Jn(1),Hl(ac)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===ac)return ac;if(t===!1||t instanceof Mi)return t}return!0}),En(e=>e!==ac),Jn(1)))}function rS(n,e){return Tt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ie(Et(Ee({},t),{guardsResult:!0})):sS(o,i,r,n).pipe(Tt(a=>a&&Jw(a)?oS(i,s,n,e):Ie(a)),rt(a=>Et(Ee({},t),{guardsResult:a})))})}function sS(n,e,t,i){return vt(n).pipe(Tt(r=>dS(r.component,r.route,t,e,i)),Un(r=>r!==!0,!0))}function oS(n,e,t,i){return vt(e).pipe(Sr(r=>wr(cS(r.route.parent,i),aS(r.route,i),uS(n,r.path,t),lS(n,r.route,t))),Un(r=>r!==!0,!0))}function aS(n,e){return n!==null&&e&&e(new Gd(n)),Ie(!0)}function cS(n,e){return n!==null&&e&&e(new Hd(n)),Ie(!0)}function lS(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ie(!0);let r=i.map(s=>fa(()=>{let o=To(e)??t,a=Jr(s,o),c=eS(a)?a.canActivate(e,n):o.runInContext(()=>a(e,n));return bi(c).pipe(Un())}));return Ie(r).pipe(Kr())}function uS(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>Yw(o)).filter(o=>o!==null).map(o=>fa(()=>{let a=o.guards.map(c=>{let l=To(o.node)??t,u=Jr(c,l),d=tS(u)?u.canActivateChild(i,n):l.runInContext(()=>u(i,n));return bi(d).pipe(Un())});return Ie(a).pipe(Kr())}));return Ie(s).pipe(Kr())}function dS(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ie(!0);let o=s.map(a=>{let c=To(e)??r,l=Jr(a,c),u=nS(l)?l.canDeactivate(n,e,t,i):c.runInContext(()=>l(n,e,t,i));return bi(u).pipe(Un())});return Ie(o).pipe(Kr())}function fS(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ie(!0);let s=r.map(o=>{let a=Jr(o,n),c=Qw(a)?a.canLoad(e,t):n.runInContext(()=>a(e,t));return bi(c)});return Ie(s).pipe(Kr(),Bv(i))}function Bv(n){return Dl(Pt(e=>{if(Yr(e))throw Ov(n,e)}),rt(e=>e===!0))}function hS(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ie(!0);let s=r.map(o=>{let a=Jr(o,n),c=iS(a)?a.canMatch(e,t):n.runInContext(()=>a(e,t));return bi(c)});return Ie(s).pipe(Kr(),Bv(i))}var wo=class{constructor(e){this.segmentGroup=e||null}},_c=class extends Error{constructor(e){super(),this.urlTree=e}};function Wr(n){return br(new wo(n))}function pS(n){return br(new Re(4e3,!1))}function mS(n){return br(Fv(!1,3))}var Kd=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}noMatchError(e){return new Re(4002,!1)}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ie(i);if(r.numberOfChildren>1||!r.children[ke])return pS(e.redirectTo);r=r.children[ke]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new _c(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Mi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new st(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new Re(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Jd={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function gS(n,e,t,i,r){let s=cf(n,e,t);return s.matched?(i=jw(e,i),hS(i,e,t,r).pipe(rt(o=>o===!0?s:Ee({},Jd)))):Ie(s)}function cf(n,e,t){if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?Ee({},Jd):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||fw)(t,n,e);if(!r)return Ee({},Jd);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?Ee(Ee({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function mv(n,e,t,i){return t.length>0&&_S(n,t,i)?{segmentGroup:new st(e,yS(i,new st(t,n.children))),slicedSegments:[]}:t.length===0&&xS(n,t,i)?{segmentGroup:new st(n.segments,vS(n,e,t,i,n.children)),slicedSegments:t}:{segmentGroup:new st(n.segments,n.children),slicedSegments:t}}function vS(n,e,t,i,r){let s={};for(let o of i)if(Mc(n,t,o)&&!r[$n(o)]){let a=new st([],{});s[$n(o)]=a}return Ee(Ee({},r),s)}function yS(n,e){let t={};t[ke]=e;for(let i of n)if(i.path===""&&$n(i)!==ke){let r=new st([],{});t[$n(i)]=r}return t}function _S(n,e,t){return t.some(i=>Mc(n,e,i)&&$n(i)!==ke)}function xS(n,e,t){return t.some(i=>Mc(n,e,i))}function Mc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function MS(n,e,t,i){return $n(n)!==i&&(i===ke||!Mc(e,t,n))?!1:n.path==="**"?!0:cf(e,n,t).matched}function ES(n,e,t){return e.length===0&&!n.children[t]}var Qd=class{};function bS(n,e,t,i,r,s,o="emptyOnly"){return new ef(n,e,t,i,r,o,s).recognize()}var wS=31,ef=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Kd(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new Re(4002,!1)}recognize(){let e=mv(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(t=>{let i=new Eo([],Object.freeze({}),Object.freeze(Ee({},this.urlTree.queryParams)),this.urlTree.fragment,{},ke,this.rootComponentType,null,{}),r=new cn(i,t),s=new vc("",r),o=Rw(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,ke).pipe(mi(i=>{if(i instanceof _c)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof wo?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=rf(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(rt(s=>s instanceof cn?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return vt(r).pipe(Sr(s=>{let o=i.children[s],a=$w(t,s);return this.processSegmentGroup(e,a,o,s)}),Bl((s,o)=>(s.push(...o),s)),gi(null),kl(),Tt(s=>{if(s===null)return Wr(i);let o=Vv(s);return SS(o),Ie(o)}))}processSegment(e,t,i,r,s,o){return vt(t).pipe(Sr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(mi(c=>{if(c instanceof wo)return Ie(null);throw c}))),Un(a=>!!a),mi(a=>{if(kv(a))return ES(i,r,s)?Ie(new Qd):Wr(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return MS(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):Wr(r):Wr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=r.path==="**"?gv(s):cf(t,r,s);if(!a)return Wr(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>wS&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(Tt(f=>this.processSegment(e,i,t,f.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o;return i.path==="**"?(o=Ie(gv(r)),t.children={}):o=gS(t,i,r,e,this.urlSerializer),o.pipe(rn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(rn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:f}=a,p=new Eo(u,f,Object.freeze(Ee({},this.urlTree.queryParams)),this.urlTree.fragment,CS(i),$n(i),i.component??i._loadedComponent??null,i,AS(i)),{segmentGroup:g,slicedSegments:v}=mv(t,u,d,c);if(v.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(rt(h=>h===null?null:new cn(p,h)));if(c.length===0&&v.length===0)return Ie(new cn(p,[]));let m=$n(i)===s;return this.processSegment(l,c,g,v,m?ke:s,!0).pipe(rt(h=>new cn(p,h instanceof cn?[h]:[])))}))):Wr(t)))}getChildConfig(e,t,i){return t.children?Ie({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ie({routes:t._loadedRoutes,injector:t._loadedInjector}):fS(e,t,i,this.urlSerializer).pipe(Tt(r=>r?this.configLoader.loadChildren(e,t).pipe(Pt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):mS(t))):Ie({routes:[],injector:e})}};function SS(n){n.sort((e,t)=>e.value.outlet===ke?-1:t.value.outlet===ke?1:e.value.outlet.localeCompare(t.value.outlet))}function TS(n){let e=n.value.routeConfig;return e&&e.path===""}function Vv(n){let e=[],t=new Set;for(let i of n){if(!TS(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Vv(i.children);e.push(new cn(i.value,r))}return e.filter(i=>!t.has(i))}function CS(n){return n.data||{}}function AS(n){return n.resolve||{}}function gv(n){return{matched:!0,parameters:n.length>0?yv(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function DS(n,e,t,i,r,s){return Tt(o=>bS(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:c})=>Et(Ee({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function IS(n,e){return Tt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ie(t);let s=r.map(l=>l.route),o=new Set(s),a=Hv(s[0].parent).slice(1),c=0;return vt(a).pipe(Sr(l=>o.has(l)?RS(l,i,n,e):(l.data=rf(l,l.parent,n).resolve,Ie(void 0))),Pt(()=>c++),Tr(1),Tt(l=>c===a.length?Ie(t):Zt))})}function Hv(n){let e=n.children.map(t=>Hv(t)).flat();return[n,...e]}function RS(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Nv(r)&&(s[So]=r.title),PS(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=rf(n,n.parent,t).resolve,null)))}function PS(n,e,t,i){let r=Rd(n);if(r.length===0)return Ie({});let s={};return vt(r).pipe(Tt(o=>NS(n[o],e,t,i).pipe(Un(),Pt(a=>{s[o]=a}))),Tr(1),Fl(s),mi(o=>kv(o)?Zt:br(o)))}function NS(n,e,t,i){let r=To(e)??i,s=Jr(n,r),o=s.resolve?s.resolve(e,t):r.runInContext(()=>s(e,t));return bi(o)}function Dd(n){return rn(e=>{let t=n(e);return t?vt(t).pipe(rt(()=>e)):Ie(e)})}var zv=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===ke);return r}getResolvedTitleForRoute(i){return i.data[So]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>ge(LS))(),providedIn:"root"});let n=e;return n})(),LS=(()=>{let e=class e extends zv{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(et(Sd))},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),lf=new tt("",{providedIn:"root",factory:()=>({})}),uf=new tt("ROUTES"),OS=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ge(hd)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Ie(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=bi(i.loadComponent()).pipe(rt(Gv),Pt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),Us(()=>{this.componentLoaders.delete(i)})),s=new Er(r,()=>new jt).pipe(Mr());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ie({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=FS(r,this.compiler,i,this.onLoadEndListener).pipe(Us(()=>{this.childrenLoaders.delete(r)})),a=new Er(o,()=>new jt).pipe(Mr());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function FS(n,e,t,i){return bi(n.loadChildren()).pipe(rt(Gv),Tt(r=>r instanceof Ys||Array.isArray(r)?Ie(r):vt(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(uf,[],{optional:!0,self:!0}).flat()),{routes:o.map(af),injector:s}}))}function US(n){return n&&typeof n=="object"&&"default"in n}function Gv(n){return US(n)?n.default:n}var df=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>ge(kS))(),providedIn:"root"});let n=e;return n})(),kS=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),BS=new tt("");var VS=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new jt,this.transitionAbortSubject=new jt,this.configLoader=ge(OS),this.environmentInjector=ge(pn),this.urlSerializer=ge(nf),this.rootContexts=ge(xc),this.location=ge(oo),this.inputBindingEnabled=ge(of,{optional:!0})!==null,this.titleStrategy=ge(zv),this.options=ge(lf,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ge(df),this.createViewTransition=ge(BS,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ie(void 0),this.rootComponentType=null;let i=s=>this.events.next(new Bd(s)),r=s=>this.events.next(new Vd(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(Et(Ee(Ee({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Lt({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:mo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(En(o=>o.id!==0),rt(o=>Et(Ee({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),rn(o=>{this.currentTransition=o;let a=!1,c=!1;return Ie(o).pipe(Pt(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Et(Ee({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),rn(l=>{let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let f="";return this.events.next(new Qi(l.id,this.urlSerializer.serialize(l.rawUrl),f,0)),l.resolve(null),Zt}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ie(l).pipe(rn(f=>{let p=this.transitions?.getValue();return this.events.next(new yo(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),p!==this.transitions?.getValue()?Zt:Promise.resolve(f)}),DS(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Pt(f=>{o.targetSnapshot=f.targetSnapshot,o.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation=Et(Ee({},this.currentNavigation),{finalUrl:f.urlAfterRedirects});let p=new pc(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(p)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:f,extractedUrl:p,source:g,restoredState:v,extras:m}=l,h=new yo(f,this.urlSerializer.serialize(p),g,v);this.events.next(h);let C=Rv(p,this.rootComponentType).snapshot;return this.currentTransition=o=Et(Ee({},l),{targetSnapshot:C,urlAfterRedirects:p,extras:Et(Ee({},m),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=p,Ie(o)}else{let f="";return this.events.next(new Qi(l.id,this.urlSerializer.serialize(l.extractedUrl),f,1)),l.resolve(null),Zt}}),Pt(l=>{let u=new Od(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),rt(l=>(this.currentTransition=o=Et(Ee({},l),{guards:Xw(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),rS(this.environmentInjector,l=>this.events.next(l)),Pt(l=>{if(o.guardsResult=l.guardsResult,Yr(l.guardsResult))throw Ov(this.urlSerializer,l.guardsResult);let u=new Fd(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),En(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),Dd(l=>{if(l.guards.canActivateChecks.length)return Ie(l).pipe(Pt(u=>{let d=new Ud(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),rn(u=>{let d=!1;return Ie(u).pipe(IS(this.paramsInheritanceStrategy,this.environmentInjector),Pt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",2)}}))}),Pt(u=>{let d=new kd(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),Dd(l=>{let u=d=>{let f=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&f.push(this.configLoader.loadComponent(d.routeConfig).pipe(Pt(p=>{d.component=p}),rt(()=>{})));for(let p of d.children)f.push(...u(p));return f};return da(u(l.targetSnapshot.root)).pipe(gi(),Jn(1))}),Dd(()=>this.afterPreactivation()),rn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?vt(d).pipe(rt(()=>o)):Ie(o)}),rt(l=>{let u=Vw(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Et(Ee({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),Pt(()=>{this.events.next(new xo)}),qw(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Jn(1),Pt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ji(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),zl(this.transitionAbortSubject.pipe(Pt(l=>{throw l}))),Us(()=>{if(!a&&!c){let l="";this.cancelNavigationTransition(o,l,1)}this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),mi(l=>{if(c=!0,Uv(l))this.events.next(new Ei(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),Gw(l)?this.events.next(new Mo(l.url)):o.resolve(!1);else{this.events.next(new _o(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){o.reject(u)}}return Zt}))}))}cancelNavigationTransition(i,r,s){let o=new Ei(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function HS(n){return n!==mo}var zS=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>ge(GS))(),providedIn:"root"});let n=e;return n})(),tf=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},GS=(()=>{let e=class e extends tf{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ju(e)))(s||e)}})(),e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Wv=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:()=>(()=>ge(WS))(),providedIn:"root"});let n=e;return n})(),WS=(()=>{let e=class e extends Wv{constructor(){super(...arguments),this.location=ge(oo),this.urlSerializer=ge(nf),this.options=ge(lf,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ge(df),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Mi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Rv(this.currentUrlTree,null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof yo)this.stateMemento=this.createStateMemento();else if(i instanceof Qi)this.rawUrlTree=r.initialUrl;else if(i instanceof pc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof xo?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Ei&&(i.code===3||i.code===2)?this.restoreHistory(r):i instanceof _o?this.restoreHistory(r,!0):i instanceof Ji&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=Ee(Ee({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=Ee(Ee({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ju(e)))(s||e)}})(),e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),ho=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(ho||{});function jS(n,e){n.events.pipe(En(t=>t instanceof Ji||t instanceof Ei||t instanceof _o||t instanceof Qi),rt(t=>t instanceof Ji||t instanceof Qi?ho.COMPLETE:(t instanceof Ei?t.code===0||t.code===1:!1)?ho.REDIRECTING:ho.FAILED),En(t=>t!==ho.REDIRECTING),Jn(1)).subscribe(()=>{e()})}function $S(n){throw n}var qS={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},XS={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},jv=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ge(Ja),this.stateManager=ge(Wv),this.options=ge(lf,{optional:!0})||{},this.pendingTasks=ge(fd),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ge(VS),this.urlSerializer=ge(nf),this.location=ge(oo),this.urlHandlingStrategy=ge(df),this._events=new jt,this.errorHandler=this.options.errorHandler||$S,this.navigated=!1,this.routeReuseStrategy=ge(zS),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ge(uf,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ge(of,{optional:!0}),this.eventsSubscription=new Rt,this.isNgZoneEnabled=ge(bt)instanceof bt&&bt.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Ei&&r.code!==0&&r.code!==1)this.navigated=!0;else if(r instanceof Ji)this.navigated=!0;else if(r instanceof Mo){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||HS(s.source)};this.scheduleNavigation(a,mo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}ZS(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),mo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription||(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)}))}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=Ee({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(af),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=Ee(Ee({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let p=s?s.snapshot:this.routerState.snapshot.root;f=Cv(p)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),f=this.currentUrlTree.root}return Av(f,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=Yr(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,mo,null,r)}navigate(i,r={skipLocationChange:!1}){return YS(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=Ee({},qS):r===!1?s=Ee({},XS):s=r,Yr(i))return dv(this.currentUrlTree,i,s);let o=this.parseUrl(i);return dv(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.keys(i).reduce((r,s)=>{let o=i[s];return o!=null&&(r[s]=o),r},{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((f,p)=>{c=f,l=p});let d=this.pendingTasks.add();return jS(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(f=>Promise.reject(f))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ve({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function YS(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new Re(4008,!1)}function ZS(n){return!(n instanceof xo)&&!(n instanceof Mo)}var KS=new tt("");function $v(n,...e){return $a([{provide:uf,multi:!0,useValue:n},[],{provide:Zr,useFactory:JS,deps:[jv]},{provide:pd,multi:!0,useFactory:QS},e.map(t=>t.\u0275providers)])}function JS(n){return n.routerState.root}function QS(){let n=ge(Br);return e=>{let t=n.get(so);if(e!==t.components[0])return;let i=n.get(jv),r=n.get(eT);n.get(tT)===1&&i.initialNavigation(),n.get(nT,null,$e.Optional)?.setUpPreloading(),n.get(KS,null,$e.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var eT=new tt("",{factory:()=>new jt}),tT=new tt("",{providedIn:"root",factory:()=>1});var nT=new tt("");var qv=[];var Xv={providers:[$v(qv)]};var Mh="158",mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iT=0,Yv=1,rT=2;var y0=1,sT=2,ci=3,Li=0,Qt=1,li=2;var Ri=0,_s=1,Zv=2,Kv=3,Jv=4,oT=5,sr=100,aT=101,cT=102,Qv=103,ey=104,lT=200,uT=201,dT=202,fT=203,Hf=204,zf=205,hT=206,pT=207,mT=208,gT=209,vT=210,yT=211,_T=212,xT=213,MT=214,ET=0,bT=1,wT=2,jc=3,ST=4,TT=5,CT=6,AT=7,_0=0,DT=1,IT=2,Pi=0,RT=1,PT=2,NT=3,LT=4,OT=5;var ty=300,Es=301,bs=302,Gf=303,Wf=304,dl=306,jf=1e3,Rn=1001,$f=1002,Xt=1003,ny=1004;var ff=1005;var vn=1006,FT=1007;var Uo=1008;var Ni=1009,UT=1010,kT=1011,Eh=1012,x0=1013,Di=1014,Ii=1015,ko=1016,M0=1017,E0=1018,ar=1020,BT=1021,Pn=1023,VT=1024,HT=1025,cr=1026,ws=1027,zT=1028,b0=1029,GT=1030,w0=1031,S0=1033,hf=33776,pf=33777,mf=33778,gf=33779,iy=35840,ry=35841,sy=35842,oy=35843,WT=36196,ay=37492,cy=37496,ly=37808,uy=37809,dy=37810,fy=37811,hy=37812,py=37813,my=37814,gy=37815,vy=37816,yy=37817,_y=37818,xy=37819,My=37820,Ey=37821,vf=36492,by=36494,wy=36495,jT=36283,Sy=36284,Ty=36285,Cy=36286;var $c=2300,qc=2301,yf=2302,Ay=2400,Dy=2401,Iy=2402;var T0=3e3,lr=3001,$T=3200,qT=3201,XT=0,YT=1,yn="",Ot="srgb",fi="srgb-linear",bh="display-p3",fl="display-p3-linear",Xc="linear",ft="srgb",Yc="rec709",Zc="p3";var Qr=7680;var Ry=519,ZT=512,KT=513,JT=514,QT=515,eC=516,tC=517,nC=518,iC=519,Py=35044;var Ny="300 es",qf=1035,ui=2e3,Kc=2001,Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ly=1234567,No=Math.PI/180,Bo=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function wh(n,e){return(n%e+e)%e}function rC(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sC(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function oC(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function aC(n,e=1){return e-Math.abs(wh(n,e*2)-e)}function cC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lC(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function uC(n,e){return n+Math.floor(Math.random()*(e-n+1))}function dC(n,e){return n+Math.random()*(e-n)}function fC(n){return n*(.5-Math.random())}function hC(n){n!==void 0&&(Ly=n);let e=Ly+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pC(n){return n*No}function mC(n){return n*Bo}function Xf(n){return(n&n-1)===0&&n!==0}function gC(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Jc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vC(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ms(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var C0={DEG2RAD:No,RAD2DEG:Bo,generateUUID:Ds,clamp:Vt,euclideanModulo:wh,mapLinear:rC,inverseLerp:sC,lerp:Lo,damp:oC,pingpong:aC,smoothstep:cC,smootherstep:lC,randInt:uC,randFloat:dC,randFloatSpread:fC,seededRandom:hC,degToRad:pC,radToDeg:mC,isPowerOfTwo:Xf,ceilPowerOfTwo:gC,floorPowerOfTwo:Jc,setQuaternionFromProperEuler:vC,normalize:$t,denormalize:ms},We=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],C=r[1],M=r[4],b=r[7],S=r[2],I=r[5],T=r[8];return s[0]=o*v+a*C+c*S,s[3]=o*m+a*M+c*I,s[6]=o*h+a*b+c*T,s[1]=l*v+u*C+d*S,s[4]=l*m+u*M+d*I,s[7]=l*h+u*b+d*T,s[2]=f*v+p*C+g*S,s[5]=f*m+p*M+g*I,s[8]=f*h+p*b+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_f.makeScale(e,t)),this}rotate(e){return this.premultiply(_f.makeRotation(-e)),this}translate(e,t){return this.premultiply(_f.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_f=new Xe;function A0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yC(){let n=Qc("canvas");return n.style.display="block",n}var Oy={};function Oo(n){n in Oy||(Oy[n]=!0,console.warn(n))}var Fy=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uy=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ec={[fi]:{transfer:Xc,primaries:Yc,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:ft,primaries:Yc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fl]:{transfer:Xc,primaries:Zc,toReference:n=>n.applyMatrix3(Uy),fromReference:n=>n.applyMatrix3(Fy)},[bh]:{transfer:ft,primaries:Zc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uy),fromReference:n=>n.applyMatrix3(Fy).convertLinearToSRGB()}},_C=new Set([fi,fl]),ct={enabled:!0,_workingColorSpace:fi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_C.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ec[e].toReference,r=Ec[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ec[n].primaries},getTransfer:function(n){return n===yn?Xc:Ec[n].transfer}};function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var es,el=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Qc("canvas")),es.width=e.width,es.height=e.height;let i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xs(t[i]/255)*255):t[i]=xs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},xC=0,tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xC++}),this.uuid=Ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mf(r[o].image)):s.push(Mf(r[o]))}else s=Mf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Mf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?el.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var MC=0,Is=(()=>{class n extends Xn{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Rn,s=Rn,o=vn,a=Uo,c=Pn,l=Ni,u=n.DEFAULT_ANISOTROPY,d=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MC++}),this.uuid=Ds(),this.name="",this.source=new tl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===lr?Ot:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ty)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jf:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case $f:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jf:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case $f:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?lr:T0}set encoding(t){Oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===lr?Ot:yn}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=ty,n.DEFAULT_ANISOTROPY=1,n})(),Ft=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(p+1)/2,S=(h+1)/2,I=(u+f)/4,T=(d+v)/4,G=(g+m)/4;return M>b&&M>S?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=I/i,s=T/i):b>S?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=I/r,s=G/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=T/s,r=G/s),this.set(i,r,s,t),this}let C=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-v)/C,this.z=(f-u)/C,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yf=class extends Xn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===lr?Ot:yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Is(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Yf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nl=class extends Is{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zf=class extends Is{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==p||u!==g){let m=1-a,h=c*f+l*p+u*g+d*v,C=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){let S=Math.sqrt(M),I=Math.atan2(S,h*C);m=Math.sin(m*I)/S,a=Math.sin(a*I)/S}let b=a*C;if(c=c*m+f*b,l=l*m+p*b,u=u*m+g*b,d=d*m+v*b,m===1-a){let S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*p-l*f,e[t+1]=c*g+u*f+l*d-a*p,e[t+2]=l*g+u*p+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ky.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ky.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ef=new L,ky=new Nn,ur=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bc.copy(i.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),wc.subVectors(this.max,Ao),ts.subVectors(e.a,Ao),ns.subVectors(e.b,Ao),is.subVectors(e.c,Ao),wi.subVectors(ns,ts),Si.subVectors(is,ns),er.subVectors(ts,is);let t=[0,-wi.z,wi.y,0,-Si.z,Si.y,0,-er.z,er.y,wi.z,0,-wi.x,Si.z,0,-Si.x,er.z,0,-er.x,-wi.y,wi.x,0,-Si.y,Si.x,0,-er.y,er.x,0];return!bf(t,ts,ns,is,wc)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,ts,ns,is,wc))?!1:(Sc.crossVectors(wi,Si),t=[Sc.x,Sc.y,Sc.z],bf(t,ts,ns,is,wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ii=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,bc=new ur,ts=new L,ns=new L,is=new L,wi=new L,Si=new L,er=new L,Ao=new L,wc=new L,Sc=new L,tr=new L;function bf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){tr.fromArray(n,s);let a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),c=e.dot(tr),l=t.dot(tr),u=i.dot(tr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var EC=new ur,Do=new L,wf=new L,Vo=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):EC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);let t=Do.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(wf)),this.expandByPoint(Do.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ri=new L,Sf=new L,Tc=new L,Ti=new L,Tf=new L,Cc=new L,Cf=new L,Ho=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sf.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Sf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Tc),a=Ti.dot(this.direction),c=-Ti.dot(Tc),l=Ti.lengthSq(),u=Math.abs(1-o*o),d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){let v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Sf).addScaledVector(Tc,f),p}intersectSphere(e,t){ri.subVectors(e.center,this.origin);let i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,r,s){Tf.subVectors(t,e),Cc.subVectors(i,e),Cf.crossVectors(Tf,Cc);let o=this.direction.dot(Cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);let c=a*this.direction.dot(Cc.crossVectors(Ti,Cc));if(c<0)return null;let l=a*this.direction.dot(Tf.cross(Ti));if(l<0||c+l>o)return null;let u=-a*Ti.dot(Cf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,v,m)}set(e,t,i,r,s,o,a,c,l,u,d,f,p,g,v,m){let h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,p=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,p=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,p=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bC,e,wC)}lookAt(e,t,i){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ci.crossVectors(i,ln),Ci.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ci.crossVectors(i,ln)),Ci.normalize(),Ac.crossVectors(ln,Ci),r[0]=Ci.x,r[4]=Ac.x,r[8]=ln.x,r[1]=Ci.y,r[5]=Ac.y,r[9]=ln.y,r[2]=Ci.z,r[6]=Ac.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],C=i[3],M=i[7],b=i[11],S=i[15],I=r[0],T=r[4],G=r[8],x=r[12],w=r[1],j=r[5],Y=r[9],Q=r[13],R=r[2],H=r[6],q=r[10],W=r[14],ie=r[3],Z=r[7],X=r[11],P=r[15];return s[0]=o*I+a*w+c*R+l*ie,s[4]=o*T+a*j+c*H+l*Z,s[8]=o*G+a*Y+c*q+l*X,s[12]=o*x+a*Q+c*W+l*P,s[1]=u*I+d*w+f*R+p*ie,s[5]=u*T+d*j+f*H+p*Z,s[9]=u*G+d*Y+f*q+p*X,s[13]=u*x+d*Q+f*W+p*P,s[2]=g*I+v*w+m*R+h*ie,s[6]=g*T+v*j+m*H+h*Z,s[10]=g*G+v*Y+m*q+h*X,s[14]=g*x+v*Q+m*W+h*P,s[3]=C*I+M*w+b*R+S*ie,s[7]=C*T+M*j+b*H+S*Z,s[11]=C*G+M*Y+b*q+S*X,s[15]=C*x+M*Q+b*W+S*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+i*l*f+r*a*p-i*c*p)+v*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+t*l*d-t*a*p-s*o*d+i*o*p+s*a*u-i*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-i*o*f+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],C=d*m*l-v*f*l+v*c*p-a*m*p-d*c*h+a*f*h,M=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,b=u*v*l-g*d*l+g*a*p-o*v*p-u*a*h+o*d*h,S=g*d*c-u*v*c-g*a*f+o*v*f+u*a*m-o*d*m,I=t*C+i*M+r*b+s*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/I;return e[0]=C*T,e[1]=(v*f*s-d*m*s-v*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*h+i*c*h)*T,e[3]=(d*c*s-a*f*s-d*r*l+i*f*l+a*r*p-i*c*p)*T,e[4]=M*T,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*h-t*c*h)*T,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*p+t*c*p)*T,e[8]=b*T,e[9]=(g*d*s-u*v*s-g*i*p+t*v*p+u*i*h-t*d*h)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*h+t*a*h)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*p-t*a*p)*T,e[12]=S*T,e[13]=(u*v*r-g*d*r+g*i*f-t*v*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,p=s*u,g=s*d,v=o*u,m=o*d,h=a*d,C=c*l,M=c*u,b=c*d,S=i.x,I=i.y,T=i.z;return r[0]=(1-(v+h))*S,r[1]=(p+b)*S,r[2]=(g-M)*S,r[3]=0,r[4]=(p-b)*I,r[5]=(1-(f+h))*I,r[6]=(m+C)*I,r[7]=0,r[8]=(g+M)*T,r[9]=(m-C)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=rs.set(r[0],r[1],r[2]).length(),o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);let l=1/s,u=1/o,d=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ui){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),p,g;if(a===ui)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Kc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ui){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*l,p=(i+r)*u,g,v;if(a===ui)g=(o+s)*d,v=-2*d;else if(a===Kc)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},rs=new L,An=new Ht,bC=new L(0,0,0),wC=new L(1,1,1),Ci=new L,Ac=new L,ln=new L,By=new Ht,Vy=new Nn,SC=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],p=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return By.makeRotationFromQuaternion(t),this.setFromRotationMatrix(By,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vy.setFromEuler(this),this.setFromQuaternion(Vy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),il=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},TC=0,Hy=new L,ss=new Nn,si=new Ht,Dc=new L,Io=new L,CC=new L,AC=new Nn,zy=new L(1,0,0),Gy=new L(0,1,0),Wy=new L(0,0,1),DC={type:"added"},IC={type:"removed"},Rs=(()=>{class n extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TC++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,i=new SC,r=new Nn,s=new L(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Xe}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(zy,t)}rotateY(t){return this.rotateOnAxis(Gy,t)}rotateZ(t){return this.rotateOnAxis(Wy,t)}translateOnAxis(t,i){return Hy.copy(t).applyQuaternion(this.quaternion),this.position.add(Hy.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(zy,t)}translateY(t){return this.translateOnAxis(Gy,t)}translateZ(t){return this.translateOnAxis(Wy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Dc.copy(t):Dc.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Io,Dc,this.up):si.lookAt(Dc,Io,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(si),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(DC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IC)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i){let r=[];this[t]===i&&r.push(this);for(let s=0,o=this.children.length;s<o;s++){let a=this.children[s].getObjectsByProperty(t,i);a.length>0&&(r=r.concat(a))}return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,CC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,AC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),g=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new L(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Dn=new L,oi=new L,Af=new L,ai=new L,os=new L,as=new L,jy=new L,Df=new L,If=new L,Rf=new L,Ic=!1,gs=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dn.subVectors(e,t),r.cross(Dn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Dn.subVectors(r,t),oi.subVectors(i,t),Af.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(oi),c=Dn.dot(Af),l=oi.dot(oi),u=oi.dot(Af),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);let f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ai),ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,t,i,r,s,o,a,c){return Ic===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ic=!0),this.getInterpolation(e,t,i,r,s,o,a,c)}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ai),c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c}static isFrontFacing(e,t,i,r){return Dn.subVectors(i,t),oi.subVectors(e,t),Dn.cross(oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Dn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ic===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ic=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;os.subVectors(r,i),as.subVectors(s,i),Df.subVectors(e,i);let c=os.dot(Df),l=as.dot(Df);if(c<=0&&l<=0)return t.copy(i);If.subVectors(e,r);let u=os.dot(If),d=as.dot(If);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(os,o);Rf.subVectors(e,s);let p=os.dot(Rf),g=as.dot(Rf);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(as,a);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return jy.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(jy,a);let h=1/(m+v+f);return o=v*h,a=f*h,t.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Pf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ot=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=wh(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Pf(o,s,e+1/3),this.g=Pf(o,s,e),this.b=Pf(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=D0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=xf(e.r),this.g=xf(e.g),this.b=xf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ct.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Vt(Bt.r*255,0,255))*65536+Math.round(Vt(Bt.g*255,0,255))*256+Math.round(Vt(Bt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Bt.copy(this),t);let i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ot){ct.fromWorkingColorSpace(Bt.copy(this),e);let t=Bt.r,i=Bt.g,r=Bt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Rc);let i=Lo(Ai.h,Rc.h,t),r=Lo(Ai.s,Rc.s,t),s=Lo(Ai.l,Rc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new ot;ot.NAMES=D0;var RC=0,Ss=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=_s,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=zf,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=jc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==Li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ry&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ts=class extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new L,Pc=new We,xn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Py,this.updateRange={offset:0,count:-1},this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pc.fromBufferAttribute(this,t),Pc.applyMatrix3(e),this.setXY(t,Pc.x,Pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ms(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Py&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};var rl=class extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sl=class extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var di=class extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}};var PC=0,gn=new Ht,Nf=new Rs,cs=new L,un=new ur,Ro=new ur,Nt=new L,dr=class n extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PC++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?sl:rl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(un.min,Ro.min),un.expandByPoint(Nt),Nt.addVectors(un.max,Ro.max),un.expandByPoint(Nt)):(un.expandByPoint(Ro.min),un.expandByPoint(Ro.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(cs.fromBufferAttribute(e,l),Nt.add(cs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new L,u[w]=new L;let d=new L,f=new L,p=new L,g=new We,v=new We,m=new We,h=new L,C=new L;function M(w,j,Y){d.fromArray(r,w*3),f.fromArray(r,j*3),p.fromArray(r,Y*3),g.fromArray(o,w*2),v.fromArray(o,j*2),m.fromArray(o,Y*2),f.sub(d),p.sub(d),v.sub(g),m.sub(g);let Q=1/(v.x*m.y-m.x*v.y);isFinite(Q)&&(h.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(Q),C.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(Q),l[w].add(h),l[j].add(h),l[Y].add(h),u[w].add(C),u[j].add(C),u[Y].add(C))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,j=b.length;w<j;++w){let Y=b[w],Q=Y.start,R=Y.count;for(let H=Q,q=Q+R;H<q;H+=3)M(i[H+0],i[H+1],i[H+2])}let S=new L,I=new L,T=new L,G=new L;function x(w){T.fromArray(s,w*3),G.copy(T);let j=l[w];S.copy(j),S.sub(T.multiplyScalar(T.dot(j))).normalize(),I.crossVectors(G,j);let Q=I.dot(u[w])<0?-1:1;c[w*4]=S.x,c[w*4+1]=S.y,c[w*4+2]=S.z,c[w*4+3]=Q}for(let w=0,j=b.length;w<j;++w){let Y=b[w],Q=Y.start,R=Y.count;for(let H=Q,q=Q+R;H<q;H+=3)x(i[H+0]),x(i[H+1]),x(i[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new xn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$y=new Ht,nr=new Ho,Nc=new Vo,qy=new L,ls=new L,us=new L,ds=new L,Lf=new L,Lc=new L,Oc=new We,Fc=new We,Uc=new We,Xy=new L,Yy=new L,Zy=new L,kc=new L,Bc=new L,_n=class extends Rs{constructor(e=new dr,t=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Lc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(Lf.fromBufferAttribute(d,e),o?Lc.addScaledVector(Lf,u):Lc.addScaledVector(Lf.sub(t),u))}t.add(Lc)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Nc.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Nc,qy)===null||nr.origin.distanceToSquared(qy)>(e.far-e.near)**2))&&($y.copy(s).invert(),nr.copy(e.ray).applyMatrix4($y),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,nr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],h=o[m.materialIndex],C=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=C,S=M;b<S;b+=3){let I=a.getX(b),T=a.getX(b+1),G=a.getX(b+2);r=Vc(this,h,e,i,l,u,d,I,T,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){let C=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);r=Vc(this,o,e,i,l,u,d,C,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],h=o[m.materialIndex],C=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=C,S=M;b<S;b+=3){let I=b,T=b+1,G=b+2;r=Vc(this,h,e,i,l,u,d,I,T,G),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){let C=m,M=m+1,b=m+2;r=Vc(this,o,e,i,l,u,d,C,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function NC(n,e,t,i,r,s,o,a){let c;if(e.side===Qt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Li,a),c===null)return null;Bc.copy(a),Bc.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Bc);return l<t.near||l>t.far?null:{distance:l,point:Bc.clone(),object:n}}function Vc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,ls),n.getVertexPosition(c,us),n.getVertexPosition(l,ds);let u=NC(n,e,t,i,ls,us,ds,kc);if(u){r&&(Oc.fromBufferAttribute(r,a),Fc.fromBufferAttribute(r,c),Uc.fromBufferAttribute(r,l),u.uv=gs.getInterpolation(kc,ls,us,ds,Oc,Fc,Uc,new We)),s&&(Oc.fromBufferAttribute(s,a),Fc.fromBufferAttribute(s,c),Uc.fromBufferAttribute(s,l),u.uv1=gs.getInterpolation(kc,ls,us,ds,Oc,Fc,Uc,new We),u.uv2=u.uv1),o&&(Xy.fromBufferAttribute(o,a),Yy.fromBufferAttribute(o,c),Zy.fromBufferAttribute(o,l),u.normal=gs.getInterpolation(kc,ls,us,ds,Xy,Yy,Zy,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};gs.getNormal(ls,us,ds,d.normal),u.face=d}return u}var fr=class n extends dr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new di(l,3)),this.setAttribute("normal",new di(u,3)),this.setAttribute("uv",new di(d,2));function g(v,m,h,C,M,b,S,I,T,G,x){let w=b/T,j=S/G,Y=b/2,Q=S/2,R=I/2,H=T+1,q=G+1,W=0,ie=0,Z=new L;for(let X=0;X<q;X++){let P=X*j-Q;for(let V=0;V<H;V++){let le=V*w-Y;Z[v]=le*C,Z[m]=P*M,Z[h]=R,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[h]=I>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(V/T),d.push(1-X/G),W+=1}}for(let X=0;X<G;X++)for(let P=0;P<T;P++){let V=f+P+H*X,le=f+P+H*(X+1),ue=f+(P+1)+H*(X+1),he=f+(P+1)+H*X;c.push(V,le,he),c.push(le,ue,he),ie+=6}a.addGroup(p,ie,x),p+=ie,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=Cs(n[t]);for(let r in i)e[r]=i[r]}return e}function LC(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function I0(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var OC={clone:Cs,merge:qt},FC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FC,this.fragmentShader=UC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=LC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ol=class extends Rs{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yt=class extends ol{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fs=-90,hs=1,Kf=class extends Rs{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(fs,hs,e,t);r.layers=this.layers,this.add(r);let s=new Yt(fs,hs,e,t);s.layers=this.layers,this.add(s);let o=new Yt(fs,hs,e,t);o.layers=this.layers,this.add(o);let a=new Yt(fs,hs,e,t);a.layers=this.layers,this.add(a);let c=new Yt(fs,hs,e,t);c.layers=this.layers,this.add(c);let l=new Yt(fs,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},al=class extends Is{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jf=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===lr?Ot:yn),this.texture=new al(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ri});s.uniforms.tEquirect.value=t;let o=new _n(r,s),a=t.minFilter;return t.minFilter===Uo&&(t.minFilter=vn),new Kf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},Of=new L,kC=new L,BC=new Xe,In=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Of.subVectors(i,t).cross(kC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||BC.getNormalMatrix(e),r=this.coplanarPoint(Of).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ir=new Vo,Hc=new L,cl=class{constructor(e=new In,t=new In,i=new In,r=new In,s=new In,o=new In){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],C=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-s,f-l,m-p,b-h).normalize(),i[1].setComponents(c+s,f+l,m+p,b+h).normalize(),i[2].setComponents(c+o,f+u,m+g,b+C).normalize(),i[3].setComponents(c-o,f-u,m-g,b-C).normalize(),i[4].setComponents(c-a,f-d,m-v,b-M).normalize(),t===ui)i[5].setComponents(c+a,f+d,m+v,b+M).normalize();else if(t===Kc)i[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Hc.x=r.normal.x>0?e.max.x:e.min.x,Hc.y=r.normal.y>0?e.max.y:e.min.y,Hc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function R0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VC(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,f=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,d,f),l.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){let f=u.array,p=u.updateRange;n.bindBuffer(d,l),p.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);d===void 0?i.set(l,r(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}var Qf=class n extends dr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){let C=h*f-o;for(let M=0;M<l;M++){let b=M*d-s;g.push(b,-C,0),v.push(0,0,1),m.push(M/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let C=0;C<a;C++){let M=C+l*h,b=C+l*(h+1),S=C+1+l*(h+1),I=C+1+l*h;p.push(M,b,I),p.push(b,S,I)}this.setIndex(p),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(v,3)),this.setAttribute("uv",new di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},HC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$C=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mA="gl_FragColor = linearToOutputTexel( gl_FragColor );",gA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_A=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,AA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,kA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$A=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eD=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_D=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,MD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ED=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,TD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ND=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WD=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$D=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JD=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eI=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nI=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iI=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rI=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oI=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pI=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:HC,alphahash_pars_fragment:zC,alphamap_fragment:GC,alphamap_pars_fragment:WC,alphatest_fragment:jC,alphatest_pars_fragment:$C,aomap_fragment:qC,aomap_pars_fragment:XC,begin_vertex:YC,beginnormal_vertex:ZC,bsdfs:KC,iridescence_fragment:JC,bumpmap_pars_fragment:QC,clipping_planes_fragment:eA,clipping_planes_pars_fragment:tA,clipping_planes_pars_vertex:nA,clipping_planes_vertex:iA,color_fragment:rA,color_pars_fragment:sA,color_pars_vertex:oA,color_vertex:aA,common:cA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:uA,displacementmap_pars_vertex:dA,displacementmap_vertex:fA,emissivemap_fragment:hA,emissivemap_pars_fragment:pA,colorspace_fragment:mA,colorspace_pars_fragment:gA,envmap_fragment:vA,envmap_common_pars_fragment:yA,envmap_pars_fragment:_A,envmap_pars_vertex:xA,envmap_physical_pars_fragment:PA,envmap_vertex:MA,fog_vertex:EA,fog_pars_vertex:bA,fog_fragment:wA,fog_pars_fragment:SA,gradientmap_pars_fragment:TA,lightmap_fragment:CA,lightmap_pars_fragment:AA,lights_lambert_fragment:DA,lights_lambert_pars_fragment:IA,lights_pars_begin:RA,lights_toon_fragment:NA,lights_toon_pars_fragment:LA,lights_phong_fragment:OA,lights_phong_pars_fragment:FA,lights_physical_fragment:UA,lights_physical_pars_fragment:kA,lights_fragment_begin:BA,lights_fragment_maps:VA,lights_fragment_end:HA,logdepthbuf_fragment:zA,logdepthbuf_pars_fragment:GA,logdepthbuf_pars_vertex:WA,logdepthbuf_vertex:jA,map_fragment:$A,map_pars_fragment:qA,map_particle_fragment:XA,map_particle_pars_fragment:YA,metalnessmap_fragment:ZA,metalnessmap_pars_fragment:KA,morphcolor_vertex:JA,morphnormal_vertex:QA,morphtarget_pars_vertex:eD,morphtarget_vertex:tD,normal_fragment_begin:nD,normal_fragment_maps:iD,normal_pars_fragment:rD,normal_pars_vertex:sD,normal_vertex:oD,normalmap_pars_fragment:aD,clearcoat_normal_fragment_begin:cD,clearcoat_normal_fragment_maps:lD,clearcoat_pars_fragment:uD,iridescence_pars_fragment:dD,opaque_fragment:fD,packing:hD,premultiplied_alpha_fragment:pD,project_vertex:mD,dithering_fragment:gD,dithering_pars_fragment:vD,roughnessmap_fragment:yD,roughnessmap_pars_fragment:_D,shadowmap_pars_fragment:xD,shadowmap_pars_vertex:MD,shadowmap_vertex:ED,shadowmask_pars_fragment:bD,skinbase_vertex:wD,skinning_pars_vertex:SD,skinning_vertex:TD,skinnormal_vertex:CD,specularmap_fragment:AD,specularmap_pars_fragment:DD,tonemapping_fragment:ID,tonemapping_pars_fragment:RD,transmission_fragment:PD,transmission_pars_fragment:ND,uv_pars_fragment:LD,uv_pars_vertex:OD,uv_vertex:FD,worldpos_vertex:UD,background_vert:kD,background_frag:BD,backgroundCube_vert:VD,backgroundCube_frag:HD,cube_vert:zD,cube_frag:GD,depth_vert:WD,depth_frag:jD,distanceRGBA_vert:$D,distanceRGBA_frag:qD,equirect_vert:XD,equirect_frag:YD,linedashed_vert:ZD,linedashed_frag:KD,meshbasic_vert:JD,meshbasic_frag:QD,meshlambert_vert:eI,meshlambert_frag:tI,meshmatcap_vert:nI,meshmatcap_frag:iI,meshnormal_vert:rI,meshnormal_frag:sI,meshphong_vert:oI,meshphong_frag:aI,meshphysical_vert:cI,meshphysical_frag:lI,meshtoon_vert:uI,meshtoon_frag:dI,points_vert:fI,points_frag:hI,shadow_vert:pI,shadow_frag:mI,sprite_vert:gI,sprite_frag:vI},ae={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},qn={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};qn.physical={uniforms:qt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var zc={r:0,b:0,g:0};function yI(n,e,t,i,r,s,o){let a=new ot(0),c=s===!0?0:1,l,u,d=null,f=0,p=null;function g(m,h){let C=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M)),M===null?v(a,c):M&&M.isColor&&(v(M,1),C=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===dl)?(u===void 0&&(u=new _n(new fr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Cs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,I,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ct.getTransfer(M.colorSpace)!==ft,(d!==M||f!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _n(new Qf(2,2),new pi({name:"BackgroundMaterial",uniforms:Cs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,h){m.getRGB(zc,I0(n)),i.buffers.color.setClear(zc.r,zc.g,zc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),c=h,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function _I(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null),l=c,u=!1;function d(R,H,q,W,ie){let Z=!1;if(o){let X=v(W,q,H);l!==X&&(l=X,p(l.object)),Z=h(R,W,q,ie),Z&&C(R,W,q,ie)}else{let X=H.wireframe===!0;(l.geometry!==W.id||l.program!==q.id||l.wireframe!==X)&&(l.geometry=W.id,l.program=q.id,l.wireframe=X,Z=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,G(R,H,q,W),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,H,q){let W=q.wireframe===!0,ie=a[R.id];ie===void 0&&(ie={},a[R.id]=ie);let Z=ie[H.id];Z===void 0&&(Z={},ie[H.id]=Z);let X=Z[W];return X===void 0&&(X=m(f()),Z[W]=X),X}function m(R){let H=[],q=[],W=[];for(let ie=0;ie<r;ie++)H[ie]=0,q[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:W,object:R,attributes:{},index:null}}function h(R,H,q,W){let ie=l.attributes,Z=H.attributes,X=0,P=q.getAttributes();for(let V in P)if(P[V].location>=0){let ue=ie[V],he=Z[V];if(he===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),ue===void 0||ue.attribute!==he||he&&ue.data!==he.data)return!0;X++}return l.attributesNum!==X||l.index!==W}function C(R,H,q,W){let ie={},Z=H.attributes,X=0,P=q.getAttributes();for(let V in P)if(P[V].location>=0){let ue=Z[V];ue===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor));let he={};he.attribute=ue,ue&&ue.data&&(he.data=ue.data),ie[V]=he,X++}l.attributes=ie,l.attributesNum=X,l.index=W}function M(){let R=l.newAttributes;for(let H=0,q=R.length;H<q;H++)R[H]=0}function b(R){S(R,0)}function S(R,H){let q=l.newAttributes,W=l.enabledAttributes,ie=l.attributeDivisors;q[R]=1,W[R]===0&&(n.enableVertexAttribArray(R),W[R]=1),ie[R]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,H),ie[R]=H)}function I(){let R=l.newAttributes,H=l.enabledAttributes;for(let q=0,W=H.length;q<W;q++)H[q]!==R[q]&&(n.disableVertexAttribArray(q),H[q]=0)}function T(R,H,q,W,ie,Z,X){X===!0?n.vertexAttribIPointer(R,H,q,ie,Z):n.vertexAttribPointer(R,H,q,W,ie,Z)}function G(R,H,q,W){if(i.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let ie=W.attributes,Z=q.getAttributes(),X=H.defaultAttributeValues;for(let P in Z){let V=Z[P];if(V.location>=0){let le=ie[P];if(le===void 0&&(P==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),P==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){let ue=le.normalized,he=le.itemSize,Se=t.get(le);if(Se===void 0)continue;let Ye=Se.buffer,Te=Se.type,Pe=Se.bytesPerElement,dt=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||le.gpuType===x0);if(le.isInterleavedBufferAttribute){let Be=le.data,O=Be.stride,Ut=le.offset;if(Be.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)S(V.location+xe,Be.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let xe=0;xe<V.locationSize;xe++)b(V.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let xe=0;xe<V.locationSize;xe++)T(V.location+xe,he/V.locationSize,Te,ue,O*Pe,(Ut+he/V.locationSize*xe)*Pe,dt)}else{if(le.isInstancedBufferAttribute){for(let Be=0;Be<V.locationSize;Be++)S(V.location+Be,le.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Be=0;Be<V.locationSize;Be++)b(V.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Be=0;Be<V.locationSize;Be++)T(V.location+Be,he/V.locationSize,Te,ue,he*Pe,he/V.locationSize*Be*Pe,dt)}}else if(X!==void 0){let ue=X[P];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(V.location,ue);break;case 3:n.vertexAttrib3fv(V.location,ue);break;case 4:n.vertexAttrib4fv(V.location,ue);break;default:n.vertexAttrib1fv(V.location,ue)}}}}I()}function x(){Y();for(let R in a){let H=a[R];for(let q in H){let W=H[q];for(let ie in W)g(W[ie].object),delete W[ie];delete H[q]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;let H=a[R.id];for(let q in H){let W=H[q];for(let ie in W)g(W[ie].object),delete W[ie];delete H[q]}delete a[R.id]}function j(R){for(let H in a){let q=a[H];if(q[R.id]===void 0)continue;let W=q[R.id];for(let ie in W)g(W[ie].object),delete W[ie];delete q[R.id]}}function Y(){Q(),u=!0,l!==c&&(l=c,p(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:Q,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:j,initAttributes:M,enableAttribute:b,disableUnusedAttributes:I}}function xI(n,e,t,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,d){if(d===0)return;let f,p;if(r)f=n,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,u,d),t.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function MI(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,b=o||e.has("OES_texture_float"),S=M&&b,I=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:C,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:I}}function EI(n){let e=this,t=null,i=0,r=!1,s=!1,o=new In,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let C=s?0:i,M=C*4,b=h.clippingState||null;c.value=b,b=u(g,f,M,p);for(let S=0;S!==M;++S)b[S]=t[S];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let h=p+v*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,b=p;M!==v;++M,b+=4)o.copy(d[M]).applyMatrix4(C,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bI(n){let e=new WeakMap;function t(o,a){return a===Gf?o.mapping=Es:a===Wf&&(o.mapping=bs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===Gf||a===Wf)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Jf(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var eh=class extends ol{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vs=4,Ky=[.125,.215,.35,.446,.526,.582],or=20,Ff=new eh,Jy=new ot,Uf=null,kf=0,Bf=0,rr=(1+Math.sqrt(5))/2,ps=1/rr,Qy=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,rr,ps),new L(0,rr,-ps),new L(ps,0,rr),new L(-ps,0,rr),new L(rr,ps,0),new L(-rr,ps,0)],ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,kf,Bf),e.scissorTest=!1,Gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ko,format:Pn,colorSpace:fi,depthBuffer:!1},r=e0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wI(s)),this._blurMaterial=SI(s,e,t)}return r}_compileMaterial(e){let t=new _n(this._lodPlanes[0],e);this._renderer.compile(t,Ff)}_sceneToCubeUV(e,t,i,r){let a=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jy),u.toneMapping=Pi,u.autoClear=!1;let p=new Ts({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new _n(new fr,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jy),v=!0);for(let h=0;h<6;h++){let C=h%3;C===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):C===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));let M=this._cubeSize;Gc(r,C*M,h>2?M:0,M,M),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Es||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Gc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ff)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qy[(r-1)%Qy.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new _n(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*or-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):or;m>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);let h=[],C=0;for(let T=0;T<or;++T){let G=T/v,x=Math.exp(-G*G/2);h.push(x),T===0?C+=x:T<m&&(C+=2*x)}for(let T=0;T<h.length;T++)h[T]=h[T]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let b=this._sizeLods[r],S=3*b*(r>M-vs?r-M+vs:0),I=4*(this._cubeSize-b);Gc(t,S,I,3*b,2*b),c.setRenderTarget(t),c.render(d,Ff)}};function wI(n){let e=[],t=[],i=[],r=n,s=n-vs+1+Ky.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-vs?c=Ky[o-n+vs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,h=1,C=new Float32Array(v*g*p),M=new Float32Array(m*g*p),b=new Float32Array(h*g*p);for(let I=0;I<p;I++){let T=I%3*2/3-1,G=I>2?0:-1,x=[T,G,0,T+2/3,G,0,T+2/3,G+1,0,T,G,0,T+2/3,G+1,0,T,G+1,0];C.set(x,v*g*I),M.set(f,m*g*I);let w=[I,I,I,I,I,I];b.set(w,h*g*I)}let S=new dr;S.setAttribute("position",new xn(C,v)),S.setAttribute("uv",new xn(M,m)),S.setAttribute("faceIndex",new xn(b,h)),e.push(S),r>vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function e0(n,e,t){let i=new hi(n,e,t);return i.texture.mapping=dl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SI(n,e,t){let i=new Float32Array(or),r=new L(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function t0(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function n0(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TI(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Gf||c===Wf,u=c===Es||c===bs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ll(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new ll(n));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function CI(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AI(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(d){let f=[],p=d.index,g=d.attributes.position,v=0;if(p!==null){let C=p.array;v=p.version;for(let M=0,b=C.length;M<b;M+=3){let S=C[M+0],I=C[M+1],T=C[M+2];f.push(S,I,I,T,T,S)}}else if(g!==void 0){let C=g.array;v=g.version;for(let M=0,b=C.length/3-1;M<b;M+=3){let S=M+0,I=M+1,T=M+2;f.push(S,I,I,T,T,S)}}else return;let m=new(A0(f)?sl:rl)(f,1);m.version=v;let h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function DI(n,e,t,i){let r=i.isWebGL2,s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,p){n.drawElements(s,p,a,f*c),t.update(p,s,1)}function d(f,p,g){if(g===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,f*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function II(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function RI(n,e){return n[0]-e[0]}function PI(n,e){return Math.abs(e[1])-Math.abs(n[1])}function NI(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0,m=s.get(u);if(m===void 0||m.count!==v){let H=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();let M=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],G=u.morphAttributes.color||[],x=0;M===!0&&(x=1),b===!0&&(x=2),S===!0&&(x=3);let w=u.attributes.position.count*x,j=1;w>e.maxTextureSize&&(j=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let Y=new Float32Array(w*j*4*v),Q=new nl(Y,w,j,v);Q.type=Ii,Q.needsUpdate=!0;let R=x*4;for(let q=0;q<v;q++){let W=I[q],ie=T[q],Z=G[q],X=w*j*4*q;for(let P=0;P<W.count;P++){let V=P*R;M===!0&&(o.fromBufferAttribute(W,P),Y[X+V+0]=o.x,Y[X+V+1]=o.y,Y[X+V+2]=o.z,Y[X+V+3]=0),b===!0&&(o.fromBufferAttribute(ie,P),Y[X+V+4]=o.x,Y[X+V+5]=o.y,Y[X+V+6]=o.z,Y[X+V+7]=0),S===!0&&(o.fromBufferAttribute(Z,P),Y[X+V+8]=o.x,Y[X+V+9]=o.y,Y[X+V+10]=o.z,Y[X+V+11]=Z.itemSize===4?o.w:1)}}m={count:v,texture:Q,size:new We(w,j)},s.set(u,m),u.addEventListener("dispose",H)}let h=0;for(let M=0;M<f.length;M++)h+=f[M];let C=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",C),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let g=f===void 0?0:f.length,v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];i[u.id]=v}for(let b=0;b<g;b++){let S=v[b];S[0]=b,S[1]=f[b]}v.sort(PI);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(RI);let m=u.morphAttributes.position,h=u.morphAttributes.normal,C=0;for(let b=0;b<8;b++){let S=a[b],I=S[0],T=S[1];I!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+b)!==m[I]&&u.setAttribute("morphTarget"+b,m[I]),h&&u.getAttribute("morphNormal"+b)!==h[I]&&u.setAttribute("morphNormal"+b,h[I]),r[b]=T,C+=T):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),h&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}let M=u.morphTargetsRelative?1:1-C;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function LI(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var P0=new Is,N0=new nl,L0=new Zf,O0=new al,i0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);function Ps(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=i0[r];if(s===void 0&&(s=new Float32Array(r),i0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=r0[e];t===void 0&&(t=new Int32Array(e),r0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function FI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function UI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function kI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function BI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;a0.set(i),n.uniformMatrix2fv(this.addr,!1,a0),At(t,i)}}function VI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;o0.set(i),n.uniformMatrix3fv(this.addr,!1,o0),At(t,i)}}function HI(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Ct(t,i))return;s0.set(i),n.uniformMatrix4fv(this.addr,!1,s0),At(t,i)}}function zI(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function GI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function WI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function jI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function $I(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function XI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function YI(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function ZI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||P0,r)}function KI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||L0,r)}function JI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||O0,r)}function QI(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||N0,r)}function e1(n){switch(n){case 5126:return OI;case 35664:return FI;case 35665:return UI;case 35666:return kI;case 35674:return BI;case 35675:return VI;case 35676:return HI;case 5124:case 35670:return zI;case 35667:case 35671:return GI;case 35668:case 35672:return WI;case 35669:case 35673:return jI;case 5125:return $I;case 36294:return qI;case 36295:return XI;case 36296:return YI;case 35678:case 36198:case 36298:case 36306:case 35682:return ZI;case 35679:case 36299:case 36307:return KI;case 35680:case 36300:case 36308:case 36293:return JI;case 36289:case 36303:case 36311:case 36292:return QI}}function t1(n,e){n.uniform1fv(this.addr,e)}function n1(n,e){let t=Ps(e,this.size,2);n.uniform2fv(this.addr,t)}function i1(n,e){let t=Ps(e,this.size,3);n.uniform3fv(this.addr,t)}function r1(n,e){let t=Ps(e,this.size,4);n.uniform4fv(this.addr,t)}function s1(n,e){let t=Ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function o1(n,e){let t=Ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a1(n,e){let t=Ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function c1(n,e){n.uniform1iv(this.addr,e)}function l1(n,e){n.uniform2iv(this.addr,e)}function u1(n,e){n.uniform3iv(this.addr,e)}function d1(n,e){n.uniform4iv(this.addr,e)}function f1(n,e){n.uniform1uiv(this.addr,e)}function h1(n,e){n.uniform2uiv(this.addr,e)}function p1(n,e){n.uniform3uiv(this.addr,e)}function m1(n,e){n.uniform4uiv(this.addr,e)}function g1(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||P0,s[o])}function v1(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||L0,s[o])}function y1(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||O0,s[o])}function _1(n,e,t){let i=this.cache,r=e.length,s=hl(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||N0,s[o])}function x1(n){switch(n){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return c1;case 35667:case 35671:return l1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return _1}}var th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=e1(t.type)}},nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=x1(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},Vf=/(\w+)(\])?(\[|\.)?/g;function c0(n,e){n.seq.push(e),n.map[e.id]=e}function M1(n,e,t){let i=n.name,r=i.length;for(Vf.lastIndex=0;;){let s=Vf.exec(i),o=Vf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){c0(t,l===void 0?new th(a,n,e):new nh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ih(a),c0(t,d)),t=d}}}var Ms=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);M1(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function l0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var E1=37297,b1=0;function w1(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function S1(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===Zc&&t===Yc?i="LinearDisplayP3ToLinearSRGB":e===Yc&&t===Zc&&(i="LinearSRGBToLinearDisplayP3"),n){case fi:case fl:return[i,"LinearTransferOETF"];case Ot:case bh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function u0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+w1(n.getShaderSource(e),o)}else return r}function T1(n,e){let t=S1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function C1(n,e){let t;switch(e){case RT:t="Linear";break;case PT:t="Reinhard";break;case NT:t="OptimizedCineon";break;case LT:t="ACESFilmic";break;case OT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function A1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Po).join(`
`)}function D1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function I1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function d0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(n){return n.replace(R1,N1)}var P1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function N1(n,e){let t=He[e];if(t===void 0){let i=P1.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rh(t)}var L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h0(n){return n.replace(L1,O1)}function O1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function p0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function U1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Es:case bs:e="ENVMAP_TYPE_CUBE";break;case dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function B1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _0:e="ENVMAP_BLENDING_MULTIPLY";break;case DT:e="ENVMAP_BLENDING_MIX";break;case IT:e="ENVMAP_BLENDING_ADD";break}return e}function V1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function H1(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=F1(t),l=U1(t),u=k1(t),d=B1(t),f=V1(t),p=t.isWebGL2?"":A1(t),g=D1(s),v=r.createProgram(),m,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),h.length>0&&(h+=`
`)):(m=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),h=[p,p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?He.tonemapping_pars_fragment:"",t.toneMapping!==Pi?C1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,T1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=rh(o),o=d0(o,t),o=f0(o,t),a=rh(a),a=d0(a,t),a=f0(a,t),o=h0(o),a=h0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ny?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ny?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let M=C+m+o,b=C+h+a,S=l0(r,r.VERTEX_SHADER,M),I=l0(r,r.FRAGMENT_SHADER,b);r.attachShader(v,S),r.attachShader(v,I),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(j){if(n.debug.checkShaderErrors){let Y=r.getProgramInfoLog(v).trim(),Q=r.getShaderInfoLog(S).trim(),R=r.getShaderInfoLog(I).trim(),H=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,S,I);else{let W=u0(r,S,"vertex"),ie=u0(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+W+`
`+ie)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Q===""||R==="")&&(q=!1);q&&(j.diagnostics={runnable:H,programLog:Y,vertexShader:{log:Q,prefix:m},fragmentShader:{log:R,prefix:h}})}r.deleteShader(S),r.deleteShader(I),G=new Ms(r,v),x=I1(r,v)}let G;this.getUniforms=function(){return G===void 0&&T(this),G};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,E1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=I,this}var z1=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new oh(e),t.set(e,i)),i}},oh=class{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}};function G1(n,e,t,i,r,s,o){let a=new il,c=new sh,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,w,j,Y,Q){let R=Y.fog,H=Q.geometry,q=x.isMeshStandardMaterial?Y.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),ie=W&&W.mapping===dl?W.image.height:null,Z=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,P=X!==void 0?X.length:0,V=0;H.morphAttributes.position!==void 0&&(V=1),H.morphAttributes.normal!==void 0&&(V=2),H.morphAttributes.color!==void 0&&(V=3);let le,ue,he,Se;if(Z){let xt=qn[Z];le=xt.vertexShader,ue=xt.fragmentShader}else le=x.vertexShader,ue=x.fragmentShader,c.update(x),he=c.getVertexShaderID(x),Se=c.getFragmentShaderID(x);let Ye=n.getRenderTarget(),Te=Q.isInstancedMesh===!0,Pe=!!x.map,dt=!!x.matcap,Be=!!W,O=!!x.aoMap,Ut=!!x.lightMap,xe=!!x.bumpMap,Ce=!!x.normalMap,Ae=!!x.displacementMap,ht=!!x.emissiveMap,Fe=!!x.metalnessMap,Le=!!x.roughnessMap,nt=x.anisotropy>0,_t=x.clearcoat>0,Dt=x.iridescence>0,E=x.sheen>0,y=x.transmission>0,F=nt&&!!x.anisotropyMap,ee=_t&&!!x.clearcoatMap,K=_t&&!!x.clearcoatNormalMap,te=_t&&!!x.clearcoatRoughnessMap,me=Dt&&!!x.iridescenceMap,se=Dt&&!!x.iridescenceThicknessMap,ce=E&&!!x.sheenColorMap,A=E&&!!x.sheenRoughnessMap,re=!!x.specularMap,$=!!x.specularColorMap,be=!!x.specularIntensityMap,ve=y&&!!x.transmissionMap,Me=y&&!!x.thicknessMap,pe=!!x.gradientMap,fe=!!x.alphaMap,Ze=x.alphaTest>0,D=!!x.alphaHash,oe=!!x.extensions,J=!!H.attributes.uv1,z=!!H.attributes.uv2,ne=!!H.attributes.uv3,_e=Pi;return x.toneMapped&&(Ye===null||Ye.isXRRenderTarget===!0)&&(_e=n.toneMapping),{isWebGL2:u,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:ue,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Te,instancingColor:Te&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ye===null?n.outputColorSpace:Ye.isXRRenderTarget===!0?Ye.texture.colorSpace:fi,map:Pe,matcap:dt,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:ie,aoMap:O,lightMap:Ut,bumpMap:xe,normalMap:Ce,displacementMap:f&&Ae,emissiveMap:ht,normalMapObjectSpace:Ce&&x.normalMapType===YT,normalMapTangentSpace:Ce&&x.normalMapType===XT,metalnessMap:Fe,roughnessMap:Le,anisotropy:nt,anisotropyMap:F,clearcoat:_t,clearcoatMap:ee,clearcoatNormalMap:K,clearcoatRoughnessMap:te,iridescence:Dt,iridescenceMap:me,iridescenceThicknessMap:se,sheen:E,sheenColorMap:ce,sheenRoughnessMap:A,specularMap:re,specularColorMap:$,specularIntensityMap:be,transmission:y,transmissionMap:ve,thicknessMap:Me,gradientMap:pe,opaque:x.transparent===!1&&x.blending===_s,alphaMap:fe,alphaTest:Ze,alphaHash:D,combine:x.combine,mapUv:Pe&&v(x.map.channel),aoMapUv:O&&v(x.aoMap.channel),lightMapUv:Ut&&v(x.lightMap.channel),bumpMapUv:xe&&v(x.bumpMap.channel),normalMapUv:Ce&&v(x.normalMap.channel),displacementMapUv:Ae&&v(x.displacementMap.channel),emissiveMapUv:ht&&v(x.emissiveMap.channel),metalnessMapUv:Fe&&v(x.metalnessMap.channel),roughnessMapUv:Le&&v(x.roughnessMap.channel),anisotropyMapUv:F&&v(x.anisotropyMap.channel),clearcoatMapUv:ee&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:K&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:A&&v(x.sheenRoughnessMap.channel),specularMapUv:re&&v(x.specularMap.channel),specularColorMapUv:$&&v(x.specularColorMap.channel),specularIntensityMapUv:be&&v(x.specularIntensityMap.channel),transmissionMapUv:ve&&v(x.transmissionMap.channel),thicknessMapUv:Me&&v(x.thicknessMap.channel),alphaMapUv:fe&&v(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||nt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:z,vertexUv3s:ne,pointsUvs:Q.isPoints===!0&&!!H.attributes.uv&&(Pe||fe),fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:oe&&x.extensions.derivatives===!0,extensionFragDepth:oe&&x.extensions.fragDepth===!0,extensionDrawBuffers:oe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let j in x.defines)w.push(j),w.push(x.defines[j]);return x.isRawShaderMaterial===!1&&(C(w,x),M(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function C(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function b(x){let w=g[x.type],j;if(w){let Y=qn[w];j=OC.clone(Y.uniforms)}else j=x.uniforms;return j}function S(x,w){let j;for(let Y=0,Q=l.length;Y<Q;Y++){let R=l[Y];if(R.cacheKey===w){j=R,++j.usedTimes;break}}return j===void 0&&(j=new H1(n,w,x,s),l.push(j)),j}function I(x){if(--x.usedTimes===0){let w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function T(x){c.remove(x)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:b,acquireProgram:S,releaseProgram:I,releaseShaderCache:T,programs:l,dispose:G}}function W1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function j1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function m0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function g0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,v,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function a(d,f,p,g,v,m){let h=o(d,f,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(d,f,p,g,v,m){let h=o(d,f,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||j1),i.length>1&&i.sort(f||m0),r.length>1&&r.sort(f||m0)}function u(){for(let d=e,f=n.length;d<f;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function $1(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new g0,n.set(i,[o])):r>=s.length?(o=new g0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function q1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ot};break;case"SpotLight":t={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function X1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Y1=0;function Z1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K1(n,e){let t=new q1,i=X1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new L);let s=new L,o=new Ht,a=new Ht;function c(u,d){let f=0,p=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let v=0,m=0,h=0,C=0,M=0,b=0,S=0,I=0,T=0,G=0,x=0;u.sort(Z1);let w=d===!0?Math.PI:1;for(let Y=0,Q=u.length;Y<Q;Y++){let R=u[Y],H=R.color,q=R.intensity,W=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=H.r*q*w,p+=H.g*q*w,g+=H.b*q*w;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(R.sh.coefficients[Z],q);x++}else if(R.isDirectionalLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){let X=R.shadow,P=i.get(R);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.directionalShadow[v]=P,r.directionalShadowMap[v]=ie,r.directionalShadowMatrix[v]=R.shadow.matrix,b++}r.directional[v]=Z,v++}else if(R.isSpotLight){let Z=t.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(H).multiplyScalar(q*w),Z.distance=W,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,r.spot[h]=Z;let X=R.shadow;if(R.map&&(r.spotLightMap[T]=R.map,T++,X.updateMatrices(R),R.castShadow&&G++),r.spotLightMatrix[h]=X.matrix,R.castShadow){let P=i.get(R);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.spotShadow[h]=P,r.spotShadowMap[h]=ie,I++}h++}else if(R.isRectAreaLight){let Z=t.get(R);Z.color.copy(H).multiplyScalar(q),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),r.rectArea[C]=Z,C++}else if(R.isPointLight){let Z=t.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity*w),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){let X=R.shadow,P=i.get(R);P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,r.pointShadow[m]=P,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=R.shadow.matrix,S++}r.point[m]=Z,m++}else if(R.isHemisphereLight){let Z=t.get(R);Z.skyColor.copy(R.color).multiplyScalar(q*w),Z.groundColor.copy(R.groundColor).multiplyScalar(q*w),r.hemi[M]=Z,M++}}C>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;let j=r.hash;(j.directionalLength!==v||j.pointLength!==m||j.spotLength!==h||j.rectAreaLength!==C||j.hemiLength!==M||j.numDirectionalShadows!==b||j.numPointShadows!==S||j.numSpotShadows!==I||j.numSpotMaps!==T||j.numLightProbes!==x)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=C,r.point.length=m,r.hemi.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=I+T-G,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=x,j.directionalLength=v,j.pointLength=m,j.spotLength=h,j.rectAreaLength=C,j.hemiLength=M,j.numDirectionalShadows=b,j.numPointShadows=S,j.numSpotShadows=I,j.numSpotMaps=T,j.numLightProbes=x,r.version=Y1++)}function l(u,d){let f=0,p=0,g=0,v=0,m=0,h=d.matrixWorldInverse;for(let C=0,M=u.length;C<M;C++){let b=u[C];if(b.isDirectionalLight){let S=r.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),f++}else if(b.isSpotLight){let S=r.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),g++}else if(b.isRectAreaLight){let S=r.rectArea[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(h),a.identity(),o.copy(b.matrixWorld),o.premultiply(h),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let S=r.point[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(h),p++}else if(b.isHemisphereLight){let S=r.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(h),m++}}}return{setup:c,setupView:l,state:r}}function v0(n,e){let t=new K1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function J1(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new v0(n,e),t.set(s,[c])):o>=a.length?(c=new v0(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var ah=class extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$T,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ch=class extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tR(n,e,t){let i=new cl,r=new We,s=new We,o=new Ft,a=new ah({depthPacking:qT}),c=new ch,l={},u=t.maxTextureSize,d={[Li]:Qt,[Qt]:Li,[li]:li},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Q1,fragmentShader:eR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new dr;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let h=this.type;this.render=function(S,I,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let G=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Ri),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let Y=h!==ci&&this.type===ci,Q=h===ci&&this.type!==ci;for(let R=0,H=S.length;R<H;R++){let q=S[R],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let ie=W.getFrameExtents();if(r.multiply(ie),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y)),W.map===null||Y===!0||Q===!0){let X=this.type!==ci?{minFilter:Xt,magFilter:Xt}:{};W.map!==null&&W.map.dispose(),W.map=new hi(r.x,r.y,X),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let Z=W.getViewportCount();for(let X=0;X<Z;X++){let P=W.getViewport(X);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),j.viewport(o),W.updateMatrices(q,X),i=W.getFrustum(),b(I,T,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===ci&&C(W,T),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(G,x,w)};function C(S,I){let T=e.update(v);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new hi(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(I,null,T,f,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(I,null,T,p,v,null)}function M(S,I,T,G){let x=null,w=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)x=w;else if(x=T.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let j=x.uuid,Y=I.uuid,Q=l[j];Q===void 0&&(Q={},l[j]=Q);let R=Q[Y];R===void 0&&(R=x.clone(),Q[Y]=R),x=R}if(x.visible=I.visible,x.wireframe=I.wireframe,G===ci?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:d[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let j=n.properties.get(x);j.light=T}return x}function b(S,I,T,G,x){if(S.visible===!1)return;if(S.layers.test(I.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===ci)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let Y=e.update(S),Q=S.material;if(Array.isArray(Q)){let R=Y.groups;for(let H=0,q=R.length;H<q;H++){let W=R[H],ie=Q[W.materialIndex];if(ie&&ie.visible){let Z=M(S,ie,G,x);n.renderBufferDirect(T,null,Y,Z,S,W)}}}else if(Q.visible){let R=M(S,Q,G,x);n.renderBufferDirect(T,null,Y,R,S,null)}}let j=S.children;for(let Y=0,Q=j.length;Y<Q;Y++)b(j[Y],I,T,G,x)}}function nR(n,e,t){let i=t.isWebGL2;function r(){let D=!1,oe=new Ft,J=null,z=new Ft(0,0,0,0);return{setMask:function(ne){J!==ne&&!D&&(n.colorMask(ne,ne,ne,ne),J=ne)},setLocked:function(ne){D=ne},setClear:function(ne,_e,Ke,xt,dn){dn===!0&&(ne*=xt,_e*=xt,Ke*=xt),oe.set(ne,_e,Ke,xt),z.equals(oe)===!1&&(n.clearColor(ne,_e,Ke,xt),z.copy(oe))},reset:function(){D=!1,J=null,z.set(-1,0,0,0)}}}function s(){let D=!1,oe=null,J=null,z=null;return{setTest:function(ne){ne?Pe(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(ne){oe!==ne&&!D&&(n.depthMask(ne),oe=ne)},setFunc:function(ne){if(J!==ne){switch(ne){case ET:n.depthFunc(n.NEVER);break;case bT:n.depthFunc(n.ALWAYS);break;case wT:n.depthFunc(n.LESS);break;case jc:n.depthFunc(n.LEQUAL);break;case ST:n.depthFunc(n.EQUAL);break;case TT:n.depthFunc(n.GEQUAL);break;case CT:n.depthFunc(n.GREATER);break;case AT:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ne}},setLocked:function(ne){D=ne},setClear:function(ne){z!==ne&&(n.clearDepth(ne),z=ne)},reset:function(){D=!1,oe=null,J=null,z=null}}}function o(){let D=!1,oe=null,J=null,z=null,ne=null,_e=null,Ke=null,xt=null,dn=null;return{setTest:function(ut){D||(ut?Pe(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(ut){oe!==ut&&!D&&(n.stencilMask(ut),oe=ut)},setFunc:function(ut,zt,On){(J!==ut||z!==zt||ne!==On)&&(n.stencilFunc(ut,zt,On),J=ut,z=zt,ne=On)},setOp:function(ut,zt,On){(_e!==ut||Ke!==zt||xt!==On)&&(n.stencilOp(ut,zt,On),_e=ut,Ke=zt,xt=On)},setLocked:function(ut){D=ut},setClear:function(ut){dn!==ut&&(n.clearStencil(ut),dn=ut)},reset:function(){D=!1,oe=null,J=null,z=null,ne=null,_e=null,Ke=null,xt=null,dn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},g=new WeakMap,v=[],m=null,h=!1,C=null,M=null,b=null,S=null,I=null,T=null,G=null,x=new ot(0,0,0),w=0,j=!1,Y=null,Q=null,R=null,H=null,q=null,W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,Z=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),ie=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ie=Z>=2);let P=null,V={},le=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),he=new Ft().fromArray(le),Se=new Ft().fromArray(ue);function Ye(D,oe,J,z){let ne=new Uint8Array(4),_e=n.createTexture();n.bindTexture(D,_e),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<J;Ke++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(oe+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return _e}let Te={};Te[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(n.DEPTH_TEST),c.setFunc(jc),Fe(!1),Le(Yv),Pe(n.CULL_FACE),Ae(Ri);function Pe(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function dt(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Be(D,oe){return p[D]!==oe?(n.bindFramebuffer(D,oe),p[D]=oe,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=oe),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(D,oe){let J=v,z=!1;if(D)if(J=g.get(oe),J===void 0&&(J=[],g.set(oe,J)),D.isWebGLMultipleRenderTargets){let ne=D.texture;if(J.length!==ne.length||J[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Ke=ne.length;_e<Ke;_e++)J[_e]=n.COLOR_ATTACHMENT0+_e;J.length=ne.length,z=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,z=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,z=!0);z&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ut(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let xe={[sr]:n.FUNC_ADD,[aT]:n.FUNC_SUBTRACT,[cT]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[Qv]=n.MIN,xe[ey]=n.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(xe[Qv]=D.MIN_EXT,xe[ey]=D.MAX_EXT)}let Ce={[lT]:n.ZERO,[uT]:n.ONE,[dT]:n.SRC_COLOR,[Hf]:n.SRC_ALPHA,[vT]:n.SRC_ALPHA_SATURATE,[mT]:n.DST_COLOR,[hT]:n.DST_ALPHA,[fT]:n.ONE_MINUS_SRC_COLOR,[zf]:n.ONE_MINUS_SRC_ALPHA,[gT]:n.ONE_MINUS_DST_COLOR,[pT]:n.ONE_MINUS_DST_ALPHA,[yT]:n.CONSTANT_COLOR,[_T]:n.ONE_MINUS_CONSTANT_COLOR,[xT]:n.CONSTANT_ALPHA,[MT]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(D,oe,J,z,ne,_e,Ke,xt,dn,ut){if(D===Ri){h===!0&&(dt(n.BLEND),h=!1);return}if(h===!1&&(Pe(n.BLEND),h=!0),D!==oT){if(D!==C||ut!==j){if((M!==sr||I!==sr)&&(n.blendEquation(n.FUNC_ADD),M=sr,I=sr),ut)switch(D){case _s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zv:n.blendFunc(n.ONE,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,T=null,G=null,x.set(0,0,0),w=0,C=D,j=ut}return}ne=ne||oe,_e=_e||J,Ke=Ke||z,(oe!==M||ne!==I)&&(n.blendEquationSeparate(xe[oe],xe[ne]),M=oe,I=ne),(J!==b||z!==S||_e!==T||Ke!==G)&&(n.blendFuncSeparate(Ce[J],Ce[z],Ce[_e],Ce[Ke]),b=J,S=z,T=_e,G=Ke),(xt.equals(x)===!1||dn!==w)&&(n.blendColor(xt.r,xt.g,xt.b,dn),x.copy(xt),w=dn),C=D,j=!1}function ht(D,oe){D.side===li?dt(n.CULL_FACE):Pe(n.CULL_FACE);let J=D.side===Qt;oe&&(J=!J),Fe(J),D.blending===_s&&D.transparent===!1?Ae(Ri):Ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let z=D.stencilWrite;l.setTest(z),z&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){Y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),Y=D)}function Le(D){D!==iT?(Pe(n.CULL_FACE),D!==Q&&(D===Yv?n.cullFace(n.BACK):D===rT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),Q=D}function nt(D){D!==R&&(ie&&n.lineWidth(D),R=D)}function _t(D,oe,J){D?(Pe(n.POLYGON_OFFSET_FILL),(H!==oe||q!==J)&&(n.polygonOffset(oe,J),H=oe,q=J)):dt(n.POLYGON_OFFSET_FILL)}function Dt(D){D?Pe(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function E(D){D===void 0&&(D=n.TEXTURE0+W-1),P!==D&&(n.activeTexture(D),P=D)}function y(D,oe,J){J===void 0&&(P===null?J=n.TEXTURE0+W-1:J=P);let z=V[J];z===void 0&&(z={type:void 0,texture:void 0},V[J]=z),(z.type!==D||z.texture!==oe)&&(P!==J&&(n.activeTexture(J),P=J),n.bindTexture(D,oe||Te[D]),z.type=D,z.texture=oe)}function F(){let D=V[P];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){he.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),he.copy(D))}function Me(D){Se.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function pe(D,oe){let J=d.get(oe);J===void 0&&(J=new WeakMap,d.set(oe,J));let z=J.get(D);z===void 0&&(z=n.getUniformBlockIndex(oe,D.name),J.set(D,z))}function fe(D,oe){let z=d.get(oe).get(D);u.get(oe)!==z&&(n.uniformBlockBinding(oe,z,D.__bindingPointIndex),u.set(oe,z))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},P=null,V={},p={},g=new WeakMap,v=[],m=null,h=!1,C=null,M=null,b=null,S=null,I=null,T=null,G=null,x=new ot(0,0,0),w=0,j=!1,Y=null,Q=null,R=null,H=null,q=null,he.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pe,disable:dt,bindFramebuffer:Be,drawBuffers:O,useProgram:Ut,setBlending:Ae,setMaterial:ht,setFlipSided:Fe,setCullFace:Le,setLineWidth:nt,setPolygonOffset:_t,setScissorTest:Dt,activeTexture:E,bindTexture:y,unbindTexture:F,compressedTexImage2D:ee,compressedTexImage3D:K,texImage2D:$,texImage3D:be,updateUBOMapping:pe,uniformBlockBinding:fe,texStorage2D:A,texStorage3D:re,texSubImage2D:te,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:ve,viewport:Me,reset:Ze}}function iR(n,e,t,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,v,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(E,y){return h?new OffscreenCanvas(E,y):Qc("canvas")}function M(E,y,F,ee){let K=1;if((E.width>ee||E.height>ee)&&(K=ee/Math.max(E.width,E.height)),K<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let te=y?Jc:Math.floor,me=te(K*E.width),se=te(K*E.height);v===void 0&&(v=C(me,se));let ce=F?C(me,se):v;return ce.width=me,ce.height=se,ce.getContext("2d").drawImage(E,0,0,me,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+se+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return Xf(E.width)&&Xf(E.height)}function S(E){return a?!1:E.wrapS!==Rn||E.wrapT!==Rn||E.minFilter!==Xt&&E.minFilter!==vn}function I(E,y){return E.generateMipmaps&&y&&E.minFilter!==Xt&&E.minFilter!==vn}function T(E){n.generateMipmap(E)}function G(E,y,F,ee,K=!1){if(a===!1)return y;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=y;if(y===n.RED&&(F===n.FLOAT&&(te=n.R32F),F===n.HALF_FLOAT&&(te=n.R16F),F===n.UNSIGNED_BYTE&&(te=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(te=n.R8UI),F===n.UNSIGNED_SHORT&&(te=n.R16UI),F===n.UNSIGNED_INT&&(te=n.R32UI),F===n.BYTE&&(te=n.R8I),F===n.SHORT&&(te=n.R16I),F===n.INT&&(te=n.R32I)),y===n.RG&&(F===n.FLOAT&&(te=n.RG32F),F===n.HALF_FLOAT&&(te=n.RG16F),F===n.UNSIGNED_BYTE&&(te=n.RG8)),y===n.RGBA){let me=K?Xc:ct.getTransfer(ee);F===n.FLOAT&&(te=n.RGBA32F),F===n.HALF_FLOAT&&(te=n.RGBA16F),F===n.UNSIGNED_BYTE&&(te=me===ft?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(E,y,F){return I(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==Xt&&E.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function w(E){return E===Xt||E===ny||E===ff?n.NEAREST:n.LINEAR}function j(E){let y=E.target;y.removeEventListener("dispose",j),Q(y),y.isVideoTexture&&g.delete(y)}function Y(E){let y=E.target;y.removeEventListener("dispose",Y),H(y)}function Q(E){let y=i.get(E);if(y.__webglInit===void 0)return;let F=E.source,ee=m.get(F);if(ee){let K=ee[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(E),Object.keys(ee).length===0&&m.delete(F)}i.remove(E)}function R(E){let y=i.get(E);n.deleteTexture(y.__webglTexture);let F=E.source,ee=m.get(F);delete ee[y.__cacheKey],o.memory.textures--}function H(E){let y=E.texture,F=i.get(E),ee=i.get(y);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(F.__webglFramebuffer[K]))for(let te=0;te<F.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(F.__webglFramebuffer[K][te]);else n.deleteFramebuffer(F.__webglFramebuffer[K]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[K])}else{if(Array.isArray(F.__webglFramebuffer))for(let K=0;K<F.__webglFramebuffer.length;K++)n.deleteFramebuffer(F.__webglFramebuffer[K]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,te=y.length;K<te;K++){let me=i.get(y[K]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(y[K])}i.remove(y),i.remove(E)}let q=0;function W(){q=0}function ie(){let E=q;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),q+=1,E}function Z(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function X(E,y){let F=i.get(E);if(E.isVideoTexture&&_t(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(F,E,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function P(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){Pe(F,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function V(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){Pe(F,E,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function le(E,y){let F=i.get(E);if(E.version>0&&F.__version!==E.version){dt(F,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}let ue={[jf]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[$f]:n.MIRRORED_REPEAT},he={[Xt]:n.NEAREST,[ny]:n.NEAREST_MIPMAP_NEAREST,[ff]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[FT]:n.LINEAR_MIPMAP_NEAREST,[Uo]:n.LINEAR_MIPMAP_LINEAR},Se={[ZT]:n.NEVER,[iC]:n.ALWAYS,[KT]:n.LESS,[QT]:n.LEQUAL,[JT]:n.EQUAL,[nC]:n.GEQUAL,[eC]:n.GREATER,[tC]:n.NOTEQUAL};function Ye(E,y,F){if(F?(n.texParameteri(E,n.TEXTURE_WRAP_S,ue[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ue[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ue[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,he[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,he[y.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Rn||y.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(y.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Xt&&y.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Xt||y.minFilter!==ff&&y.minFilter!==Uo||y.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ko&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Te(E,y){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",j));let ee=y.source,K=m.get(ee);K===void 0&&(K={},m.set(ee,K));let te=Z(y);if(te!==E.__cacheKey){K[te]===void 0&&(K[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),K[te].usedTimes++;let me=K[E.__cacheKey];me!==void 0&&(K[E.__cacheKey].usedTimes--,me.usedTimes===0&&R(y)),E.__cacheKey=te,E.__webglTexture=K[te].texture}return F}function Pe(E,y,F){let ee=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=n.TEXTURE_3D);let K=Te(E,y),te=y.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+F);let me=i.get(te);if(te.version!==me.__version||K===!0){t.activeTexture(n.TEXTURE0+F);let se=ct.getPrimaries(ct.workingColorSpace),ce=y.colorSpace===yn?null:ct.getPrimaries(y.colorSpace),A=y.colorSpace===yn||se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let re=S(y)&&b(y.image)===!1,$=M(y.image,re,!1,u);$=Dt(y,$);let be=b($)||a,ve=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),pe=G(y.internalFormat,ve,Me,y.colorSpace,y.isVideoTexture);Ye(ee,y,be);let fe,Ze=y.mipmaps,D=a&&y.isVideoTexture!==!0,oe=me.__version===void 0||K===!0,J=x(y,$,be);if(y.isDepthTexture)pe=n.DEPTH_COMPONENT,a?y.type===Ii?pe=n.DEPTH_COMPONENT32F:y.type===Di?pe=n.DEPTH_COMPONENT24:y.type===ar?pe=n.DEPTH24_STENCIL8:pe=n.DEPTH_COMPONENT16:y.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===cr&&pe===n.DEPTH_COMPONENT&&y.type!==Eh&&y.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Di,Me=s.convert(y.type)),y.format===ws&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,y.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ar,Me=s.convert(y.type))),oe&&(D?t.texStorage2D(n.TEXTURE_2D,1,pe,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,pe,$.width,$.height,0,ve,Me,null));else if(y.isDataTexture)if(Ze.length>0&&be){D&&oe&&t.texStorage2D(n.TEXTURE_2D,J,pe,Ze[0].width,Ze[0].height);for(let z=0,ne=Ze.length;z<ne;z++)fe=Ze[z],D?t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,ve,Me,fe.data):t.texImage2D(n.TEXTURE_2D,z,pe,fe.width,fe.height,0,ve,Me,fe.data);y.generateMipmaps=!1}else D?(oe&&t.texStorage2D(n.TEXTURE_2D,J,pe,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,$.width,$.height,ve,Me,$.data)):t.texImage2D(n.TEXTURE_2D,0,pe,$.width,$.height,0,ve,Me,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,pe,Ze[0].width,Ze[0].height,$.depth);for(let z=0,ne=Ze.length;z<ne;z++)fe=Ze[z],y.format!==Pn?ve!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,$.depth,ve,fe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,z,pe,fe.width,fe.height,$.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,z,0,0,0,fe.width,fe.height,$.depth,ve,Me,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,z,pe,fe.width,fe.height,$.depth,0,ve,Me,fe.data)}else{D&&oe&&t.texStorage2D(n.TEXTURE_2D,J,pe,Ze[0].width,Ze[0].height);for(let z=0,ne=Ze.length;z<ne;z++)fe=Ze[z],y.format!==Pn?ve!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,ve,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,z,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,z,0,0,fe.width,fe.height,ve,Me,fe.data):t.texImage2D(n.TEXTURE_2D,z,pe,fe.width,fe.height,0,ve,Me,fe.data)}else if(y.isDataArrayTexture)D?(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,J,pe,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ve,Me,$.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,$.width,$.height,$.depth,0,ve,Me,$.data);else if(y.isData3DTexture)D?(oe&&t.texStorage3D(n.TEXTURE_3D,J,pe,$.width,$.height,$.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ve,Me,$.data)):t.texImage3D(n.TEXTURE_3D,0,pe,$.width,$.height,$.depth,0,ve,Me,$.data);else if(y.isFramebufferTexture){if(oe)if(D)t.texStorage2D(n.TEXTURE_2D,J,pe,$.width,$.height);else{let z=$.width,ne=$.height;for(let _e=0;_e<J;_e++)t.texImage2D(n.TEXTURE_2D,_e,pe,z,ne,0,ve,Me,null),z>>=1,ne>>=1}}else if(Ze.length>0&&be){D&&oe&&t.texStorage2D(n.TEXTURE_2D,J,pe,Ze[0].width,Ze[0].height);for(let z=0,ne=Ze.length;z<ne;z++)fe=Ze[z],D?t.texSubImage2D(n.TEXTURE_2D,z,0,0,ve,Me,fe):t.texImage2D(n.TEXTURE_2D,z,pe,ve,Me,fe);y.generateMipmaps=!1}else D?(oe&&t.texStorage2D(n.TEXTURE_2D,J,pe,$.width,$.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Me,$)):t.texImage2D(n.TEXTURE_2D,0,pe,ve,Me,$);I(y,be)&&T(ee),me.__version=te.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function dt(E,y,F){if(y.image.length!==6)return;let ee=Te(E,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let te=i.get(K);if(K.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+F);let me=ct.getPrimaries(ct.workingColorSpace),se=y.colorSpace===yn?null:ct.getPrimaries(y.colorSpace),ce=y.colorSpace===yn||me===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let A=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,$=[];for(let z=0;z<6;z++)!A&&!re?$[z]=M(y.image[z],!1,!0,l):$[z]=re?y.image[z].image:y.image[z],$[z]=Dt(y,$[z]);let be=$[0],ve=b(be)||a,Me=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),fe=G(y.internalFormat,Me,pe,y.colorSpace),Ze=a&&y.isVideoTexture!==!0,D=te.__version===void 0||ee===!0,oe=x(y,be,ve);Ye(n.TEXTURE_CUBE_MAP,y,ve);let J;if(A){Ze&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,fe,be.width,be.height);for(let z=0;z<6;z++){J=$[z].mipmaps;for(let ne=0;ne<J.length;ne++){let _e=J[ne];y.format!==Pn?Me!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,_e.width,_e.height,Me,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,_e.width,_e.height,Me,pe,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,fe,_e.width,_e.height,0,Me,pe,_e.data)}}}else{J=y.mipmaps,Ze&&D&&(J.length>0&&oe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,fe,$[0].width,$[0].height));for(let z=0;z<6;z++)if(re){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,$[z].width,$[z].height,Me,pe,$[z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,$[z].width,$[z].height,0,Me,pe,$[z].data);for(let ne=0;ne<J.length;ne++){let Ke=J[ne].image[z].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Ke.width,Ke.height,Me,pe,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,Ke.width,Ke.height,0,Me,pe,Ke.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Me,pe,$[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,fe,Me,pe,$[z]);for(let ne=0;ne<J.length;ne++){let _e=J[ne];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Me,pe,_e.image[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,fe,Me,pe,_e.image[z])}}}I(y,ve)&&T(n.TEXTURE_CUBE_MAP),te.__version=K.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Be(E,y,F,ee,K,te){let me=s.convert(F.format,F.colorSpace),se=s.convert(F.type),ce=G(F.internalFormat,me,se,F.colorSpace);if(!i.get(y).__hasExternalTextures){let re=Math.max(1,y.width>>te),$=Math.max(1,y.height>>te);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,te,ce,re,$,y.depth,0,me,se,null):t.texImage2D(K,te,ce,re,$,0,me,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),nt(y)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,K,i.get(F).__webglTexture,0,Le(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,K,i.get(F).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(E,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let ee=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||nt(y)){let K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Ii?ee=n.DEPTH_COMPONENT32F:K.type===Di&&(ee=n.DEPTH_COMPONENT24));let te=Le(y);nt(y)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ee,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ee,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ee,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){let ee=Le(y);F&&nt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,y.width,y.height):nt(y)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0;K<ee.length;K++){let te=ee[K],me=s.convert(te.format,te.colorSpace),se=s.convert(te.type),ce=G(te.internalFormat,me,se,te.colorSpace),A=Le(y);F&&nt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,A,ce,y.width,y.height):nt(y)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A,ce,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ce,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let ee=i.get(y.depthTexture).__webglTexture,K=Le(y);if(y.depthTexture.format===cr)nt(y)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(y.depthTexture.format===ws)nt(y)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xe(E){let y=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(y.__webglFramebuffer,E)}else if(F){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=n.createRenderbuffer(),O(y.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),O(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(E,y,F){let ee=i.get(E);y!==void 0&&Be(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&xe(E)}function Ae(E){let y=E.texture,F=i.get(E),ee=i.get(y);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=y.version,o.memory.textures++);let K=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,me=b(E)||a;if(K){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ce=0;ce<y.mipmaps.length;ce++)F.__webglFramebuffer[se][ce]=n.createFramebuffer()}else F.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)F.__webglFramebuffer[se]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){let se=E.texture;for(let ce=0,A=se.length;ce<A;ce++){let re=i.get(se[ce]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&nt(E)===!1){let se=te?y:[y];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){let A=se[ce];F.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);let re=s.convert(A.format,A.colorSpace),$=s.convert(A.type),be=G(A.internalFormat,re,$,A.colorSpace,E.isXRRenderTarget===!0),ve=Le(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),O(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,y,me);for(let se=0;se<6;se++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Be(F.__webglFramebuffer[se][ce],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else Be(F.__webglFramebuffer[se],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);I(y,me)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let se=E.texture;for(let ce=0,A=se.length;ce<A;ce++){let re=se[ce],$=i.get(re);t.bindTexture(n.TEXTURE_2D,$.__webglTexture),Ye(n.TEXTURE_2D,re,me),Be(F.__webglFramebuffer,E,re,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),I(re,me)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?se=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ee.__webglTexture),Ye(se,y,me),a&&y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Be(F.__webglFramebuffer[ce],E,y,n.COLOR_ATTACHMENT0,se,ce);else Be(F.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,se,0);I(y,me)&&T(se),t.unbindTexture()}E.depthBuffer&&xe(E)}function ht(E){let y=b(E)||a,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,K=F.length;ee<K;ee++){let te=F[ee];if(I(te,y)){let me=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(te).__webglTexture;t.bindTexture(me,se),T(me),t.unbindTexture()}}}function Fe(E){if(a&&E.samples>0&&nt(E)===!1){let y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,ee=E.height,K=n.COLOR_BUFFER_BIT,te=[],me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(E),ce=E.isWebGLMultipleRenderTargets===!0;if(ce)for(let A=0;A<y.length;A++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let A=0;A<y.length;A++){te.push(n.COLOR_ATTACHMENT0+A),E.depthBuffer&&te.push(me);let re=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(re===!1&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[A]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[me])),ce){let $=i.get(y[A]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$,0)}n.blitFramebuffer(0,0,F,ee,0,0,F,ee,K,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let A=0;A<y.length;A++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.RENDERBUFFER,se.__webglColorRenderbuffer[A]);let re=i.get(y[A]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+A,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Le(E){return Math.min(d,E.samples)}function nt(E){let y=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _t(E){let y=o.render.frame;g.get(E)!==y&&(g.set(E,y),E.update())}function Dt(E,y){let F=E.colorSpace,ee=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===qf||F!==fi&&F!==yn&&(ct.getTransfer(F)===ft?a===!1?e.has("EXT_sRGB")===!0&&ee===Pn?(E.format=qf,E.minFilter=vn,E.generateMipmaps=!1):y=el.sRGBToLinear(y):(ee!==Pn||K!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}this.allocateTextureUnit=ie,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=P,this.setTexture3D=V,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=nt}function rR(n,e,t){let i=t.isWebGL2;function r(s,o=yn){let a,c=ct.getTransfer(o);if(s===Ni)return n.UNSIGNED_BYTE;if(s===M0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===E0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===UT)return n.BYTE;if(s===kT)return n.SHORT;if(s===Eh)return n.UNSIGNED_SHORT;if(s===x0)return n.INT;if(s===Di)return n.UNSIGNED_INT;if(s===Ii)return n.FLOAT;if(s===ko)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===BT)return n.ALPHA;if(s===Pn)return n.RGBA;if(s===VT)return n.LUMINANCE;if(s===HT)return n.LUMINANCE_ALPHA;if(s===cr)return n.DEPTH_COMPONENT;if(s===ws)return n.DEPTH_STENCIL;if(s===qf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zT)return n.RED;if(s===b0)return n.RED_INTEGER;if(s===GT)return n.RG;if(s===w0)return n.RG_INTEGER;if(s===S0)return n.RGBA_INTEGER;if(s===hf||s===pf||s===mf||s===gf)if(c===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===iy||s===ry||s===sy||s===oy)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===iy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ry)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oy)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===WT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ay||s===cy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ay)return c===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ly||s===uy||s===dy||s===fy||s===hy||s===py||s===my||s===gy||s===vy||s===yy||s===_y||s===xy||s===My||s===Ey)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ly)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===py)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===my)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_y)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xy)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===My)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ey)return c===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vf||s===by||s===wy)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vf)return c===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===by)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wy)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jT||s===Sy||s===Ty||s===Cy)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===vf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Sy)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ty)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cy)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ar?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var lh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ys=class extends Rs{constructor(){super(),this.isGroup=!0,this.type="Group"}},sR={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},uh=class extends Is{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:cr,u!==cr&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===cr&&(i=Di),i===void 0&&u===ws&&(i=ar),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dh=class extends Xn{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null,v=t.getContextAttributes(),m=null,h=null,C=[],M=[],b=new Yt;b.layers.enable(1),b.viewport=new Ft;let S=new Yt;S.layers.enable(2),S.viewport=new Ft;let I=[b,S],T=new lh;T.layers.enable(1),T.layers.enable(2);let G=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let V=C[P];return V===void 0&&(V=new Fo,C[P]=V),V.getTargetRaySpace()},this.getControllerGrip=function(P){let V=C[P];return V===void 0&&(V=new Fo,C[P]=V),V.getGripSpace()},this.getHand=function(P){let V=C[P];return V===void 0&&(V=new Fo,C[P]=V),V.getHandSpace()};function w(P){let V=M.indexOf(P.inputSource);if(V===-1)return;let le=C[V];le!==void 0&&(le.update(P.inputSource,P.frame,l||o),le.dispatchEvent({type:P.type,data:P.inputSource}))}function j(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let P=0;P<C.length;P++){let V=M[P];V!==null&&(M[P]=null,C[P].disconnect(V))}G=null,x=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,h=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(P){return Uh(this,null,function*(){if(r=P,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&(yield t.makeXRCompatible()),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let V={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:p}),h=new hi(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let V=null,le=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=v.stencil?ws:cr,le=v.stencil?ar:Di);let he={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(he),r.updateRenderState({layers:[f]}),h=new hi(f.textureWidth,f.textureHeight,{format:Pn,type:Ni,depthTexture:new uh(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Se=e.properties.get(h);Se.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(P){for(let V=0;V<P.removed.length;V++){let le=P.removed[V],ue=M.indexOf(le);ue>=0&&(M[ue]=null,C[ue].disconnect(le))}for(let V=0;V<P.added.length;V++){let le=P.added[V],ue=M.indexOf(le);if(ue===-1){for(let Se=0;Se<C.length;Se++)if(Se>=M.length){M.push(le),ue=Se;break}else if(M[Se]===null){M[Se]=le,ue=Se;break}if(ue===-1)break}let he=C[ue];he&&he.connect(le)}}let Q=new L,R=new L;function H(P,V,le){Q.setFromMatrixPosition(V.matrixWorld),R.setFromMatrixPosition(le.matrixWorld);let ue=Q.distanceTo(R),he=V.projectionMatrix.elements,Se=le.projectionMatrix.elements,Ye=he[14]/(he[10]-1),Te=he[14]/(he[10]+1),Pe=(he[9]+1)/he[5],dt=(he[9]-1)/he[5],Be=(he[8]-1)/he[0],O=(Se[8]+1)/Se[0],Ut=Ye*Be,xe=Ye*O,Ce=ue/(-Be+O),Ae=Ce*-Be;V.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ae),P.translateZ(Ce),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();let ht=Ye+Ce,Fe=Te+Ce,Le=Ut-Ae,nt=xe+(ue-Ae),_t=Pe*Te/Fe*ht,Dt=dt*Te/Fe*ht;P.projectionMatrix.makePerspective(Le,nt,_t,Dt,ht,Fe),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function q(P,V){V===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(V.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;T.near=S.near=b.near=P.near,T.far=S.far=b.far=P.far,(G!==T.near||x!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),G=T.near,x=T.far);let V=P.parent,le=T.cameras;q(T,V);for(let ue=0;ue<le.length;ue++)q(le[ue],V);le.length===2?H(T,b,S):T.projectionMatrix.copy(b.projectionMatrix),W(P,T,V)};function W(P,V,le){le===null?P.matrix.copy(V.matrixWorld):(P.matrix.copy(le.matrixWorld),P.matrix.invert(),P.matrix.multiply(V.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(V.projectionMatrix),P.projectionMatrixInverse.copy(V.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Bo*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(P){c=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)};let ie=null;function Z(P,V){if(u=V.getViewerPose(l||o),g=V,u!==null){let le=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ue=!1;le.length!==T.cameras.length&&(T.cameras.length=0,ue=!0);for(let he=0;he<le.length;he++){let Se=le[he],Ye=null;if(p!==null)Ye=p.getViewport(Se);else{let Pe=d.getViewSubImage(f,Se);Ye=Pe.viewport,he===0&&(e.setRenderTargetTextures(h,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(h))}let Te=I[he];Te===void 0&&(Te=new Yt,Te.layers.enable(he),Te.viewport=new Ft,I[he]=Te),Te.matrix.fromArray(Se.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Se.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),he===0&&(T.matrix.copy(Te.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ue===!0&&T.cameras.push(Te)}}for(let le=0;le<C.length;le++){let ue=M[le],he=C[le];ue!==null&&he!==void 0&&he.update(ue,V,l||o)}ie&&ie(P,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}let X=new R0;X.setAnimationLoop(Z),this.setAnimationLoop=function(P){ie=P},this.dispose=function(){}}};function oR(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,I0(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,C,M,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,b)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,C,M):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Qt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Qt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let C=e.get(h).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,C,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*C,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,C){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Qt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){let C=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aR(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(C,M){let b=M.program;i.uniformBlockBinding(C,b)}function l(C,M){let b=r[C.id];b===void 0&&(g(C),b=u(C),r[C.id]=b,C.addEventListener("dispose",m));let S=M.program;i.updateUBOMapping(C,S);let I=e.render.frame;s[C.id]!==I&&(f(C),s[C.id]=I)}function u(C){let M=d();C.__bindingPointIndex=M;let b=n.createBuffer(),S=C.__size,I=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let M=r[C.id],b=C.uniforms,S=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let I=0,T=b.length;I<T;I++){let G=b[I];if(p(G,I,S)===!0){let x=G.__offset,w=Array.isArray(G.value)?G.value:[G.value],j=0;for(let Y=0;Y<w.length;Y++){let Q=w[Y],R=v(Q);typeof Q=="number"?(G.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,x+j,G.__data)):Q.isMatrix3?(G.__data[0]=Q.elements[0],G.__data[1]=Q.elements[1],G.__data[2]=Q.elements[2],G.__data[3]=Q.elements[0],G.__data[4]=Q.elements[3],G.__data[5]=Q.elements[4],G.__data[6]=Q.elements[5],G.__data[7]=Q.elements[0],G.__data[8]=Q.elements[6],G.__data[9]=Q.elements[7],G.__data[10]=Q.elements[8],G.__data[11]=Q.elements[0]):(Q.toArray(G.__data,j),j+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,G.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,M,b){let S=C.value;if(b[M]===void 0){if(typeof S=="number")b[M]=S;else{let I=Array.isArray(S)?S:[S],T=[];for(let G=0;G<I.length;G++)T.push(I[G].clone());b[M]=T}return!0}else if(typeof S=="number"){if(b[M]!==S)return b[M]=S,!0}else{let I=Array.isArray(b[M])?b[M]:[b[M]],T=Array.isArray(S)?S:[S];for(let G=0;G<I.length;G++){let x=I[G];if(x.equals(T[G])===!1)return x.copy(T[G]),!0}}return!1}function g(C){let M=C.uniforms,b=0,S=16,I=0;for(let T=0,G=M.length;T<G;T++){let x=M[T],w={boundary:0,storage:0},j=Array.isArray(x.value)?x.value:[x.value];for(let Y=0,Q=j.length;Y<Q;Y++){let R=j[Y],H=v(R);w.boundary+=H.boundary,w.storage+=H.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=b,T>0){I=b%S;let Y=S-I;I!==0&&Y-w.boundary<0&&(b+=S-I,x.__offset=b)}b+=w.storage}return I=b%S,I>0&&(b+=S-I),C.__size=b,C.__cache={},this}function v(C){let M={boundary:0,storage:0};return typeof C=="number"?(M.boundary=4,M.storage=4):C.isVector2?(M.boundary=8,M.storage=8):C.isVector3||C.isColor?(M.boundary=16,M.storage=12):C.isVector4?(M.boundary=16,M.storage=16):C.isMatrix3?(M.boundary=48,M.storage=48):C.isMatrix4?(M.boundary=64,M.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),M}function m(C){let M=C.target;M.removeEventListener("dispose",m);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(let C in r)n.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}var zo=class{constructor(e={}){let{canvas:t=yC(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,h=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;let M=this,b=!1,S=0,I=0,T=null,G=-1,x=null,w=new Ft,j=new Ft,Y=null,Q=new ot(0),R=0,H=t.width,q=t.height,W=1,ie=null,Z=null,X=new Ft(0,0,H,q),P=new Ft(0,0,H,q),V=!1,le=new cl,ue=!1,he=!1,Se=null,Ye=new Ht,Te=new We,Pe=new L,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return T===null?W:1}let O=i;function Ut(_,N){for(let U=0;U<_.length;U++){let k=_[U],B=t.getContext(k,N);if(B!==null)return B}return null}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mh}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){let N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),O=Ut(N,_),O===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let xe,Ce,Ae,ht,Fe,Le,nt,_t,Dt,E,y,F,ee,K,te,me,se,ce,A,re,$,be,ve,Me;function pe(){xe=new CI(O),Ce=new MI(O,xe,e),xe.init(Ce),be=new rR(O,xe,Ce),Ae=new nR(O,xe,Ce),ht=new II(O),Fe=new W1,Le=new iR(O,xe,Ae,Fe,Ce,be,ht),nt=new bI(M),_t=new TI(M),Dt=new VC(O,Ce),ve=new _I(O,xe,Dt,Ce),E=new AI(O,Dt,ht,ve),y=new LI(O,E,Dt,ht),A=new NI(O,Ce,Le),me=new EI(Fe),F=new G1(M,nt,_t,xe,Ce,ve,me),ee=new oR(M,Fe),K=new $1,te=new J1(xe,Ce),ce=new yI(M,nt,_t,Ae,y,f,c),se=new tR(M,y,Ce),Me=new aR(O,ht,Ce,Ae),re=new xI(O,xe,ht,Ce),$=new DI(O,xe,ht,Ce),ht.programs=F.programs,M.capabilities=Ce,M.extensions=xe,M.properties=Fe,M.renderLists=K,M.shadowMap=se,M.state=Ae,M.info=ht}pe();let fe=new dh(M,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let _=xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(_){_!==void 0&&(W=_,this.setSize(H,q,!1))},this.getSize=function(_){return _.set(H,q)},this.setSize=function(_,N,U=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,q=N,t.width=Math.floor(_*W),t.height=Math.floor(N*W),U===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(H*W,q*W).floor()},this.setDrawingBufferSize=function(_,N,U){H=_,q=N,W=U,t.width=Math.floor(_*U),t.height=Math.floor(N*U),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(w)},this.getViewport=function(_){return _.copy(X)},this.setViewport=function(_,N,U,k){_.isVector4?X.set(_.x,_.y,_.z,_.w):X.set(_,N,U,k),Ae.viewport(w.copy(X).multiplyScalar(W).floor())},this.getScissor=function(_){return _.copy(P)},this.setScissor=function(_,N,U,k){_.isVector4?P.set(_.x,_.y,_.z,_.w):P.set(_,N,U,k),Ae.scissor(j.copy(P).multiplyScalar(W).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(_){Ae.setScissorTest(V=_)},this.setOpaqueSort=function(_){ie=_},this.setTransparentSort=function(_){Z=_},this.getClearColor=function(_){return _.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(_=!0,N=!0,U=!0){let k=0;if(_){let B=!1;if(T!==null){let de=T.texture.format;B=de===S0||de===w0||de===b0}if(B){let de=T.texture.type,ye=de===Ni||de===Di||de===Eh||de===ar||de===M0||de===E0,we=ce.getClearColor(),De=ce.getClearAlpha(),ze=we.r,Oe=we.g,Ue=we.b;ye?(p[0]=ze,p[1]=Oe,p[2]=Ue,p[3]=De,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=ze,g[1]=Oe,g[2]=Ue,g[3]=De,O.clearBufferiv(O.COLOR,0,g))}else k|=O.COLOR_BUFFER_BIT}N&&(k|=O.DEPTH_BUFFER_BIT),U&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),K.dispose(),te.dispose(),Fe.dispose(),nt.dispose(),_t.dispose(),y.dispose(),ve.dispose(),Me.dispose(),F.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",dn),fe.removeEventListener("sessionend",ut),Se&&(Se.dispose(),Se=null),zt.stop()};function Ze(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let _=ht.autoReset,N=se.enabled,U=se.autoUpdate,k=se.needsUpdate,B=se.type;pe(),ht.autoReset=_,se.enabled=N,se.autoUpdate=U,se.needsUpdate=k,se.type=B}function oe(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function J(_){let N=_.target;N.removeEventListener("dispose",J),z(N)}function z(_){ne(_),Fe.remove(_)}function ne(_){let N=Fe.get(_).programs;N!==void 0&&(N.forEach(function(U){F.releaseProgram(U)}),_.isShaderMaterial&&F.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,U,k,B,de){N===null&&(N=dt);let ye=B.isMesh&&B.matrixWorld.determinant()<0,we=H0(_,N,U,k,B);Ae.setMaterial(k,ye);let De=U.index,ze=1;if(k.wireframe===!0){if(De=E.getWireframeAttribute(U),De===void 0)return;ze=2}let Oe=U.drawRange,Ue=U.attributes.position,gt=Oe.start*ze,en=(Oe.start+Oe.count)*ze;de!==null&&(gt=Math.max(gt,de.start*ze),en=Math.min(en,(de.start+de.count)*ze)),De!==null?(gt=Math.max(gt,0),en=Math.min(en,De.count)):Ue!=null&&(gt=Math.max(gt,0),en=Math.min(en,Ue.count));let It=en-gt;if(It<0||It===1/0)return;ve.setup(B,k,we,U,De);let Yn,mt=re;if(De!==null&&(Yn=Dt.get(De),mt=$,mt.setIndex(Yn)),B.isMesh)k.wireframe===!0?(Ae.setLineWidth(k.wireframeLinewidth*Be()),mt.setMode(O.LINES)):mt.setMode(O.TRIANGLES);else if(B.isLine){let Je=k.linewidth;Je===void 0&&(Je=1),Ae.setLineWidth(Je*Be()),B.isLineSegments?mt.setMode(O.LINES):B.isLineLoop?mt.setMode(O.LINE_LOOP):mt.setMode(O.LINE_STRIP)}else B.isPoints?mt.setMode(O.POINTS):B.isSprite&&mt.setMode(O.TRIANGLES);if(B.isInstancedMesh)mt.renderInstances(gt,It,B.count);else if(U.isInstancedBufferGeometry){let Je=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,gl=Math.min(U.instanceCount,Je);mt.renderInstances(gt,It,gl)}else mt.render(gt,It)};function _e(_,N,U){_.transparent===!0&&_.side===li&&_.forceSinglePass===!1?(_.side=Qt,_.needsUpdate=!0,$o(_,N,U),_.side=Li,_.needsUpdate=!0,$o(_,N,U),_.side=li):$o(_,N,U)}this.compile=function(_,N,U=null){U===null&&(U=_),m=te.get(U),m.init(),C.push(m),U.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),_!==U&&_.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(M._useLegacyLights);let k=new Set;return _.traverse(function(B){let de=B.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){let we=de[ye];_e(we,U,B),k.add(we)}else _e(de,U,B),k.add(de)}),C.pop(),m=null,k},this.compileAsync=function(_,N,U=null){let k=this.compile(_,N,U);return new Promise(B=>{function de(){if(k.forEach(function(ye){Fe.get(ye).currentProgram.isReady()&&k.delete(ye)}),k.size===0){B(_);return}setTimeout(de,10)}xe.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ke=null;function xt(_){Ke&&Ke(_)}function dn(){zt.stop()}function ut(){zt.start()}let zt=new R0;zt.setAnimationLoop(xt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(_){Ke=_,fe.setAnimationLoop(_),_===null?zt.stop():zt.start()},fe.addEventListener("sessionstart",dn),fe.addEventListener("sessionend",ut),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,N,T),m=te.get(_,C.length),m.init(),C.push(m),Ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),le.setFromProjectionMatrix(Ye),he=this.localClippingEnabled,ue=me.init(this.clippingPlanes,he),v=K.get(_,h.length),v.init(),h.push(v),On(_,N,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ie,Z),this.info.render.frame++,ue===!0&&me.beginShadows();let U=m.state.shadowsArray;if(se.render(U,_,N),ue===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(v,_),m.setupLights(M._useLegacyLights),N.isArrayCamera){let k=N.cameras;for(let B=0,de=k.length;B<de;B++){let ye=k[B];Dh(v,_,ye,ye.viewport)}}else Dh(v,_,N);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),_.isScene===!0&&_.onAfterRender(M,_,N),ve.resetDefaultState(),G=-1,x=null,C.pop(),C.length>0?m=C[C.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function On(_,N,U,k){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)U=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)m.pushLight(_),_.castShadow&&m.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||le.intersectsSprite(_)){k&&Pe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ye);let ye=y.update(_),we=_.material;we.visible&&v.push(_,ye,we,U,Pe.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||le.intersectsObject(_))){let ye=y.update(_),we=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Pe.copy(_.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Pe.copy(ye.boundingSphere.center)),Pe.applyMatrix4(_.matrixWorld).applyMatrix4(Ye)),Array.isArray(we)){let De=ye.groups;for(let ze=0,Oe=De.length;ze<Oe;ze++){let Ue=De[ze],gt=we[Ue.materialIndex];gt&&gt.visible&&v.push(_,ye,gt,U,Pe.z,Ue)}}else we.visible&&v.push(_,ye,we,U,Pe.z,null)}}let de=_.children;for(let ye=0,we=de.length;ye<we;ye++)On(de[ye],N,U,k)}function Dh(_,N,U,k){let B=_.opaque,de=_.transmissive,ye=_.transparent;m.setupLightsView(U),ue===!0&&me.setGlobalState(M.clippingPlanes,U),de.length>0&&V0(B,de,N,U),k&&Ae.viewport(w.copy(k)),B.length>0&&jo(B,N,U),de.length>0&&jo(de,N,U),ye.length>0&&jo(ye,N,U),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function V0(_,N,U,k){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;let de=Ce.isWebGL2;Se===null&&(Se=new hi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ko:Ni,minFilter:Uo,samples:de?4:0})),M.getDrawingBufferSize(Te),de?Se.setSize(Te.x,Te.y):Se.setSize(Jc(Te.x),Jc(Te.y));let ye=M.getRenderTarget();M.setRenderTarget(Se),M.getClearColor(Q),R=M.getClearAlpha(),R<1&&M.setClearColor(16777215,.5),M.clear();let we=M.toneMapping;M.toneMapping=Pi,jo(_,U,k),Le.updateMultisampleRenderTarget(Se),Le.updateRenderTargetMipmap(Se);let De=!1;for(let ze=0,Oe=N.length;ze<Oe;ze++){let Ue=N[ze],gt=Ue.object,en=Ue.geometry,It=Ue.material,Yn=Ue.group;if(It.side===li&&gt.layers.test(k.layers)){let mt=It.side;It.side=Qt,It.needsUpdate=!0,Ih(gt,U,k,en,It,Yn),It.side=mt,It.needsUpdate=!0,De=!0}}De===!0&&(Le.updateMultisampleRenderTarget(Se),Le.updateRenderTargetMipmap(Se)),M.setRenderTarget(ye),M.setClearColor(Q,R),M.toneMapping=we}function jo(_,N,U){let k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,de=_.length;B<de;B++){let ye=_[B],we=ye.object,De=ye.geometry,ze=k===null?ye.material:k,Oe=ye.group;we.layers.test(U.layers)&&Ih(we,N,U,De,ze,Oe)}}function Ih(_,N,U,k,B,de){_.onBeforeRender(M,N,U,k,B,de),_.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(M,N,U,k,_,de),B.transparent===!0&&B.side===li&&B.forceSinglePass===!1?(B.side=Qt,B.needsUpdate=!0,M.renderBufferDirect(U,N,k,B,_,de),B.side=Li,B.needsUpdate=!0,M.renderBufferDirect(U,N,k,B,_,de),B.side=li):M.renderBufferDirect(U,N,k,B,_,de),_.onAfterRender(M,N,U,k,B,de)}function $o(_,N,U){N.isScene!==!0&&(N=dt);let k=Fe.get(_),B=m.state.lights,de=m.state.shadowsArray,ye=B.state.version,we=F.getParameters(_,B.state,de,N,U),De=F.getProgramCacheKey(we),ze=k.programs;k.environment=_.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(_.isMeshStandardMaterial?_t:nt).get(_.envMap||k.environment),ze===void 0&&(_.addEventListener("dispose",J),ze=new Map,k.programs=ze);let Oe=ze.get(De);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===ye)return Ph(_,we),Oe}else we.uniforms=F.getUniforms(_),_.onBuild(U,we,M),_.onBeforeCompile(we,M),Oe=F.acquireProgram(we,De),ze.set(De,Oe),k.uniforms=we.uniforms;let Ue=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ue.clippingPlanes=me.uniform),Ph(_,we),k.needsLights=G0(_),k.lightsStateVersion=ye,k.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Oe,k.uniformsList=null,Oe}function Rh(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=Ms.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Ph(_,N){let U=Fe.get(_);U.outputColorSpace=N.outputColorSpace,U.instancing=N.instancing,U.instancingColor=N.instancingColor,U.skinning=N.skinning,U.morphTargets=N.morphTargets,U.morphNormals=N.morphNormals,U.morphColors=N.morphColors,U.morphTargetsCount=N.morphTargetsCount,U.numClippingPlanes=N.numClippingPlanes,U.numIntersection=N.numClipIntersection,U.vertexAlphas=N.vertexAlphas,U.vertexTangents=N.vertexTangents,U.toneMapping=N.toneMapping}function H0(_,N,U,k,B){N.isScene!==!0&&(N=dt),Le.resetTextureUnits();let de=N.fog,ye=k.isMeshStandardMaterial?N.environment:null,we=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:fi,De=(k.isMeshStandardMaterial?_t:nt).get(k.envMap||ye),ze=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Oe=!!U.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ue=!!U.morphAttributes.position,gt=!!U.morphAttributes.normal,en=!!U.morphAttributes.color,It=Pi;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(It=M.toneMapping);let Yn=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=Yn!==void 0?Yn.length:0,Je=Fe.get(k),gl=m.state.lights;if(ue===!0&&(he===!0||_!==x)){let tn=_===x&&k.id===G;me.setState(k,_,tn)}let Mt=!1;k.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==gl.state.version||Je.outputColorSpace!==we||B.isInstancedMesh&&Je.instancing===!1||!B.isInstancedMesh&&Je.instancing===!0||B.isSkinnedMesh&&Je.skinning===!1||!B.isSkinnedMesh&&Je.skinning===!0||B.isInstancedMesh&&Je.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Je.instancingColor===!1&&B.instanceColor!==null||Je.envMap!==De||k.fog===!0&&Je.fog!==de||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==me.numPlanes||Je.numIntersection!==me.numIntersection)||Je.vertexAlphas!==ze||Je.vertexTangents!==Oe||Je.morphTargets!==Ue||Je.morphNormals!==gt||Je.morphColors!==en||Je.toneMapping!==It||Ce.isWebGL2===!0&&Je.morphTargetsCount!==mt)&&(Mt=!0):(Mt=!0,Je.__version=k.version);let Oi=Je.currentProgram;Mt===!0&&(Oi=$o(k,N,B));let Nh=!1,Ns=!1,vl=!1,Gt=Oi.getUniforms(),Fi=Je.uniforms;if(Ae.useProgram(Oi.program)&&(Nh=!0,Ns=!0,vl=!0),k.id!==G&&(G=k.id,Ns=!0),Nh||x!==_){Gt.setValue(O,"projectionMatrix",_.projectionMatrix),Gt.setValue(O,"viewMatrix",_.matrixWorldInverse);let tn=Gt.map.cameraPosition;tn!==void 0&&tn.setValue(O,Pe.setFromMatrixPosition(_.matrixWorld)),Ce.logarithmicDepthBuffer&&Gt.setValue(O,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Gt.setValue(O,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,Ns=!0,vl=!0)}if(B.isSkinnedMesh){Gt.setOptional(O,B,"bindMatrix"),Gt.setOptional(O,B,"bindMatrixInverse");let tn=B.skeleton;tn&&(Ce.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Gt.setValue(O,"boneTexture",tn.boneTexture,Le),Gt.setValue(O,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let yl=U.morphAttributes;if((yl.position!==void 0||yl.normal!==void 0||yl.color!==void 0&&Ce.isWebGL2===!0)&&A.update(B,U,Oi),(Ns||Je.receiveShadow!==B.receiveShadow)&&(Je.receiveShadow=B.receiveShadow,Gt.setValue(O,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fi.envMap.value=De,Fi.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ns&&(Gt.setValue(O,"toneMappingExposure",M.toneMappingExposure),Je.needsLights&&z0(Fi,vl),de&&k.fog===!0&&ee.refreshFogUniforms(Fi,de),ee.refreshMaterialUniforms(Fi,k,W,q,Se),Ms.upload(O,Rh(Je),Fi,Le)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ms.upload(O,Rh(Je),Fi,Le),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Gt.setValue(O,"center",B.center),Gt.setValue(O,"modelViewMatrix",B.modelViewMatrix),Gt.setValue(O,"normalMatrix",B.normalMatrix),Gt.setValue(O,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let tn=k.uniformsGroups;for(let _l=0,W0=tn.length;_l<W0;_l++)if(Ce.isWebGL2){let Lh=tn[_l];Me.update(Lh,Oi),Me.bind(Lh,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function z0(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function G0(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(_,N,U){Fe.get(_.texture).__webglTexture=N,Fe.get(_.depthTexture).__webglTexture=U;let k=Fe.get(_);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,N){let U=Fe.get(_);U.__webglFramebuffer=N,U.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(_,N=0,U=0){T=_,S=N,I=U;let k=!0,B=null,de=!1,ye=!1;if(_){let De=Fe.get(_);De.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(O.FRAMEBUFFER,null),k=!1):De.__webglFramebuffer===void 0?Le.setupRenderTarget(_):De.__hasExternalTextures&&Le.rebindTextures(_,Fe.get(_.texture).__webglTexture,Fe.get(_.depthTexture).__webglTexture);let ze=_.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);let Oe=Fe.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?B=Oe[N][U]:B=Oe[N],de=!0):Ce.isWebGL2&&_.samples>0&&Le.useMultisampledRTT(_)===!1?B=Fe.get(_).__webglMultisampledFramebuffer:Array.isArray(Oe)?B=Oe[U]:B=Oe,w.copy(_.viewport),j.copy(_.scissor),Y=_.scissorTest}else w.copy(X).multiplyScalar(W).floor(),j.copy(P).multiplyScalar(W).floor(),Y=V;if(Ae.bindFramebuffer(O.FRAMEBUFFER,B)&&Ce.drawBuffers&&k&&Ae.drawBuffers(_,B),Ae.viewport(w),Ae.scissor(j),Ae.setScissorTest(Y),de){let De=Fe.get(_.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,De.__webglTexture,U)}else if(ye){let De=Fe.get(_.texture),ze=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.__webglTexture,U||0,ze)}G=-1},this.readRenderTargetPixels=function(_,N,U,k,B,de,ye){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Fe.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){Ae.bindFramebuffer(O.FRAMEBUFFER,we);try{let De=_.texture,ze=De.format,Oe=De.type;if(ze!==Pn&&be.convert(ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ue=Oe===ko&&(xe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Oe!==Ni&&be.convert(Oe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Ii&&(Ce.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-k&&U>=0&&U<=_.height-B&&O.readPixels(N,U,k,B,be.convert(ze),be.convert(Oe),de)}finally{let De=T!==null?Fe.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(_,N,U=0){let k=Math.pow(2,-U),B=Math.floor(N.image.width*k),de=Math.floor(N.image.height*k);Le.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,U,0,0,_.x,_.y,B,de),Ae.unbindTexture()},this.copyTextureToTexture=function(_,N,U,k=0){let B=N.image.width,de=N.image.height,ye=be.convert(U.format),we=be.convert(U.type);Le.setTexture2D(U,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,_.x,_.y,B,de,ye,we,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,_.x,_.y,N.mipmaps[0].width,N.mipmaps[0].height,ye,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,k,_.x,_.y,ye,we,N.image),k===0&&U.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(_,N,U,k,B=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let de=_.max.x-_.min.x+1,ye=_.max.y-_.min.y+1,we=_.max.z-_.min.z+1,De=be.convert(k.format),ze=be.convert(k.type),Oe;if(k.isData3DTexture)Le.setTexture3D(k,0),Oe=O.TEXTURE_3D;else if(k.isDataArrayTexture)Le.setTexture2DArray(k,0),Oe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let Ue=O.getParameter(O.UNPACK_ROW_LENGTH),gt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),en=O.getParameter(O.UNPACK_SKIP_PIXELS),It=O.getParameter(O.UNPACK_SKIP_ROWS),Yn=O.getParameter(O.UNPACK_SKIP_IMAGES),mt=U.isCompressedTexture?U.mipmaps[0]:U.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,_.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_.min.z),U.isDataTexture||U.isData3DTexture?O.texSubImage3D(Oe,B,N.x,N.y,N.z,de,ye,we,De,ze,mt.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Oe,B,N.x,N.y,N.z,de,ye,we,De,mt.data)):O.texSubImage3D(Oe,B,N.x,N.y,N.z,de,ye,we,De,ze,mt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,en),O.pixelStorei(O.UNPACK_SKIP_ROWS,It),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yn),B===0&&k.generateMipmaps&&O.generateMipmap(Oe),Ae.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?Le.setTextureCube(_,0):_.isData3DTexture?Le.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Le.setTexture2DArray(_,0):Le.setTexture2D(_,0),Ae.unbindTexture()},this.resetState=function(){S=0,I=0,T=null,Ae.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bh?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===fl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?lr:T0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===lr?Ot:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fh=class extends zo{};fh.prototype.isWebGL1Renderer=!0;var ul=class extends Rs{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};function Wc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var As=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hh=class extends As{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ay,endingEnd:Ay}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dy:s=e,a=2*t-i;break;case Iy:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dy:o=e,c=2*i-t;break;case Iy:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,h=-f*m+2*f*v-f*g,C=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*v+.5*g,b=p*m-p*v;for(let S=0;S!==a;++S)s[S]=h*o[u+S]+C*o[l+S]+M*o[c+S]+b*o[d+S];return s}},ph=class extends As{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},mh=class extends As{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wc(t,this.TimeBufferType),this.values=Wc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Wc(e.times,Array),values:Wc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $c:t=this.InterpolantFactoryMethodDiscrete;break;case qc:t=this.InterpolantFactoryMethodLinear;break;case yf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $c;case this.InterpolantFactoryMethodLinear:return qc;case this.InterpolantFactoryMethodSmooth:return yf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&cR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===yf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=qc;var hr=class extends Ln{};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=$c;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends Ln{};gh.prototype.ValueTypeName="color";var vh=class extends Ln{};vh.prototype.ValueTypeName="number";var yh=class extends As{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)Nn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Go=class extends Ln{InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}};Go.prototype.ValueTypeName="quaternion";Go.prototype.DefaultInterpolation=qc;Go.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends Ln{};pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=$c;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends Ln{};_h.prototype.ValueTypeName="vector";var Th="\\[\\]\\.:\\/",lR=new RegExp("["+Th+"]","g"),Ch="[^"+Th+"]",uR="[^"+Th.replace("\\.","")+"]",dR=/((?:WC+[\/:])*)/.source.replace("WC",Ch),fR=/(WCOD+)?/.source.replace("WCOD",uR),hR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),pR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),mR=new RegExp("^"+dR+fR+hR+pR+"$"),gR=["material","materials","bones","map"],xh=class{constructor(e,t,i){let r=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lR,"")}static parseTrackName(t){let i=mR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);gR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=xh,n})();yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ok=new Float32Array(1);var Wo=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);var F0={type:"change"},Ah={type:"start"},U0={type:"end"},pl=new Ho,k0=new In,vR=Math.cos(70*C0.DEG2RAD),ml=class extends Xn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",y),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",y),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(F0),i.update(),s=r.NONE},this.update=function(){let A=new L,re=new Nn().setFromUnitVectors(e.up,new L(0,1,0)),$=re.clone().invert(),be=new L,ve=new Nn,Me=new L,pe=2*Math.PI;return function(Ze=null){let D=i.object.position;A.copy(D).sub(i.target),A.applyQuaternion(re),a.setFromVector3(A),i.autoRotate&&s===r.NONE&&j(x(Ze)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let oe=i.minAzimuthAngle,J=i.maxAzimuthAngle;isFinite(oe)&&isFinite(J)&&(oe<-Math.PI?oe+=pe:oe>Math.PI&&(oe-=pe),J<-Math.PI?J+=pe:J>Math.PI&&(J-=pe),oe<=J?a.theta=Math.max(oe,Math.min(J,a.theta)):a.theta=a.theta>(oe+J)/2?Math.max(oe,a.theta):Math.min(J,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&I||i.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*l),A.setFromSpherical(a),A.applyQuaternion($),D.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let z=!1;if(i.zoomToCursor&&I){let ne=null;if(i.object.isPerspectiveCamera){let _e=A.length();ne=Z(_e*l);let Ke=_e-ne;i.object.position.addScaledVector(b,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let _e=new L(S.x,S.y,0);_e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),z=!0;let Ke=new L(S.x,S.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(_e),i.object.updateMatrixWorld(),ne=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ne!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ne).add(i.object.position):(pl.origin.copy(i.object.position),pl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(pl.direction))<vR?e.lookAt(i.target):(k0.setFromNormalAndCoplanarPoint(i.object.up,i.target),pl.intersectPlane(k0,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),z=!0);return l=1,I=!1,z||be.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o||Me.distanceToSquared(i.target)>0?(i.dispatchEvent(F0),be.copy(i.object.position),ve.copy(i.object.quaternion),Me.copy(i.target),z=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",K),i.domElement.removeEventListener("pointerdown",Fe),i.domElement.removeEventListener("pointercancel",nt),i.domElement.removeEventListener("wheel",E),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",nt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",y),i._domElementKeyEvents=null)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=r.NONE,o=1e-6,a=new Wo,c=new Wo,l=1,u=new L,d=new We,f=new We,p=new We,g=new We,v=new We,m=new We,h=new We,C=new We,M=new We,b=new L,S=new We,I=!1,T=[],G={};function x(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function j(A){c.theta-=A}function Y(A){c.phi-=A}let Q=function(){let A=new L;return function($,be){A.setFromMatrixColumn(be,0),A.multiplyScalar(-$),u.add(A)}}(),R=function(){let A=new L;return function($,be){i.screenSpacePanning===!0?A.setFromMatrixColumn(be,1):(A.setFromMatrixColumn(be,0),A.crossVectors(i.object.up,A)),A.multiplyScalar($),u.add(A)}}(),H=function(){let A=new L;return function($,be){let ve=i.domElement;if(i.object.isPerspectiveCamera){let Me=i.object.position;A.copy(Me).sub(i.target);let pe=A.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*$*pe/ve.clientHeight,i.object.matrix),R(2*be*pe/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q($*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),R(be*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(A){if(!i.zoomToCursor)return;I=!0;let re=i.domElement.getBoundingClientRect(),$=A.clientX-re.left,be=A.clientY-re.top,ve=re.width,Me=re.height;S.x=$/ve*2-1,S.y=-(be/Me)*2+1,b.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function X(A){d.set(A.clientX,A.clientY)}function P(A){ie(A),h.set(A.clientX,A.clientY)}function V(A){g.set(A.clientX,A.clientY)}function le(A){f.set(A.clientX,A.clientY),p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let re=i.domElement;j(2*Math.PI*p.x/re.clientHeight),Y(2*Math.PI*p.y/re.clientHeight),d.copy(f),i.update()}function ue(A){C.set(A.clientX,A.clientY),M.subVectors(C,h),M.y>0?q(w()):M.y<0&&W(w()),h.copy(C),i.update()}function he(A){v.set(A.clientX,A.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(v),i.update()}function Se(A){ie(A),A.deltaY<0?W(w()):A.deltaY>0&&q(w()),i.update()}function Ye(A){let re=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),re=!0;break}re&&(A.preventDefault(),i.update())}function Te(){if(T.length===1)d.set(T[0].pageX,T[0].pageY);else{let A=.5*(T[0].pageX+T[1].pageX),re=.5*(T[0].pageY+T[1].pageY);d.set(A,re)}}function Pe(){if(T.length===1)g.set(T[0].pageX,T[0].pageY);else{let A=.5*(T[0].pageX+T[1].pageX),re=.5*(T[0].pageY+T[1].pageY);g.set(A,re)}}function dt(){let A=T[0].pageX-T[1].pageX,re=T[0].pageY-T[1].pageY,$=Math.sqrt(A*A+re*re);h.set(0,$)}function Be(){i.enableZoom&&dt(),i.enablePan&&Pe()}function O(){i.enableZoom&&dt(),i.enableRotate&&Te()}function Ut(A){if(T.length==1)f.set(A.pageX,A.pageY);else{let $=ce(A),be=.5*(A.pageX+$.x),ve=.5*(A.pageY+$.y);f.set(be,ve)}p.subVectors(f,d).multiplyScalar(i.rotateSpeed);let re=i.domElement;j(2*Math.PI*p.x/re.clientHeight),Y(2*Math.PI*p.y/re.clientHeight),d.copy(f)}function xe(A){if(T.length===1)v.set(A.pageX,A.pageY);else{let re=ce(A),$=.5*(A.pageX+re.x),be=.5*(A.pageY+re.y);v.set($,be)}m.subVectors(v,g).multiplyScalar(i.panSpeed),H(m.x,m.y),g.copy(v)}function Ce(A){let re=ce(A),$=A.pageX-re.x,be=A.pageY-re.y,ve=Math.sqrt($*$+be*be);C.set(0,ve),M.set(0,Math.pow(C.y/h.y,i.zoomSpeed)),q(M.y),h.copy(C)}function Ae(A){i.enableZoom&&Ce(A),i.enablePan&&xe(A)}function ht(A){i.enableZoom&&Ce(A),i.enableRotate&&Ut(A)}function Fe(A){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",Le),i.domElement.addEventListener("pointerup",nt)),te(A),A.pointerType==="touch"?F(A):_t(A))}function Le(A){i.enabled!==!1&&(A.pointerType==="touch"?ee(A):Dt(A))}function nt(A){me(A),T.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",nt)),i.dispatchEvent(U0),s=r.NONE}function _t(A){let re;switch(A.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case mr.DOLLY:if(i.enableZoom===!1)return;P(A),s=r.DOLLY;break;case mr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;V(A),s=r.PAN}else{if(i.enableRotate===!1)return;X(A),s=r.ROTATE}break;case mr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;X(A),s=r.ROTATE}else{if(i.enablePan===!1)return;V(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ah)}function Dt(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;le(A);break;case r.DOLLY:if(i.enableZoom===!1)return;ue(A);break;case r.PAN:if(i.enablePan===!1)return;he(A);break}}function E(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent(Ah),Se(A),i.dispatchEvent(U0))}function y(A){i.enabled===!1||i.enablePan===!1||Ye(A)}function F(A){switch(se(A),T.length){case 1:switch(i.touches.ONE){case gr.ROTATE:if(i.enableRotate===!1)return;Te(),s=r.TOUCH_ROTATE;break;case gr.PAN:if(i.enablePan===!1)return;Pe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case gr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(),s=r.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ah)}function ee(A){switch(se(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ut(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ht(A),i.update();break;default:s=r.NONE}}function K(A){i.enabled!==!1&&A.preventDefault()}function te(A){T.push(A)}function me(A){delete G[A.pointerId];for(let re=0;re<T.length;re++)if(T[re].pointerId==A.pointerId){T.splice(re,1);return}}function se(A){let re=G[A.pointerId];re===void 0&&(re=new We,G[A.pointerId]=re),re.set(A.pageX,A.pageY)}function ce(A){let re=A.pointerId===T[0].pointerId?T[1]:T[0];return G[re.pointerId]}i.domElement.addEventListener("contextmenu",K),i.domElement.addEventListener("pointerdown",Fe),i.domElement.addEventListener("pointercancel",nt),i.domElement.addEventListener("wheel",E,{passive:!1}),this.update()}};var yR=["canvas"],B0=(()=>{let e=class e{ngAfterViewInit(){let{clientHeight:i,clientWidth:r}=this.canvasRef.nativeElement;this.scene=new ul,this.camera=new Yt(45,r/i,.01,1e3),this.camera.position.set(5,5,5),this.controls=new ml(this.camera,this.canvasRef.nativeElement),this.controls.target.set(0,0,0),this.renderer=new zo({canvas:this.canvasRef.nativeElement}),this.renderer.setSize(r,i);let s=new fr,o=new Ts({color:65280}),a=new _n(s,o);this.scene.add(a),window.addEventListener("resize",()=>this.onWindowResize()),this.onWindowResize(),this.update()}update(){requestAnimationFrame(()=>this.update()),this.controls.update(),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.update()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Va({type:e,selectors:[["app-root"]],viewQuery:function(r,s){if(r&1&&Vg(yR,5),r&2){let o;ld(o=ud())&&(s.canvasRef=o.first)}},standalone:!0,features:[Ka],decls:2,vars:0,consts:[["canvas",""]],template:function(r,s){r&1&&io(0,"canvas",null,0)},dependencies:[gd],styles:["canvas[_ngcontent-%COMP%]:hover{cursor:pointer}canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]});let n=e;return n})();uv(B0,Xv).catch(n=>console.error(n));
