//Challenge 1
function age()
{
var birthYear=prompt("enter Your Birth Year");
var ageInDays=(2020-birthYear)*365;
//alert(ageInDays);
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('You are '+ageInDays+ ' days old');
h1.setAttribute('id','age');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}
//challenge 2
function generateShivam(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-shivam');
    image.src="static/Dindayal_MNNIT.jpg"
    image.height="200";
    image.width="150";
    div.appendChild(image);
}
//challenge 3
function rpsGame(yourChoice){
    //console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numToChoice(randInt());
    results=decideWinner(humanChoice,botChoice);
    message = finalMessage(results);//you won ,you lost
    //console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
   // alert(yourChoice.id);
}

function randInt(){
    return Math.floor(Math.random()*3);
}

function numToChoice(num)
{
   return ['rock','paper','sci'][num];
}

function decideWinner(yourChoice,botChoice)
{
    var rpsDatabase={
        'rock':{'sci':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'sci':0},
        'sci':{'paper':1,'sci':0.5,'rock':0},
    }

    var yourScore=rpsDatabase[yourChoice][botChoice];
    var botScore=rpsDatabase[botChoice][yourChoice];
    return [yourScore,botScore];

}

function finalMessage([yourScore,botScore])
{
    if(yourScore===0)
    {
        return {'message':'you lost!','color':'red'};
    }  

    else if(yourScore===0.5)
    {
        return {'message':'you tied!','color':'yellow'};
    }
    else{
        return {'message':'you won!','color':'green'};
    }
}

function rpsFrontEnd(yourChoice,botChoice,message){
    var  imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'sci':document.getElementById('sci').src
    }
    //alert(imagesDatabase[yourChoice]);
    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('sci').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messgDiv=document.createElement('div');

    //modification
    var retry=document.createElement('div');
    retry.innerHTML="<div class='container-3' id='rett'><button class='btn btn-success id='rett' onclick='retry()'>Retry</button></div>"
    //retry.innerHTML ="<button class='btn btn-success id='rett' onclick='retry()'>Retry</button>";

    humanDiv.innerHTML ="<img src='" + imagesDatabase[yourChoice] + "' style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    messgDiv.innerHTML ="<h1 style='color: " + message['color'] + ";font-size: 60px; padding:30px; '>" + message['message'] + "</h1>"
    botDiv.innerHTML ="<img src='" + imagesDatabase[botChoice] + "' style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messgDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('cont-3').appendChild(retry);
    
}

function retry()
{
    if(document.getElementById('rett'))
    document.getElementById('rett').remove();

    if(document.getElementById('try'))
    document.getElementById('try').remove();

    if(document.getElementById('flex-box-rps-div'))
    document.getElementById('flex-box-rps-div').remove();
    if(document.getElementById('rett'))
    document.getElementById('rett').remove();
    var gamediv=document.createElement('div');
   
    gamediv.innerHTML="<div class=flex-box-rps id='flex-box-rps-div'><img id='rock' src='static/rock.png' alt='' onclick='rpsGame(this)'><img id='paper' src='static/paper.png' alt='' onclick='rpsGame(this)'><img id='sci' src='static/scisor.png' alt='' onclick='rpsGame(this)'></div>"
    document.getElementById('cont-3').appendChild(gamediv);
}

//Challenge 4
 
var all_buttons=document.getElementsByTagName('button');
//console.log(all_buttons);
var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++ ){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
//console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
   if(buttonThingy.value==='red')
   buttonRed();
   else if(buttonThingy.value==='green')
   buttonGreen();
   else if(buttonThingy.value==='reset')
   buttonReset();
   else if(buttonThingy.value==='random')
   buttonRandom();
}

function buttonRed()
{
    for (let i=0; i < all_buttons.length; i++ )
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');    
    }
}

function buttonGreen()
{
    for (let i=0; i < all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');    
}
}

function buttonReset()
{
    for (let i=0; i < all_buttons.length; i++ ){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);    
}
}

function buttonRandom()
{
    let choices =['btn-primary','btn-success','btn-danger','btn-warning'];
    for (let i=0; i < all_buttons.length; i++ ){
    
        let ind=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[ind]);    
}
}

//challenge-5
let bjGame = {
    'you': {'scoreSpan': '#your-bj-result','div': '#your-box','score': 0},
    'dealer': {'scoreSpan': '#dealer-bj-result','div': '#dealer-box','score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
};

const YOU=bjGame['you'];
const DEALER=bjGame['dealer'];
const hitSound=new Audio('static/sounds/swish.m4a');
const winSound=new Audio('static/sounds/cash.mp3');
const lossSound=new Audio('static/sounds/aww.mp3');
//console.log('hi');
document.querySelector('#bj-hit-btn').addEventListener('click',bjHit);
document.querySelector('#bj-stand-btn').addEventListener('click',dealerLogic);
document.querySelector('#bj-deal-btn').addEventListener('click',bjDeal);

function bjHit()
{
    if(bjGame['isStand']==false)
    {
   let card=randomCard();
   showCard(YOU,card);
   updateScore(card,YOU);
   showScore(YOU);
    }
}

function showCard(activePlayer,card)
{
    if(activePlayer['score']<=21)
    {
    let cardImage=document.createElement('img');
    cardImage.src=`static/images/${card}.png`;//use of backtick //before 1
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
   // updateScore();
   // showScore(activePlayer);
    }
}

function bjDeal(){
 
    bjGame['isStand']=false;
    bjGame['turnsOver']=false;
    //showResult(computeWinner());
    let yourImages=document.querySelector('#your-box').querySelectorAll('img');
    for(let i=0;i<yourImages.length;i++)
    {
        yourImages[i].remove();
    }
    let dealerImages=document.querySelector('#dealer-box').querySelectorAll('img');
    for(let i=0;i<dealerImages.length;i++)
    {
        dealerImages[i].remove();
    }
    YOU['score']=0;
    DEALER['score']=0;

    document.querySelector(YOU['scoreSpan']).textContent=0;
    document.querySelector(DEALER['scoreSpan']).textContent=0;
    document.querySelector(YOU['scoreSpan']).style.color='white';
    document.querySelector(DEALER['scoreSpan']).style.color='white';
    document.querySelector('#bj-result').textContent="let's play!";
    document.querySelector('#bj-result').style.color='black';
}



function randomCard()
{
    let randomIndex=Math.floor(Math.random()*13);
    return bjGame['cards'][randomIndex];
}
function updateScore(card,activePlayer)
{
    if(card==='A')
    {
        if(activePlayer['score']+11<=21)
        {
            activePlayer['score']+=11;
        }

        else
        activePlayer['score']+=1;
    }
    else
    activePlayer['score']+=bjGame['cardsMap'][card];

}
function showScore(activePlayer)
{
    if(activePlayer['score']>21)
    {
        document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color='red';

    }
    else
    document.querySelector(activePlayer['scoreSpan']).textContent=activePlayer['score'];
}

function dealerLogic(){
    if(bjGame['turnsOver']==false)
    {
    bjGame['isStand']=true;
    while(1)
    {
    let card=randomCard();
    showCard(DEALER,card);
    updateScore(card,DEALER);
    showScore(DEALER);

    if(DEALER['score']>15)
    {
        showResult(computeWinner());
        break;
    }
    }
    }
}

function computeWinner()
{
    let winner;
    if(YOU['score']<=21&&DEALER['score']<=21)
    {
       if(YOU['score']>DEALER['score'])
       winner=YOU;
       else if(YOU['score']==DEALER['score']);

       else
       winner=DEALER;
    }
    else if(YOU['score']<=21&&DEALER['score']>=21)
    {
       winner=YOU;
    }
    else if(YOU['score']>=21&&DEALER['score']<=21)
    {
       winner=DEALER;
    }
    else{};
    

     //console.log(winner);
    return winner;
}

function showResult(winner)
{
    bjGame['turnsOver']=true;
   let msg,msgColor;
   if(winner===YOU)
   {
       msg='You won!';
       msgColor='green';
       winSound.play();
       bjGame['wins']++;
   }

   else if(winner===DEALER)
   {
       msg='You lost!';
       msgColor='red';
       lossSound.play();
       bjGame['losses']++;
   }

   else
   {
   
     msg='You drew!';
     msgColor='black';
     bjGame['draws']++;
    
   }

   document.querySelector('#bj-result').textContent=msg;
   document.querySelector('#bj-result').style.color=msgColor;
   document.querySelector('#wins').textContent=bjGame['wins'];
   document.querySelector('#losses').textContent=bjGame['losses'];
   document.querySelector('#draws').textContent=bjGame['draws'];
}