let flag=0;
let prev;
function controller(x)
{
    prev=flag
    flag=flag+x
    if(flag==-1)
    {
        flag=3
    }
    else if(flag==4)
    {
        flag=0;
    }
    slidestopshow(flag,prev)
}
slideshow(flag)

function slideshow(num){
   let slides=document.getElementsByClassName('slide') 
   slides[num].style.display="block";
}
function slidestopshow(num,prev){
   let slides=document.getElementsByClassName('slide') 
   slides[prev].style.display="none"
   slides[num].style.display="block";
}