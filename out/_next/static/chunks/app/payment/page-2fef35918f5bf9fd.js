(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{87565:function(e,t,a){Promise.resolve().then(a.bind(a,71371))},71371:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var r=a(57437),i=a(2265),s=a(16349),l=a(52351);let n=e=>{let{children:t,className:a,containerClassName:i,animate:n=!0}=e,c={initial:{backgroundPosition:"0 50%"},animate:{backgroundPosition:["0, 50%","100% 50%","0 50%"]}};return(0,r.jsxs)("div",{className:(0,s.cn)("relative p-[2px] group ",i),children:[(0,r.jsx)(l.E.div,{variants:n?c:void 0,initial:n?"initial":void 0,animate:n?"animate":void 0,transition:n?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:n?"400% 400%":void 0},className:(0,s.cn)("absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform"," bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]")}),(0,r.jsx)(l.E.div,{variants:n?c:void 0,initial:n?"initial":void 0,animate:n?"animate":void 0,transition:n?{duration:5,repeat:1/0,repeatType:"reverse"}:void 0,style:{backgroundSize:n?"400% 400%":void 0},className:(0,s.cn)("absolute inset-0 rounded-3xl z-[1] will-change-transform","bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)] ")}),(0,r.jsx)("div",{className:(0,s.cn)("relative z-10",a),children:t})]})};var c=a(32804),o=a(49),d=a(57943),u=a(87138),m=a(93224),x=a(18834),h=a(89796),f=a(28429),b=a(22051),p=a(14954),g=()=>{var e;let t=(0,c.Z)("(max-width:768px)"),[a,s]=(0,i.useState)(null),[l,g]=(0,i.useState)({name:"",email:"",contactNumber:""}),[v,j]=(0,i.useState)(!1),[w,y]=(0,i.useState)(10);(0,i.useEffect)(()=>{(()=>{let e=new URLSearchParams(window.location.search).get("plan");if(e)try{let t=JSON.parse(decodeURIComponent(e));s(t)}catch(e){console.error("Failed to parse plan details",e)}})()},[]);let _=e=>{let{name:t,value:a}=e.target;g(e=>({...e,[t]:a}))};if(!a)return(0,r.jsx)("p",{children:"Loading..."});let N=(e=a.services).includes("Voice")?(0,r.jsx)(h.Z,{}):e.includes("IPTV")?(0,r.jsx)(x.Z,{}):(0,r.jsx)(m.Z,{});return(0,r.jsxs)("div",{className:"bg-white",children:[(0,r.jsx)(p.Z,{}),(0,r.jsxs)("div",{className:"flex flex-col pt-24 justify-center items-center w-full text-medium",children:[(0,r.jsx)("h1",{className:"".concat(t?"text-2xl":"text-3xl"," font-bold text-center mb-4"),children:"Only Broadband"===a.title?"Broadband":a.title}),(0,r.jsx)("h2",{className:"text-center text-gray-500 mx-8",children:"Please fill in your details below and our team will get back to you shortly."}),(0,r.jsxs)("div",{className:"".concat(t?"flex flex-col items-center w-full px-4":"flex flex-row justify-between items-start w-3/4 lg:px-8"),children:[(0,r.jsx)("div",{className:"w-full flex justify-center ".concat(t?"mb-8":"w-1/2"),children:v?(0,r.jsxs)("div",{className:"text-center mt-4",children:[(0,r.jsx)(b.Z,{style:{fontSize:40,color:"green"}}),(0,r.jsx)("h2",{className:"text-green-700 mt-2",children:"Stay Connected! You Will be Contacted Shortly."}),(0,r.jsxs)("p",{className:"text-green-500",children:["Redirecting in ",w," seconds..."]})]}):(0,r.jsx)("form",{onSubmit:e=>{if(e.preventDefault(),j(!0),console.log("User Details:",l),a){console.log("Selected Plan Title:",a.title);let e=setInterval(()=>{y(e=>e-1)},1e3);setTimeout(()=>{clearInterval(e),window.location.href="/"},1e4)}},className:"w-full max-w-lg md:mt-16",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(d.Z,{label:"Name",type:"text",name:"name",value:l.name,onChange:_,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,InputProps:{style:{borderRadius:"15px"}}}),(0,r.jsx)(d.Z,{label:"Email",type:"email",name:"email",value:l.email,onChange:_,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,InputProps:{style:{borderRadius:"15px"}}}),(0,r.jsx)(d.Z,{label:"Contact Number",type:"tel",name:"contactNumber",value:l.contactNumber,onChange:_,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,InputProps:{style:{borderRadius:"15px"}}}),(0,r.jsx)("button",{type:"submit",className:"py-2 px-4 mt-4 border rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus-visible:ring-4 focus-visible:ring-blue-200/50 transition-colors ease-out",children:"Submit"})]})})}),!t&&(0,r.jsx)("div",{className:"w-1/2 items-center lg:ml-32 m-8 md:mr-2 sm:mr-0",children:(0,r.jsx)(n,{className:"custom-gradient shadow-lg p-2 rounded-lg",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("div",{className:"icon-placeholder mb-4",children:(0,r.jsx)("div",{className:"text-white w-12 h-12  rounded-full bg-medium-translucent border border-gray-300 flex flex-col items-center justify-center overflow-hidden",children:N})}),(0,r.jsx)("h2",{className:"text-xl font-bold text-black mb-2",children:a.title}),(0,r.jsx)("ul",{className:"space-y-2 mt-2 list-none text-black",children:a.SevicesDescription.map((e,t)=>(0,r.jsxs)("li",{className:"flex items-center",children:[(0,r.jsx)("span",{className:"text-green-500 mr-2",children:"✓"}),e]},"desc-".concat(t)))}),(0,r.jsx)(u.default,{href:"/plans/".concat(a.url),passHref:!0,children:(0,r.jsx)("button",{className:"mt-2 py-2 px-4 border border-gray-300 relative rounded-full bg-transparent text-fg-primary shadow-inset-1 shadow-border-primary hover:bg-bg-secondary active:bg-bg-secondary focus-visible:ring-4 focus-visible:ring-blue-200/50 cursor-pointer transition-colors ease-out flex-1 mr-2",children:(0,r.jsxs)("span",{className:"flex items-center justify-center",children:[(0,r.jsx)("span",{className:"text-black truncate mr-2",style:{fontWeight:"500"},children:"View Plans"}),(0,r.jsx)("div",{className:"text-black rounded-full bg-gray-200 p-1",children:(0,r.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:[(0,r.jsx)("title",{children:"arrow right icon"}),(0,r.jsx)("path",{d:"M3.3335 8H12.6668",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M8 3.33337L12.6667 8.00004L8 12.6667",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})})})]})})})]})]}),(0,r.jsx)(f.Z,{})]})}}},function(e){e.O(0,[141,326,699,726,485,164,285,351,222,657,971,23,744],function(){return e(e.s=87565)}),_N_E=e.O()}]);