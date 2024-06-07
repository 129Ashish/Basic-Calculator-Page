// console.log("hello");


// function xyz(){
//     console.log("Hello heere");
// }

// xyz();


// abc=()=>
// {
//     console.log("hello there");
// }

// abc();


// let hee={name:"ashish kumar",roll_no:12,semester:2};

// console.log(hee.name);
// console.log(hee.roll_no,hee.semester);
let calc_value;

function data(calc_value)
{
    document.getElementById("screen").innerHTML+=calc_value;

    console.log(calc_value);
}

function calculation(){
   let screen_data=document.getElementById("screen").innerHTML;
   let final_data=eval(screen_data);
console.log(final_data);
document.getElementById("screen").innerHTML=final_data;
}



// function allclear() {
//     final_data = "";
//     screen = '';
//    }
   
//    function delete1() {
//    screen.slice(0,-1);
//    }
   