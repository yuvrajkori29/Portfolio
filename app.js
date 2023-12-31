// const sections =  document.querySelectorAll('.section')
// const secBtns=  document.querySelectorAll('.controls')
// const secBtn =  document.querySelectorAll('.control')
// const allSections= document.querySelector('.main-content')

// function PageTransition(){
//     //button click active class

//     for(var i=0;i<secBtn.length;i++)
//     {
//       secBtn[i].addEventListener('click',function(){
//            let currentBtn = document.querySelectorAll('.active-btn')
//            currentBtn[0].className=currentBtn[0].className.replace(' active-btn','')
//            this.className+=' active-btn';

//       })
//     }

//     //targeting all sections 

 

//     allSections.addEventListener(`click`,(e)=>{
//       const id = e.target.dataset.id;
//         console.log(e.target);

//           //remove active button
//           if(id)
//           {
//           secBtn.forEach((btn)=> {
//               btn.classList.remove('active'); 
//             })
//             e.target.classList.add('active');
//           }

//           //hide other sections
//           sections.forEach((section)=>{
//             section.classList.remove('active');
//           })

//           const element = document.getElementById(id);
//           element.classList.add('active');
//     })

  
// //toggle theme
// const themeBtn = document.querySelector('.theme-btn');
// themeBtn.addEventListener('click',()=>{
//   let element = document.body;
//   element.classList.toggle('light-mode')
// })
// }

// PageTransition();


(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })
})();