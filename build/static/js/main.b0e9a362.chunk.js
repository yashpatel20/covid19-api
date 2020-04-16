(this["webpackJsonpcovid19-client"]=this["webpackJsonpcovid19-client"]||[]).push([[0],{124:function(e,a,t){e.exports=t(246)},129:function(e,a,t){},130:function(e,a,t){},242:function(e,a,t){},246:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),i=(t(129),t(130),t(23)),s=t(30),o=t(8),m=t.n(o),d=t(12),u=t(9),E=t(10),p=t.n(E),g=t(115),b=t(116),f=t(280),h=t(276),v=t(282),y=t(284),x=t(279),S=t(281),O=t(283),N=t(278),C=t(117),H=Object(h.a)({heading:{textAlign:"center"},table:{minWidth:300},subHeading:{marginBottom:10},blockGrid:{marginBottom:15},block:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:70},blockText:{textAlign:"center"},dataText:{paddingLeft:5,paddingRight:5},divider:{marginBottom:10}}),D=function(){var e=H(),a=Object(n.useState)([]),t=Object(u.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)({}),s=Object(u.a)(i,2),o=s[0],E=s[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/India");case 2:a=e.sent,t=a.data[a.data.length-3],n=t.Cases.replace(/[*]/g,""),r=Object(g.a)({},t,{Cases:n}),E(r),(l=a.data.slice(0,a.data.length-3))[0].State="Andaman and Nicobar",c(l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=l.map((function(e){return r.a.createElement(N.a,{key:e.State},r.a.createElement(x.a,{component:"th",scope:"row"},e.State),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2"},e.Cases)),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2",color:"secondary"},e.Deaths)),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2",color:"primary"},e.Recovered)))}));return r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.subHeading,variant:"h5",gutterBottom:!0},"INDIA OVERVIEW"),r.a.createElement(f.a,{className:e.blockGrid,container:!0,spacing:1},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(C.a,{className:e.block},r.a.createElement(b.a,{className:e.blockText,variant:"body1"},"Total Cases"),r.a.createElement(b.a,{className:e.dataText,variant:"h5"},o.Cases))),r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(C.a,{className:e.block},r.a.createElement(b.a,{className:e.blockText,variant:"body1"},"Deaths"),r.a.createElement(b.a,{className:e.dataText,color:"secondary",variant:"h5"},o.Deaths))),r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(C.a,{className:e.block},r.a.createElement(b.a,{className:e.blockText,variant:"body1"},"Recovered"),r.a.createElement(b.a,{className:e.dataText,color:"primary",variant:"h5"},o.Recovered)))),r.a.createElement(S.a,{component:C.a},r.a.createElement(v.a,{className:e.table,size:"small","aria-label":"a dense table"},r.a.createElement(O.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,null,"State"),r.a.createElement(x.a,{align:"right"},"Cases"),r.a.createElement(x.a,{align:"right"},"Deaths"),r.a.createElement(x.a,{align:"right"},"Recovered"))),r.a.createElement(y.a,null,D))))},k=Object(h.a)({heading:{textAlign:"center"},table:{minWidth:300},subHeading:{marginBottom:10},blockGrid:{marginBottom:15},block:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:70},blockText:{textAlign:"center"},dataText:{paddingLeft:5,paddingRight:5},divider:{marginBottom:10}}),j=function(){var e=k(),a=Object(n.useState)([]),t=Object(u.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)({}),s=Object(u.a)(i,2),o=s[0],E=s[1];Object(n.useEffect)((function(){g()}),[]);var g=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/World");case 2:a=e.sent,t=a.data[0],E(t),n=a.data.slice(1),c(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=l.map((function(e){return r.a.createElement(N.a,{key:e.Country},r.a.createElement(x.a,{component:"th",scope:"row"},e.Country),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2"},e.Cases)),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2",color:"secondary"},e.Deaths)),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2",color:"primary"},e.Recovered)))}));return r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(b.a,{className:e.subHeading,variant:"h5",gutterBottom:!0},"WORLD OVERVIEW"),r.a.createElement(f.a,{className:e.blockGrid,container:!0,spacing:1},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(C.a,{className:e.block},r.a.createElement(b.a,{className:e.blockText,variant:"body1"},"Total Cases"),r.a.createElement(b.a,{className:e.dataText,variant:"h5"},o.Cases))),r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(C.a,{className:e.block},r.a.createElement(b.a,{className:e.blockText,variant:"body1"},"Deaths"),r.a.createElement(b.a,{className:e.dataText,color:"secondary",variant:"h5"},o.Deaths))),r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(C.a,{className:e.block},r.a.createElement(b.a,{className:e.blockText,variant:"body1"},"Recovered"),r.a.createElement(b.a,{className:e.dataText,color:"primary",variant:"h5"},o.Recovered)))),r.a.createElement(S.a,{component:C.a},r.a.createElement(v.a,{className:e.table,size:"small","aria-label":"a dense table"},r.a.createElement(O.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,null,"Country"),r.a.createElement(x.a,{align:"right"},"Cases"),r.a.createElement(x.a,{align:"right"},"Deaths"),r.a.createElement(x.a,{align:"right"},"Recovered"))),r.a.createElement(y.a,null,h))))))},T=t(15),I=function(e){var a=e.type,t=e.timeSeries,n=e.color;T.d.global.defaultFontColor="#212121",T.d.global.defaultFontFamily="Roboto",T.d.global.defaultFontSize=12;var l=[],c=[];t.forEach((function(e){console.log(e),l.push(e.Date);var a=e.Cases.replace(/,/g,"");c.push(parseInt(a))}));var i={labels:l,datasets:[{label:"Cases",backgroundColor:n,borderColor:n,data:c,fill:!1}]},s={legend:{display:!1},scales:{xAxes:[{ticks:{min:"03-03"}}],yAxes:["linear"===a?{type:a,ticks:{beginAtZero:!0,max:void 0,precision:0}}:{type:a,ticks:{min:0,max:1e5,callback:function(e,a,t){return 1e5===e?"100000":1e4===e?"10000":1e3===e?"1000":100===e?"100":10===e?"10":0===e?"0":null}}}]}};return r.a.createElement("div",null,r.a.createElement(T.c,{data:i,options:s}))},R=t(296),A=t(285),w=Object(h.a)({subHeading:{marginBottom:10},chart:{padding:10}}),B=function(){var e=w(),a=Object(n.useState)("linear"),t=Object(u.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),o=(s[0],s[1],Object(n.useState)([])),E=Object(u.a)(o,2),g=E[0],h=E[1],v=Object(n.useState)([]),y=Object(u.a)(v,2),x=y[0],S=y[1],O=Object(n.useState)([]),N=Object(u.a)(O,2),H=N[0],D=N[1];Object(n.useEffect)((function(){k()}),[]);var k=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/IndiaTS");case 2:a=e.sent,t=a.data.map((function(e){var a={};return a.Date=e.Date.slice(5),a.Cases=e.Cases,a})),n=a.data.map((function(e){var a={};return a.Date=e.Date.slice(5),a.Cases=e.Deaths,a})),r=a.data.map((function(e){var a={};return a.Date=e.Date.slice(5),a.Cases=e.Recovered,a})),h(t),S(n),D(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.subHeading,variant:"h5",gutterBottom:!0},"SPREAD TRENDS"),r.a.createElement(A.a,{style:{marginBottom:10},control:r.a.createElement(R.a,{color:"primary",onChange:function(e){c("logarithmic"===l?"linear":"logarithmic")}}),label:"Logarithmic"}),r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{className:e.chart},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Cases"),r.a.createElement(I,{type:l,timeSeries:g,color:"#000"})))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{className:e.chart},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Deaths"),r.a.createElement(I,{type:l,timeSeries:x,color:"#f50057"})))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{className:e.chart},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Recovered"),r.a.createElement(I,{type:l,timeSeries:H,color:"#3f51b5"}))))))},W=t(287),L=Object(h.a)({heading:{textAlign:"center"},table:{minWidth:300},subHeading:{marginBottom:15},blockGrid:{marginBottom:10},block:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:70},blockText:{textAlign:"center"},dataText:{paddingLeft:5,paddingRight:5},divider:{marginBottom:20},maingrid:{paddingLeft:25,paddingRight:25}}),P=function(){var e=L(),a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/India");case 2:a=e.sent,t=a.data[a.data.length-1].State,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.maingrid},r.a.createElement(b.a,{className:e.heading,variant:"h4",gutterBottom:!0},"COVID-19 TRACKER",r.a.createElement(b.a,{variant:"body2"},"(",l,")")),r.a.createElement(W.a,{className:e.divider}),r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(D,null),r.a.createElement(B,null)))},V=t(288),F=t(289),G=Object(h.a)({text:{paddingLeft:4},divider:{marginBottom:20},heading:{textAlign:"center"},table:{minWidth:300},subHeading:{marginBottom:15},blockGrid:{marginBottom:10},block:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:70},blockText:{textAlign:"center"},dataText:{paddingLeft:5,paddingRight:5}}),M=function(){var e=G();return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{style:{marginBottom:10},variant:"h4",className:e.heading},"FIVE STEPS TO PREVENT COVID-19"),r.a.createElement(W.a,{className:e.divider}),r.a.createElement(f.a,{className:e.maingrid,container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xm:12,sm:4}),r.a.createElement(f.a,{container:!0,spacing:1,xm:12,sm:4},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(V.a,{className:e.card},r.a.createElement(F.a,{className:e.content},r.a.createElement(b.a,{color:"primary",variant:"h6"},"1. HANDS"),r.a.createElement(b.a,{className:e.text,varaint:"body1"},"It starts with your hands. Please wash your hands frequently with soap and water or an alcohol-based solution")))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(V.a,{className:e.card},r.a.createElement(F.a,{className:e.content},r.a.createElement(b.a,{color:"primary",variant:"h6"},"2. ELBOW"),r.a.createElement(b.a,{className:e.text,varaint:"body1"},"Cover your nose and mouth with a bent elbow or tissue when you sneeze or cough. Dispose of tissue immdiately and wash hands.")))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(V.a,{className:e.card},r.a.createElement(F.a,{className:e.content},r.a.createElement(b.a,{color:"primary",variant:"h6"},"3. FACE"),r.a.createElement(b.a,{className:e.text,varaint:"body1"},"Avoid touching your face, particularly your eyes, nose or mouth to prevent virus from entering your body.")))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(V.a,{className:e.card},r.a.createElement(F.a,{className:e.content},r.a.createElement(b.a,{color:"primary",variant:"h6"},"4. DISTANCE"),r.a.createElement(b.a,{className:e.text,varaint:"body1"},"In terms of social interactions, take a step back. Stay atleast one meter distance from others.")))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(V.a,{className:e.card},r.a.createElement(F.a,{className:e.content},r.a.createElement(b.a,{color:"primary",variant:"h6"},"5. FEEL"),r.a.createElement(b.a,{className:e.text,varaint:"body1"},"If you feel unwell, stay home. Please follow all instructions provided by your local health authorities."))))),r.a.createElement(f.a,{item:!0,xm:12,sm:4})))},U=[{State:"Andaman and Nicobar",Helpline:"03192-232102"},{State:"Andhra Pradesh",Helpline:"0866-2410978"},{State:"Arunachal Pradesh",Helpline:"9436055743"},{State:"Assam",Helpline:"6913347770"},{State:"Bihar",Helpline:"104"},{State:"Chandigarh",Helpline:"9779558282"},{State:"Chhattisgarh",Helpline:"104"},{State:"Dadra Nagar Haveli and Daman Diu",Helpline:"104"},{State:"Delhi ",Helpline:"011-22307145"},{State:"Gujarat",Helpline:"104"},{State:"Haryana",Helpline:"8558893911"},{State:"Himachal Pradesh",Helpline:"104"},{State:"Jammu & Kashmir",Helpline:"01912520982"},{State:"Jharkhand",Helpline:"104"},{State:"Karnataka",Helpline:"104"},{State:"Kerala",Helpline:"0471-2552056"},{State:"Ladakh",Helpline:"01982256462"},{State:"Lakshadweep",Helpline:"104"},{State:"Madhya Pradesh",Helpline:"104"},{State:"Maharashtra",Helpline:"020-26127394"},{State:"Manipur",Helpline:"3852411668"},{State:"Meghalaya",Helpline:"108"},{State:"Mizoram",Helpline:"102"},{State:"Nagaland",Helpline:"7005539653"},{State:"Odisha",Helpline:"9439994859"},{State:"Puducherry",Helpline:"104"},{State:"Punjab",Helpline:"104"},{State:"Rajasthan",Helpline:"0141-2225624"},{State:"Sikkim",Helpline:"104"},{State:"Tamil Nadu",Helpline:"044-29510500"},{State:"Telangana",Helpline:"104"},{State:"Tripura",Helpline:"0381-2315879"},{State:"Uttarakhand",Helpline:"104"},{State:"Uttar Pradesh",Helpline:"18001805145"},{State:"West Bengal",Helpline:"1800313444222"}],z=t(290),J=Object(h.a)({divider:{marginBottom:20},heading:{textAlign:"center"},maingrid:{paddingRight:25,paddingLeft:25}}),K=function(){var e=J(),a=U.map((function(e){return r.a.createElement(N.a,{key:e.State},r.a.createElement(x.a,{component:"th",scope:"row"},e.State),r.a.createElement(x.a,{align:"right"},r.a.createElement(b.a,{variant:"body2"},e.Helpline)))}));return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{style:{marginBottom:10},variant:"h4",className:e.heading,gutterBottom:!0},"HELPLINES FOR EVERY STATE"),r.a.createElement(b.a,{color:"primary",className:e.heading,style:{marginBottom:10},variant:"h5"},"Central Helpline : +91-11-23978046"),r.a.createElement(W.a,{className:e.divider}),r.a.createElement(f.a,{className:e.maingrid,container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(S.a,{component:C.a},r.a.createElement(v.a,{className:e.table,size:"small","aria-label":"a dense table"},r.a.createElement(O.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,null,"State"),r.a.createElement(x.a,{align:"right"},"Helpline"))),r.a.createElement(y.a,null,a)))),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{variant:"body1"},"Ministry of Health and Family Welfare, Gov. of India"),r.a.createElement(z.a,{href:"HTTPS://WWW.MOHFW.GOV.IN/"},r.a.createElement(b.a,{variant:"body1"},"HTTPS://WWW.MOHFW.GOV.IN/"))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{variant:"body1"},"WHO : COVID-19 Home Page"),r.a.createElement(z.a,{href:"HTTPS://WWW.WHO.INT/EMERGENCIES/DISEASES/NOVEL-CORONAVIRUS-2019"},r.a.createElement(b.a,{variant:"body1"},"HTTPS://WWW.WHO.INT/EMERGENCIES/DISEASES/NOVEL-CORONAVIRUS-2019"))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{variant:"body1"},"CDC"),r.a.createElement(z.a,{href:"HTTPS://WWW.CDC.GOV/CORONAVIRUS/2019-NCOV/FAQ.HTML"},r.a.createElement(b.a,{variant:"body1"},"HTTPS://WWW.CDC.GOV/CORONAVIRUS/2019-NCOV/FAQ.HTML"))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{variant:"body1"},"Crowdsourced list of Resources & Essentials from across India"),r.a.createElement(z.a,{href:"HTTPS://BIT.LY/COVID19RESOURCELIST"},r.a.createElement(b.a,{variant:"body1"},"HTTPS://BIT.LY/COVID19RESOURCELIST"))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{variant:"body1"},"COVID-19 Global Tracker"),r.a.createElement(z.a,{href:"https://coronavirus.jhu.edu/map.html"},r.a.createElement(b.a,{variant:"body1"},"HTTPS://CORONAVIRUS.JHU.EDU/MAP.HTML")))))))))},Y=function(){return r.a.createElement("div",null,"LatestUpdates")},Z=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/India");case 2:a=e.sent,t=a.data.slice(0,a.data.length-3),l(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();T.d.global.defaultFontColor="#212121",T.d.global.defaultFontFamily="Roboto",T.d.global.defaultFontSize=12;var i=[],s=[];t.forEach((function(e){i.push(e.State),s.push(e.Cases)}));var o={labels:i,datasets:[{label:"state data",backgroundColor:["#00429d","#1c4ca2","#2b57a7","#3761ab","#426cb0","#4c76b5","#5681b9","#608cbe","#6997c2","#73a2c6","#7daeca","#88b9cf","#93c4d2","#9ecfd6","#abdad9","#b9e5dd","#caefdf","#def9e1","#fff1d5","#ffe2ca","#ffd3bf","#ffc4b4","#ffb5a9","#ffa59e","#fe9593","#f98689","#f4777f","#ed6976","#e65a6d","#dd4c65","#d43e5c","#ca2f55","#be214d","#b11346","#a30540","#93003a"],data:s}]};return r.a.createElement("div",null,r.a.createElement(T.b,{data:o,options:{legend:{display:!1}}}))},Q=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/World");case 2:return a=e.sent,t=a.data.slice(1,19),e.next=6,p.a.get("/api/covid19/India");case 6:n=e.sent,r=n.data[n.data.length-3],t.push({Country:r.State,Cases:r.Cases,Deaths:r.Deaths,Recovered:r.Recovered}),l(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=[],s=[];t.forEach((function(e){i.push(e.Country);var a=e.Cases.replace(/,/g,"");s.push(parseInt(a,10))})),console.log(s);var o={labels:i,datasets:[{label:"country data",backgroundColor:["#ff0000","#ff2c00","#ff4100","#ff5000","#ff5d00","#ff6900","#ff7400","#fe7e00","#fd8900","#fa9400","#f79e00","#f2a900","#edb300","#e6be00","#ddc800","#d0d300","#bfdf00","#a2ec00","#00ff00"],data:s}]};return r.a.createElement("div",null,r.a.createElement(T.a,{data:o,options:{legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}))},q=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),s=i[0],o=i[1];Object(n.useEffect)((function(){E()}),[]);var E=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/IndiaTS");case 2:a=e.sent,t=a.data.map((function(e){var a={};return a.Date=e.Date.slice(5),a.Cases=e.Deaths,a})),n=a.data.map((function(e){var a={};return a.Date=e.Date.slice(5),a.Cases=e.Recovered,a})),l(t),o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=[],b=[],f=[];t.forEach((function(e){g.push(e.Date);var a=e.Cases.replace(/,/g,"");b.push(parseInt(a))})),s.forEach((function(e){var a=e.Cases.replace(/,/g,"");f.push(parseInt(a))}));var h={labels:g,datasets:[{label:"Deaths",borderColor:"#e83c00",backgroundColor:"#e83c00",data:b,fill:!1},{label:"Recovered",borderColor:"#497d00",backgroundColor:"#497d00",data:f,fill:!1}]};return r.a.createElement("div",null,r.a.createElement(T.c,{data:h,options:{legend:{display:!0},scales:{xAxes:[{ticks:{min:"03-03"}}]}}}))},$=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/IndiaTS");case 2:a=e.sent,t=a.data[0].Cases.replace(/,/g,""),n=a.data.map((function(e,a){var n={};return n.Date=e.Date.slice(5),0===a&&(n.Cases=e.Cases),n.Cases=e.Cases.replace(/,/g,"")-t,t=e.Cases.replace(/,/g,""),n})),console.log(n),l(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(t);var i=[],s=[];t.forEach((function(e){i.push(e.Date);var a=e.Cases;s.push(parseInt(a,10))})),console.log(s);var o={labels:i,datasets:[{label:"Daily Cases",backgroundColor:"rgba(0,60,100,1)",data:s}]};return r.a.createElement("div",null,r.a.createElement(T.a,{data:o,options:{legend:{display:!1},scales:{xAxes:[{ticks:{min:"03-03"}}],yAxes:[{ticks:{beginAtZero:!0}}]}}}))},X=t(291),_=function(){return r.a.createElement(f.a,{styles:{paddingLeft:25,paddingRight:25},container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(X.a,{in:"/DeepDive"===window.location.pathname,timeout:2e3},r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Cases in Indian States"),r.a.createElement(Z,null)))))),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(X.a,{in:"/DeepDive"===window.location.pathname,timeout:3e3},r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Cases in Most Affected Countries"),r.a.createElement(Q,null)))))),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(X.a,{in:"/DeepDive"===window.location.pathname,timeout:4e3},r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Deaths vs Recovered in India"),r.a.createElement(q,null)))))),r.a.createElement(f.a,{item:!0,xs:12,sm:6},r.a.createElement(X.a,{in:"/DeepDive"===window.location.pathname,timeout:4500},r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement("div",{style:{padding:10}},r.a.createElement(b.a,{style:{textAlign:"center",marginBottom:5},variant:"body1"},"Daily Cases in India"),r.a.createElement($,null)))))))},ee=Object(h.a)({heading:{textAlign:"center"},table:{minWidth:300},subHeading:{marginBottom:15},blockGrid:{marginBottom:10},block:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:70},blockText:{textAlign:"center"},dataText:{paddingLeft:5,paddingRight:5},divider:{marginBottom:20},maingrid:{paddingLeft:25,paddingRight:25}}),ae=function(){var e=ee(),a=Object(n.useState)(""),t=Object(u.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/covid19/India");case 2:a=e.sent,t=a.data[a.data.length-1].State,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:e.maingrid},r.a.createElement(b.a,{className:e.heading,variant:"h4",gutterBottom:!0},"COVID-19 TRACKER",r.a.createElement(b.a,{variant:"body2"},"(",l,")")),r.a.createElement(W.a,{className:e.divider}),r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(j,null)))},te=(t(242),t(292)),ne=t(293),re=t(294),le=t(114),ce=t.n(le),ie=t(295),se=t(286),oe=Object(h.a)({button:{marginLeft:15,marginRight:15}}),me=function(){var e=oe();return r.a.createElement(te.a,{className:"nav"},r.a.createElement(ne.a,{variant:"dense",className:"nav-container"},r.a.createElement(re.a,{size:"small",className:e.button,color:"inherit",component:i.b,to:"/"},r.a.createElement(ie.a,{title:"Home",placement:"top"},r.a.createElement(se.a,{color:"inherit"},r.a.createElement(ce.a,{fontSize:"large"})))),r.a.createElement(re.a,{className:e.button,color:"inherit",component:i.b,to:"/"},"India"),r.a.createElement(re.a,{className:e.button,color:"inherit",component:i.b,to:"/World"},"World"),r.a.createElement(re.a,{size:"small",className:e.button,color:"inherit",component:i.b,to:"/DeepDive"},"Deep Dive"),r.a.createElement(re.a,{size:"small",className:e.button,color:"inherit",component:i.b,to:"/SafetyPrecautions"},"Safety Precautions"),r.a.createElement(re.a,{size:"small",className:e.button,color:"inherit",component:i.b,to:"/Helplines"},"Helplines"),r.a.createElement(re.a,{size:"small",className:e.button,color:"inherit",component:i.b,to:"/LatestUpdates"},"Latest Updates")))};var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(me,null),r.a.createElement("div",{className:"container"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/LatestUpdates"},r.a.createElement(Y,null)),r.a.createElement(s.a,{path:"/DeepDive"},r.a.createElement(_,null)),r.a.createElement(s.a,{path:"/Helplines"},r.a.createElement(K,null)),r.a.createElement(s.a,{path:"/SafetyPrecautions"},r.a.createElement(M,null)),r.a.createElement(s.a,{path:"/World"},r.a.createElement(ae,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(P,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[124,1,2]]]);
//# sourceMappingURL=main.b0e9a362.chunk.js.map