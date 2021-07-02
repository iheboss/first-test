

const respond=["It is certain","It is decidedly so","Without a doubt","Yes - definitely","You may rely on it","As I see it, yes","Most likely","Outlook good","Yes","Signs point to yes","Reply hazy, try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"]
function shakeBall()
 {
    
    console.log( "The ball has shaken!")

     return "The ball has shaken!"
     



 }

let answer= respond [Math.floor(Math.random() * 20) + 1]


function checkAnswer(answer) 
{
    
    let i=0;
while(respond[i]!=answer)
{
    i++;
}
     if(i<5)
     {
         return "very positive"
     }
     else  if(i<10)
     {
         return "positive"
     }
    else if(i<15)
     {
         return "negative"
     }
     else
     {
         return "very negative"
     }
}

/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function() {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();
