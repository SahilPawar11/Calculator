let result=document.getElementById("output");


let oprn=(number)=>{
    result.value += number;
}

let calculate=()=>{
   try {
    result.value=eval(result.value)
   } catch (error) {
       alert('Invalid');
   }
}


function delet(){
    result.value = result.value.slice(0,-1)
}

function allclear(){
    result.value = '';
}                                         