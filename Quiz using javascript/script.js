"use strict"
//-------------------array creation for storing questions and answers with usage of objects---------------
const content=[
    {
        num:1,
    
        q:"Number of Data Types in java?",
        a:[{ans:8,iscorrect:true},{ans:6,iscorrect:false},{ans:3,iscorrect:false},{ans:7,iscorrect:false}],
    
},
{
    num:2,

    q:"is java fully object oriented?",
    a:[{ans:"yes",iscorrect:true},{ans:"no",iscorrect:true},{ans:"undetermine",iscorrect:false},{ans:"dont know",iscorrect:false}],

},
{
    num:3,

    q:"When an array is passed to a method, what does the method receive?",
    a:[{ans:"length of array",iscorrect:false},{ans:"A copy of array",iscorrect:false},{ans:"The reference of array",iscorrect:true},{ans:"Copy of first element",iscorrect:false}],

},
{
    num:4,

    q:"Arrays in java are-",
    a:[{ans:"Object",iscorrect:true},{ans:"Object reference",iscorrect:false},{ans:"primitive data types",iscorrect:false},{ans:"none",iscorrect:false}],

},
{
    num:5,

    q:"When is the object created with new keyword?",
    a:[{ans:"Run time",iscorrect:true},{ans:"compile time",iscorrect:false},{ans:"Depends on code",iscorrect:false},{ans:"none",iscorrect:false}],

},

]; 
let currQues=0;
let score=0;
//------------------function for loading questions and option from object----------------
function loadQuestion(){
    const question = document.getElementById("ques");
    const option= document.getElementById("opt");

    question.textContent=content[currQues].q;
    option.innerHTML="";

    for(let i=0;i<content[i].a.length;i++)
    {
        const createDivision=document.createElement("div");
        const choice=document.createElement("input");
        const choicelable=document.createElement("lable");

        choice.type="radio";
        choice.name="answer";
        choice.value=i;

        choicelable.textContent=content[currQues].a[i].ans;

        createDivision.appendChild(choice);
        createDivision.appendChild(choicelable);
        option.appendChild(createDivision);
        

    }
}
loadQuestion();
//------------------function for showing final score--------------
let loadScore=()=>
{
    let totalscore=document.getElementById("score");
    
    totalscore.textContent=("You have Scored "+score+" out of "+content.length+"    Thankyou!");
    userFeedback();
}
//----------------------function for navigating to next questions-------------
let nextQuestion=()=>
{
    if(currQues< content.length-1)
    {
        currQues++;
        loadQuestion();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
//---------------------function for checking correctness of answer and adding score--------
  let checkScore=()=>
  {
    let selectedans=parseInt(document.querySelector('input[name="answer"]:checked').value);
    if(content[currQues].a[selectedans].iscorrect)
    {
        score++;
        console.log("Hurray!!correct answer");
        nextQuestion();
    }
    else{
        console.log("Dont give up! wrong answer");
        nextQuestion();
    }
  } 
  
//----------getting feedback from user after completion of quiz---------  
function userFeedback()
{
    let fbk=prompt("Enter your valuable Feedback","feedback");
}

