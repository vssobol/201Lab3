'use strict';

var answers = [];

console.log("Oh, hi. You're not supposed to be here.\nGuess I'm your hint box now.");

var question = prompt('Would you like to play a quick guessing game?');
question = question.toLowerCase();

if(question === "yes" || question === "y"){

    var response;
    var score = 0;

    // question 1
    console.log("I'm bilingual and know how to speak Russian! But was it my first language? :thinking:");
    answers.q1 = prompt("Guess if: English is my first language.");
    answers.q1 = answers.q1.toLowerCase();
    if(answers.q1 === "yes" || answers.q1 === "y"){
        console.log("I learned Russian before I learned English.");
        response = alert("Incorrect. My first language is actually Russian!");
    } else if(answers.q1 === "no" || answers.q1 === "n"){
        console.log("My first language is Russian!");
        response = alert("Correct! My first language is actually Russian!");
        score++;
    } else{
        console.log("No response : (");
        response = alert("I asked you a question, please respond.");
    }
    
    // question 2
    console.log("Did you see that cute cat on this page? She's cute, right?");
    answers.q2 = prompt("Guess if: I have a cat named Lili.");
    answers.q2 = answers.q2.toLowerCase();
    if(answers.q2 === "yes" || answers.q2 === "y"){
        console.log("Please feel free to ask me for pictures of Lili!");
        response = alert("Correct! I use my cat, Lili, in my practice code so keep an eye out for her.");
        score++;
    } else if(answers.q2 === "no" || answers.q2 === "n"){
        console.log("It's not spelled as Lily, that would be my friends' cat.");
        response = alert("Incorrect. I use my cat, Lili, in my practice code so keep an eye out for her.");
    } else{
        console.log("No response : (");
        response = alert("I asked you a question, please respond.");
    }
    
    // question 3
    console.log("I tend to compare programming to rage games. They're both pretty frustrating at times.");
    answers.q3 = prompt("Guess if: Rage games are my favorite type of video games.");
    answers.q3 = answers.q3.toLowerCase();
    if(answers.q3 === "yes" || answers.q3 === "y"){
        console.log("I've beaten Getting Over It about 3 times now!");
        response = alert("Correct! I actually enjoy playing games like Cat Mario and Getting Over It.");
        score++;
    } else if(answers.q3 === "no" || answers.q3 === "n"){
        console.log("I don't think I'd be here programming if I weren't patient enough for rage games.");
        response = alert("Incorrect. I enjoy playing games like Cat Mario and Getting Over It by Bennett Foddy.");
    } else{
        console.log("No response : (");
        response = alert("I asked you a question, please respond.");
    }
    
    // question 4
    console.log("Photoshop costs HOW MUCH??");
    answers.q4 = prompt("Guess if: I use Photoshop as my art program of choice.");
    answers.q4 = answers.q4.toLowerCase();
    if(answers.q4 === "yes" || answers.q4 === "y"){
        console.log("Art is more of a hobby for me. I don't think I could justify $20 per month on an art program.");
        response = alert("Incorrect. I use GIMP as my art program of choice.");
    } else if(answers.q4 === "no" || answers.q4 === "n"){
        console.log("One of my favorite artists also uses GIMP! Check them out: deviantart.com/twarda8/gallery");
        response = alert("Correct! I use GIMP as my art program of choice.");
        score++;
    } else{
        console.log("No response : (");
        response = alert("I asked you a question, please respond.");
    }
    
    // question 5
    console.log("Ever played Zero Escape 999? That's where I first heard about Prosopagnosia.");
    answers.q5 = prompt("Guess if: I have a hard time interacting with others because of my face blindness.");
    answers.q5 = answers.q5.toLowerCase();
    if(answers.q5 === "yes" || answers.q5 === "y"){
        console.log("Is it that obvious? It could take me upwards of a year to remember someone's face. Sorry!");
        response = alert("Correct! I have Prosopagnosia, which is an inability to remember faces.");
        score++;
    } else if(answers.q5 === "no" || answers.q5 === "n"){
        console.log("Did I trick you? I really can't remember faces.");
        response = alert("Incorrect. I have Prosopagnosia, which is an inability to remember faces.");
    } else{
        console.log("No response : (");
        response = alert("I asked you a question, please respond.");
    }

    answers.push();

    document.write('<p id="answersTitle">',"Your Answers:",'</p>',

        '<p id="answers">' + "English is my first language. You responded with: " + answers.q1,'<br>','<br>'
        + "I have a cat named Lili. You responded with: " + answers.q2,'<br>','<br>'
        + "Rage games are my favorite type of video games. You responded with: " + answers.q3,'<br>','<br>'
        + "I use Photoshop as my art program of choice. You responded with: " + answers.q4,'<br>','<br>'
        + "I have a hard time interacting with others because of face blindness. You responded with: " + answers.q5,'</p>');

    document.write('<p id="answersTitle">',"You got " + score + "/5 right." ,'</p>');
    console.log("You got " + score + "/5 right. Hope you learned a bit about me in the process.");

    if(score === 5){
        document.write('<p id="answersTitle">',"Purrfect!!",'</p>');
    }


} else if(question === "no"){

    question = alert("Alright, maybe next time.");
    document.write('<p id="answersTitle">' + "Please refresh the page if you change your mind." + '</p>');

} else {

    question = alert("Sorry, I don't recognize that answer.");
    document.write('<p id="answersTitle">' + "Please refresh the page and reply with yes or no this time." + '</p>');

}

