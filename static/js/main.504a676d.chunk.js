(this.webpackJsonpswapi=this.webpackJsonpswapi||[]).push([[0],{141:function(e,t,c){},148:function(e,t,c){},447:function(e,t,c){"use strict";c.r(t);var r=c(24),n=c(4),a=(c(141),c(2)),i=c.n(a),s=c(21),j=c(1);function o(e){var t,c,r,n,a,i;return console.log("xzdcgxfh"),Object(j.jsxs)("div",{children:[Object(j.jsx)(s.b,{to:"/characterList",children:"Go back"}),Object(j.jsxs)("h2",{children:[Object(j.jsx)("b",{children:"Name: "}),null===(t=e.location.state)||void 0===t?void 0:t.randomCharacter.name]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Birth_year: "}),null===(c=e.location.state)||void 0===c?void 0:c.randomCharacter.birth_year]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Gender: "}),null===(r=e.location.state)||void 0===r?void 0:r.randomCharacter.gender]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Hair_color: "}),null===(n=e.location.state)||void 0===n?void 0:n.randomCharacter.hair_color]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Mass: "}),null===(a=e.location.state)||void 0===a?void 0:a.randomCharacter.mass]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"url: "}),null===(i=e.location.state)||void 0===i?void 0:i.randomCharacter.url]})]})}var h=c(140),d=c(58),l=c(59),b=c(61),u=c(60),O=(c(148),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"loadingio-spinner-eclipse-14u6vhf8q6r",children:Object(j.jsx)("div",{className:"ldio-sfwk85nr9wc",children:Object(j.jsx)("div",{})})})})}}]),c}(a.Component)),x=c(86),p=c.n(x),v=c(137),m=(c(149),function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(){var e;Object(d.a)(this,c);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={icon:void 0,temp:void 0,city:void 0,country:void 0,humidity:void 0,sunset:void 0,description:"..."},e.gettingWeather=function(){var t=Object(v.a)(p.a.mark((function t(c){var r,n,a,i,s,j;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),r=c.target.elements.city.value,console.log("xbfc",r),!r){t.next=16;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=8768da57bd891fa41359848c1665c9e4&units=metric"));case 6:return n=t.sent,t.next=9,n.json();case 9:a=t.sent,console.log(a),i=a.sys.sunset,(s=new Date).setTime(i),j=s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),e.setState({city:a.name,temp:Math.ceil(a.main.temp)+"\xb0C",country:a.sys.country,humidity:a.main.humidity,sunset:j,description:a.weather[0].description});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"weather-form",children:[Object(j.jsx)("h2",{children:"Weather"}),Object(j.jsx)("form",{onSubmit:this.gettingWeather,children:Object(j.jsx)("input",{type:"text",placeholder:"Choose city..",name:"city"})}),Object(j.jsx)("p",{children:this.state.city}),Object(j.jsx)("p",{children:this.state.temp}),Object(j.jsxs)("p",{children:["Today is ",this.state.description]})]})}}]),c}(i.a.Component)),f={characters:[],randomCharacter:{}};function y(e){var t=Object(a.useState)(f),c=Object(h.a)(t,2),n=c[0],i=c[1];Object(a.useEffect)((function(){s()}),[]);var s=function(){fetch("http://swapi.dev/api/people/").then((function(e){return e.json()})).then((function(e){i(Object(r.a)(Object(r.a)({},n),{},{characters:e.results}))}))};return n.characters?Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)("h2",{children:"Character's name "}),n.characters?n.characters.map((function(t,c){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[" ",t.name]},c),Object(j.jsx)("button",{onClick:function(){return function(t){var c=n.characters.find((function(e){return e.name==t}));i(Object(r.a)(Object(r.a)({},n),{},{randomCharacter:c})),e.history.push({pathname:"/character",state:{randomCharacter:c}})}(t.name)},children:"Learn more"})]})})):Object(j.jsx)(O,{})]}):Object(j.jsx)(O,{})}function w(){return Object(j.jsx)("div",{children:Object(j.jsx)(y,{})})}function g(){return Object(j.jsxs)("ul",{className:"Navbar",children:[Object(j.jsxs)(s.b,{to:"/",children:[" ",Object(j.jsx)("li",{children:"home"})]}),Object(j.jsxs)(s.b,{to:"/weather",children:[" ",Object(j.jsx)("li",{children:" weather"})]}),Object(j.jsxs)(s.b,{to:"/characterList",children:[" ",Object(j.jsx)("li",{children:" chatacterList"})]}),Object(j.jsxs)(s.b,{to:"/character",children:[" ",Object(j.jsx)("li",{children:" chatacter "})]})]})}var C=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(g,{}),Object(j.jsxs)(n.c,{children:[Object(j.jsx)(n.a,{exact:!0,path:"/",render:function(e){return Object(j.jsx)(w,Object(r.a)({},e))}}),Object(j.jsx)(n.a,{path:"/weather",render:function(e){return Object(j.jsx)(m,Object(r.a)({},e))}}),Object(j.jsx)(n.a,{path:"/characterList",render:function(e){return Object(j.jsx)(y,Object(r.a)({},e))}}),Object(j.jsx)(n.a,{path:"/character",render:function(e){return Object(j.jsx)(o,Object(r.a)({},e))}})]})]})},k=c(23);c.n(k).a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.a,{children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[447,1,2]]]);
//# sourceMappingURL=main.504a676d.chunk.js.map