(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{44:function(e,t,n){e.exports=n(85)},56:function(e,t,n){},58:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),l=n.n(c),i=n(11),s=n(4),o=n(39),u=n(12),m=n(29),d=(n(53),n(40)),p=n.n(d),f=n(5),h="SET_CURRENT_USER",b={currentUser:null},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(f.a)({},e,{currentUser:t.payload});default:return e}},E="TOGGLE_CART_HIDDEN",v="ADD_ITEM",y="CLEAR_ITEM_FROM_CART",O="REMOVE_ITEM",j=n(43),N=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(f.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(j.a)(e),[Object(f.a)({},t,{quantity:1})])},w=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(f.a)({},e,{quantity:e.quantity-1}):e}))},C={hidden:!0,cartItems:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(f.a)({},e,{hidden:!e.hidden});case v:return Object(f.a)({},e,{cartItems:N(e.cartItems,t.payload)});case y:return Object(f.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case O:return Object(f.a)({},e,{cartItems:w(e.cartItems,t.payload)});default:return e}},I={sections:[{title:"hats",imageUrl:"/images/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"/images/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"/images/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"/images/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"/images/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},x={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},U={collections:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.UPDATE_COLLECTIONS:return Object(f.a)({},e,{collections:t.payload});default:return e}},A={key:"root",storage:p.a,whitelist:["cart"]},T=Object(u.c)({user:g,cart:k,directory:S,shop:P}),R=Object(m.a)(A,T);var q=Object(u.d)(R,u.a.apply(void 0,[])),L=Object(m.b)(q),D=(n(56),n(6)),_=n.n(D),G=n(16),H=n(17),z=n(19),M=n(18),W=n(20),F=n(21),V=n(3),B=(n(58),n(24)),K=n.n(B);n(59),n(63);K.a.initializeApp({apiKey:"AIzaSyCAoFpfyjstbkxtkl4lQK_x97Wtqv87BVI",authDomain:"crwn-db-c194d.firebaseapp.com",databaseURL:"https://crwn-db-c194d.firebaseio.com",projectId:"crwn-db-c194d",storageBucket:"crwn-db-c194d.appspot.com",messagingSenderId:"1042295866504",appId:"1:1042295866504:web:09dce525d115ca2270cb3d",measurementId:"G-P4K0EDFG31"});var J=function(e,t){var n,a,r,c;return _.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e){l.next=2;break}return l.abrupt("return");case 2:return n=Q.doc("users/".concat(e.uid)),l.next=5,_.a.awrap(n.get());case 5:if(l.sent.exists){l.next=17;break}return a=e.displayName,r=e.email,c=new Date,l.prev=9,l.next=12,_.a.awrap(n.set(Object(f.a)({displayName:a,email:r,createdAt:c},t)));case 12:l.next=17;break;case 14:l.prev=14,l.t0=l.catch(9),console.log("error creating user",l.t0.message);case 17:return l.abrupt("return",n);case 18:case"end":return l.stop()}}),null,null,[[9,14]])},$=K.a.auth(),Q=K.a.firestore(),Y=new K.a.auth.GoogleAuthProvider;Y.setCustomParameters({prompt:"select_account"});var Z=function(){return $.signInWithRedirect(Y)},X=(K.a,function(){return{type:E}}),ee=function(e){return{type:v,payload:e}},te=function(e){return e.cart},ne=Object(V.a)([te],(function(e){return e.cartItems})),ae=Object(V.a)([te],(function(e){return e.hidden})),re=Object(V.a)([ne],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ce=Object(V.a)([ne],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var se=r.a.createElement("g",null),oe=r.a.createElement("g",null),ue=r.a.createElement("g",null),me=r.a.createElement("g",null),de=r.a.createElement("g",null),pe=r.a.createElement("g",null),fe=r.a.createElement("g",null),he=r.a.createElement("g",null),be=r.a.createElement("g",null),ge=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),je=r.a.createElement("g",null),Ne=function(e){var t=e.svgRef,n=e.title,a=ie(e,["svgRef","title"]);return r.a.createElement("svg",le({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),se,oe,ue,me,de,pe,fe,he,be,ge,Ee,ve,ye,Oe,je)},we=r.a.forwardRef((function(e,t){return r.a.createElement(Ne,le({svgRef:t},e))})),Ce=(n.p,n(65),Object(s.b)((function(e){return Object(V.b)({itemCount:re})}),(function(e){return{toggleCartHidden:function(){return e(X())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(we,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}))),ke=n(13),Ie=(n(66),function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,c=Object(ke.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},c),t)}),Se=(n(67),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:"".concat("https://sstamoulas.github.io/Crwn-Clothing").concat(n),alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},l," * $",a)))}),xe=(n(68),Object(F.g)(Object(s.b)((function(e){return Object(V.b)({cartItems:ne})}))((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Se,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(Ie,{onClick:function(){n.push("/checkout"),a(X())}},"GO TO CHECKOUT"))})))),Ue=Object(V.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ae(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Te=r.a.createElement("title",null,"Group"),Re=r.a.createElement("desc",null,"Created with Sketch."),qe=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Le=function(e){var t=e.svgRef,n=e.title,a=Ae(e,["svgRef","title"]);return r.a.createElement("svg",Pe({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?Te:n?r.a.createElement("title",null,n):null,Re,qe)},De=r.a.forwardRef((function(e,t){return r.a.createElement(Le,Pe({svgRef:t},e))})),_e=(n.p,n(70),Object(s.b)((function(e){return Object(V.b)({currentUser:Ue,hidden:ae})}))((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{className:"logo-container",to:"/"},r.a.createElement(De,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(i.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(i.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return $.signOut()}},"SIGN OUT"):r.a.createElement(i.b,{className:"option",to:"/sign-in"},"SIGN IN"),r.a.createElement(Ce,null)),n?null:r.a.createElement(xe,null))}))),Ge=n(23),He=(n(71),function(e){var t=e.handleChange,n=e.label,a=Object(ke.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),ze=(n(72),function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(z.a)(this,Object(M.a)(t).call(this,e))).handleSubmit=function(e){var t,a,r;return _.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),t=n.state,a=t.email,r=t.password,c.prev=2,c.next=5,_.a.awrap($.signInWithEmailAndPassword(a,r));case 5:n.setState({email:"",password:""}),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(2),console.log(c.t0);case 11:case"end":return c.stop()}}),null,null,[[2,8]])},n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(Ge.a)({},r,a))},n.state={email:"",password:""},n}return Object(W.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your e-mail and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(He,{name:"email",type:"email",value:this.state.email,onChange:this.handleChange,label:"email",required:!0}),r.a.createElement(He,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(Ie,{type:"submit"},"Sign In"),r.a.createElement(Ie,{onClick:Z,isGoogleSignIn:!0},"Sign In With Google"))))}}]),t}(a.Component)),Me=(n(73),function(e){function t(){var e;return Object(G.a)(this,t),(e=Object(z.a)(this,Object(M.a)(t).call(this))).handleSubmit=function(t){var n,a,r,c,l,i,s;return _.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t.preventDefault(),n=e.state,a=n.displayName,r=n.email,c=n.password,l=n.confirmPassword,c===l){o.next=5;break}return alert("passwords don't match"),o.abrupt("return");case 5:return o.prev=5,o.next=8,_.a.awrap($.createUserWithEmailAndPassword(r,c));case 8:return i=o.sent,s=i.user,o.next=12,_.a.awrap(J(s,{displayName:a}));case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(5),console.log(o.t0);case 18:case"end":return o.stop()}}),null,null,[[5,15]])},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Ge.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(W.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(He,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(He,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(He,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(He,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(Ie,{type:"submit"},"SIGN UP")))}}]),t}(a.Component)),We=(n(74),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(ze,null),r.a.createElement(Me,null))}),Fe=Object(V.a)([function(e){return e.directory}],(function(e){return e.sections})),Ve=(n(75),Object(F.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,l=e.linkUrl,i=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(i.url).concat(l))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat("https://sstamoulas.github.io/Crwn-Clothing").concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),Be=(n(76),Object(s.b)((function(){return Object(V.b)({sections:Fe})}))((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(ke.a)(e,["id"]);return r.a.createElement(Ve,Object.assign({key:t},n))})))}))),Ke=(n(77),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(Be,null))}),Je=(n(78),Object(s.b)(null,(function(e){return{addItem:function(t){return e(ee(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,l=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat("https://sstamoulas.github.io/Crwn-Clothing").concat(l,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(Ie,{onClick:function(){return n(t)},inverted:!0},"ADD TO CART"))}))),$e=(n(79),function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(Je,{key:e.id,item:e})}))))}),Qe=Object(V.a)([function(e){return e.shop}],(function(e){return e.collections})),Ye=Object(V.a)([Qe],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),Ze=(n(80),Object(V.b)({collections:Ye})),Xe=Object(s.b)(Ze)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(ke.a)(e,["id"]);return r.a.createElement($e,Object.assign({key:t},n))})))})),et=(n(81),Object(s.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(V.a)([Qe],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",null,n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(Je,{key:e.id,item:e})}))))}))),tt=(n(82),function(e){return function(t){var n=t.isLoading,a=Object(ke.a)(t,["isLoading"]);return n?r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"})):r.a.createElement(e,a)}}),nt=tt(Xe),at=tt(et),rt=function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(z.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n.unsubscribeFromSnapshot=null,n}return Object(W.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateCollections,n=Q.collection("collections");this.unsubscribeFromSnapshot=n.onSnapshot((function(n){var a;return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:a=n.docs.map((function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{}),t(a),e.setState({loading:!1});case 3:case"end":return r.stop()}}))}))}},{key:"render",value:function(){var e=this.props.match,t=this.state.loading;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(F.b,{exact:!0,path:"".concat(e.path),render:function(e){return r.a.createElement(nt,Object.assign({isLoading:t},e))}}),r.a.createElement(F.b,{path:"".concat(e.path,"/:collectionId"),render:function(e){return r.a.createElement(at,Object.assign({isLoading:t},e))}}))}}]),t}(a.Component),ct=Object(s.b)(null,(function(e){return{updateCollections:function(t){return e(function(e){return{type:x.UPDATE_COLLECTIONS,payload:e}}(t))}}}))(rt),lt=(n(83),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y,payload:e}}(t))},addItem:function(t){return e(ee(t))},removeItem:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,l=t.name,i=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:"".concat("https://sstamoulas.github.io/Crwn-Clothing").concat(i),alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),it=n(42),st=n.n(it),ot=function(e){var t=e.price,n=100*t;return r.a.createElement(st.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_HSNI6UAlfOml3wm3vGEnJJqZ00PzpH2IqT"})},ut=(n(84),Object(V.b)({cartItems:ne,total:ce})),mt=Object(s.b)(ut)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(lt,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n),r.a.createElement("div",{className:"test-warning"},"*Please us the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(ot,{price:n})))})),dt=function(e){function t(){var e,n;Object(G.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(z.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(W.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setCurrentUser;this.unsubscribeFromAuth=$.onAuthStateChanged((function(n){return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n){a.next=5;break}return a.next=3,_.a.awrap(J(n));case 3:a.sent.onSnapshot((function(n){t(Object(f.a)({id:n.id},n.data()),(function(){console.log(e.state)}))}));case 5:t(n);case 6:case"end":return a.stop()}}))}))}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_e,null),r.a.createElement(F.d,null,r.a.createElement(F.b,{exact:!0,path:"/",component:Ke}),r.a.createElement(F.b,{path:"/shop",component:ct}),r.a.createElement(F.b,{exact:!0,path:"/checkout",component:mt}),r.a.createElement(F.b,{exact:!0,path:"/sign-in",render:function(){return e.props.currentUser?r.a.createElement(F.a,{to:"/"}):r.a.createElement(We,null)}})))}}]),t}(a.Component),pt=Object(s.b)((function(e){return Object(V.b)({currentUser:Ue})}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))(dt);l.a.render(r.a.createElement(s.a,{store:q},r.a.createElement(i.a,{basename:"".concat("")},r.a.createElement(o.a,{persistor:L},r.a.createElement(pt,null)))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1e2a83e8.chunk.js.map