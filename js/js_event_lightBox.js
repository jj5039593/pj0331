"use strict";

const secCon=document.querySelector('.sec-con');
const secConUl=document.querySelector('.sec-con>ul');
const secConLi=document.querySelectorAll('.sec-con>ul>li');

const popUp = document.querySelector('.popup')
const popCon = document.querySelector('.pop-con')
// secConUl.addEventListener('click',(e)=>{

//     const eTarget=e.target;
//     const liTag=eTarget.parentElement;

//     console.log(eTarget,liTag)

//     secConLi.forEach((el,idx)=>{
//         if(liTag===el){
//             el.classList.add('on')
//         }else{
//             el.classList.remove('on')
//         }
//     })
// });

//li의 자식 img, p get -> pop-con img, p 에 추가 

secConLi.forEach((el,idx)=>{
    el.addEventListener('click',e=>{
        const eTarget=e.target;
        const eCTarget=e.currentTarget;

        // console.log(`eTarget->`,eTarget)
        // console.log(`eCTarget->`,eCTarget)

        const imgTag=eCTarget.children[0];
        const pTag=eCTarget.children[1];

            // console.log(`imgTag,`,imgTag)
        // console.log(`pTag,`,pTag)
        
        const imgSrc = imgTag.getAttribute('src');
        const imgAlt = imgTag.getAttribute('alt');
        const pTxt =pTag.innerText;

        console.log(`imgsrc`,imgSrc)
        console.log(`imgalt,`,imgAlt)
        
        popCon.children[0].setAttribute('src',imgSrc)
        popCon.children[0].setAttribute('alt',imgAlt)
        popCon.children[1].innerText=pTxt;

        popUp.classList.add('pop-animation');
    });
});