(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657,7],{14954:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(57437),s=a(2265),r=a(66648),l=a(16349);function i(e){let{borderRadius:t="6rem",children:a,as:s="button",containerClassName:r,borderClassName:i,duration:o,className:c,...d}=e;return(0,n.jsxs)(s,{className:(0,l.cn)("bg-transparent relative text-xl h-10 w-40 overflow-hidden",r),style:{borderRadius:t},...d,children:[(0,n.jsx)("div",{className:"absolute inset-0",style:{borderRadius:"calc(".concat(t," * 0.96)")}}),(0,n.jsx)("div",{className:(0,l.cn)("relative bg-medium text-white flex items-center justify-center w-full h-full text-[15px] antialiased ",c),style:{borderRadius:"calc(".concat(t," * 0.96)"),fontWeight:500},children:a})]})}var o=a(87138),c={src:"/_next/static/media/company_logo.e69a810c.svg",height:1444,width:5345,blurWidth:0,blurHeight:0};a(933);var d=()=>{let[e,t]=(0,s.useState)({backdropFilter:"blur(10px)",background:"hsla(0,0%,93%,0.72)",borderRadius:"2rem",zIndex:25}),[a,l]=(0,s.useState)(null),[d,m]=(0,s.useState)(null),[h,x]=(0,s.useState)(!1),u=(0,s.useRef)(null),p=e=>{a===e?l(null):(l(e),m(null))},f=e=>{l(e)},b=()=>{l(null)};(0,s.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&l(null)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let j=[{name:"plans",dropdownItems:[{name:"Broadband",link:"/plans/broadband"},{name:"Broadband+Voice",link:"/plans/broadband+voice"},{name:"Entertainment Plans",link:"/plans/entertainment-plans"}]},{name:"services",dropdownItems:[{name:"FTTH Broadband",link:"/services/broadband"},{name:"Business Solutions",link:"/#business-solutions"},{name:"Telephone & Intercom",link:"/services/telephone-intercomm"},{name:"IPTV",link:"/services/iptv"},{name:"CCTV & Security Systems",link:"/services/cctv"},{name:"Home Automation",link:"/services/home-automation"}]},{name:"contact",dropdownItems:[{name:"+91-9513131177",link:"tel:+91-9513131177"},{name:"+91-9513131199",link:"tel:+91-9513131199"},{name:"080-29650999",link:"tel:080-29650999"},{name:"support@broadwaycommunication.net",link:"mailto:support@broadwaycommunication.net"}]},{name:"aboutUs",link:"/aboutUs"}];return(0,n.jsxs)("nav",{className:"fixed md:top-[2%] left-1/2 transform -translate-x-1/2 p-4 z-150",style:{top:"1rem",maxWidth:"800px",width:"95%",...e},children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(o.default,{href:"/",legacyBehavior:!0,children:(0,n.jsx)("a",{className:"cursor-pointer",children:(0,n.jsx)(r.default,{src:c,alt:"Logo",width:130,height:150})})}),(0,n.jsxs)("div",{className:"md:flex space-x-4 items-center hidden",children:[j.map((e,t)=>e.dropdownItems?(0,n.jsxs)("div",{className:"relative",onMouseEnter:()=>f(e.name),onMouseLeave:b,children:[(0,n.jsx)("button",{className:"text-black hover:text-gray-300 cursor-pointer font-bold",style:{background:"none",border:"none",padding:"0",color:"black",font:"inherit",cursor:"pointer"},children:e.name.charAt(0).toUpperCase()+e.name.slice(1)}),a===e.name&&(0,n.jsx)("div",{ref:u,className:" absolute top-full left-1/2 transform -translate-x-1/2 mt-[1px] min-w-48 max-w-auto w-auto shadow-md rounded-lg py-2 dropdown",style:{backdropFilter:"blur(10px)",background:"hsla(0,0%,93%,1)",zIndex:50},children:e.dropdownItems.map(e=>(0,n.jsx)(o.default,{href:e.link,legacyBehavior:!0,children:(0,n.jsx)("a",{className:"block px-4 py-1 text-black cursor-pointer hover:underline",children:e.name})},e.name))})]},t):(0,n.jsx)(o.default,{href:e.link||"#",legacyBehavior:!0,children:(0,n.jsx)("a",{className:"text-black cursor-pointer",children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})},t)),(0,n.jsx)(o.default,{href:"https://mypage.broadwaycommunication.net/",passHref:!0,legacyBehavior:!0,children:(0,n.jsx)(i,{children:"Make Payment"})})]}),(0,n.jsx)("button",{className:"md:hidden text-black",onClick:()=>x(!h),children:h?(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:[(0,n.jsx)("path",{d:"M4 4L16 16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 16L16 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}):(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:[(0,n.jsx)("path",{d:"M4 6H16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 14H16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]}),h&&(0,n.jsxs)("div",{className:"md:hidden flex flex-col px-4 mt-2 transition-max-height duration-500 ease-in-out ".concat(h?"max-h-screen fade-in":"max-h-0"),children:[j.map((e,t)=>e.dropdownItems?(0,n.jsxs)("div",{className:"py-2",children:[(0,n.jsx)("button",{onClick:()=>p(String(t)),className:"text-black hover:text-gray-800 font-bold text-lg w-full text-left",children:e.name.charAt(0).toUpperCase()+e.name.slice(1)}),a===String(t)&&(0,n.jsx)("ul",{className:"pl-2 fade-in",children:e.dropdownItems.map((e,t)=>(0,n.jsx)("li",{className:"mt-2",children:(0,n.jsx)(o.default,{href:e.link,legacyBehavior:!0,children:(0,n.jsx)("a",{className:"text-blue-700 hover:text-blue-900",children:e.name})})},t))})]},t):(0,n.jsx)(o.default,{href:e.link||"#",legacyBehavior:!0,children:(0,n.jsx)("a",{className:"my-2 text-black hover:text-gray-800 font-bold text-lg w-full text-left",children:e.name.charAt(0).toUpperCase()+e.name.slice(1)})},t)),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)(o.default,{href:"https://mypage.broadwaycommunication.net/",passHref:!0,legacyBehavior:!0,children:(0,n.jsx)(i,{containerClassName:"w-full",children:"Make Payment"})})})]})]})}},28429:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(57437);a(2265);var s=a(41942),r=a(18834),l=a(71243),i=a(87138),o=a(66648);a(53054);var c={src:"/_next/static/media/KarnatakaMap2.2a0c3d7b.svg",height:1080,width:1080,blurWidth:0,blurHeight:0},d=()=>{let e=new Date().getFullYear();return(0,n.jsxs)("footer",{className:"bg-slate-950 text-white p-8",children:[(0,n.jsxs)("div",{className:"max-w-6xl mx-auto flex flex-wrap justify-between items-center space-y-4 md:space-y-0",children:[(0,n.jsxs)("div",{className:"w-full md:w-auto mb-6 md:mb-0",children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-5",children:"Our Headquaters"}),(0,n.jsxs)("p",{children:["Prestige Montecarlo Apartment,",(0,n.jsx)("br",{}),"Doddaballapur Main Road, Puttenahalli, Yelahanka, ",(0,n.jsx)("br",{}),"Bangalore- 560064"]}),(0,n.jsxs)("div",{className:"mt-10",children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-5",children:"Contact Us"}),(0,n.jsxs)("a",{href:"tel:+91-9513131177",className:"flex items-center",children:[(0,n.jsx)(r.Z,{style:{color:"white",marginRight:"8px"}}),"+91-9513131177 ",(0,n.jsx)("br",{}),"+91-9513131199 ",(0,n.jsx)("br",{}),"\xa0080-29650999",(0,n.jsx)("br",{})]})]}),(0,n.jsx)("p",{className:"mt-4",children:(0,n.jsxs)("a",{href:"mailto:support@broadwaycommunication.net",className:"flex items-center",children:[(0,n.jsx)(l.Z,{style:{color:"white",marginRight:"8px"}}),"support@broadwaycommunication.net"]})})]}),(0,n.jsxs)("div",{className:"hidden md:block md:w-auto md:pt-12",children:[(0,n.jsx)("h4",{className:"text-xl font-bold mb-2",children:"Our Locations"}),(0,n.jsx)(o.default,{src:c,alt:"Karnataka Map",width:100,height:100})]}),(0,n.jsxs)("div",{className:"w-full md:w-auto flex flex-col",children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-2",children:"Terms"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"/privacy-policy",legacyBehavior:!0,children:(0,n.jsx)("a",{className:"hover:underline",children:"Privacy Policy"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"/terms-and-conditions",legacyBehavior:!0,children:(0,n.jsx)("a",{className:"hover:underline",children:"Terms & Conditions"})})})]})]}),(0,n.jsxs)("div",{className:"w-full md:w-auto flex flex-col items-center",children:[(0,n.jsx)("h4",{className:"text-xl font-bold mb-2",children:"Get In Touch"}),(0,n.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,n.jsx)("a",{href:"https://facebook.com",className:" text-2xl text-[#3b5998]",children:(0,n.jsx)(s.Am9,{})}),(0,n.jsx)("a",{href:"https://www.instagram.com/broadwaycommunicationpvtltd?igsh=dHVjeW1menVyenB4",className:" text-2xl text-[#e4405f]",children:(0,n.jsx)(s.Zf_,{})}),(0,n.jsx)("a",{href:"https://www.linkedin.com/company/broadway-communication-pvt-ltd/",className:" text-2xl text-[#0077b5]",children:(0,n.jsx)(s.ltd,{})})]})]})]}),(0,n.jsxs)("div",{className:"text-center text-white text-xs mt-8 md:mt-12",children:["\xa9 ",e," BroadwayCommunication PVT. LTD. All rights reserved."]})]})}},16349:function(e,t,a){"use strict";a.d(t,{cn:function(){return r}});var n=a(44839),s=a(96164);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,n.W)(t))}},933:function(){},53054:function(){}}]);