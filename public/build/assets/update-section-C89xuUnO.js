import{r,u as x,j as e,s as h}from"./app-CcFxKgAD.js";import{u as C,g as S}from"./course-thunk-BLiC-cd9.js";import{S as b,A as y}from"./Snackbar-CcrDZD18.js";import{B as j}from"./Button-DebYElXm.js";import{E as k}from"./Edit-BhaMZfW9.js";import{D as N}from"./Drawer-BHkQdjtz.js";import{B as E}from"./Box-cMi0Rkwc.js";import{T as B}from"./TextField-C5btmMzU.js";import{C as D}from"./CircularProgress-5T7pbAIz.js";import"./DefaultPropsProvider-CP8Dzdx4.js";import"./useSlot-BkWWeJSN.js";import"./resolveComponentProps-DWerkNmX.js";import"./ButtonBase-DSh1E41x.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-Hk2aX3dH.js";import"./Paper-CNqsZyLv.js";import"./useTheme-BAygJoIP.js";import"./IconButton-BiEa_APH.js";import"./useSlotProps-nnbFR5-n.js";import"./Modal-CSdbskgH.js";import"./ownerWindow-CO8Ksk3k.js";import"./utils-B0SWmCla.js";import"./Grow-R3vvtVcN.js";import"./index-4kJsEyVd.js";import"./Slide-CO8eoVxi.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-BQ60it6R.js";import"./Select-1tlIs-Yj.js";import"./InputBase-kwyMu21R.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C7QlkSNc.js";import"./Popover-rJp2u0B9.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CX5DjXqW.js";import"./useId-K_MTrqA2.js";function pe({data:i}){const[g,n]=r.useState(!1),[l,m]=r.useState({}),[s,c]=r.useState({}),[v,p]=r.useState(!1),[u,a]=r.useState(!1);x(t=>t.instructors),x(t=>t.subjects),r.useEffect(()=>{m(i)},[]);const f=t=>()=>{n(t)};async function w(t){a(!0);const o=await h.dispatch(C(l));o.status==200?(await h.dispatch(S()),p(!0),c({}),a(!1)):(a(!1),c(o.response.data.errors))}const d=(t,o)=>{o!=="clickaway"&&(p(!1),n(!1))};return e.jsxs("div",{children:[e.jsx(b,{open:v,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:d,children:e.jsx(y,{onClose:d,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),e.jsx(j,{size:"small",variant:"contained",onClick:f(!0),children:e.jsx(k,{})}),e.jsx(N,{anchor:"right",open:g,onClose:f(!1),children:e.jsx(E,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Create course"}),e.jsx(B,{value:l.name,onChange:t=>m({...i,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"name",id:"outlined-basic",label:"Name of Course",variant:"outlined"})]}),e.jsx(j,{onClick:w,disabled:u,variant:"contained",className:" w-full",children:u?e.jsx(D,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{pe as default};