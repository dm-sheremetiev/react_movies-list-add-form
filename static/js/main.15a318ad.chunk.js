(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(8),c=i.n(a),n=(i(16),i(11)),s=i(2),r=(i(17),i(1)),l=(i(18),i(19),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(4),j=i(5),b=i(9),u=i.n(b);var h=function(e){var t=e.name,i=e.value,a=e.label,c=void 0===a?t:a,n=e.required,o=void 0!==n&&n,d=e.onChange,b=void 0===d?function(){}:d,h=e.validateUrls,O=void 0===h?function(){return!1}:h,g=e.isUrl,v=void 0!==g&&g,p=e.setUrlsFieldsTrue,f=Object(r.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),w=Object(s.a)(f,1)[0],x=Object(r.useState)(!1),M=Object(s.a)(x,2),N=M[0],U=M[1],T=Object(r.useState)(!1),y=Object(s.a)(T,2),I=y[0],B=y[1],S=N&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:w,children:c}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:w,"data-cy":"movie-".concat(t),className:u()("input",{"is-danger":S}),type:"text",placeholder:"Enter ".concat(c),value:i,onChange:function(e){b(e.target.value),function(e){if(!O(e)&&v&&""!==i)return B(!0),void(void 0!==p&&p((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},"".concat(t,"True"),!1))})));B(!1),void 0!==p&&p((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(m.a)({},"".concat(t,"True"),!0))}))}(e.target.value)},onBlur:function(){return U(!0)}})}),S&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(c," is required")}),I&&Object(l.jsx)("p",{className:"help is-danger",children:"URL is invalid"})]})},O=function(e){var t=e.onAdd,i=Object(r.useState)(0),a=Object(s.a)(i,2),c=a[0],n=a[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),m=d[0],j=d[1],b=Object(r.useState)(""),u=Object(s.a)(b,2),O=u[0],g=u[1],v=Object(r.useState)(""),p=Object(s.a)(v,2),f=p[0],w=p[1],x=Object(r.useState)(""),M=Object(s.a)(x,2),N=M[0],U=M[1],T=Object(r.useState)(""),y=Object(s.a)(T,2),I=y[0],B=y[1],S=Object(r.useState)({imgUrlTrue:!1,imdbUrlTrue:!1}),_=Object(s.a)(S,2),k=_[0],z=_[1],A=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.,\w_]*)#?(?:[.!/\\\w]*))?)$/,D=function(e){return A.test(e)},C=m&&f&&N&&I&&k.imdbUrlTrue&&k.imgUrlTrue;return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return e.preventDefault()},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(h,{name:"title",label:"Title",value:m,onChange:j,required:!0}),Object(l.jsx)(h,{name:"description",label:"Description",value:O,onChange:g}),Object(l.jsx)(h,{name:"imgUrl",label:"Image URL",value:f,onChange:w,validateUrls:D,isUrl:true,setUrlsFieldsTrue:z,required:!0}),Object(l.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:N,onChange:U,validateUrls:D,isUrl:true,setUrlsFieldsTrue:z,required:!0}),Object(l.jsx)(h,{name:"imdbId",label:"Imdb ID",value:I,onChange:B,required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",onClick:function(){t({title:m,description:O,imgUrl:f,imdbUrl:N,imdbId:I}),j(""),g(""),w(""),U(""),B(""),n((function(e){return e+1}))},disabled:!C,children:"Add"})})})]},c)},g=i(10),v=function(){var e=Object(r.useState)(g),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(O,{onAdd:function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};c.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.15a318ad.chunk.js.map