function computerChoice(){
    choice=["Rock","Paper","Scissor"]
    index=Math.floor((Math.random()*3))
    return index
}
function user_input(){
    choice=["Rock","Paper","Scissor"]
    user_choice=document.getElementById("user_choice").value    
    judge(user_choice)
}
function judge(user_choice){
    choice=["Rock","Paper","Scissor"]
    const c=computerChoice()
    if (choice[(user_choice+1)%3]==choice[c]){
        console.log(`user choice ${choice[user_choice]} computer choice ${choice[c]}`)
        console.log("Computer Won")
    }
    else if (choice[(user_choice)]==choice[c]){
        console.log(`user choice ${choice[user_choice]} computer choice ${choice[c]}`)
        console.log("Draw Try again")
    }
    else{
        console.log(`user choice${choice[user_choice]} computer choice ${choice[c]}`)
        console.log("User won")
    }
}

