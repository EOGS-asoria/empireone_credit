import{r,u as f,j as e,s as d}from"./app-HHd-x-YV.js";import{s as w,g as S}from"./course-thunk-CW7gLdXk.js";import{a as b}from"./academic-year-f074eGWp.js";import{S as y,A as k}from"./Snackbar-C32YN27t.js";import{B as x}from"./Modal-CGyGWQY4.js";import{D as N}from"./Drawer-CfVH8F68.js";import{B as _}from"./Box-Bc6bgHzK.js";import{T as D}from"./TextField-DI8YW4qu.js";import{C as B}from"./CircularProgress-BE0C8Ycp.js";import"./DefaultPropsProvider-CHdgsG8Y.js";import"./useSlot-Cm12o5Gd.js";import"./resolveComponentProps-BJ7FQ9kl.js";import"./ButtonBase-vij8kgUG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B9l97ECT.js";import"./Paper-CaH9oHFm.js";import"./useTheme-cE19eQD4.js";import"./IconButton-M7DjU19i.js";import"./useSlotProps-J3G2aTDr.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-fZ670os_.js";import"./utils-DL-NOZG8.js";import"./index-CciWo9gC.js";import"./Slide-qi1mNOkX.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-7_0RiXul.js";import"./Select-CKUcnHJX.js";import"./InputBase-lfO_99AM.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DInlM-cS.js";import"./Popover-CeW5yCwS.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BJFskI7X.js";import"./useId-BeqvwIPO.js";function me(){const[h,i]=r.useState(!1),[n,a]=r.useState(!1),[l,j]=r.useState({}),[s,c]=r.useState({}),[g,m]=r.useState(!1);f(t=>t.subjects);const{instructors:C}=f(t=>t.instructors),p=t=>()=>{i(t)};async function v(t){a(!0);const o=await d.dispatch(w(l));o.status==200?(await d.dispatch(S()),m(!0),c({}),a(!1)):(a(!1),c(o.response.data.errors))}const u=(t,o)=>{o!=="clickaway"&&(m(!1),i(!1))};return console.log("instructors",C),console.log("academic_year",b()),e.jsxs("div",{children:[e.jsx(y,{open:g,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:u,children:e.jsx(k,{onClose:u,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),e.jsx(x,{variant:"contained",onClick:p(!0),children:"Create course"}),e.jsx(N,{anchor:"right",open:h,onClose:p(!1),children:e.jsx(_,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Create course"}),e.jsx(D,{onChange:t=>j({...l,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"name",id:"outlined-basic",label:"Name of Course",variant:"outlined"})]}),e.jsx(x,{onClick:v,disabled:n,variant:"contained",className:" w-full",children:n?e.jsx(B,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{me as default};