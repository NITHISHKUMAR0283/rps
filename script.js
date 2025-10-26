let user_score=0;
let computer_score=0;
let round=0;
function computerChoice(){
    choice=["Rock","Paper","Scissor"]
    index=Math.floor((Math.random()*3))
    return index
}
function user_input(index){
    
  
    
    choice=["Rock","Paper","Scissor"]
    user_choice=index   
    judge(user_choice)
    round+=1;
      if(round<5){
        result.textContent+=`play ${5-round} more rounds for final results\n`;
    }
    else if (round==5){
        if (user_score>computer_score){
            result.textContent=`user won finnaly with user score ${user_score} and computer score is ${computer_score}\n`
        }
        else {
            result.textContent=`computer won finnaly with user score ${user_score} and computer score is ${computer_score}\n`
        }
        round=0;
        user_score=0;
        computer_score=0;

        
    }
    
}
function judge(user_choice){
    choice=["Rock","Paper","Scissor"]
    comp_s=document.getElementById("computer_score")
    user_s=document.getElementById("user_score")
    result_div=document.getElementById("result")
    const c=computerChoice()    

    const image=document.createElement("img")
    if (c==0){
        image.src="/images/rock.png"
        image.width="100"
        image.style.transform= "scaleX(-1)";}
    else if (c==1){
        image.src="/images/paper.png"
        image.width="60"
        image.style.transform= "scaleX(-1)";
    }
    else {
        image.src="images/scissor.png"
        image.width="80"
        image.style.transform= "scaleX(-1)";
    }
    document.getElementById("choice").innerHTML=""
    document.getElementById("choice").appendChild(image)


    if (choice[(user_choice)%3]==choice[c]){
        computer_score+=1;
        
        result.textContent=`result : Computer won\n`
    }
    else if (choice[(user_choice)-1]==choice[c]){
        round-=1;
        result.textContent=`result :Draw\n`

    }
    else{
        user_score+=1;
        result.textContent=`result :User won\n`
    }
    user_s.textContent=`user score ${user_score}`
    comp_s.textContent=`computer score ${computer_score}\n`
}
