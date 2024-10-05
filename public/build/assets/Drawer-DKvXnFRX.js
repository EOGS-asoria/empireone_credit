import{r as h,j as n}from"./app-DQDxnOfp.js";import{a as E,g as H,s as f,m as R,r as L,c as d,u as F,b as l,d as q}from"./DefaultPropsProvider-DdVOhqmJ.js";import{u as O}from"./index-y3-B0pri.js";import{u as V}from"./useTheme-DQbIEwX4.js";import{M as W}from"./Modal-bu-jwfa5.js";import{P as Y}from"./Paper-BdoXdpby.js";import{S as G}from"./Slide-BXZpRrLO.js";function J(o){return E("MuiDrawer",o)}H("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const A=(o,r)=>{const{ownerState:e}=o;return[r.root,(e.variant==="permanent"||e.variant==="persistent")&&r.docked,r.modal]},K=o=>{const{classes:r,anchor:e,variant:a}=o,p={root:["root"],docked:[(a==="permanent"||a==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${d(e)}`,a!=="temporary"&&`paperAnchorDocked${d(e)}`]};return q(p,J,r)},Q=f(W,{name:"MuiDrawer",slot:"Root",overridesResolver:A})(R(({theme:o})=>({zIndex:(o.vars||o).zIndex.drawer}))),P=f("div",{shouldForwardProp:L,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:A})({flex:"0 0 auto"}),X=f(Y,{name:"MuiDrawer",slot:"Paper",overridesResolver:(o,r)=>{const{ownerState:e}=o;return[r.paper,r[`paperAnchor${d(e.anchor)}`],e.variant!=="temporary"&&r[`paperAnchorDocked${d(e.anchor)}`]]}})(R(({theme:o})=>({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(o.vars||o).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0,variants:[{props:{anchor:"left"},style:{left:0}},{props:{anchor:"top"},style:{top:0,left:0,right:0,height:"auto",maxHeight:"100%"}},{props:{anchor:"right"},style:{right:0}},{props:{anchor:"bottom"},style:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"}},{props:({ownerState:r})=>r.anchor==="left"&&r.variant!=="temporary",style:{borderRight:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="top"&&r.variant!=="temporary",style:{borderBottom:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="right"&&r.variant!=="temporary",style:{borderLeft:`1px solid ${(o.vars||o).palette.divider}`}},{props:({ownerState:r})=>r.anchor==="bottom"&&r.variant!=="temporary",style:{borderTop:`1px solid ${(o.vars||o).palette.divider}`}}]}))),b={left:"right",right:"left",top:"down",bottom:"up"};function Z(o){return["left","right"].includes(o)}function _({direction:o},r){return o==="rtl"&&Z(r)?b[r]:r}const ir=h.forwardRef(function(r,e){const a=F({props:r,name:"MuiDrawer"}),p=V(),M=O(),B={enter:p.transitions.duration.enteringScreen,exit:p.transitions.duration.leavingScreen},{anchor:v="left",BackdropProps:$,children:j,className:u,elevation:D=16,hideBackdrop:C=!1,ModalProps:{BackdropProps:T,...z}={},onClose:N,open:m=!1,PaperProps:x={},SlideProps:S,TransitionComponent:I=G,transitionDuration:g=B,variant:i="temporary",...c}=a,k=h.useRef(!1);h.useEffect(()=>{k.current=!0},[]);const U=_({direction:M?"rtl":"ltr"},v),s={...a,anchor:v,elevation:D,open:m,variant:i,...c},t=K(s),w=n.jsx(X,{elevation:i==="temporary"?D:0,square:!0,...x,className:l(t.paper,x.className),ownerState:s,children:j});if(i==="permanent")return n.jsx(P,{className:l(t.root,t.docked,u),ownerState:s,ref:e,...c,children:w});const y=n.jsx(I,{in:m,direction:b[U],timeout:g,appear:k.current,...S,children:w});return i==="persistent"?n.jsx(P,{className:l(t.root,t.docked,u),ownerState:s,ref:e,...c,children:y}):n.jsx(Q,{BackdropProps:{...$,...T,transitionDuration:g},className:l(t.root,t.modal,u),open:m,ownerState:s,onClose:N,hideBackdrop:C,ref:e,...c,...z,children:y})});export{ir as D};