var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();


function Start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
}
function speak(){
    synth=window.speechSynthesis;
    speekdata="taking selfie in 5 seconds"
    utterthis=new SpeechSynthesisUtterance(speekdata);
    synth.speak(utterthis);
    setTimeout(function(){
        take_snapshot();
    save();
    },5000);


}
Webcam.set({
    width:360,
    height:250,
image_format:"jpeg",
jpeg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML="<img id='snapshot' src="+data_URI+">";
    })

}
function save(){
    link=document.getElementById("link");
    pic=document.getElementById("snapshot").src;
    link.href=pic;
    link.click();

}

