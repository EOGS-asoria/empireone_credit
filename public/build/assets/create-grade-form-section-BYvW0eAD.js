import{r as n,u as g,f as A,j as e,s as B,h as R,x as I}from"./app-CmFQXMDA.js";import{s as q}from"./grade-thunk-ogXNw5jy.js";import{F as v,I as S,S as T}from"./Select-DLCvHkET.js";import{M as a}from"./MenuItem-B2s7s-bX.js";import{F as _,T as w}from"./TextField-977EFnZH.js";import{T as M,a as N,b as k,c as C,d,e as Q}from"./TableRow-uF-dnioo.js";import{P as W}from"./Paper-R8ptfk5O.js";import{B as G}from"./Button-Ca6_f5QD.js";import{S as H}from"./Save-BGQtsQOh.js";import"./DefaultPropsProvider-5hP49_pN.js";import"./InputBase-D0fN7pfI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-i_s-KtsF.js";import"./useTheme-BZLhdrJg.js";import"./ButtonBase-eD_9SiZw.js";import"./extendSxProp-B0W4GVs0.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Popover-WvAsdami.js";import"./useSlot-Cy7Dq-uq.js";import"./resolveComponentProps-CGxhu9sN.js";import"./Modal-Dchp1q7E.js";import"./utils-BiPubG9K.js";import"./Grow-Dl67VZfs.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-BO1-Chu-.js";import"./useSlotProps-D41p7Ys2.js";import"./useControlled-BN9NxkgP.js";import"./useId-Ca1dvIWf.js";import"./createSvgIcon-CK7OYcX0.js";import"./listItemTextClasses-AuQXObol.js";function Te(){const[m,h]=n.useState([]),[i,x]=n.useState({}),[f,u]=n.useState(!1),[l,j]=n.useState({}),{students:o,search:b}=g(s=>s.instructors),{user:E}=g(s=>s.app),F=A();n.useEffect(()=>{if(o.length>0){const s=o.map(r=>({...r,user_id:r.user.user_id,score:""}));h(s)}},[o.length]);const P=(s,r)=>{const t=s.target.value;h(p=>p.map(c=>c.user_id===r?{...c,score:t}:c)),t!==""&&j(p=>{const{[r]:c,...z}=p;return z})},y=()=>{let s=!0,r={};return i.lecture||(r.lecture="Lecture is required",s=!1),i.assessment||(r.assessment="Assessment is required",s=!1),m.forEach(t=>{t.score===""&&(r[t.user_id]="Score is required",s=!1)}),j(r),s},L=async()=>{if(console.log("records",m.map(s=>s.score)),!!y()){u(!0);try{const s=await B.dispatch(q({...i,user_id:E.user_id,subject_code:b.subject_code,search:b,records:m,date:R().format("LL")}));F(I([])),u(!1)}catch(s){console.error("Submission error:",s),u(!1)}}};return e.jsxs("div",{className:"flex flex-col gap-5",children:[o.length!==0&&e.jsxs("div",{className:"flex gap-5",children:[e.jsxs(v,{fullWidth:!0,error:!!l.lecture,children:[e.jsx(S,{id:"demo-simple-select-label",children:"Lecture"}),e.jsxs(T,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"lecture",label:"Lecture",onChange:s=>x({...i,[s.target.name]:s.target.value}),value:i.lecture??"",children:[e.jsx(a,{value:"Examination",children:"Examination (30%)"}),e.jsx(a,{value:"Quizzes",children:"Quizzes (30%)"}),e.jsx(a,{value:"Projects/Assignment",children:"Projects/Assignment (20%)"}),e.jsx(a,{value:"Class Participation",children:"Class Participation (20%)"})]}),e.jsx(_,{children:l.lecture??""})]}),e.jsxs(v,{fullWidth:!0,error:!!l.assessment,children:[e.jsx(S,{id:"demo-simple-select-label",children:"Assessment"}),e.jsxs(T,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"assessment",label:"Assessment",onChange:s=>x({...i,[s.target.name]:s.target.value}),children:[e.jsx(a,{value:"Prelim",children:"Prelim"}),e.jsx(a,{value:"Midterm",children:"Midterm"}),e.jsx(a,{value:"Final",children:"Final"})]}),e.jsx(_,{children:l.assessment??""})]})]}),e.jsx(M,{component:W,children:e.jsxs(N,{sx:{minWidth:650},"aria-label":"a dense table",children:[e.jsx(k,{children:e.jsxs(C,{children:[e.jsx(d,{children:"Students"}),e.jsx(d,{children:"Grades"})]})}),e.jsx(Q,{children:o.map((s,r)=>e.jsxs(C,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsxs(d,{component:"th",scope:"row",children:[s.user.fname," ",s.user.lname]}),e.jsx(d,{children:e.jsx(w,{type:"number",value:s.score,onChange:t=>P(t,s.user.user_id,s.user),label:"Score",variant:"outlined",error:!!l[s.user.user_id],helperText:l[s.user.user_id]??""})})]},r))})]})}),o.length!==0&&e.jsx("div",{className:"flex w-full items-end justify-end",children:e.jsxs(G,{onClick:L,variant:"contained",className:"flex gap-2",disabled:f,children:[e.jsx(H,{}),e.jsx("div",{children:f?"Submitting...":"Add Records"})]})})]})}export{Te as default};
