import './polyfills.server.mjs';
import{A as w,B as P,E,K as T,a as c,b as x,c as v,d as b,e as p,f as h,g as f,h as t,i as o,j as a,k as C,l as y,m as g,n as r,o as m,v as S,x as O,y as M,z as _}from"./chunk-WUOY7WUR.mjs";var k=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-contact"]],standalone:!0,features:[m],decls:44,vars:0,consts:[[1,"container","d-flex","flex-column","align-items-center","justify-content-center"],[1,"fw-bold","text-secondary-emphasis","text-center","pt-5"],[1,"line","position-relative"],[1,"star"],[1,"fa-solid","fa-star"],[1,"w-50","my-5"],["type","text","placeholder","userName",1,"form-control","mb-4","border-0","border-bottom"],["type","text","placeholder","userAge",1,"form-control","mb-4","border-0","border-bottom"],["type","text","placeholder","userEmail",1,"form-control","mb-4","border-0","border-bottom"],["type","text","placeholder","userPassword",1,"form-control","mb-5","border-0","border-bottom"],[1,"btn","btn-outline-success","btn-sm","my-2"],[1,"bg-dark","text-white","text-center","main-color"],[1,"container","py-5"],[1,"row"],[1,"col-md-4"],[1,"icons","d-flex","justify-content-center"],[1,"icon","rounded-circle","mx-2","px-2","py-1","border","border-1","border-white"],[1,"fab","fa-facebook-f"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin-in"],[1,"fa-solid","fa-globe"],[1,"secondary-color","pb-1","pt-2"],[1,"footer-font"]],template:function(i,d){i&1&&(t(0,"div",0)(1,"h1",1),r(2,"CONTACT SECTION"),o(),t(3,"div",2)(4,"div",3),a(5,"i",4),o()(),t(6,"div",5),a(7,"input",6)(8,"input",7)(9,"input",8)(10,"input",9),t(11,"button",10),r(12,"send Message"),o()()(),t(13,"footer",11)(14,"div")(15,"div",12)(16,"div",13)(17,"div",14)(18,"h5"),r(19,"LOCATION"),o(),t(20,"p"),r(21,"2215 John Daniel Drive"),o(),t(22,"p"),r(23,"Clark, MO 65243"),o()(),t(24,"div",14)(25,"h5"),r(26,"AROUND THE WEB"),o(),t(27,"div",15)(28,"div",16),a(29,"i",17),o(),t(30,"div",16),a(31,"i",18),o(),t(32,"div",16),a(33,"i",19),o(),t(34,"div",16),a(35,"i",20),o()()(),t(36,"div",14)(37,"h5"),r(38,"ABOUT FREELANCER"),o(),t(39,"p"),r(40,"Freelance is a free to use, licensed Bootstrap theme created by Route"),o()()()()(),t(41,"div",21)(42,"p",22),r(43,"Copyright \xA9 Your Website 2024"),o()()())},styles:[".bg-footer[_ngcontent-%COMP%]{background-color:#2c3e50}.footer-font[_ngcontent-%COMP%]{font-size:12px}.main-color[_ngcontent-%COMP%]{background-color:#2c3e50!important}.secondary-color[_ngcontent-%COMP%]{background-color:#1a252f!important}"]});let n=e;return n})();function L(n,e){if(n&1){let s=C();t(0,"div",9)(1,"div",10)(2,"img",11),y("click",function(){let i=x(s).$implicit,d=g();return v(d.openModal(i))}),o()()()}if(n&2){let s=e.$implicit;p(2),f("src",s.src,b)("alt",s.alt)}}function U(n,e){if(n&1){let s=C();t(0,"div",12)(1,"div",13)(2,"span",14),y("click",function(){x(s);let i=g();return v(i.closeModal())}),r(3,"\xD7"),o(),a(4,"img",15),o()()}if(n&2){let s=g();p(4),f("src",s.selectedImage==null?null:s.selectedImage.src,b)("alt",s.selectedImage==null?null:s.selectedImage.alt)}}var I=(()=>{let e=class e{constructor(){this.images=[{src:"assets/images/portfolio1.png",alt:"Portfolio Image 1"},{src:"assets/images/portfolio2.png",alt:"Portfolio Image 2"},{src:"assets/images/portfolio3.png",alt:"Portfolio Image 3"},{src:"assets/images/portfolio3.png",alt:"Portfolio Image 4"},{src:"assets/images/portfolio1.png",alt:"Portfolio Image 5"},{src:"assets/images/portfolio2.png",alt:"Portfolio Image 6"}],this.selectedImage=null}openModal(l){this.selectedImage=l}closeModal(){this.selectedImage=null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-portfolio"]],standalone:!0,features:[m],decls:11,vars:2,consts:[[1,"d-flex","flex-column","align-items-center","justify-content-center"],[1,"text-center","text-secondary-emphasis","fw-bold","pt-5"],[1,"line","position-relative"],[1,"star"],[1,"fa-solid","fa-star"],[1,"container"],[1,"row","p-4"],["class","col-md-4 mb-4",4,"ngFor","ngForOf"],["class","modal",4,"ngIf"],[1,"col-md-4","mb-4"],[1,"image","position-relative"],[1,"w-100","rounded-3",3,"click","src","alt"],[1,"modal"],[1,"modal-content"],[1,"close",3,"click"],[1,"w-100",3,"src","alt"]],template:function(i,d){i&1&&(t(0,"div",0)(1,"h1",1),r(2,"PORTFOLIO COMPONENT"),o(),t(3,"div",2)(4,"div",3),a(5,"i",4),o()()(),t(6,"div",5)(7,"div",6),h(8,L,3,2,"div",7),o()(),h(9,U,5,2,"div",8),a(10,"app-contact")),i&2&&(p(8),f("ngForOf",d.images),p(),f("ngIf",d.selectedImage))},dependencies:[_,O,M,k],styles:[".overlay[_ngcontent-%COMP%]:hover{opacity:.8!important;transition:all .5s}.plus[_ngcontent-%COMP%]{font-size:80px}.modal[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;z-index:1000}.modal-content[_ngcontent-%COMP%]{background-color:#fefefe;padding:20px;border:1px solid #888;width:80%;max-width:600px;position:relative}.close[_ngcontent-%COMP%]{position:absolute;top:5px;right:3px;color:#00f;font-size:28px;font-weight:700;cursor:pointer}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#87ceeb}"]});let n=e;return n})();var F=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-about"]],standalone:!0,features:[m],decls:16,vars:0,consts:[[1,"bg-dark","text-white","p-5"],[1,"text-container","p-5","d-flex","flex-column","align-items-center","justify-content-center"],[1,"fw-bold","text-center","pt-5","text-white"],[1,"line","position-relative"],[1,"star"],[1,"fa-solid","fa-star"],[1,"container","pt-4"],[1,"row","px-5","pb-5"],[1,"col-md-6"]],template:function(i,d){i&1&&(t(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"ABOUT SECTION"),o(),t(4,"div",3)(5,"div",4),a(6,"i",5),o()(),t(7,"div",6)(8,"div",7)(9,"div",8)(10,"p"),r(11,"Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."),o()(),t(12,"div",8)(13,"p"),r(14,"Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."),o()()()()()(),a(15,"app-portfolio"))},dependencies:[I],styles:[".bg-color[_ngcontent-%COMP%]{background-color:#2bbc9c;width:100%;height:75vh}.line[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:before{background-color:#fff}.star[_ngcontent-%COMP%]:after{background-color:#fff}"]});let n=e;return n})();var A=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-home"]],standalone:!0,features:[m],decls:21,vars:0,consts:[[1,"navbar","navbar-expand-lg","pb-5"],[1,"container-fluid"],["href","#",1,"ms-5","text-white"],["role","search",1,"d-flex"],["href","",1,"p-3"],[1,"bg-color","home","text-center","text-white"],["src","assets/images/avataaars.svg","alt","",1,"img-fluid","py-4"],[1,"text-center"],[1,"star"],[1,"fa-solid","fa-star"],[1,"py-4"]],template:function(i,d){i&1&&(t(0,"nav",0)(1,"div",1)(2,"h2")(3,"a",2),r(4,"START FRAMEWORK"),o()(),t(5,"form",3)(6,"a",4),r(7,"ABOUT"),o(),t(8,"a",4),r(9,"PORTFOLIO"),o(),t(10,"a",4),r(11,"CONTACT"),o()()()(),t(12,"section",5),a(13,"img",6),t(14,"h1",7),r(15,"START FRAMEWORK "),o(),t(16,"span",8),a(17,"i",9),o(),t(18,"p",10),r(19,"Graphic Artist - Web Designer - Illustrator "),o()(),a(20,"app-about"))},dependencies:[F],styles:['a[_ngcontent-%COMP%]{text-decoration:none}.navbar[_ngcontent-%COMP%]{background-color:#2c3e50}h2[_ngcontent-%COMP%]{font-size:30px!important}.bg-color[_ngcontent-%COMP%]{background-color:#2bbc9c;width:100%;height:75vh}.star[_ngcontent-%COMP%]{position:absolute}.star[_ngcontent-%COMP%]:before, .star[_ngcontent-%COMP%]:after{content:"";position:absolute;top:50%;width:40px;height:2px;background-color:#fff}.star[_ngcontent-%COMP%]:before{left:-50px;transform:translateY(-50%)}.star[_ngcontent-%COMP%]:after{right:-50px;transform:translateY(-50%)}.home[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;width:20%}.bg-footer[_ngcontent-%COMP%]{background-color:#2c3e50}.icon-border[_ngcontent-%COMP%]{position:relative;border:1px white solid;border-radius:50%;height:30px;width:30px}']});let n=e;return n})();var R=(()=>{let e=class e{constructor(){this.title="framework-git"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(i,d){i&1&&a(0,"app-home")},dependencies:[A]});let n=e;return n})();var D=[];var N={providers:[T(D),P()]};var V={providers:[E()]},z=S(N,V);var j=()=>w(R,z),de=j;export{de as a};