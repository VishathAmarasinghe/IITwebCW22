

function start(){
    // opening Quiz regulation div
    document.getElementById("StartingWEB").style.display="none";
    document.getElementById("Quiz").classList.remove("hide");


}
function openQuiz(){
    // opening the Quiz after checking the username
    participantName=validatingParticipant();


}


    let clickForNextQ=document.getElementById("nextBTN");
    clickForNextQ.addEventListener("click",changeQ);
    clickForNextQ.addEventListener("click",getRadioValue);


function uncheckradio(){
    // Uncheck all the radio buttons after submiting one question.
    document.getElementById("QA").checked=false;
    document.getElementById("QB").checked=false;
    document.getElementById("QC").checked=false;
    document.getElementById("QD").checked=false;
}

// array of All Questions and Answers.
const QuestionArray=[[" The penalty area is usually how far away from the touchline?","18 yards","15 yards","22 yards","4 yards","A"],
        [" What color cards do the referees carry in a football match?","Red and Yellow","Black and white","Red and Green","Yellow and orange","A"],
        [" What is the usual length of time allowed for the half-time interval in a football match?","10 minute","15 minutes","1 hour","25 minutes","B"],
        [" How many penalties are usually taken in a penalty shoot-out?","1","5","3","12","B"],
        [" How many minutes are usually played in a football match?","30","45","90","200","C"],
        [" Which animal is also a derogatory term used to describe a slow and/or uncreative player?","Monkey","Pony","Donkey","Slug","C"],
        [" Real Madrid plays football in which European country?","Germany","Scotland","Spain","Italy","C"],
        [" A spot-kick is taken from where?","The Centre spot","The Penalty spot","The ink spot","On the spot","B"],
        [" Which of the following dead balls situations can you be offside from?","Corner kick","Free kick","Throw-in","Kick off","B"],
        [" Which of the following is another term for a winger?","Flanker","Line-Backer","Fly-Half","Flapper","A"]];

        let Answerlist=["A","A","B","B","C","C","C","B","B","A"];



        var questionLoading_Count=0;
        var timestopper=0;
        function changeQ(){
            // Question Changing Function.
            if (questionLoading_Count<=QuestionArray.length){

                if (questionLoading_Count===QuestionArray.length) {
                    questionLoading_Count=questionLoading_Count+1;
                    let nextbtnWork=document.getElementById("nextBTN");
                    timestopper++;
                    clickForNextQ.removeEventListener("mouseover",getRadioValue);
                    clickForNextQ.removeEventListener("mouseover",changeQ);
                    nextbtnWork.addEventListener("click",getRadioValue);
                    


                }else{
                    document.getElementById("Questionlist").innerHTML=QuestionArray[questionLoading_Count][0];
                    document.getElementById("checkA").innerHTML=QuestionArray[questionLoading_Count][1];
                    document.getElementById("checkB").innerHTML=QuestionArray[questionLoading_Count][2];
                    document.getElementById("checkC").innerHTML=QuestionArray[questionLoading_Count][3];
                    document.getElementById("checkD").innerHTML=QuestionArray[questionLoading_Count][4];

                    document.getElementById("QuestionCount").innerHTML=(questionLoading_Count+1)+" out of 10 Questions";
                    if (questionLoading_Count+1==10) {
                        document.getElementById("nextBTN").innerHTML="Submit";

                        }
                        questionLoading_Count=questionLoading_Count+1;
                    }
        }


        }

        var blankANS=[];
        let blankindex=0;
        let correctionArray=[];
        let indexCount=0;
        var resultList=[];
        var results=0;
        function getRadioValue(){
            // get radio value from radioBTN_Ids.
            let RadioBTN_Ids=["QA","QB","QC","QD"];

            console.log(questionLoading_Count);
            for (let index = 0; index < RadioBTN_Ids.length; index++) {
                // Looping through RadioB
                if (document.getElementById(RadioBTN_Ids[index]).checked) {

                    let radiobutttonValue=document.getElementById(RadioBTN_Ids[index]).value;
                    

                    if (QuestionArray[questionLoading_Count-2][5]==radiobutttonValue){ 
                        correctionArray[indexCount]=radiobutttonValue;
                        indexCount=indexCount+1;
                        results=results+2;
                        uncheckradio(); //Uncheck all radio buttons.
                    }
                    else{
                        correctionArray[indexCount]=radiobutttonValue;
                        indexCount=indexCount+1;
                        results=results-1;
                        uncheckradio();
                    }
                }else{
                    blankANS[blankindex]="N";
                    blankindex=blankindex+1;
                    
                }
            }
            if (blankANS.length==4) {
                correctionArray[indexCount]="Not Provided";
                blankANS=[];
                blankindex=0;
                indexCount=indexCount+1;
            }else{
                blankANS=[];
                blankindex=0;
            }
            if (results<0) {
                results=0;
            }
            resultList=countingAns();//this will return array with no of correct answers,No of wrong answer,No of not provided answers.
    }

    document.getElementById("reviewBTN").addEventListener("click",reviewpage);
 
var countingTime=0;
var takentime=60;
function timelap(){
    // time calculating function.
    var startsec=60;
        
         let intervals=setInterval(() => {

            var timegap=startsec-countingTime;
            document.getElementById("timeWrite").innerHTML="Time Duration: "+timegap+" Seconds";
            if (timegap<=10) {
                document.getElementById("timeWrite").style.color="red";

            }
            if (timegap==0) { // when time is over this condition fill become true.
                clearInterval(intervals);
                checkNotAnswersOnes();
                resultList=countingAns();
                resultpageload();
                viewReview();
                takentime=60;

            }
            
            if (timestopper>0) {
                takentime=60-timegap;
                resultpageload();
               clearInterval(intervals);
           }
           countingTime=countingTime+1;
            

        }, 1000);

    }

    function resultpageload(){
        // result Page  load and Question page disapear.
        document.getElementById("Questions").classList.add("hide");
        document.getElementById("resulting").classList.remove("hide");
        selectbadge(results);
    }

    function selectbadge(score){
        // selectinf suitable badge according to the marks scored and display marks.
        // change the background color according to the marks.
        document.getElementById("score").innerHTML="You Scored "+score+"/20";
       
        document.getElementById("timedisplay").innerHTML="Time Elapsed: "+takentime+" Seconds";
        if (score<=20 && score>=16) {
            document.body.style.backgroundColor="#FFD23F";
        }else if(score<16 && score>=12){
            document.body.style.backgroundColor="#C0C0C0";
            document.getElementById("medal").src="images/Silverbadge.png";
        }else if(score<12 && score>=8){
            document.body.style.backgroundColor="#E58F39";
            document.getElementById("medal").src="images/Bronzebadge.png";
        }else{
            document.body.style.backgroundColor="#F1A7A7";
            document.getElementById("congrats").innerHTML="Never Give Up, Try Again!";
            document.getElementById("medal").src="images/Award33.png";
        }
    }


    function reviewpage(){
        // open the review page and disapear the result page
        document.getElementById("resulting").classList.add("hide");
        document.getElementById("reviewPG").classList.remove("hide");
        overalldata();
        viewReview();
    }
    var viewround=0;
    function viewReview(){
    //   changing questions when next and previous button clicks.
        console.log("aople");

        if ((0<=viewround && viewround<=9) && (0<viewround+1 && viewround<=9) ) {
            const upperIDS=["Q1","numA","numB","numC","numD","correct1"];
            const constantvalues=["1","A: ","B: ","C: ","D: ","Correct Answer: "];
            constantvalues[0]=viewround+1;
            for (let i = 0; i < upperIDS.length; i++) {
                document.getElementById(upperIDS[i]).innerHTML=constantvalues[i]+QuestionArray[viewround][i];

            }
            selectingCorrectSign(marksignArray,viewround,1);
            document.getElementById("pAns1").innerHTML="Your Answer: "+correctionArray[viewround];
            const lowerIDS=["Q2","numE","numF","numG","numH","correct2"];
            constantvalues[0]=viewround+2;
            for (let i = 0; i < lowerIDS.length; i++) {
                document.getElementById(lowerIDS[i]).innerHTML=constantvalues[i]+QuestionArray[viewround+1][i];

            }
            selectingCorrectSign(marksignArray,viewround+1,2);
            document.getElementById("pAns2").innerHTML="Your Answer: "+correctionArray[viewround+1];
            document.getElementById("previousQ").addEventListener("click",previouBTNclicks);
            document.getElementById("nextQ").addEventListener("click",nextBTNcliks);
            


        }else if(viewround<0){
            viewround=0;
        }else if(viewround>9){
            viewround=8;
        }
    }
function nextBTNcliks(){
    viewround=viewround+2;
    viewReview();
}
function previouBTNclicks(){
    viewround=viewround-2;
    viewReview();
}
function overalldata(){
    // load overall data such as User name, Score , number of currect answers etc.
    document.getElementById("nameprint").innerHTML="Name: "+participantName;
    document.getElementById("Scorep").innerHTML="Score: "+results+"/20";
    document.getElementById("correctp").innerHTML="Total Number of Correct Answers: "+resultList[0];
    document.getElementById("wrongp").innerHTML="Total Number of Wrong Answers: "+resultList[1];
    document.getElementById("timedisplayReview").innerHTML="Time Elapsed: "+takentime+" Seconds";
}

function validatingParticipant(){
    // validating paticipant , check if he enter the name or not.
    let pname=document.forms["participant"]["participantName"].value;
    if (pname=="") {
        alert("Please enter Name to start");
    }else{
        changeLoading();


    }
    return pname;
}

const marksignArray=[];
function countingAns(){
    // this function count all answers and return array of no of correct answers,wrong answers.
    correctcount=0;
    notProvidecount=0;
    wrongAns=0;
    for (let j = 0; j < Answerlist.length; j++) {
        if (correctionArray[j]==Answerlist[j]) {
            correctcount++;
            marksignArray[j]="c";
        }else if (correctionArray[j]=="Not Provided" ) {
            notProvidecount++;
            marksignArray[j]="n";
        }else{
            wrongAns++;
            marksignArray[j]="w";
        }


    }
    console.log(marksignArray);
    return [correctcount,wrongAns,notProvidecount];
}
function selectingCorrectSign(array,number,loopNo) {
    // selecting correct sign(tick mark and wrong mark and punctuation mark.)
    if (loopNo==1) {
        if (array[number]=="c") {
            document.getElementById("sign1").src="images/correct.png";
        }else if (array[number]=="w") {
            document.getElementById("sign1").src="images/Wrong.png";
        }else{
            document.getElementById("sign1").src="images/Questionmark.png";
        }
    }else{
        if (array[number]=="c") {
            document.getElementById("sign2").src="images/correct.png";
        }else if (array[number]=="w") {
            document.getElementById("sign2").src="images/Wrong.png";
        }else{
            document.getElementById("sign2").src="images/Questionmark.png";
        }
    }
}


function checkNotAnswersOnes(){
    //  When user not answed any question and time out it will check answers and process.
    for (let k = 0; k < 10; k++) {
        if (correctionArray[k]==undefined) {
            correctionArray[k]="Not Provided";
        }
        
    }
    if (correctionArray.length==0) {
        for (let i = 0; i < 10; i++) {
            correctionArray[i]="Not Provided";
            
        }       
    }

}


function changeLoading(){
    // function that shows loading icon.
    var times;
    var counttt=0;
    let startloop=window.setInterval(()=>{
        startToQuizload();
        times=1-counttt;


        if (times<0) {
            clearInterval(startloop);
            loadingToQuestions();
        }

        counttt=counttt+1;

    },1000);

}

function startToQuizload(){
    document.getElementById("load").classList.remove("hide");
    document.getElementById("Quiz").classList.add("hide");
}

function loadingToQuestions(){
    document.getElementById("load").classList.add("hide");
    document.getElementById("Questions").classList.remove("hide");
    timelap();
}

document.getElementById("ReviewToResult").addEventListener("click",ReviewToResultswap)
function ReviewToResultswap() {
    document.getElementById("resulting").classList.remove("hide");
    document.getElementById("reviewPG").classList.add("hide");
}