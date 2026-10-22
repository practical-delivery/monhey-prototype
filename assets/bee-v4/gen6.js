// Robo-Biene: Monoline, abgerundetes Quadrat, Visier. requires _gen4.js + _gen5.js
const RB={w:4.2,head:'M50 38H78A16 16 0 0 1 94 54V82A16 16 0 0 1 78 98H50A16 16 0 0 1 34 82V54A16 16 0 0 1 50 38Z'};
function rrPts(x,y,w,h,r){const o=[];const c=[[x+w-r,y+r,-Math.PI/2],[x+w-r,y+h-r,0],[x+r,y+h-r,Math.PI/2],[x+r,y+r,Math.PI]];c.forEach(([cx,cy,a])=>{for(let i=0;i<=12;i++){const t=a+i/12*Math.PI/2;o.push([cx+r*Math.cos(t),cy+r*Math.sin(t)]);}});o.push(o[0]);return o;}
function robo(o={}){const S=stroke,M=W.mono(RB.w),g=[],ink=o.ink||'#0B0B0B',id=o.id||'rb',Y=o.eye||'#FFF765';
 if(o.color)g.push('<rect x="34" y="38" width="60" height="60" rx="16" fill="'+o.color+'"/>');
 const wu=rell(23,56,17,8.6,.38,0,2*Math.PI,90),wl=rell(24,74.5,15,8,-.38,0,2*Math.PI,90);
 g.push('<clipPath id="'+id+'-c"><path clip-rule="evenodd" d="M0 0H120V120H0Z'+RB.head.replace(/^M/,'M')+'"/></clipPath><g clip-path="url(#'+id+'-c)"><g class="wings">'+S(wu,M)+S(wl,M)+S(seg([24,56],[38.5,62]),W.mono(2.4))+S(seg([25,74.5],[38,69.5]),W.mono(2.4))+'</g></g>');
 g.push(S(rrPts(34,38,60,60,16),M));
 const ant=(a,b,c)=>'<g class="'+c+'">'+S(seg(a,b),M)+'<circle cx="'+b[0]+'" cy="'+b[1]+'" r="3.6" fill="'+(o.mono?'none':(o.color||'#fff'))+'" stroke="'+ink+'" stroke-width="2.8"/></g>';
 g.push(ant([53,38],[47.5,25],'ant-l')+ant([75,38],[80.5,25],'ant-r'));
 g.push('<g class="probe">'+S(seg([64,98],[64,104]),W.mono(3.4))+'</g>');
 const vis='M50 55H82A10 10 0 0 1 82 75H50A10 10 0 0 1 50 55Z';
 if(o.mono)g.push('<path fill-rule="evenodd" d="'+vis+'M49 62.5H57A2.5 2.5 0 0 1 57 67.5H49A2.5 2.5 0 0 1 49 62.5ZM75 62.5H83A2.5 2.5 0 0 1 83 67.5H75A2.5 2.5 0 0 1 75 62.5Z"/>');
 else g.push('<path d="'+vis+'"/><g class="led"><rect x="46.5" y="62.5" width="13" height="5" rx="2.5" fill="'+Y+'"/><rect x="72.5" y="62.5" width="13" height="5" rx="2.5" fill="'+Y+'"/></g>');
 return '<svg xmlns="http://www.w3.org/2000/svg"'+(o.domId?' id="'+o.domId+'"':'')+' viewBox="'+(o.vb||'0 0 120 120')+'" width="'+(o.size||120)+'" height="'+(o.size||120)+'" fill="'+ink+'">'+(o.css?'<style>'+o.css+'</style>':'')+'<g class="body">'+g.join('')+'</g></svg>';}
const RB_CSS=id=>'#'+id+' .led{transform-origin:66px 65px;animation:rb-blink 4s infinite}#'+id+' .ant-l{transform-origin:53px 38px;animation:rb-al 4s ease-in-out infinite}#'+id+' .ant-r{transform-origin:75px 38px;animation:rb-ar 4s ease-in-out infinite}@keyframes rb-blink{0%,46%,54%,100%{transform:scaleY(1)}50%{transform:scaleY(.15)}}@keyframes rb-al{0%,70%,100%{transform:rotate(0)}78%{transform:rotate(-8deg)}86%{transform:rotate(0)}}@keyframes rb-ar{0%,70%,100%{transform:rotate(0)}78%{transform:rotate(8deg)}86%{transform:rotate(0)}}';
