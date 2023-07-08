(function(){"use strict";var t={1414:function(t,e,i){var o=i(7195),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{userId:t.userId,users:t.users}}),e("Middle",{attrs:{posts:t.posts}}),e("Footer")],1)},n=[],s=function(){var t=this,e=t._self._c;return e("header",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Index")}}},[e("img",{staticClass:"logo",attrs:{src:i(5080),alt:"Codeforces",title:"Codeforces"}})]),t._m(0),e("div",{staticClass:"enter-or-register-box"},[t.userId?[t._v(" "+t._s(t.users[t.userId].name)+" | "),e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onLogout.apply(null,arguments)}}},[t._v("Logout")])]:[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Enter")}}},[t._v("Enter")]),t._v(" | "),e("a",{attrs:{href:"#"}},[t._v("Register")])]],2),e("nav",[e("ul",[e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("Index")}}},[t._v("Home")])]),t._m(1),t.userId?e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("WritePost")}}},[t._v("Write Post")])]):t._e(),t.userId?e("li",[e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage("EditPost")}}},[t._v("Edit Post")])]):t._e()])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"languages"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"flag",attrs:{src:i(2554),alt:"In English",title:"In English"}})]),e("a",{attrs:{href:"#"}},[e("img",{staticClass:"flag",attrs:{src:i(1915),alt:"In Russian",title:"In Russian"}})])])},function(){var t=this,e=t._self._c;return e("li",[e("a",{attrs:{href:"#"}},[t._v("Users")])])}],l={name:"Header",props:["userId","users"],methods:{changePage:function(t){this.$root.$emit("onChangePage",t)},onLogout:function(){this.$root.$emit("onLogout"),this.changePage("Index")}}},u=l,d=i(1001),c=(0,d.Z)(u,s,a,!1,null,"5a7d3248",null),f=c.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"middle"},[e("Sidebar",{attrs:{posts:t.viewPosts}}),e("main",["Index"===t.page?e("Index"):t._e(),"Enter"===t.page?e("Enter"):t._e(),"WritePost"===t.page?e("WritePost"):t._e(),"EditPost"===t.page?e("EditPost"):t._e()],1)],1)},m=[],v=function(){var t=this,e=t._self._c;return e("aside",t._l(t.posts,(function(t){return e("SidebarPost",{key:t.id,attrs:{post:t}})})),1)},h=[],A=function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"header"},[t._v(" "+t._s(t.post.title)+" ")]),e("div",{staticClass:"body"},[t._v(" "+t._s(t.post.text)+" ")]),t._m(0)])},g=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("a",{attrs:{href:"#"}},[t._v("View all")])])}],b={name:"SidebarPost",props:["post"]},x=b,C=(0,d.Z)(x,A,g,!1,null,"4bd2bc1b",null),w=C.exports,_={name:"Sidebar",components:{SidebarPost:w},props:["posts"]},P=_,I=(0,d.Z)(P,v,h,!1,null,"a3c46dce",null),E=I.exports,y=function(){var t=this,e=t._self._c;return e("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto beatae commodi consequuntur distinctio doloremque, ea eligendi eveniet, exercitationem fuga id maiores minima modi nemo neque nesciunt non nostrum officiis optio quaerat quas recusandae reiciendis saepe temporibus. At deserunt quis repudiandae sapiente voluptatum. Ea error maiores nulla ratione vitae. Amet aperiam consequuntur corporis cum cumque delectus dicta dolor doloribus eaque eligendi eos esse et expedita explicabo fugit hic impedit in ipsa labore laudantium modi molestias nisi numquam omnis quaerat quam quidem quis quo repellendus repudiandae similique soluta, tempora ut vel veritatis vitae voluptatum! Aliquid deserunt doloremque et minus soluta? ")])},k=[],M={name:"Index"},R=M,q=(0,d.Z)(R,y,k,!1,null,"324056d1",null),W=q.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"enter form-box"},[e("div",{staticClass:"header"},[t._v("Enter")]),e("div",{staticClass:"body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onEnter.apply(null,arguments)}}},[e("div",{staticClass:"field"},[t._m(0),e("div",{staticClass:"value"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{autofocus:"",id:"login",name:"login"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})])]),e("div",{staticClass:"field"},[t._m(1),e("div",{staticClass:"value"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",name:"password",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),e("div",{staticClass:"field error"},[t._v(t._s(t.error))]),t._m(2)])])])},$=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"name"},[e("label",{attrs:{for:"login"}},[t._v("Login")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"name"},[e("label",{attrs:{for:"password"}},[t._v("Password")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-field"},[e("input",{attrs:{type:"submit",value:"Enter"}})])}],O={name:"Enter",data:function(){return{login:"",password:"",error:""}},methods:{onEnter:function(){this.$root.$emit("onEnter",this.login,this.password)}},beforeCreate(){this.$root.$on("onEnterValidationError",(t=>this.error=t))}},z=O,T=(0,d.Z)(z,D,$,!1,null,"5abbdcfd",null),V=T.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form"},[e("div",{staticClass:"header"},[t._v("Write Post")]),e("div",{staticClass:"body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onWritePost.apply(null,arguments)}}},[e("div",{staticClass:"field"},[t._m(0),e("div",{staticClass:"value"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{id:"title",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),e("div",{staticClass:"field"},[t._m(1),e("div",{staticClass:"value"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{id:"text",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),e("div",{staticClass:"error"},[t._v(t._s(t.error))]),t._m(2)])])])},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"name"},[e("label",{attrs:{for:"title"}},[t._v("Title:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"name"},[e("label",{attrs:{for:"text"}},[t._v("Text:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-field"},[e("input",{attrs:{type:"submit",value:"Write"}})])}],Z={name:"WritePost",data:function(){return{title:"",text:"",error:""}},methods:{onWritePost:function(){this.error="",this.$root.$emit("onWritePost",this.title,this.text)}},beforeMount(){this.$root.$on("onWritePostValidationError",(t=>this.error=t))}},H=Z,G=(0,d.Z)(H,j,N,!1,null,"a3d24fe2",null),S=G.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form"},[e("div",{staticClass:"header"},[t._v("Edit Post")]),e("div",{staticClass:"body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onEdit.apply(null,arguments)}}},[e("div",{staticClass:"field"},[t._m(0),e("div",{staticClass:"value"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"id",attrs:{id:"id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),e("div",{staticClass:"field"},[t._m(1),e("div",{staticClass:"value"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{id:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])]),e("div",{staticClass:"error"},[t._v(t._s(t.error))]),t._m(2)])])])},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"name"},[e("label",{attrs:{for:"id"}},[t._v(" ID: ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"name"},[e("label",{attrs:{for:"text"}},[t._v(" Text: ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-field"},[e("input",{attrs:{type:"submit",value:"Edit"}})])}],Y={data:function(){return{id:"",text:"",error:""}},name:"EditPost",beforeMount(){this.$root.$on("onEditPostValidationError",(t=>this.error=t))},methods:{onEdit:function(){this.error="",this.$root.$emit("onEditPost",this.id,this.text)}}},J=Y,X=(0,d.Z)(J,L,B,!1,null,"3218f6c5",null),U=X.exports,K={name:"Middle",data:function(){return{page:"Index"}},components:{WritePost:S,Enter:V,Index:W,Sidebar:E,EditPost:U},props:["posts"],computed:{viewPosts:function(){return Object.values(this.posts).sort(((t,e)=>e.id-t.id)).slice(0,2)}},beforeCreate(){this.$root.$on("onChangePage",(t=>this.page=t))}},F=K,Q=(0,d.Z)(F,p,m,!1,null,"758c8e95",null),tt=Q.exports,et=function(){var t=this;t._self._c;return t._m(0)},it=[function(){var t=this,e=t._self._c;return e("footer",[e("a",{attrs:{href:"/"}},[t._v("Codeforces")]),t._v(" © 2022 by Mike Mirzayanov ")])}],ot={name:"Footer"},rt=ot,nt=(0,d.Z)(rt,et,it,!1,null,"3676df38",null),st=nt.exports,at={name:"App",components:{Footer:st,Middle:tt,Header:f},data:function(){return this.$root.$data},beforeCreate(){this.$root.$on("onEnter",((t,e)=>{if(""===e)return void this.$root.$emit("onEnterValidationError","Password is required");const i=Object.values(this.users).filter((e=>e.login===t));0===i.length?this.$root.$emit("onEnterValidationError","No such user"):(this.userId=i[0].id,this.$root.$emit("onChangePage","Index"))})),this.$root.$on("onLogout",(()=>this.userId=null)),this.$root.$on("onWritePost",((t,e)=>{if(this.userId)if(!t||t.length<5)this.$root.$emit("onWritePostValidationError","Title is too short");else if(!e||e.length<10)this.$root.$emit("onWritePostValidationError","Text is too short");else{const i=Math.max(...Object.keys(this.posts))+1;this.$root.$set(this.posts,i,{id:i,title:t,text:e,userId:this.userId})}else this.$root.$emit("onWritePostValidationError","No access")})),this.$root.$on("onEditPost",((t,e)=>{if(this.userId)if(t)if(!e||e.length<10)this.$root.$emit("onEditPostValidationError","Text is too short");else{let i=Object.values(this.posts).filter((e=>e.id===parseInt(t)));i.length?i.forEach((t=>{t.text=e})):this.$root.$emit("onEditPostValidationError","No such post")}else this.$root.$emit("onEditPostValidationError","ID is invalid");else this.$root.$emit("onEditPostValidationError","No access")}))}},lt=at,ut=(0,d.Z)(lt,r,n,!1,null,null,null),dt=ut.exports,ct={users:{1:{id:1,login:"mike",name:"Mike Mirzayanov",admin:!0},5:{id:5,login:"tourist",name:"Gennady Korotkevich",admin:!1},7:{id:7,login:"Petr",name:"Petr Mitrichev",admin:!1},11:{id:11,login:"andrewzta",name:"Andrew Stankevich",admin:!1},17:{id:17,login:"geranazavr555",name:"Georgiy Nazarov",admin:!0}},userId:null,posts:{4:{id:4,userId:5,title:"About me",text:"Gennady Korotkevich (Belarusian: Генадзь Караткевіч, Hienadź Karatkievič, Russian: Геннадий Короткевич; born 25 September 1994) is a Belarusian competitive programmer who has won major international competitions since the age of 11, as well as numerous national competitions. His top accomplishments include six consecutive gold medals in the International Olympiad in Informatics[1] as well as the world championship in the 2013 and 2015 International Collegiate Programming Contest World Finals. As of December 2022, Gennady is the highest-rated programmer on Codeforces,[2] CodeChef,[3] Topcoder,[4] AtCoder [jp][5] and HackerRank.[6] In January 2022, he achieved a historic rating of 3979 on Codeforces, becoming the first to break the 3900 barrier."},5:{id:5,userId:1,title:"Round 987",text:"This round will be rated for the participants with rating lower than 2100. It will be held on extented ACM ICPC rules. The penalty for each incorrect submission until the submission with a full solution is 10 minutes. After the end of the contest you will have 12 hours to hack any solution you want. You will have access to copy any solution and test it locally."},7:{id:7,userId:7,title:"An interactive week",text:"AtCoder has returned with its Grand Contest 027 during the Sep 10 - Sep 16 week (problems, results, top 5 on the left, my screencast, analysis). There was a pretty tense fight for the second place with cospleermusora getting problem B accepted with less than a minute remaining; but tourist's victory was not really in doubt as he finished all problems with 25 minutes to spare. Congratulations to both!"},6:{id:6,userId:1,title:"Mail.Ru Cup 2018 — Results of R1+R2+R3",text:"Here are merged results of Mail.Ru Cup 2018 Round 1, Mail.Ru Cup 2018 Round 2 and Mail.Ru Cup 2018 Round 3 according to the GP100 scores (see the announcement for the details https://codeforces.com/blog/entry/62355). Best two contests give the summary score of a participant. This table is unofficial yet. But anyway... congratulations to the winnerzzzz!"},8:{id:8,userId:7,title:"A birdie week",text:"TopCoder SRM 736 started the Aug 13 - Aug 19 week (problems, results, top 5 on the left, my screencast, analysis). This was the first round under the new system in which one can qualify for the last online round and even to the onsite round of TopCoder Open 2019 by placing well in all SRMs in a quarter. rng_58 has claimed the early."},9:{id:9,userId:1,title:"VK Cup 2029",text:"Participants are invited to achieve progress in solving an unusual problem. VK Cup teams which were advanced to the Round 2 (and didn't advance to the Round 3) will take part in VK Cup 2029 - Wild-card Round 2 officially. In addition, this round will be open to the public for unofficial participation for everybody. Registration will be open for the whole round duration."}},comments:{1:{id:1,userId:1,postId:4,text:"Thanks, tourist"},2:{id:2,userId:5,postId:4,text:"You can read more on Wikipedia"},3:{id:3,userId:1,postId:4,text:"Great!"},4:{id:4,userId:1,postId:5,text:"Welcome to the round."},5:{id:5,userId:7,postId:5,text:"Can Div.1 take part unofficially?"},6:{id:6,userId:5,postId:5,text:"I hope"},8:{id:8,userId:11,postId:8,text:"Please, write about TopCoder SRM 737"},9:{id:9,userId:7,postId:8,text:"I'll do"}}};o.ZP.config.productionTip=!1,new o.ZP({data:function(){return ct},render:t=>t(dt)}).$mount("#app")},2554:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAACkVBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////09/vx9fkLC2WJibPwqrDaMDD2xMjo6+8REW7WGxtHR4jVFxf0+Pv4+vzrkJALC1zg4+fHFxiJibQGBl9nZ54NDWM/P4b2+PtHR4vztLrmcHD0wMWgpcvhV1fXICDkZWVycqX3+fxra59NTY3w9Pm5vdiJibcREWYICGAXF2n2+PzWGRkLC18LC2IbG2zgUVFNTZDx9Pn+//9bW5bXHR3XHx9HR5DfSkrfS0vVFRVxcaNyd63/+fipqcvz9vv2zND0uL3N0OTngYyjqM3//Pvmws3znKLueIHyrrOvrs5gZaM2NoHstb1rc63peYO/wtxVXaBycqjZs8PwhIqYmMD0vsM6OoNeXpc6On/t8PTtp6/73N73x8q2t9OamsNycqPVn7DWPDzTNTXvpazT1ujUNzdZWZpeXprvj5cfH2vj5fDyi5LwnqaPlMLs8Pfob3pCQoXa4O4hIWwaGmwYGGoNDGiGirrJs8nlOETLbIL76euJibbU1+j/9fLjXWrdPEyae6QZJH+EiLjvjJMXF2U4OIbL0OTqe4ToOUS7qMMeKYLpiJPne3vz9/vcPDznenoPD2yzttTwnKPlMT/85Ob8//9dXZfv9vz/5eXlSVblVmKGeqoOGHUGBlxtbaZHR4ocHG4GBl0HBmV1d674///71NbjO0nkZnJ5c6Lt7u7kN0PZeotZYKOvosMREWnrjJX/9PIREWgREXAREWdCQo7b4e7//vznc3zVPktjY53Ydn/OMD+rgJspNIELC2ALC2Tk6PO4hKH41Nf65ebo7PULC14YGWubnr/t7e3fnaTQfpNRWp7t8PXWOTnY5IgsAAAADHRSTlMAHw88EQQQGwwLGixvXzcvAAABgklEQVR4Xq3JQ5MdUQBA4dsv6YeZ2/1se2zbtm3btm3Gtm3b1q/JXWSymbdJVc7qVH3gP4bTd5qIjgNqA4xrPhMcrBcSPj6EUI8ud61ngwpo2amR0VEsZyVLIpVKWErniYSk5BhIA9h85kKFf1Veja3d5h472/CItPLWg4eqMYBpu/ILYmHjabW70eiuzhrp6EzsLuxFUGyffiv+zt32AJ2NjS6gNqUI5jyz1yLIaPH1daq0gG8JKyvivcWHj04ODiWlCMrEu/4UErJ14p8IfoXu3lZoHYJ6jvW2OE0IeORWgYF/l4egzVujsYTjbC4pEJB9kM211Gi8+xEMDA4N+xtGx7xIDw/Sa3JqemZ2zu0sgsWlZbiy+m7d1U8k8nPduw/uP/D9hxuCw0eOHjt+4uQplWNYmKPq3PkLFy9dvnIVwTXD9Rs3+fzbLmRQEOly7/6Dh48eP3mKAbPnL16+ev2G6SmTKxRy2Scm0/Pzl6/fzADFfIeJzCkAZ1BMxMDBP/cbyluAbvZRnakAAAAASUVORK5CYII="},5080:function(t,e,i){t.exports=i.p+"img/logo.586c3ae6.png"},1915:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEZSURBVHja1JYxTkMxDIa/pAGqvkq0M2Jl4BZci50DMXIAjsHUgQEJ2kJf4cWxGehTIzYkZ8BTnMFf8tuOE8yMlhZpbM0BAUjAFDhxjp2BzwTMzeytyelDWEaga6hQF4HUopIOMVOsnBYAmgMSwM3tA1cXS9a7wSX4ojvl6XlzBIgomz6z7bNX9SBSjoAsynaf2e6dADEwlAowlMLqZecnUZ+ZTrSSKAtCRNUn2VIMMakkKoYGwyk+qkauq+j+8Y6Zgb1/+ORg3tGnCdcjQEUIBEzVB6CK5uoGJgJhAk4AimJUSVYpkCJxNvNqY6wq06xSeD00xp+nif3yOez9rHMAzoFLYOH8HK2B1TjRzka5HE2Ar/DvfxXfAwAeSZOQlTRuTwAAAABJRU5ErkJggg=="}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,o,r,n){if(!o){var s=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],n=t[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((function(t){return i.O[t](o[l])}))?o.splice(l--,1):(a=!1,n<s&&(s=n));if(a){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[o,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,n,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)var d=l(i)}for(e&&e(o);u<s.length;u++)n=s[u],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},o=self["webpackChunkhw10"]=self["webpackChunkhw10"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(1414)}));o=i.O(o)})();
//# sourceMappingURL=app.6a058e80.js.map