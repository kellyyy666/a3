let dataServer;
let pubKey = "pub-c-f7e4ffd6-e9bc-4c70-9fb8-4a120d50d91e";
let subKey = "sub-c-1d418a72-3059-49cd-81cb-f2be471ebb2c";
let secretKey = "sec-c-MjA3NzE3NWUtZDEyMC00NzY4LTg3MGQtZTE4NGY1NjIwN2I4";

let channelName = "NFCs"; // we don't define this right away!

let you;


let message; // message we use to send to pubnub

let noParams = false;

var url = new URL(window.location.href);
let NFC1 = url.searchParams.get("NFC1");
let NFC2 = url.searchParams.get("NFC2");
let NFC3 = url.searchParams.get("NFC3");
let NFC4 = url.searchParams.get("NFC4");
let NFC5 = url.searchParams.get("NFC5");
let NFC6 = url.searchParams.get("NFC6");

console.log("NFC TAG 1 = " + NFC1);
console.log("NFC TAG 2 = " + NFC2);
console.log("NFC TAG 3 = " + NFC3);
console.log("NFC TAG 4 = " + NFC4);
console.log("NFC TAG 5 = " + NFC5);
console.log("NFC TAG 6 = " + NFC6);

if (NFC1 != null) {

  message = NFC1;
} else if (NFC2 != null) {
  message = NFC2;
} else if (NFC3 != null){
  message = NFC3;
} else if (NFC4 != null){
  message = NFC4;
}else if (NFC5 != null){
  message = NFC5;
}else if (NFC6 != null){
  message = NFC6;
}else {
  noParams = true;
}

console.log("message = " + message);


function preload() { 

  // logic to create a random UUID
    you = random(0,1000000); 
    console.log("you - Before init", you);
    you = int(you);
    console.log("you - After init", you);
    you = you.toString();
}


function setup() {

    createCanvas(windowWidth, windowHeight);

    dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: you,
      secretKey: secretKey,
      heartbeatInterval: 0,
    });

     // listen for messages coming through the subcription feed on this specific channel. 

    dataServer.subscribe({ channels: [channelName] });
    dataServer.addListener({ message: readIncoming });
   
    textAlign(CENTER);
    textSize(60);
    if (noParams == false) {
      sendTheMessage();
      fetchMessages();
    } else {
      console.log("noParam is true");
      fetchMessages();
      noStroke();
      fill(255, 127, 80);
      text("AA (NFC1)", windowWidth*0.15, windowHeight/3);
      text("2018july 6th, sunday.",windowWidth*0.15,windowHeight/3.5);
      text("Wenting shcool and sign up become member of school.",windowWidth*0.15,windowHeight/4.5);
      fill(255, 99, 71);
      text("HL (NFC2)", windowWidth*0.55, windowHeight/3);
      text("2019,Dec,19th.coludy day. ",windowWidth*0.55,windowHeight*0.56);
      text("Big term of exam in the center room,there are 100 questions totally(Really huge work).",windowWidth*0.55, windowHeight*0.45)
      fill(237, 145, 33);
      text("P (NF3)", windowWidth*0.85, windowHeight/3);
      text("2019,Dec,12th.Sunnyday",windowWidth*0.85,windowHeight/5.5);
      text("Got lost in the parking lot for three hours on the way to the gym.",windowWidth*0.85,windowHeight/8.5);
      fill(8, 46, 84);
      text("STC  (NFC4)", windowWidth*0.15,windowHeight/1.5);
      text("2018,august,sunnyday",windowWidth*0.15,windowHeight*0.76);
      text("Meet my university best friend-Jessy",windowWidth*0.15,windowHeight*0.80);
      fill(218, 112, 214);
      text("HW (NFC5)", windowWidth*0.55, windowHeight/1.5);
      text("2022,November,11th.cloudy day",windowWidth*0.55, windowHeight*0.76);
      text("First place arrive after i comeback to school after covied-19", windowWidth*0.55,windowHeight*0.90);
      fill(138, 43, 226);
      text("FL (NFC6)", windowWidth*0.85, windowHeight/1.5);
      text("2022,Feb,16th,rainny day", windowWidth*0.85, windowHeight*0.76);
      text("Created the cardboard sculpture Shoulder Bag - the first sculpture award in my life.", windowWidth*0.65,windowHeight*0.97);

    }
    
}
  
function draw() {

  
}
/*
function mousePressed() {

fetchMessages();


}
*/
function fetchMessages() {

console.log("fetching");

  dataServer.fetchMessages(
    {
        channels: [channelName],
        end: '15343325004275466',
        count: 100
    },
    (status, response) => {
      console.log("fetchMessages status is:",status);
   //  console.log(response);
      drawMessages(response.channels.NFCs);
    }
  );
   
}

function drawMessages(messageHistory) {

  console.log("in draw messages");

  console.log("messageHistory:", messageHistory);

  /**OP STARTS EDIT HERE*/

  if (noParams === false) { // if we are accessing the page from the NFC...

      if (message === "AA") {
        for (let i = 0; i < messageHistory.length; i++) {
          if (messageHistory[i].message === "AA") {

            fill(255, 127, 80);
            ellipse(random(50, (windowWidth/2) - 50), random(50, windowHeight - 50), 50)

      
          } 
        }
      } else if (message == "HL") {
        for (let i = 0; i < messageHistory.length; i++) {
          if (messageHistory[i].message === "HL") {            
            fill(255, 99, 71);
            ellipse(random(50 + windowWidth/2, windowWidth - 50), random(50, windowHeight - 50), 50)
          } 
        }

      } else { // Jing Teng continue the If statements if this is correct with what you want to do!


      }


  } else {
/**OP EDITS END HERE */

  
  
  for (let i = 0; i < messageHistory.length; i++) {

    if (messageHistory[i].message === "AA") {

      fill(255, 127, 80);
      ellipse(random(50, (windowWidth/2) - 50), random(50, windowHeight - 50), 50)
      text("2018,first time arrving in the shcool")

    } else if ((messageHistory[i].message === "HL")) {
      
      fill(255, 99, 71);
      ellipse(random(50 + windowWidth/2, windowWidth - 50), random(50, windowHeight - 50), 50)

    } else if ((messageHistory[i].message === "P")){
      fill(237, 145, 33);
      ellipse(random(50+windowWidth/2, windowWidth-30),random(50,windowHeight - 50), 50)

    }else if ((messageHistory[i].message === "STC")){
      fill(8, 46, 84);
      ellipse(random(50+windowWidth/2, windowWidth-30),random(50,windowHeight - 50), 50)
    }else if ((messageHistory[i].message === "HW")){
      fill(218, 112, 214);
      ellipse(random(50+windowWidth/2, windowWidth-30),random(50,windowHeight - 50), 50)
    } else if ((messageHistory[i].message === "FL")){
      fill(138, 43, 226);
      ellipse(random(50+windowWidth/2, windowWidth-30),random(50,windowHeight - 50), 50)
    }
      console.log(messageHistory[i]);
      text(messageHistory[i].message.messageText, windowWidth/2, 100 * (i+1));

  }
}
}
  // PubNub logic below
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases
  
  dataServer.publish({
    channel: channelName,
    message: message,
  });

}

function readIncoming(inMessage) {
  console.log("readIncoming function inMessage: ", inMessage);
}
