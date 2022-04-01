function getSelectedText( selectList ) {
    return selectList.options[ selectList.selectedIndex ].text;
}

let nameTest, emailTest, subjectTest, messageTest
let nameValue, emailValue, subjectValue, messageValue

//let queryForm = document.getElementById("this.form");
//let fullName = queryForm.fname.value;
//let email = document.getElementById("email").value;
//let subject = getSelectedText(document.getElementById("subjectlist").value);
//let textArea = document.getElementById("t-area").value;


function checkDetails(form1) {
    if (form1.fname.value == "") {                        
        alert( "You have not entered the name" );
        nameTest=0;
    } else {
        nameValue = form1.fname.value;
        nameTest=1;
    } 

    if (form1.email.value == "") {
        alert( "Email cannot be empty" );
        emailTest=0;
    } else if (!isEmail(form1.email.value)) {
        alert("is not a valid email");
        emailTest=0;
    }else{
        emailValue = form1.email.value;
        emailTest=1;
    }

    if (getSelectedText(form1.subject)=="Subject *"){
        alert( "Please select the subject" );
        subjectTest=0;
    }
    else {
        subjectValue = getSelectedText(form1.subject);
        subjectTest=1;
    }

    if (form1.textarea.value == "") {
        alert( "You have not entered your query." );
        messageTest=0;
    } else {
        messageValue = form1.textarea.value;
        messageTest=1;
    } 

    document.getElementById("viewForm").addEventListener("click", ()=>{
    checkDetails(this.form);
})

    if (nameTest==1 && emailTest==1 && subjectTest==1 && messageTest==1){
        alert("Done");
        document.querySelector(".query-row").style.display = "none";
        document.querySelector(".confirmationForm").style.display = "flex";
        fillConfirmationForm ();
        return true;
    }
}


                                                    
let editForm = document.getElementById("editForm");
let sendForm = document.getElementById("sendForm");

                



function fillConfirmationForm (){
    document.getElementById("showName").innerHTML=(nameValue);
    document.getElementById("showEmail").innerHTML=(emailValue);
    document.getElementById("showCategory").innerHTML=(subjectValue);
    document.getElementById("showMessage").innerHTML=(messageValue);

}

function isEmail(Email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}


editForm.addEventListener("click", editDetails);

function editDetails (){
    let answer = confirm( "Are you sure you want to edit?" );
    if ( answer == true ) {
        document.querySelector(".confirmationForm").style.display = "none";
        document.querySelector(".query-row").style.display = "flex";            
    }
}

sendForm.addEventListener("click", submitForm);

function submitForm(){
    window.open("mailto:malith.20210353@iit.ac.lk?subject=Test%20Email&body=Full%20Name:%20"+nameValue+"%0BEmail:%20"+emailValue+"%0BSubject:%20"+subjectValue+"%0BMessage:%20"+messageValue);
    alert("Done");
}

//viewForm.addEventListener("click", checkDetails);