const questions=[
    {
        question:"Grand Central Terminal, Park Avenue,New York is the world's",
        answer:[
                {text:"highest railway station",correct:false},
                {text:"largest railway station",correct:true},
                {text:"longest railway station",correct:false},
                {text:"None of the above",correct:false},

        ]
    },
    {
        question:"Entomology is the science that studies",
        answer:[
                {text:"The formation of rocks",correct:false},
                {text:"Behavior of human beings",correct:false},
                {text:"Insects",correct:true},
                {text:"The origin and history of technical and scientific terms",correct:false},

        ]
    },
    {
        question:"It is easier to roll a stone up a sloping road than to lift it vertical upwards because",
        answer:[
                {text:"work done in rolling is more than in lifting",correct:false},
                {text:"work done in both is same but the rate of doing work is less in rolling",correct:true},
                {text:"work done in lifting the stone is equal to rolling it ",correct:false},
                {text:"work done in rolling a stone is less than in lifting it",correct:false},

        ]
    }, {
        question:"Which country gifted the 'Statue of Liberty' to USA in 1886" , 
        answer:[
                {text:"Canada",correct:false},
                {text:"Brazil",correct:false},
                {text:"France",correct:true},
                {text:"England",correct:false},

        ]
    }, {
        question:"Which one is the biggest island in the world?",
        answer:[
                {text:"Greenland",correct:true},
                {text:"Finland",correct:false},
                {text:"Sumatra",correct:false},
                {text:"Borneo",correct:false},

        ]
    }, {
        question:"Which continent has the highest number of countries?",
        answer:[
                {text:"Asia",correct:false},
                {text:"Europe",correct:false},
                {text:"North America",correct:false},
                {text:"Africa",correct:true},

        ]
    },
   
   
];
const questionelement=document.getElementById("question");
const answerbutton=document.getElementById("answer");
const nextbutton=document.getElementById("nextbtn");
let curr_quesindex=0;
let score=0;

function startquiz(){
    curr_quesindex=0;
    score=0;
    nextbutton.innerHTML="next";
    showques();
}
function showques()
{
    reset();
    let currques=questions[curr_quesindex];
    let quesnumber=curr_quesindex+1;
    questionelement.innerHTML=quesnumber+"."+currques.question;
    currques.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn1");
        answerbutton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    });
}
function reset(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild)
    {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectanswer(e)
{
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct === "true";
    if(iscorrect)
    {
        selectedbtn.classList.add("correct");
        score++;

    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>
        {
            if(button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextbutton.style.display="block";
}
function showscore()
{
    reset();
    if(score>(questions.length)/2)
    {
        questionelement.innerHTML=` Excellent! you scored ${score} out of ${questions.length}!`;
    }
    else if(score==(questions.length)/2)
    {
        questionelement.innerHTML=` Wow! you scored ${score} out of ${questions.length}!`;
    }
    else{
        questionelement.innerHTML=` well try! you scored ${score} out of ${questions.length}!`;
    }
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
}
function handlnextbutton()
{
    curr_quesindex++;
    if(curr_quesindex<questions.length)
    {
        showques();
    }
    else
    {
        showscore();

    }
}
nextbutton.addEventListener("click",()=>
{
    if(curr_quesindex<questions.length)
    {
        handlnextbutton();
    }
    else
     {
        startquiz();
     }
})
startquiz();

