let sign="X";
let player="A";
let disp=document.getElementById("turn");
function printx(number){
    let box=document.getElementById("box"+number);
    console.log(box);
    if(box.innerText==""){
        box.innerHTML=sign;
    winner();
    checksign();
    disp.innerHTML=`${sign}'s turn`;
    
    }
    
}
function checksign(){
    if(sign=="X") sign="O";
    else sign="X";
}

function getbox(number){
    return document.getElementById("box"+number).innerHTML;
}

function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
        return true;
    else return false;
}

function winner(){
    if (checkmove(1,2,3,sign) || checkmove(4,5,6,sign) 
    || checkmove(7,8,9,sign)|| checkmove(1,4,7,sign) 
    || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) 
    || checkmove(1,5,9,sign) || checkmove(7,5,3,sign) )
    {
        disp.innerHTML=` congrats ${sign} Won`;

        for(let i=1;i<=9;i++){
            document.getElementById("box"+i).innerHTML="";
        }
        throw "game end";

    }
    else{
        if(getbox(1)!="" && getbox(2)!="" 
        && getbox(3)!="" && getbox(4)!="" 
        && getbox(5)!="" && getbox(6)!="" 
        && getbox(7)!="" && getbox(8)!="" 
        && getbox(9)!=""){
            disp.innerHTML= "Game Tie ";
            throw "its a tie";
        }
    }

}

function replay(){
    for(let i=1;i<=9;i++){
        document.getElementById("box"+i).innerHTML="";
        disp.innerHTML="Play again";
    }
    
}