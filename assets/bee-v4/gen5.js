// requires _gen4.js. Rollout set for logo 3a.
const bz=(P,n=40)=>{const o=[];for(let i=0;i<=n;i++){let t=i/n,q=P.map(p=>p.slice());while(q.length>1){const r=[];for(let k=0;k<q.length-1;k++)r.push([q[k][0]+(q[k+1][0]-q[k][0])*t,q[k][1]+(q[k+1][1]-q[k][1])*t]);q=r;}o.push(q[0]);}return o;};
const mir=pts=>pts.map(([x,y])=>[128-x,y]);
const pd=p=>'M'+p.map(q=>f(q[0])+' '+f(q[1])).join('L')+'Z';
const ANT5={
 normal:{l:[[55,39.4],[53,31],[46.1,27.7]]},
 perk:{l:[[55,39.4],[54,30],[51,22.5]]},
 wide:{l:[[55,39.4],[51,29],[42.5,25]]},
 droop:{l:[[55,39.4],[48,30],[40.5,34.5]]},
 alert:{l:[[56,39],[56,31],[55,22.5]]},
 inward:{l:[[55,39.4],[57,30],[61,24.5]]},
 hmm:{l:[[55,39.4],[54,27],[41,23],[43,32.5]],r:mir([[55,39.4],[53,31],[46.1,27.7]])},
 tilt:{l:[[55,39.4],[54,30],[51,22.5]],r:mir([[55,39.4],[48,30],[40.5,34.5]])}};
const ru5=k=>({
 hook:()=>ruPath(),
 curl:()=>{const a=seg([64,81],[64,85],10),b=[];for(let i=0;i<=40;i++){const t=Math.PI-i/40*Math.PI*1.7,r=5-i/40*2.6;b.push([68.5+r*Math.cos(t),86+r*Math.sin(t)]);}return a.concat(b.slice(1));},
 long:()=>seg([64,81],[64,96],24),
 droop:()=>bz([[64,81],[64,88],[61.5,91.5],[57,91.5]]),
 sip:()=>bz([[64,81],[64,90],[70,91],[71,87]])})[k]();
const WINGS5={ruhe:{wu:[23,56,.38],wl:[24,74.5,-.38]},offen:{wu:[25.8,51.3,.7],wl:[26.4,78.6,-.7]},winken:{wu:[25.8,51.3,.7],wl:[24,74.5,-.38]},schwirren:{wu:[23,56,.38],wl:[24,74.5,-.38],whirr:true}};
function lens5(k){const S=(d,c)=>'<path class="'+c+'" d="'+d+'" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>';
 if(k==='bull'||k==='bear'){const d=k==='bull'?'M43 73L47 69L50.5 71L57 65M53.5 65H57V68.5':'M43 65L47 69L50.5 67L57 73M53.5 73H57V69.5';return S(d,'kurs')+'<g transform="translate(31 0)">'+S(d,'kurs')+'</g>';}
 return '<path class="glint" d="M55.5 66.5L59.5 66.5M86.5 66.5L90.5 66.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none"/>';}
function bee5(ex={},o={}){const v={...V.g,w:V.g.v5w,dot:V.g.v5dot},g=[],S=stroke,mono=!!o.mono,wf=o.wingFill||'transparent';
 const ws={...WINGS5[ex.wings||'ruhe']},wu=rell(ws.wu[0],ws.wu[1],17,8.6,ws.wu[2],0,2*Math.PI,90),wl=rell(ws.wl[0],ws.wl[1],15,8,ws.wl[2],0,2*Math.PI,90);
 if(o.color)g.push('<circle cx="64" cy="68" r="32" fill="'+o.color+'"/>');
 const wh=ws.whirr?'<g class="whirr">'+S(arc(26,64,24,Math.PI*.8,Math.PI*1.2,24),W.taper(2.6,.4,.4,.15))+S(arc(26,64,30,Math.PI*.86,Math.PI*1.14,24),W.taper(2.4,.4,.4,.15))+'</g>':'';
 const outside=p=>{const runs=[];let cur=[];for(const q of p){if(Math.hypot(q[0]-64,q[1]-68)>32.5)cur.push(q);else if(cur.length){runs.push(cur);cur=[];}}if(cur.length)runs.push(cur);if(runs.length>1&&Math.hypot(runs[0][0][0]-64,runs[0][0][1]-68)>32.5&&p[0]===runs[0][0]){runs[runs.length-1]=runs[runs.length-1].concat(runs.shift());}return runs.filter(x=>x.length>2).map(x=>S(x,W.mono(4))).join('');};
 if(o.noClip)g.push('<g class="wings">'+outside(wu)+outside(wl)+'</g>'); else g.push('<clipPath id="hm"><path clip-rule="evenodd" d="M0 0H120V120H0ZM64 37A31 31 0 1 0 64.01 37Z"/></clipPath><g clip-path="url(#hm)"><g class="wings">'+wh+'<g class="wing-u">'+(mono?'':'<path fill="'+wf+'" d="'+pd(wu)+'"/>')+S(wu,v.w.wing)+'</g><g class="wing-l">'+(mono?'':'<path fill="'+wf+'" d="'+pd(wl)+'"/>')+S(wl,v.w.wing)+'</g></g></g>');
 g.push('<g class="head">'+S(P.head(v.head[0],v.head[1]),v.w.head)+'</g>');
 const A=ANT5[ex.ant||'normal'],L=bz(A.l),R=A.r?bz(A.r):mir(L);
 const ant=(p,c)=>'<g class="'+c+'">'+S(p,v.w.ant)+'<circle cx="'+f(p[p.length-1][0])+'" cy="'+f(p[p.length-1][1])+'" r="'+v.dot+'"/></g>';
 g.push(ant(L,'ant-l')+ant(R,'ant-r'));
 if(ex.eyes==='open')g.push('<g class="eyes"><ellipse cx="51.5" cy="56.5" rx="2.6" ry="3.4"/><ellipse cx="82.5" cy="56.5" rx="2.6" ry="3.4"/></g>');
 if(ex.eyes==='closed')g.push('<g class="eyes">'+S(arc(51.5,54.5,4,.3,Math.PI-.3,20),W.mono(2.6))+S(arc(82.5,54.5,4,.3,Math.PI-.3,20),W.mono(2.6))+'</g>');
 g.push('<g class="ru">'+S(ru5(ex.ru||'hook'),v.w.ru)+'</g>'+(o.altRu?'<g class="ru-alt">'+S(ru5(o.altRu),v.w.ru)+'</g>':''));
 const gl='<path d="M39 61.5H64V63.5A12.5 12.5 0 0 1 39 63.5Z"/><path d="M70 61.5H95V63.5A12.5 12.5 0 0 1 70 63.5Z"/><rect x="37.6" y="59.85" width="62.4" height="3.3" rx="1.65"/>'+(mono?'':lens5(ex.lens));
 g.push('<g class="glasses"'+(ex.gdy?' transform="translate(0 '+ex.gdy+')"':'')+'><g transform="translate(67 64) scale(1.16) translate(-67 -64)">'+gl+'</g></g>');
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="'+(o.ink||'#0B0B0B')+'">'+(o.css?'<style>'+o.css+'</style>':'')+'<g class="body">'+g.join('')+'</g></svg>';}
const EX5={cool:{},bull:{ant:'perk',ru:'curl',lens:'bull'},bear:{ant:'droop',ru:'droop',lens:'bear'},wow:{ant:'alert',ru:'long',wings:'offen'},hmm:{ant:'hmm'},happy:{ant:'wide',ru:'sip',wings:'winken'},focus:{ant:'inward'},skeptisch:{ant:'tilt',gdy:6,eyes:'open'},sleepy:{ant:'droop',ru:'droop',gdy:6,eyes:'closed'}};
const E='cubic-bezier(.2,0,0,1)';
const AN5={
 flug:'.body{animation:hv 2.4s ease-in-out infinite}.wing-u{transform-origin:38.8px 62.3px;animation:fu 2.4s linear infinite}.wing-l{transform-origin:37.9px 68.9px;animation:fd 2.4s linear infinite}@keyframes hv{50%{transform:translateY(-3px)}}@keyframes fu{0%,50%,100%{transform:rotate(0)}8%,24%,40%{transform:rotate(18deg)}16%,32%{transform:rotate(-4deg)}}@keyframes fd{0%,50%,100%{transform:rotate(0)}8%,24%,40%{transform:rotate(-18deg)}16%,32%{transform:rotate(4deg)}}',
 fuehler:'.ant-l{transform-origin:55px 39px;animation:al 1.8s ease-in-out infinite}.ant-r{transform-origin:73px 39px;animation:ar 1.8s ease-in-out infinite .1s}@keyframes al{0%,60%,100%{transform:rotate(0)}15%{transform:rotate(-14deg)}30%{transform:rotate(8deg)}45%{transform:rotate(-4deg)}}@keyframes ar{0%,60%,100%{transform:rotate(0)}15%{transform:rotate(14deg)}30%{transform:rotate(-8deg)}45%{transform:rotate(4deg)}}',
 brille:'.glasses{animation:gl 3.2s '+E+' infinite}@keyframes gl{0%,20%,85%,100%{transform:translateY(0)}35%,70%{transform:translateY(6px)}}',
 kurs:'.kurs{stroke-dasharray:30;stroke-dashoffset:30;animation:dr 2.6s '+E+' infinite}.ant-l{transform-origin:55px 39px;animation:pk 2.6s ease-out infinite}.ant-r{transform-origin:73px 39px;animation:pk 2.6s ease-out infinite}@keyframes dr{0%{stroke-dashoffset:30}45%,85%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:0;opacity:0}}@keyframes pk{0%,40%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}60%{transform:translateY(0)}}',
 ruessel:'.ru{animation:a1 3s ease-in-out infinite}.ru-alt{opacity:0;animation:a2 3s ease-in-out infinite}@keyframes a1{0%,30%,80%,100%{opacity:1}40%,70%{opacity:0}}@keyframes a2{0%,30%,80%,100%{opacity:0}40%,70%{opacity:1}}'};
// icons 48 grid
const IW={c:W.swell(1.9,3.8,2.2),d:W.mono(2.3),t:W.taper(3.5,.15,.15,.3)};
function rpoly(pts,rad,n=10){const o=[],N=pts.length;for(let i=0;i<N;i++){const p=pts[(i-1+N)%N],c=pts[i],q=pts[(i+1)%N],d1=Math.hypot(c[0]-p[0],c[1]-p[1]),d2=Math.hypot(q[0]-c[0],q[1]-c[1]),a=[c[0]+(p[0]-c[0])*rad/d1,c[1]+(p[1]-c[1])*rad/d1],b=[c[0]+(q[0]-c[0])*rad/d2,c[1]+(q[1]-c[1])*rad/d2];const cv=bz([a,c,b],n);if(o.length)o.push(...seg(o[o.length-1],a,8).slice(1,-1));o.push(...cv);}o.push(...seg(o[o.length-1],o[0],8).slice(1));return o;}
const chain5=pts=>pts.reduce((o,p,i)=>i?o.concat(seg(pts[i-1],p,12).slice(1)):[p],[]);
const ic=b=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" fill="#0B0B0B">'+b+'</svg>';
const dot=(x,y,r)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'"/>';
const ICONS5={
 honey:()=>ic(stroke(rpoly([0,1,2,3,4,5].map(k=>[24+18*Math.cos(-Math.PI/2+k*Math.PI/3),24+18*Math.sin(-Math.PI/2+k*Math.PI/3)]),4),IW.c)+stroke(chain5([[15,29],[20.5,23.5],[25,26.5],[32,19]]),IW.d)+dot(32,19,2.4)),
 chart:()=>ic(stroke(seg([7,39],[41,39]),IW.t)+stroke(chain5([[10,31],[18,21],[25,26],[37,12]]),IW.d)+dot(37,12,2.8)),
 star:()=>ic(stroke(rpoly([...Array(10)].map((_,k)=>{const r=k%2?8:18,a=-Math.PI/2+k*Math.PI/5;return[24+r*Math.cos(a),25+r*Math.sin(a)];}),2),IW.c)),
 bell:()=>ic(stroke(join(seg([13,34],[14,22]),arc(24,22,10,Math.PI,2*Math.PI,40),seg([34,22],[35,34])),IW.c)+stroke(seg([9,35],[39,35]),IW.t)+dot(24,40.5,2.6)+dot(24,9.5,2)),
 search:()=>ic(stroke(arc(21,21,12,-Math.PI/2,1.5*Math.PI,80),IW.c)+stroke(seg([30.5,30.5],[40,40]),W.mono(3.8))),
 chat:()=>{const a0=2.05,a1=a0+2*Math.PI-.55,A=arc(24,22,15,a0,a1,80),tip=[11,40];return ic(stroke(join(seg(tip,A[0],10),A,seg(A[A.length-1],tip,10)),IW.c)+stroke(seg([24,15],[24,29]),W.taper(3.2,.5,.5,.2))+stroke(seg([17,22],[31,22]),W.taper(3.2,.5,.5,.2)));}};
const DET5={
 circle:()=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 60" preserveAspectRatio="none" fill="#0B0B0B">'+stroke(rell(60,30,55,25,-.04,-.5,-.5+2*Math.PI*1.07,140),W.taper(3.4,.12,.25,.15))+'</svg>',
 underline:()=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 18" fill="#0B0B0B">'+stroke(bz([[4,12],[60,5],[120,6],[176,10]],60),W.taper(4.4,.08,.4,.2))+'</svg>',
 arrow:()=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 42" fill="#0B0B0B">'+stroke(bz([[4,8],[14,34],[34,38],[50,24]],50),W.taper(3.6,.2,.05,.25))+stroke(seg([50,24],[39.5,24.5]),W.mono(3.6))+stroke(seg([50,24],[47,34]),W.mono(3.6))+'</svg>',
 spark:()=>'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#0B0B0B">'+[[[20,3],[20,13]],[[20,27],[20,37]],[[3,20],[13,20]],[[27,20],[37,20]]].map(([a,b])=>stroke(seg(a,b),W.taper(4.6,.5,.5,.35))).join('')+'</svg>'};
