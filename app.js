let s=document.getElementsByClassName("image")
let next=document.getElementById("next1")
let previous=document.getElementById("previous1")
 
let k=0

let i
for(i=1;i<s.length;i++)
{
    s[i].style.display="none" 
}   
next.addEventListener('click',function()
{
    s[k].style.display="none"
    k++
    if(k>=s.length)
        {
             k=0
        }
 //  s[k].style.display="block"
   s[k].setAttribute("style", " display:block; outline-color:green;" )

})

previous.addEventListener('click',function()
{
    s[k].style.display="none"
    k--
    if(k<0)
        {
             k=s.length-1
        }
   s[k].style.display="block"
})

// let g=document.getElementsByClassName("image")
// console.log(g)

// for(h=0;h<g.length;h++)
// {
//     g[h].setAttribute("style","animation-name:tt;animation-duration:2s;")
// }

