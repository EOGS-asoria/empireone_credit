import{r as n,u as w,j as e,s as v}from"./app-CmFQXMDA.js";import{u as k,g as I}from"./subject-thunk-7t01lDf_.js";import{a as N}from"./academic-year-3a7-FzwL.js";import{S as E,A as F}from"./Snackbar-C2NahZBo.js";import{B as b}from"./Button-Ca6_f5QD.js";import{E as A}from"./Edit-KuC4NvRY.js";import{D as B}from"./Drawer-DPSbidOb.js";import{B as D}from"./Box-Duu3fCG7.js";import{T as g}from"./TextField-977EFnZH.js";import{F as o,I as m,S as c}from"./Select-DLCvHkET.js";import{M as r}from"./MenuItem-B2s7s-bX.js";import{C as T}from"./CircularProgress-CNUxwePB.js";import"./DefaultPropsProvider-5hP49_pN.js";import"./useSlot-Cy7Dq-uq.js";import"./resolveComponentProps-CGxhu9sN.js";import"./ButtonBase-eD_9SiZw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CK7OYcX0.js";import"./Paper-R8ptfk5O.js";import"./useTheme-BZLhdrJg.js";import"./IconButton-DgFuEDS4.js";import"./useSlotProps-D41p7Ys2.js";import"./Modal-Dchp1q7E.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-BiPubG9K.js";import"./Grow-Dl67VZfs.js";import"./index-BO1-Chu-.js";import"./Slide--mF259TZ.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-B0W4GVs0.js";import"./useId-Ca1dvIWf.js";import"./InputBase-D0fN7pfI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-i_s-KtsF.js";import"./Popover-WvAsdami.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BN9NxkgP.js";import"./listItemTextClasses-AuQXObol.js";function ge({data:S}){const[y,u]=n.useState(!1),[a,l]=n.useState({}),[s,p]=n.useState({}),[C,h]=n.useState(!1),[x,d]=n.useState(!1),{instructors:_}=w(t=>t.instructors);n.useEffect(()=>{l(S)},[]);const f=t=>()=>{u(t)};async function Y(t){d(!0);const i=await v.dispatch(k({id:a.id,code:a.code,name:a.name,semester:a.semester,academic_year:a.academic_year,year:a.year,instructor_id:a.instructor_id}));i.status==200?(await v.dispatch(I()),h(!0),p({}),d(!1)):(d(!1),p(i.response.data.errors))}const j=(t,i)=>{i!=="clickaway"&&(h(!1),u(!1))};return e.jsxs("div",{children:[e.jsx(E,{open:C,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:j,children:e.jsx(F,{onClose:j,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),e.jsx(b,{size:"small",variant:"contained",onClick:f(!0),children:e.jsx(A,{})}),e.jsx(B,{anchor:"right",open:y,onClose:f(!1),children:e.jsx(D,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Update Subject"}),e.jsx(g,{onChange:t=>l({...a,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"text",value:a.name,id:"outlined-basic",label:"Name of Subject",variant:"outlined"}),e.jsx(g,{onChange:t=>l({...a,[t.target.name]:t.target.value}),error:!!(s!=null&&s.code),helperText:(s==null?void 0:s.code)??"",value:a.code,name:"code",type:"text",id:"outlined-basic",label:"Subject Code",variant:"outlined"}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:(a==null?void 0:a.academic_year)??"",name:"academic_year",label:"Academic Year",onChange:t=>l({...a,[t.target.name]:t.target.value}),children:N().map((t,i)=>e.jsx(r,{value:t,children:t},i))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(c,{id:"demo-simple-select",name:"semester",label:"Semester",value:(a==null?void 0:a.semester)??"",onChange:t=>l({...a,[t.target.name]:t.target.value}),children:[e.jsx(r,{value:"1st Semester",children:"1st Semester"}),e.jsx(r,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(r,{value:"Summer",children:"Summer"})]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Instructor"}),e.jsx(c,{id:"demo-simple-select",name:"instructor_id",label:"Instructor",value:a.instructor_id,onChange:t=>l({...a,[t.target.name]:t.target.value}),children:_.data.map((t,i)=>e.jsxs(r,{value:t.user_id,children:[t.fname," ",t.lname]}))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"year",label:"Year",value:a.year,onChange:t=>l({...a,[t.target.name]:t.target.value}),children:[e.jsx(r,{value:"1st Year",children:"1st Year"}),e.jsx(r,{value:"2nd Year",children:"2nd Year"}),e.jsx(r,{value:"3rd Year",children:"3rd Year"}),e.jsx(r,{value:"4th Year",children:"4th Year"})]})]})]}),e.jsx(b,{onClick:Y,disabled:x,variant:"contained",className:" w-full",children:x?e.jsx(T,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{ge as default};
