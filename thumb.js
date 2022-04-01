//change thumbnail image
function changeThumb(num){
    var thumbimg = "Images/football" + num + ".jpg";
    document.getElementById("mainImg").src = thumbimg;
}

//change backgroung color
function changecolor(x){
    document.body.style.backgroundColor = x;
}

//change text color
function changeTxtColor(z){
    document.body.style.color = z;
    document.getElementById("header").style.color = "black";
}    


//for image description
const p1 = "<span>Football Boot</span><br><br><br>Football boots are a type of special shoes worn when playing football which has studs pointed at the bottom of the shoe to provide grip to the ground which is usefull when running and controlling the ball."    
const p2 = "<span>Football</span><br><br><br>A football ball is the most important object in the game. It's what players use to score goals and try to win the game. It's spherical in shape having a circumference of 68-70 cm and a weight of between 410-450 g."
const p3 = "<span>Football Team</span><br><br><br>A football team consist of 11 players including forwards, midfielders, defenders and a goalkeeper. Each player has different roles that contribute towards the game. Following is a picture of the Spanish national team that won the world cup in 2010."
const p4 = "<span>World Cup</span><br><br><br>Following is a picture of the FIFA World Cup which is the most prestigious title in football. It is played among nations around the world and the best team is awarded this price."
const p5 = "<span>Football Pitch</span><br><br><br>This is a picture of the stuctue of a football field which is the playing surface for the game of football. The lines in the field define key parts such as the centre spot, the penalty area and the halfway line."

function changeText(y){
    if (y == 1){
        document.getElementById("para").innerHTML = p1;
    }
    else if (y == 2){
        document.getElementById("para").innerHTML = p2; 
    }
    else if (y == 3){
        document.getElementById("para").innerHTML = p3; 
    }
    else if (y == 4){
        document.getElementById("para").innerHTML = p4; 
    }
    else if (y == 5){
        document.getElementById("para").innerHTML = p5; 
    }
}