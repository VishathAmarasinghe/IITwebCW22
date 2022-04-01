
// Eventlistners for the photo clicking.
document.getElementById("Img4").addEventListener("click",function(){fulldetails("images/bimsara2.png",3)});
document.getElementById("Img3").addEventListener("click",function(){fulldetails("images/Hasikalaphoto.jpg",2)});
document.getElementById("Img2").addEventListener("click",function(){fulldetails("images/Malith.jpg",1)});
document.getElementById("Img1").addEventListener("click",function(){fulldetails("images/vishathphoto.jpg",0)});

document.getElementById("backarrow").addEventListener("click",backingtoMain);
document.getElementById("memb4dec").addEventListener("click",fulldetails);

function fulldetails(pic,detailnum){

    // show additional details of team members.
    document.getElementById("people").classList.remove("hide");
    document.getElementById("imagecontainer").classList.add("hide");
    document.getElementById("pic1").src=pic;
    document.getElementById("LongDisc").innerHTML=discriptionlist[detailnum];
}

function backingtoMain(){
    // go back to the main about us page
    document.getElementById("people").classList.add("hide");
    document.getElementById("imagecontainer").classList.remove("hide");
    

}
// long description details.
const discriptionlist=["Hello, I’m Vishath Amarasinghe. I’m an undergraduate at IIT. I’m passionate about Web development, Python programming, and digital marketing.",
                        "Hello, I’m Malith Amarawikrama. I’m an undergraduate at IIT. I’m passionate about Mobile development, javascript programming, and digital marketing.",
                        "Hello, I’m Hasikala Hettiarachchi. I’m an undergraduate at IIT. I’m passionate about Web development, programming, and digital marketing.",
                        "Hello, I’m Bimsara Rathnayaka. I’m an undergraduate at IIT. I’m passionate about DevOps, Java programming, and digital marketing."]
                        


// Rolling the ball

window.onscroll=function(){rolling()};
function rolling(){
    console.log("rolling");
    if ((document.body.scrollTop>40 || document.documentElement.scrollTop>40)) {
        document.getElementById("ball").classList.remove("bolling2")
        document.getElementById("ball").classList.add("bolling");
        

       

    }else{
        document.getElementById("ball").classList.remove("bolling");
    }
    if (document.body.scrollTop>100 || document.documentElement.scrollTop>100) {
        document.getElementById("scroll").style.display="block";
    }else{
        document.getElementById("scroll").style.display="none";
    }
    

  
}

// bouncing the ball.

function loadinganimation() {
    document.getElementById("ball").classList.add("bolling2")
}
