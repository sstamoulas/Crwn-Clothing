(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{23:function(e,a,i){e.exports=i(41)},28:function(e,a,i){},29:function(e,a,i){},30:function(e,a,i){},36:function(e,a,i){},37:function(e,a,i){},38:function(e,a,i){},39:function(e,a,i){},40:function(e,a,i){},41:function(e,a,i){"use strict";i.r(a);var n=i(0),t=i.n(n),r=i(20),s=i.n(r),m=i(5),l=(i(28),i(6));i(29);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var i,n,t=function(e,a){if(null==e)return{};var i,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(t[i]=e[i]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var g=t.a.createElement("title",null,"Group"),p=t.a.createElement("desc",null,"Created with Sketch."),d=t.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},t.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},t.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},t.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),t.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),t.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),t.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),t.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),h=function(e){var a=e.svgRef,i=e.title,n=o(e,["svgRef","title"]);return t.a.createElement("svg",c({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:a},n),void 0===i?g:i?t.a.createElement("title",null,i):null,p,d)},u=t.a.forwardRef((function(e,a){return t.a.createElement(h,c({svgRef:a},e))})),k=(i.p,i(30),function(){return t.a.createElement("div",{className:"header"},t.a.createElement(m.b,{className:"logo-container",to:"/"},t.a.createElement(u,{className:"logo"})),t.a.createElement("div",{className:"options"},t.a.createElement(m.b,{className:"option",to:"/shop"},"SHOP"),t.a.createElement(m.b,{className:"option",to:"/contact"},"CONTACT")))}),f=i(8),b=i(10),v=i(11),E=i(13),U=i(12),w=i(14),y=(i(36),Object(l.f)((function(e){var a=e.title,i=e.imageUrl,n=e.size,r=e.history,s=e.linkUrl,m=e.match;return t.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return r.push("".concat(m.url).concat(s))}},t.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat("").concat(i,")")}}),t.a.createElement("div",{className:"content"},t.a.createElement("h1",{className:"title"},a.toUpperCase()),t.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),j=[{title:"hats",imageUrl:"/images/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"/images/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"/images/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"/images/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"/images/men.png",size:"large",id:5,linkUrl:"shop/mens"}],O=(i(37),function(e){function a(){var e;return Object(b.a)(this,a),(e=Object(E.a)(this,Object(U.a)(a).call(this))).state={sections:j},e}return Object(w.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var a=e.id,i=Object(f.a)(e,["id"]);return t.a.createElement(y,Object.assign({key:a},i))})))}}]),a}(n.Component)),N=(i(38),function(){return t.a.createElement("div",{className:"homepage"},t.a.createElement(O,null))}),B=(i(39),function(e){e.id;var a=e.name,i=e.imageUrl,n=e.price;return t.a.createElement("div",{className:"collection-item"},t.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),t.a.createElement("div",{className:"collection-footer"},t.a.createElement("span",{className:"name"},a),t.a.createElement("span",{className:"price"},n)))}),C=(i(40),function(e){var a=e.title,i=e.items;return t.a.createElement("div",{className:"collection-preview"},t.a.createElement("h1",{className:"title"},a.toUpperCase()),t.a.createElement("div",{className:"preview"},i.filter((function(e,a){return a<4})).map((function(e){var a=e.id,i=Object(f.a)(e,["id"]);return t.a.createElement(B,Object.assign({key:a},i))}))))}),T=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"/images/shop-img/hats/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"/images/shop-img/hats/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"/images/shop-img/hats/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"/images/shop-img/hats/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"/images/shop-img/hats/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"/images/shop-img/hats/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"/images/shop-img/hats/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"/images/shop-img/hats/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"/images/shop-img/hats/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"/images/shop-img/sneakers/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"/images/shop-img/sneakers/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"/images/shop-img/sneakers/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"/images/shop-img/sneakers/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"/images/shop-img/sneakers/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"/images/shop-img/sneakers/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"/images/shop-img/sneakers/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"/images/shop-img/sneakers/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"/images/shop-img/jackets/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"/images/shop-img/jackets/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"/images/shop-img/jackets/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"/images/shop-img/jackets/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"/images/shop-img/jackets/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"/images/shop-img/womens/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"/images/shop-img/womens/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"/images/shop-img/womens/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"/images/shop-img/womens/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"/images/shop-img/womens/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"/images/shop-img/womens/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"/images/shop-img/womens/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"/images/shop-img/mens/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"/images/shop-img/mens/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"/images/shop-img/mens/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"/images/shop-img/mens/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"/images/shop-img/mens/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"/images/shop-img/mens/polka-dot-shirt.png",price:25}]}],S=function(e){function a(e){var i;return Object(b.a)(this,a),(i=Object(E.a)(this,Object(U.a)(a).call(this,e))).state={collections:T},i}return Object(w.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.state.collections;return t.a.createElement("div",{className:"shop-page"},e.map((function(e){var a=e.id,i=Object(f.a)(e,["id"]);return t.a.createElement(C,Object.assign({key:a},i))})))}}]),a}(n.Component);var x=function(){return t.a.createElement("div",null,t.a.createElement(k,null),t.a.createElement(l.c,null,t.a.createElement(l.a,{exact:!0,path:"/",component:N}),t.a.createElement(l.a,{exact:!0,path:"/shop",component:S})))};s.a.render(t.a.createElement(m.a,{basename:"Crwn-Clothing"},t.a.createElement(x,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5e4783af.chunk.js.map