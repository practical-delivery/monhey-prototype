// Clean geometric bee, stroke variants. Organic only via animation.
const f=n=>+n.toFixed(2);
const arc=(cx,cy,r,a0,a1,n=96,ry)=>{const o=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n;o.push([cx+r*Math.cos(a),cy+(ry??r)*Math.sin(a)]);}return o;};
const seg=(a,b,n=24)=>{const o=[];for(let i=0;i<=n;i++)o.push([a[0]+(b[0]-a[0])*i/n,a[1]+(b[1]-a[1])*i/n]);return o;};
const rell=(cx,cy,rx,ry,rot,a0,a1,n=80)=>{const o=[];for(let i=0;i<=n;i++){const a=a0+(a1-a0)*i/n,x=rx*Math.cos(a),y=ry*Math.sin(a);o.push([cx+x*Math.cos(rot)-y*Math.sin(rot),cy+x*Math.sin(rot)+y*Math.cos(rot)]);}return o;};
const join=(...ps)=>ps.reduce((o,p,i)=>o.concat(i?p.slice(1):p),[]);
// width fn: wf(t, pt, tangentAngle) -> width
function stroke(pts,wf){const n=pts.length,L=[0];for(let i=1;i<n;i++)L.push(L[i-1]+Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]));const T=L[n-1]||1,lf=[],rt=[],ws=[];
 for(let i=0;i<n;i++){const p=pts[Math.max(0,i-1)],q=pts[Math.min(n-1,i+1)],dx=q[0]-p[0],dy=q[1]-p[1],d=Math.hypot(dx,dy)||1,ang=Math.atan2(dy,dx),hw=Math.max(.15,wf(L[i]/T,pts[i],ang))/2;ws.push(hw);const nx=-dy/d,ny=dx/d;lf.push([pts[i][0]+nx*hw,pts[i][1]+ny*hw]);rt.push([pts[i][0]-nx*hw,pts[i][1]-ny*hw]);}
 let s='M'+lf.map(p=>f(p[0])+' '+f(p[1])).join('L');s+='A'+f(ws[n-1])+' '+f(ws[n-1])+' 0 0 0 '+f(rt[n-1][0])+' '+f(rt[n-1][1]);for(let i=n-2;i>=0;i--)s+='L'+f(rt[i][0])+' '+f(rt[i][1]);s+='A'+f(ws[0])+' '+f(ws[0])+' 0 0 0 '+f(lf[0][0])+' '+f(lf[0][1])+'Z';return '<path d="'+s+'"/>';}
const sm=x=>x<=0?0:x>=1?1:x*x*(3-2*x);
const W={
 mono:w=>()=>w,
 taper:(w,a=.25,b=.25,mn=.12)=>t=>w*(mn+(1-mn)*Math.min(sm(t/a),sm((1-t)/b),1)),
 swell:(w0,w1,dir=2.4)=>(t,p,ang)=>w0+(w1-w0)*(.5+.5*Math.cos(ang-dir)),          // broad-nib: width by stroke direction
 swellT:(w0,w1,a=.25,b=.25)=>t=>w0+(w1-w0)*Math.sin(Math.PI*Math.min(1,Math.max(0,t)))*Math.min(sm(t/a)+.4,sm((1-t)/b)+.4,1)};
const C=[64,68,32];
const P={ // geometry
 head:(a0=-Math.PI/2,a1=-Math.PI/2+2*Math.PI)=>arc(C[0],C[1],C[2],a0,a1,160),
 wingU:()=>{const c=[18.5,46],r=12.5,ang=-.55;return arc(0,0,1,0,2*Math.PI,90).map(([x,y])=>{const X=x*r*1.25,Y=y*r*.78;return[c[0]+X*Math.cos(ang)-Y*Math.sin(ang),c[1]+X*Math.sin(ang)+Y*Math.cos(ang)];});},
 wingL:()=>{const c=[18,73.5],r=11.5,ang=.5;return arc(0,0,1,0,2*Math.PI,90).map(([x,y])=>{const X=x*r*1.25,Y=y*r*.78;return[c[0]+X*Math.cos(ang)-Y*Math.sin(ang),c[1]+X*Math.sin(ang)+Y*Math.cos(ang)];});},
 antL:()=>arc(42,40,13,-0.05,-1.25,40),  antR:()=>arc(86,40,13,Math.PI+0.05,Math.PI+1.25,40),
 tipL:[42+13*Math.cos(-1.25),40+13*Math.sin(-1.25)], tipR:[86+13*Math.cos(Math.PI+1.25),40+13*Math.sin(Math.PI+1.25)],
 browL:()=>seg([46,50],[57,53]), browR:()=>seg([71,53],[82,50]),
 ru:()=>join(seg([64,81],[64,89],16),arc(68,89,4,Math.PI,Math.PI/2,20).map(([x,y])=>[x,y]).reverse().slice(0)).filter(Boolean)};
P.ru=()=>join(seg([64,81],[64,88.5],16),arc(68.5,88.5,4.5,Math.PI,Math.PI*0.5,20,4.5).map(p=>p)).map(p=>p);
function ruPath(){const a=seg([64,81],[64,88.5],16),b=[];for(let i=0;i<=20;i++){const t=Math.PI-i/20*Math.PI/2;b.push([68.5+4.5*Math.cos(t),88.5+4.5*Math.sin(t)]);}return a.concat(b.slice(1));}
function glasses(o={}){const g=[];
 g.push('<path d="M39 61.5H64V63.5A12.5 12.5 0 0 1 39 63.5Z"/><path d="M70 61.5H95V63.5A12.5 12.5 0 0 1 70 63.5Z"/>');
 g.push('<rect x="'+(o.barX??30)+'" y="'+(61.5-(o.bar??3.2)/2)+'" width="'+(100-(o.barX??30))+'" height="'+(o.bar??3.2)+'" rx="'+((o.bar??3.2)/2)+'"/>');
 if(!o.mono)g.push('<path class="glint" d="M55.5 66.5L59.5 66.5M86.5 66.5L90.5 66.5" stroke="#fff" stroke-width="'+(o.glint??1.6)+'" stroke-linecap="round" fill="none"/>');
 return '<g class="glasses">'+g.join('')+'</g>';}
function bee4(v,o={}){const g=[];const S=(pts,wf)=>stroke(pts,wf);
 if(o.color)g.push('<circle cx="'+C[0]+'" cy="'+C[1]+'" r="'+C[2]+'" fill="'+o.color+'"/>');
 const wingFill=o.wingFill||'#fff';
 const wu=rell(v.wu?.[0]??21,v.wu?.[1]??53,17,8.6,v.wu?.[2]??-.14,0,2*Math.PI,90),wl=rell(v.wl?.[0]??21,v.wl?.[1]??71,15,8,v.wl?.[2]??.2,0,2*Math.PI,90),pd=p=>'M'+p.map(q=>f(q[0])+' '+f(q[1])).join('L')+'Z';
 const wings=v.wings==='tuck'
  ? '<mask id="hm"><rect width="120" height="120" fill="#fff"/><circle cx="'+C[0]+'" cy="'+C[1]+'" r="'+(C[2]-1)+'" fill="#000"/></mask><g mask="url(#hm)">'+(o.mono?'':'<path fill="'+wingFill+'" d="'+pd(wu)+'"/><path fill="'+wingFill+'" d="'+pd(wl)+'"/>')+S(wu,v.w.wing)+S(wl,v.w.wing)+'</g>'
  : v.wings==='single'
  ? S(rell(19,46,15,9.5,-.55,.55,.55+2*Math.PI*.84),v.w.wing)+S(rell(18.5,74,14,9,.5,-.55,-.55-2*Math.PI*.84),v.w.wing)
  : (o.mono?'':'<path fill="'+wingFill+'" d="M'+P.wingU().map(p=>f(p[0])+' '+f(p[1])).join('L')+'Z"/><path fill="'+wingFill+'" d="M'+P.wingL().map(p=>f(p[0])+' '+f(p[1])).join('L')+'Z"/>')+S(P.wingU(),v.w.wing)+S(P.wingL(),v.w.wing);
 g.push('<g class="wings">'+wings+'</g>');
 const h=v.head||[-Math.PI/2,-Math.PI/2+2*Math.PI];
 g.push('<g class="head">'+S(P.head(h[0],h[1]),v.w.head)+'</g>');
 const dot=v.dot??3.2;
 g.push('<g class="ant-l">'+S(P.antL(),v.w.ant)+'<circle cx="'+f(P.tipL[0])+'" cy="'+f(P.tipL[1])+'" r="'+dot+'"/></g>');
 g.push('<g class="ant-r">'+S(P.antR(),v.w.ant)+'<circle cx="'+f(P.tipR[0])+'" cy="'+f(P.tipR[1])+'" r="'+dot+'"/></g>');
 if(!v.noBrows)g.push('<g class="brows">'+S(P.browL(),v.w.brow)+S(P.browR(),v.w.brow)+'</g>');
 g.push('<g class="ru">'+S(ruPath(),v.w.ru)+'</g>');
 g.push(v.gs?'<g transform="translate(67 64) scale('+v.gs+') translate(-67 -64)">'+glasses({...v.glasses,mono:o.mono})+'</g>':glasses({...v.glasses,mono:o.mono}));
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" fill="'+(o.ink||'#0B0B0B')+'">'+(o.css?'<style>'+o.css+'</style>':'')+'<g class="body">'+g.join('')+'</g></svg>';}
const V={
 a:{name:'Monoline',w:{head:W.mono(4),wing:W.mono(4),ant:W.mono(4),brow:W.mono(4),ru:W.mono(4)},dot:3.4,glasses:{bar:3.4}},
 b:{name:'Schwellstrich',w:{head:W.swell(2,6.4,2.2),wing:W.swell(1.6,5,2.2),ant:W.taper(3.6,.05,.5,.35),brow:W.taper(4,.6,.15,.3),ru:W.taper(3.8,.1,.6,.3)},dot:3.2,glasses:{bar:3}},
 c:{name:'Auslaufend',head:[-1.05,-1.05+2*Math.PI*0.93],w:{head:W.taper(4.6,.12,.18,.1),wing:W.mono(3.4),ant:W.taper(3.8,.05,.45,.2),brow:W.taper(4.2,.5,.2,.1),ru:W.taper(4,.08,.55,.12)},dot:3,glasses:{bar:3.6}},
 d:{name:'Fett und fein',w:{head:W.mono(6.2),wing:W.mono(6.2),ant:W.mono(2.2),brow:W.mono(2.2),ru:W.mono(2.4)},dot:3.4,glasses:{bar:5,barX:28}},
 e:{name:'Reduziert',head:[3.5,3.5+2*Math.PI*0.88],wings:'single',noBrows:true,w:{head:W.swellT(2.6,5.4,.2,.25),wing:W.taper(3.6,.3,.3,.25),ant:W.taper(3.4,.05,.4,.35),ru:W.taper(3.8,.05,.6,.25)},dot:3.6,glasses:{bar:3.2}}};
V.f={name:'Reduziert, kräftiger',head:[3.5,3.5+2*Math.PI*0.88],noBrows:true,w:{head:W.swellT(3.8,6.8,.2,.25),wing:W.mono(4.8),ant:W.taper(4.8,.05,.4,.4),ru:W.taper(5,.05,.6,.3)},dot:4.4,glasses:{bar:4.2,glint:1.8}};
V.g={...V.f,wu:[23,56,.38],wl:[24,74.5,-.38],name:'Reduziert, Flügel angesetzt',wings:'tuck',gs:1.16,w:{...V.f.w,wing:W.swell(3,6.6,2.2)},v5w:{head:W.swellT(3.2,5.8,.2,.25),wing:W.swell(2.6,5.6,2.2),ant:W.taper(4.1,.05,.4,.4),ru:W.taper(4.3,.05,.6,.3)},v5dot:3.9,glasses:{bar:3.8,glint:1.6,barX:37.6}};
const IDLE='.ant-l{transform-origin:47px 31px;animation:al 4s cubic-bezier(.45,0,.55,1) infinite}.ant-r{transform-origin:81px 31px;animation:ar 4s cubic-bezier(.45,0,.55,1) infinite .15s}.wings{transform-origin:36px 62px;animation:fl 4s linear infinite}.brows{animation:bw 4s cubic-bezier(.2,0,0,1) infinite}.ru{transform-origin:64px 81px;animation:ru 4s ease-in-out infinite}@keyframes al{0%,100%{transform:rotate(0)}30%{transform:rotate(-9deg)}55%{transform:rotate(4deg)}}@keyframes ar{0%,100%{transform:rotate(0)}30%{transform:rotate(9deg)}55%{transform:rotate(-4deg)}}@keyframes fl{0%,60%,100%{transform:rotate(0)}64%,72%{transform:rotate(-12deg) scale(.95)}68%,76%{transform:rotate(3deg)}}@keyframes bw{0%,22%,40%,100%{transform:translateY(0)}28%,34%{transform:translateY(-3px)}}@keyframes ru{0%,45%,100%{transform:rotate(0)}55%{transform:rotate(-8deg)}65%{transform:rotate(3deg)}}';
