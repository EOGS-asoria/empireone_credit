import{r as s,j as t,s as x}from"./app-CcFxKgAD.js";import{u as w,g as S}from"./department-thunk-CQ2TWHsV.js";import{S as b,A as C}from"./Snackbar-CcrDZD18.js";import{B as h}from"./Button-DebYElXm.js";import{E as y}from"./Edit-BhaMZfW9.js";import{D as k}from"./Drawer-BHkQdjtz.js";import{B as E}from"./Box-cMi0Rkwc.js";import{T as N}from"./TextField-C5btmMzU.js";import{C as D}from"./CircularProgress-5T7pbAIz.js";import"./DefaultPropsProvider-CP8Dzdx4.js";import"./useSlot-BkWWeJSN.js";import"./resolveComponentProps-DWerkNmX.js";import"./ButtonBase-DSh1E41x.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Hk2aX3dH.js";import"./Paper-CNqsZyLv.js";import"./useTheme-BAygJoIP.js";import"./IconButton-BiEa_APH.js";import"./useSlotProps-nnbFR5-n.js";import"./Modal-CSdbskgH.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-B0SWmCla.js";import"./Grow-R3vvtVcN.js";import"./index-4kJsEyVd.js";import"./Slide-CO8eoVxi.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-BQ60it6R.js";import"./Select-1tlIs-Yj.js";import"./InputBase-kwyMu21R.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C7QlkSNc.js";import"./Popover-rJp2u0B9.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CX5DjXqW.js";import"./useId-K_MTrqA2.js";function pt({data:n}){const[j,l]=s.useState(!1),[o,m]=s.useState({}),[e,p]=s.useState({}),[g,c]=s.useState(!1),[f,i]=s.useState(!1);s.useEffect(()=>{m(n)},[]);const u=r=>()=>{l(r)};async function v(r){i(!0);const a=await x.dispatch(w(o));a.status==200?(await x.dispatch(S()),c(!0),p({}),i(!1)):(i(!1),p(a.response.data.errors))}const d=(r,a)=>{a!=="clickaway"&&(c(!1),l(!1))};return console.log("form",o),t.jsxs("div",{children:[t.jsx(b,{open:g,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:d,children:t.jsx(C,{onClose:d,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),t.jsx(h,{size:"small",variant:"contained",onClick:u(!0),children:t.jsx(y,{})}),t.jsx(k,{anchor:"right",open:j,onClose:u(!1),children:t.jsx(E,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Edit Department"}),t.jsx(N,{onChange:r=>m({...n,[r.target.name]:r.target.value}),value:(o==null?void 0:o.name)??"",error:!!(e!=null&&e.name),helperText:(e==null?void 0:e.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of Department",variant:"outlined"})]}),t.jsx(h,{onClick:v,disabled:f,variant:"contained",className:" w-full",children:f?t.jsx(D,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{pt as default};