//accessing the elements
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;  //player X,player O


//array to store winning patterns
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

//add event listener to boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){     //player 1 turn
            box.innerText="O";
             turnO=false;   //now player 2 plays
        }
            else{
                box.innerText="X"; //player 2 turn
                turnO=true;        //player 1 turns
            }
            box.disabled=true;  //disable the button to sure that not to repeat the turn in that box again
            checkwinner();    
        });
});

//disable the boxes when we find the winner
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

//enable the boxes

const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{    //show the winner
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");   //removing the class hide from msg-container
    disableboxes();
};





const checkwinner=() =>{
     for(let pattern of winpatterns ){
       
          let pos1val =boxes[pattern[0]].innerText;
          let pos2val= boxes[pattern[1]].innerText;
          let pos3val= boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){   //check that position is not empty
         if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showwinner(pos1val);
         }
        }
     }
};

const resetgame=()=>{
    trueO=true;  //reset the player turn
    enableboxes();  //calling enableboxes function
    msgcontainer.classList.add("hide");  //adding class hide again to hide the pargraph container
}


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
