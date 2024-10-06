import{r as i,j as h}from"./app-CmFQXMDA.js";import{g as ct,a as dt,s as j,c as Wt,m as ut,u as pt,d as P,e as ft}from"./DefaultPropsProvider-5hP49_pN.js";import{B as Pt,b as Jt,u as at}from"./ButtonBase-eD_9SiZw.js";import"./react-is.production.min-DUDD-a5e.js";import{u as kt}from"./index-BO1-Chu-.js";import{u as Qt}from"./useTheme-BZLhdrJg.js";import{o as zt,a as Zt}from"./ownerWindow-CO8Ksk3k.js";import{d as At}from"./debounce-Be36O1Ab.js";import{u as tt}from"./useSlotProps-D41p7Ys2.js";import{c as Lt}from"./createSvgIcon-CK7OYcX0.js";function _t(o){return dt("MuiTab",o)}const g=ct("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]),to=o=>{const{classes:t,textColor:r,fullWidth:c,wrapped:s,icon:d,label:f,selected:b,disabled:p}=o,m={root:["root",d&&f&&"labelIcon",`textColor${Wt(r)}`,c&&"fullWidth",s&&"wrapped",b&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return ft(m,_t,t)},oo=j(Pt,{name:"MuiTab",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${Wt(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped,{[`& .${g.iconWrapper}`]:t.iconWrapper},{[`& .${g.icon}`]:t.icon}]}})(ut(({theme:o})=>({...o.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="top",style:{[`& > .${g.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="bottom",style:{[`& > .${g.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="start",style:{[`& > .${g.icon}`]:{marginRight:o.spacing(1)}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="end",style:{[`& > .${g.icon}`]:{marginLeft:o.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${g.selected}`]:{opacity:1},[`&.${g.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(o.vars||o).palette.text.secondary,[`&.${g.selected}`]:{color:(o.vars||o).palette.primary.main},[`&.${g.disabled}`]:{color:(o.vars||o).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(o.vars||o).palette.text.secondary,[`&.${g.selected}`]:{color:(o.vars||o).palette.secondary.main},[`&.${g.disabled}`]:{color:(o.vars||o).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:o.typography.pxToRem(12)}}]}))),Po=i.forwardRef(function(t,r){const c=pt({props:t,name:"MuiTab"}),{className:s,disabled:d=!1,disableFocusRipple:f=!1,fullWidth:b,icon:p,iconPosition:m="top",indicator:v,label:x,onChange:S,onClick:B,onFocus:k,selected:C,selectionFollowsFocus:y,textColor:F="inherit",value:E,wrapped:ot=!1,...H}=c,O={...c,disabled:d,disableFocusRipple:f,selected:C,icon:!!p,iconPosition:m,label:!!x,fullWidth:b,textColor:F,wrapped:ot},D=to(O),z=p&&x&&i.isValidElement(p)?i.cloneElement(p,{className:P(D.icon,p.props.className)}):p,q=M=>{!C&&S&&S(M,E),B&&B(M)},X=M=>{y&&!C&&S&&S(M,E),k&&k(M)};return h.jsxs(oo,{focusRipple:!f,className:P(D.root,s),ref:r,role:"tab","aria-selected":C,disabled:d,onClick:q,onFocus:X,ownerState:O,tabIndex:C?0:-1,...H,children:[m==="top"||m==="start"?h.jsxs(i.Fragment,{children:[z,x]}):h.jsxs(i.Fragment,{children:[x,z]}),v]})}),eo=Lt(h.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),lo=Lt(h.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function ro(o){return(1+Math.sin(Math.PI*o-Math.PI/2))/2}function no(o,t,r,c={},s=()=>{}){const{ease:d=ro,duration:f=300}=c;let b=null;const p=t[o];let m=!1;const v=()=>{m=!0},x=S=>{if(m){s(new Error("Animation cancelled"));return}b===null&&(b=S);const B=Math.min(1,(S-b)/f);if(t[o]=d(B)*(r-p)+p,B>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(x)};return p===r?(s(new Error("Element already at target position")),v):(requestAnimationFrame(x),v)}const so={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ao(o){const{onChange:t,...r}=o,c=i.useRef(),s=i.useRef(null),d=()=>{c.current=s.current.offsetHeight-s.current.clientHeight};return Jt(()=>{const f=At(()=>{const p=c.current;d(),p!==c.current&&t(c.current)}),b=zt(s.current);return b.addEventListener("resize",f),()=>{f.clear(),b.removeEventListener("resize",f)}},[t]),i.useEffect(()=>{d(),t(c.current)},[t]),h.jsx("div",{style:so,ref:s,...r})}function io(o){return dt("MuiTabScrollButton",o)}const co=ct("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),uo=o=>{const{classes:t,orientation:r,disabled:c}=o;return ft({root:["root",r,c&&"disabled"]},io,t)},po=j(Pt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.root,r.orientation&&t[r.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${co.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),fo=i.forwardRef(function(t,r){const c=pt({props:t,name:"MuiTabScrollButton"}),{className:s,slots:d={},slotProps:f={},direction:b,orientation:p,disabled:m,...v}=c,x=kt(),S={isRtl:x,...c},B=uo(S),k=d.StartScrollButtonIcon??eo,C=d.EndScrollButtonIcon??lo,y=tt({elementType:k,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),F=tt({elementType:C,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return h.jsx(po,{component:"div",className:P(B.root,s),ref:r,role:null,ownerState:S,tabIndex:null,...v,style:{...v.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${x?-90:90}deg)`}},children:b==="left"?h.jsx(k,{...y}):h.jsx(C,{...F})})});function bo(o){return dt("MuiTabs",o)}const it=ct("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),Et=(o,t)=>o===t?o.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o.firstChild,Mt=(o,t)=>o===t?o.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o.lastChild,_=(o,t,r)=>{let c=!1,s=r(o,t);for(;s;){if(s===o.firstChild){if(c)return;c=!0}const d=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||d)s=r(o,s);else{s.focus();return}}},ho=o=>{const{vertical:t,fixed:r,hideScrollbar:c,scrollableX:s,scrollableY:d,centered:f,scrollButtonsHideMobile:b,classes:p}=o;return ft({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",s&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",f&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},bo,p)},So=j("div",{name:"MuiTabs",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[{[`& .${it.scrollButtons}`]:t.scrollButtons},{[`& .${it.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(ut(({theme:o})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${it.scrollButtons}`]:{[o.breakpoints.down("sm")]:{display:"none"}}}}]}))),mo=j("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:o})=>o.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:o})=>o.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:o})=>o.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:o})=>o.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),vo=j("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(o,t)=>{const{ownerState:r}=o;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:o})=>o.vertical,style:{flexDirection:"column"}},{props:({ownerState:o})=>o.centered,style:{justifyContent:"center"}}]}),xo=j("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(o,t)=>t.indicator})(ut(({theme:o})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(o.vars||o).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(o.vars||o).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),yo=j(ao)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Rt={},ko=i.forwardRef(function(t,r){const c=pt({props:t,name:"MuiTabs"}),s=Qt(),d=kt(),{"aria-label":f,"aria-labelledby":b,action:p,centered:m=!1,children:v,className:x,component:S="div",allowScrollButtonsMobile:B=!1,indicatorColor:k="primary",onChange:C,orientation:y="horizontal",ScrollButtonComponent:F=fo,scrollButtons:E="auto",selectionFollowsFocus:ot,slots:H={},slotProps:O={},TabIndicatorProps:D={},TabScrollButtonProps:z={},textColor:q="primary",value:X,variant:M="standard",visibleScrollbar:et=!1,...$t}=c,I=M==="scrollable",w=y==="vertical",U=w?"scrollTop":"scrollLeft",G=w?"top":"left",J=w?"bottom":"right",lt=w?"clientHeight":"clientWidth",Y=w?"height":"width",A={...c,component:S,allowScrollButtonsMobile:B,indicatorColor:k,orientation:y,vertical:w,scrollButtons:E,textColor:q,variant:M,visibleScrollbar:et,fixed:!I,hideScrollbar:I&&!et,scrollableX:I&&!w,scrollableY:I&&w,centered:m&&!I,scrollButtonsHideMobile:!B},W=ho(A),Nt=tt({elementType:H.StartScrollButtonIcon,externalSlotProps:O.startScrollButtonIcon,ownerState:A}),jt=tt({elementType:H.EndScrollButtonIcon,externalSlotProps:O.endScrollButtonIcon,ownerState:A}),[bt,Ft]=i.useState(!1),[L,ht]=i.useState(Rt),[St,Ht]=i.useState(!1),[mt,Dt]=i.useState(!1),[vt,Xt]=i.useState(!1),[xt,Ot]=i.useState({overflow:"hidden",scrollbarWidth:0}),yt=new Map,R=i.useRef(null),$=i.useRef(null),gt=()=>{const e=R.current;let l;if(e){const n=e.getBoundingClientRect();l={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollWidth:e.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let a;if(e&&X!==!1){const n=$.current.children;if(n.length>0){const u=n[yt.get(X)];a=u?u.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:a}},K=at(()=>{const{tabsMeta:e,tabMeta:l}=gt();let a=0,n;w?(n="top",l&&e&&(a=l.top-e.top+e.scrollTop)):(n=d?"right":"left",l&&e&&(a=(d?-1:1)*(l[n]-e[n]+e.scrollLeft)));const u={[n]:a,[Y]:l?l[Y]:0};if(typeof L[n]!="number"||typeof L[Y]!="number")ht(u);else{const T=Math.abs(L[n]-u[n]),N=Math.abs(L[Y]-u[Y]);(T>=1||N>=1)&&ht(u)}}),rt=(e,{animation:l=!0}={})=>{l?no(U,R.current,e,{duration:s.transitions.duration.standard}):R.current[U]=e},wt=e=>{let l=R.current[U];w?l+=e:l+=e*(d?-1:1),rt(l)},Bt=()=>{const e=R.current[lt];let l=0;const a=Array.from($.current.children);for(let n=0;n<a.length;n+=1){const u=a[n];if(l+u[lt]>e){n===0&&(l=e);break}l+=u[lt]}return l},Ut=()=>{wt(-1*Bt())},Yt=()=>{wt(Bt())},Kt=i.useCallback(e=>{Ot({overflow:null,scrollbarWidth:e})},[]),Vt=()=>{const e={};e.scrollbarSizeListener=I?h.jsx(yo,{onChange:Kt,className:P(W.scrollableX,W.hideScrollbar)}):null;const a=I&&(E==="auto"&&(St||mt)||E===!0);return e.scrollButtonStart=a?h.jsx(F,{slots:{StartScrollButtonIcon:H.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:Nt},orientation:y,direction:d?"right":"left",onClick:Ut,disabled:!St,...z,className:P(W.scrollButtons,z.className)}):null,e.scrollButtonEnd=a?h.jsx(F,{slots:{EndScrollButtonIcon:H.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:jt},orientation:y,direction:d?"left":"right",onClick:Yt,disabled:!mt,...z,className:P(W.scrollButtons,z.className)}):null,e},Ct=at(e=>{const{tabsMeta:l,tabMeta:a}=gt();if(!(!a||!l)){if(a[G]<l[G]){const n=l[U]+(a[G]-l[G]);rt(n,{animation:e})}else if(a[J]>l[J]){const n=l[U]+(a[J]-l[J]);rt(n,{animation:e})}}}),Q=at(()=>{I&&E!==!1&&Xt(!vt)});i.useEffect(()=>{const e=At(()=>{R.current&&K()});let l;const a=T=>{T.forEach(N=>{N.removedNodes.forEach(V=>{l==null||l.unobserve(V)}),N.addedNodes.forEach(V=>{l==null||l.observe(V)})}),e(),Q()},n=zt(R.current);n.addEventListener("resize",e);let u;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(e),Array.from($.current.children).forEach(T=>{l.observe(T)})),typeof MutationObserver<"u"&&(u=new MutationObserver(a),u.observe($.current,{childList:!0})),()=>{e.clear(),n.removeEventListener("resize",e),u==null||u.disconnect(),l==null||l.disconnect()}},[K,Q]),i.useEffect(()=>{const e=Array.from($.current.children),l=e.length;if(typeof IntersectionObserver<"u"&&l>0&&I&&E!==!1){const a=e[0],n=e[l-1],u={root:R.current,threshold:.99},T=st=>{Ht(!st[0].isIntersecting)},N=new IntersectionObserver(T,u);N.observe(a);const V=st=>{Dt(!st[0].isIntersecting)},Tt=new IntersectionObserver(V,u);return Tt.observe(n),()=>{N.disconnect(),Tt.disconnect()}}},[I,E,vt,v==null?void 0:v.length]),i.useEffect(()=>{Ft(!0)},[]),i.useEffect(()=>{K()}),i.useEffect(()=>{Ct(Rt!==L)},[Ct,L]),i.useImperativeHandle(p,()=>({updateIndicator:K,updateScrollButtons:Q}),[K,Q]);const It=h.jsx(xo,{...D,className:P(W.indicator,D.className),ownerState:A,style:{...L,...D.style}});let Z=0;const qt=i.Children.map(v,e=>{if(!i.isValidElement(e))return null;const l=e.props.value===void 0?Z:e.props.value;yt.set(l,Z);const a=l===X;return Z+=1,i.cloneElement(e,{fullWidth:M==="fullWidth",indicator:a&&!bt&&It,selected:a,selectionFollowsFocus:ot,onChange:C,textColor:q,value:l,...Z===1&&X===!1&&!e.props.tabIndex?{tabIndex:0}:{}})}),Gt=e=>{const l=$.current,a=Zt(l).activeElement;if(a.getAttribute("role")!=="tab")return;let u=y==="horizontal"?"ArrowLeft":"ArrowUp",T=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&d&&(u="ArrowRight",T="ArrowLeft"),e.key){case u:e.preventDefault(),_(l,a,Mt);break;case T:e.preventDefault(),_(l,a,Et);break;case"Home":e.preventDefault(),_(l,null,Et);break;case"End":e.preventDefault(),_(l,null,Mt);break}},nt=Vt();return h.jsxs(So,{className:P(W.root,x),ownerState:A,ref:r,as:S,...$t,children:[nt.scrollButtonStart,nt.scrollbarSizeListener,h.jsxs(mo,{className:W.scroller,ownerState:A,style:{overflow:xt.overflow,[w?`margin${d?"Left":"Right"}`:"marginBottom"]:et?void 0:-xt.scrollbarWidth},ref:R,children:[h.jsx(vo,{"aria-label":f,"aria-labelledby":b,"aria-orientation":y==="vertical"?"vertical":null,className:W.flexContainer,ownerState:A,onKeyDown:Gt,ref:$,role:"tablist",children:qt}),bt&&It]}),nt.scrollButtonEnd]})});export{ko as T,Po as a};