import{u as n,f as b,r as f,w as u,j as e,s as S}from"./app-CmFQXMDA.js";import{a as v}from"./academic-year-3a7-FzwL.js";import{s as _}from"./instructor-thunk-CyH1FJ5g.js";import{F as m,I as d,S as c}from"./Select-DLCvHkET.js";import{M as t}from"./MenuItem-B2s7s-bX.js";import{B as Y}from"./Button-Ca6_f5QD.js";import{P as g}from"./PersonSearch-CxVmqC8f.js";import"./user-service-BLnsr200.js";import"./DefaultPropsProvider-5hP49_pN.js";import"./InputBase-D0fN7pfI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-i_s-KtsF.js";import"./useTheme-BZLhdrJg.js";import"./ButtonBase-eD_9SiZw.js";import"./extendSxProp-B0W4GVs0.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Popover-WvAsdami.js";import"./useSlot-Cy7Dq-uq.js";import"./resolveComponentProps-CGxhu9sN.js";import"./Modal-Dchp1q7E.js";import"./utils-BiPubG9K.js";import"./Paper-R8ptfk5O.js";import"./Grow-Dl67VZfs.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-BO1-Chu-.js";import"./useSlotProps-D41p7Ys2.js";import"./useControlled-BN9NxkgP.js";import"./useId-Ca1dvIWf.js";import"./createSvgIcon-CK7OYcX0.js";import"./listItemTextClasses-AuQXObol.js";function te(){var p;const{sections:a}=n(s=>s.sections),{search:r}=n(s=>s.instructors);n(s=>s.courses);const{handleds:h}=n(s=>s.subjects),j=window.location.pathname.split("/")[3],o=b();f.useEffect(()=>{var s;o(u({...r,subject_code:j,section_id:(s=a==null?void 0:a.data[0])==null?void 0:s.id}))},[(p=a==null?void 0:a.data[0])==null?void 0:p.id]);function l(s){o(u({...r,[s.target.name]:s.target.value}))}async function x(s){await S.dispatch(_(r))}return e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Subject"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r.subject_code??"",name:"subject_code",disabled:!0,label:"Subject",onChange:l,children:h.map((s,i)=>e.jsx(t,{value:s.code,children:s.name},i))})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r.academic_year??"",name:"academic_year",label:"Academic Year",onChange:l,children:v().map((s,i)=>e.jsx(t,{value:s,children:s},i))})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(c,{id:"demo-simple-select",name:"year",label:"year",value:r.year??"",onChange:l,children:[e.jsx(t,{value:"1st Year",children:"1st Year"}),e.jsx(t,{value:"2nd Year",children:"2nd Year"}),e.jsx(t,{value:"3rd Year",children:"3rd Year"}),e.jsx(t,{value:"4th Year",children:"4th Year"})]})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Section"}),e.jsx(c,{id:"demo-simple-select",name:"section_id",label:"Section",value:r.section_id??"",onChange:l,children:a.data.map((s,i)=>e.jsx(t,{value:s.id,children:s.name},i))})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r.semester??"",name:"semester",label:"Semester",onChange:l,children:[e.jsx(t,{value:"1st Semester",children:"1st Semester"}),e.jsx(t,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(t,{value:"Summer",children:"Summer"})]})]}),e.jsxs(Y,{onClick:x,variant:"contained",className:"w-1/2",children:[e.jsx(g,{}),"Search"]})]})})}export{te as default};
