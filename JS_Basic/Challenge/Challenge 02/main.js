var scoreJohn = (89+120+103)/3;
var scoreMark = (89+120+103)/3;//(116+94+123)/3;
var scoreMary = (89+120+103)/3;//(97+134+105)/3;

console.log("Average Score of John ", scoreJohn);
console.log("Average Score of Mark ", scoreMark);
console.log("Average Score of Mary ", scoreMary);

if(((scoreJohn > scoreMark && scoreJohn > scoreMary) || (scoreMark > scoreJohn && scoreMark > scoreMary) || (scoreMary > scoreJohn && scoreMary > scoreMark)) || ((scoreJohn === scoreMark) || (scoreJohn === scoreMary) || (scoreMark === scoreMary)) || (scoreJohn === scoreMark && scoreMark === scoreMary))
{
    if((scoreJohn > scoreMark && scoreJohn > scoreMary) || (scoreMark > scoreJohn && scoreMark > scoreMary) || (scoreMary > scoreJohn && scoreMary > scoreMark))
    {
        if(scoreJohn > scoreMark && scoreJohn > scoreMary)
        {
            console.log("John's team has a highest score: ", pointJohn);
        }
        else if(scoreMark > scoreJohn && scoreMark > scoreMary)
        {
            console.log("Mark's team has a highest score: ", scoreMark);
        }
        else 
        {
            console.log("Mary's team has a highest score: ", scoreMary);
        }
    }

        
    else if(scoreJohn === scoreMark && scoreMark === scoreMary)
    {
        console.log("It's a draw", scoreJohn);
    }

    else if((scoreJohn === scoreMark) || (scoreJohn === scoreMary) || (scoreMark === scoreMary))
    {
        if (scoreJohn === scoreMark)
        {   
            console.log("John's team and Mark's team are draw with score: ", scoreJohn);
        }
        else if(scoreJohn === scoreMary)
        {
            console.log("John's team and Mary's team are draw with score: ", scoreJohn);
        }
        else 
        {
            console.log("Mark's team and Mary's team are draw with score: ", scoreMark);
        }
    }
}


