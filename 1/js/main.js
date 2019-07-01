var A=document.getElementById("text");

function bold()
{
    A.style.fontWeight="bold";
    event.preventDefault();
}
function italic()
{
    A.style.fontStyle="italic";
    event.preventDefault();
}
function underline()
{
     A.style.textDecoration="underline";
     event.preventDefault();    
}

function px(){
    A.style.fontSize=document.getElementById("size").value;
}
function pol(){
    A.style.fontFamily=document.getElementById("police").value;
}