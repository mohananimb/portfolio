(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/manish.5049455d.jpg"},function(e,a,t){e.exports=t.p+"static/media/covid.a95b69be.jpg"},,,,,function(e,a,t){e.exports=t.p+"static/media/beach-resolt1.290982f3.jpg"},function(e,a,t){e.exports=t.p+"static/media/netflix-clone1.03996828.png"},,,,,,function(e,a,t){e.exports=t.p+"static/media/beach-resolt2.3011d73c.png"},function(e,a,t){e.exports=t.p+"static/media/beach-resolt3.63465ed8.png"},function(e,a,t){e.exports=t.p+"static/media/beach-resolt4.6c50068c.png"},function(e,a,t){e.exports=t.p+"static/media/netflix-clone2.bc59197f.png"},function(e,a,t){e.exports=t.p+"static/media/netflix-clone3.2f1e1cc6.png"},function(e,a,t){e.exports=t.p+"static/media/earth.67af05e1.jpg"},,,function(e,a,t){e.exports=t(52)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),s=(t(33),t(34),t(35),t(36),t(37),t(38),t(39),t(40),t(41),t(42),t(1)),o=t.n(s);o.a.easing.jswing=o.a.easing.swing,o.a.extend(o.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,l){return o.a.easing[o.a.easing.def](e,a,t,n,l)},easeInQuad:function(e,a,t,n,l){return n*(a/=l)*a+t},easeOutQuad:function(e,a,t,n,l){return-n*(a/=l)*(a-2)+t},easeInOutQuad:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,l){return n*(a/=l)*a*a+t},easeOutCubic:function(e,a,t,n,l){return n*((a=a/l-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,l){return n*(a/=l)*a*a*a+t},easeOutQuart:function(e,a,t,n,l){return-n*((a=a/l-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,l){return n*(a/=l)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,l){return n*((a=a/l-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,l){return-n*Math.cos(a/l*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,l){return n*Math.sin(a/l*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,l){return-n/2*(Math.cos(Math.PI*a/l)-1)+t},easeInExpo:function(e,a,t,n,l){return 0==a?t:n*Math.pow(2,10*(a/l-1))+t},easeOutExpo:function(e,a,t,n,l){return a==l?t+n:n*(1-Math.pow(2,-10*a/l))+t},easeInOutExpo:function(e,a,t,n,l){return 0==a?t:a==l?t+n:(a/=l/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,l){return-n*(Math.sqrt(1-(a/=l)*a)-1)+t},easeOutCirc:function(e,a,t,n,l){return n*Math.sqrt(1-(a=a/l-1)*a)+t},easeInOutCirc:function(e,a,t,n,l){return(a/=l/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,l){var r=1.70158,c=0,s=n;if(0==a)return t;if(1==(a/=l))return t+n;if(c||(c=.3*l),s<Math.abs(n)){s=n;r=c/4}else r=c/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/c)+t},easeOutElastic:function(e,a,t,n,l){var r=1.70158,c=0,s=n;if(0==a)return t;if(1==(a/=l))return t+n;if(c||(c=.3*l),s<Math.abs(n)){s=n;r=c/4}else r=c/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*a)*Math.sin((a*l-r)*(2*Math.PI)/c)+n+t},easeInOutElastic:function(e,a,t,n,l){var r=1.70158,c=0,s=n;if(0==a)return t;if(2==(a/=l/2))return t+n;if(c||(c=l*(.3*1.5)),s<Math.abs(n)){s=n;r=c/4}else r=c/(2*Math.PI)*Math.asin(n/s);return a<1?s*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/c)*-.5+t:s*Math.pow(2,-10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/c)*.5+n+t},easeInBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),n*(a/=l)*a*((r+1)*a-r)+t},easeOutBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),n*((a=a/l-1)*a*((r+1)*a+r)+1)+t},easeInOutBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),(a/=l/2)<1?n/2*(a*a*((1+(r*=1.525))*a-r))+t:n/2*((a-=2)*a*((1+(r*=1.525))*a+r)+2)+t},easeInBounce:function(e,a,t,n,l){return n-o.a.easing.easeOutBounce(e,l-a,0,n,l)+t},easeOutBounce:function(e,a,t,n,l){return(a/=l)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,l){return a<l/2?.5*o.a.easing.easeInBounce(e,2*a,0,n,l)+t:.5*o.a.easing.easeOutBounce(e,2*a-l,0,n,l)+.5*n+t}});t(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),m=t(3),u=t(5),d=t(4),p=t(7),h=t.n(p),v=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={logo:h.a},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=o()("nav").outerHeight();o()(".navbar-toggler").on("click",(function(){o()("#mainNav").hasClass("navbar-reduce")||o()("#mainNav").addClass("navbar-reduce")})),o()("body").scrollspy({target:"#mainNav",offset:a}),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:h.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:h.a}))})),o()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=o()(this.hash);if((e=e.length?e:o()("[name="+this.hash.slice(1)+"]")).length)return o()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),o()(".js-scroll").on("click",(function(){o()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},l.a.createElement("img",{className:"profile-logo",src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(l.a.Component),f=(t(45),t(17)),E=t.n(f),b=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Manish Mohanani"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(E.a,{strings:["Front End Developer","React.JS Developer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work"))))))}}]),t}(l.a.Component),g=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"70%",value:"70"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"TypeScript_skill",content:"Typescript",porcentage:"60%",value:"60"},{id:"Redux_skill",content:"Redux",porcentage:"80%",value:"80"},{id:"Bootstrap_skill",content:"Bootstrap",porcentage:"75%",value:"75"},{id:"NodeJS_skill",content:"Node.JS",porcentage:"65%",value:"65"},{id:"Git_skill",content:"Git",porcentage:"80%",value:"80"}],about_me:[{id:"first-p-about",content:"I'm Manish Mohanani , a computer Science graduate, currently working as a front-end developer at uTriva Technologies Pune, passionate about learning new technologies and coding. Highly capable to work in a team environment. Good command on range of modern technologies like JavaScript and it's library like ReactJS."},{id:"second-p-about",content:"I've also good knowledge of backend technologies like node.js and DB's like mongoDB"}]},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},l.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},l.a.createElement("img",{className:"img-fluid rounded b-shadow-a",alt:""})))),l.a.createElement("div",{className:"skill-mf"},this.state.skills.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement("span",null,e.content)," ",l.a.createElement("span",{className:"pull-right"},e.porcentage),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"about-me pt-4 pt-md-0"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return l.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(l.a.Component),N=t(8),y=t.n(N),w=t(13),k=t.n(w),x=t(20),O=t.n(x),j=t(21),M=t.n(j),I=t(22),S=t.n(I),C=t(14),B=t.n(C),L=t(23),J=t.n(L),_=t(24),T=t.n(_),q=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"My Work"),l.a.createElement("p",{className:"subtitle-a"},"Here are some of my projects that I recently worked on."),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:y.a,"data-lightbox":"gallery-vmarine"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:y.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Covid-19 Update Tracker"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Javascript Bootstrap ReactJS"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement("a",{href:y.a,"data-lightbox":"gallery-vmarine",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:k.a,"data-lightbox":"gallery-aguadeluz"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:k.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Beach Resort with hotel booking"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Javascript Bootstrap ReactJS"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement("a",{href:O.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:M.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:S.a,"data-lightbox":"gallery-aguadeluz",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{style:{minHeight:"305px"},className:"work-box"},l.a.createElement("a",{href:B.a,"data-lightbox":"gallery-todo"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:B.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Netflix-Clone"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Javascript ReactJS"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement("a",{href:J.a,"data-lightbox":"gallery-todo",style:{display:"none"}},"jsx-a11y/anchor-has-content warning"),l.a.createElement("a",{href:T.a,"data-lightbox":"gallery-todo",style:{display:"none"}},"jsx-a11y/anchor-has-content warning")))),l.a.createElement("p",{className:"pt-3 text-center"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"https://github.com/mohananimb",target:"_blank",role:"button",rel:"noopener noreferrer"},"More Projects..."))))}}]),t}(l.a.Component),P=t(25),D=t.n(P),H=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+D.a+")"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"contact-mf"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Let's Connect")),l.a.createElement("div",null,l.a.createElement("h5",{className:"lead"},"I'm happy to connect, listen and help. Let's work together and build something awesome. Let's turn your idea to an even greater product."),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("h4",{style:{color:"#0078ff"}},"Call Me."),l.a.createElement("a",{className:"font-weight-bold",href:"tel:8793466424",rel:"noopener noreferrer"},"+91-8793466424")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.")),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:manishmohanani777@gmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-android-mail"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://github.com/mohananimb",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-github"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/manish-mohanani-821b46199/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-linkedin"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"tel:8793466424",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-android-call"}))))))))))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(l.a.Component),Q=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){o()(".back-to-top").click((function(){return o()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement("a",{href:"/#",className:"back-to-top animated"},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(l.a.Component),R=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){o()(window).on("load",(function(){o()("#preloader").length&&o()("#preloader").delay(100).fadeOut("slow",(function(){o()(this).remove()}))}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),t}(l.a.Component);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(q,null),l.a.createElement(H,null),l.a.createElement(Q,null),l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.5b3dedd1.chunk.js.map