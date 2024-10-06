import{r as o,u,c as k,j as e,s as g}from"./app-CmFQXMDA.js";import{a as A}from"./academic-year-3a7-FzwL.js";import{s as E}from"./enrollment-thunk-CO0rYOQe.js";import{g as N}from"./student-thunk-Rr4_KUAQ.js";import{S as D,A as F}from"./Snackbar-C2NahZBo.js";import{B as b}from"./Button-Ca6_f5QD.js";import{P as I}from"./PersonAdd-DQ3abU2H.js";import{D as W}from"./Drawer-DPSbidOb.js";import{B}from"./Box-Duu3fCG7.js";import{T as z}from"./TextField-977EFnZH.js";import{F as n,I as m,S as c}from"./Select-DLCvHkET.js";import{M as a}from"./MenuItem-B2s7s-bX.js";import{C as P}from"./CircularProgress-CNUxwePB.js";import"./DefaultPropsProvider-5hP49_pN.js";import"./useSlot-Cy7Dq-uq.js";import"./resolveComponentProps-CGxhu9sN.js";import"./ButtonBase-eD_9SiZw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CK7OYcX0.js";import"./Paper-R8ptfk5O.js";import"./useTheme-BZLhdrJg.js";import"./IconButton-DgFuEDS4.js";import"./useSlotProps-D41p7Ys2.js";import"./Modal-Dchp1q7E.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-BiPubG9K.js";import"./Grow-Dl67VZfs.js";import"./index-BO1-Chu-.js";import"./Slide--mF259TZ.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-B0W4GVs0.js";import"./useId-Ca1dvIWf.js";import"./InputBase-D0fN7pfI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-i_s-KtsF.js";import"./Popover-WvAsdami.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BN9NxkgP.js";import"./listItemTextClasses-AuQXObol.js";function _e({data:S}){const[C,p]=o.useState(!1),[h,d]=o.useState(!1),[i,x]=o.useState({}),[_,f]=o.useState(!1);u(t=>t.department);const{courses:y}=u(t=>t.courses),{sections:w}=u(t=>t.sections),[r,l]=o.useState({});o.useEffect(()=>{l({...S,academic_year:k(),semester:"1st Semester"})},[]);const j=t=>()=>{p(t)};console.log("formsss",r);async function Y(t){d(!0);const s=await g.dispatch(E(r));s.status==200?(await g.dispatch(N()),f(!0),x({}),d(!1)):(d(!1),x(s.response.data.errors))}const v=(t,s)=>{s!=="clickaway"&&(f(!1),p(!1))};return e.jsxs("div",{children:[e.jsx(D,{open:_,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:v,children:e.jsx(F,{onClose:v,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),e.jsx(b,{size:"small",variant:"contained",color:"warning",onClick:j(!0),children:e.jsx(I,{})}),e.jsx(W,{anchor:"right",open:C,onClose:j(!1),children:e.jsx(B,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Add Enrollment"}),e.jsx(z,{onChange:t=>l({...r,[t.target.name]:t.target.value}),error:!!(i!=null&&i.user_id),helperText:(i==null?void 0:i.user_id)??"",value:r.user_id,name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined",disabled:!0}),e.jsxs(n,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r.academic_year,name:"academic_year",label:"Academic Year",onChange:t=>l({...r,[t.target.name]:t.target.value}),children:A().map((t,s)=>e.jsx(a,{value:t,children:t},s))})]}),e.jsxs(n,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Course"}),e.jsx(c,{id:"demo-simple-select",name:"course_id",label:"Course",value:r.course_id,onChange:t=>l({...r,[t.target.name]:t.target.value}),children:y.data.map((t,s)=>e.jsx(a,{value:t.id,children:t.name},s))})]}),e.jsxs(n,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(c,{id:"demo-simple-select",name:"semester",label:"Semester",value:r.semester,onChange:t=>l({...r,[t.target.name]:t.target.value}),children:[e.jsx(a,{value:"1st Semester",children:"1st Semester"}),e.jsx(a,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(a,{value:"Summer",children:"Summer"})]})]}),e.jsxs(n,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(c,{id:"demo-simple-select",name:"year",label:"year",value:r.year,onChange:t=>l({...r,[t.target.name]:t.target.value}),children:[e.jsx(a,{value:"1st Year",children:"1st Year"}),e.jsx(a,{value:"2nd Year",children:"2nd Year"}),e.jsx(a,{value:"3rd Year",children:"3rd Year"}),e.jsx(a,{value:"4th Year",children:"4th Year"})]})]}),e.jsxs(n,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Sections"}),e.jsx(c,{id:"demo-simple-select",name:"section_id",label:"Course",value:r.section_id,onChange:t=>l({...r,[t.target.name]:t.target.value}),children:w.data.map((t,s)=>e.jsx(a,{value:t.id,children:t.name},s))})]})]}),e.jsx(b,{onClick:Y,disabled:h,variant:"contained",className:" w-full",children:h?e.jsx(P,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{_e as default};
