prediction_1 = ""
prediction_2 = ""
Webcam.set({
    height:300,
    width:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

console.log("ml5 Version :" + ml5.version);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>" 
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Tg92UsOOS/model.json', model_loaded)

function model_loaded(){
    console.log("Model Loaded!");
}
function predict(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotresult);
}

function gotresult(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name1") = results[0].label;
    document.getElementById("result_emotion_name2") = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    if(prediction_1 == agree){
        document.getElementById("update_emoji1").innerHTML = "&#128077;"
        synth = window.speachSynthesis;
        speak_data_1 = "ok it is agreed ";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    
    }
    if(prediction_1 == disagree){
        document.getElementById("update_emoji1").innerHTML = "&#128078;"
        synth = window.speachSynthesis;
        speak_data_1 = "no it is disagreed ";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_1 == okay){
        document.getElementById("update_emoji1").innerHTML = "&#128076;"
        synth = window.speachSynthesis;
        speak_data_1 = "Okay";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_1 == Victory){
        document.getElementById("update_emoji1").innerHTML = "&#128076;"
        synth = window.speachSynthesis;
        speak_data_1 = "all the best for your victory";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_1 == Victory){
        document.getElementById("update_emoji1").innerHTML = "&#128076;"
        synth = window.speachSynthesis;
        speak_data_1 = "all the best for your victory";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_1 == Calling){
        document.getElementById("update_emoji1").innerHTML = "&#129305;"
        synth = window.speachSynthesis;
        speak_data_1 = "Whom are you calling";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_1 == indication){
        document.getElementById("update_emoji1").innerHTML = "&#128072;"
        synth = window.speachSynthesis;
        speak_data_1 = "Indication";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_1 == punch){
        document.getElementById("update_emoji1").innerHTML = "&#128074;"
        synth = window.speachSynthesis;
        speak_data_1 = "punching punching";
        var utterThis = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis);
    }
    if(prediction_2 == agree){
        document.getElementById("update_emoji2").innerHTML = "&#128077;"
    }
    if(prediction_2 == disagree){
        document.getElementById("update_emoji2").innerHTML = "&#128078;"
    }
    if(prediction_2 == okay){
        document.getElementById("update_emoji2").innerHTML = "&#128076;"
    }
    if(prediction_2 == Victory){
        document.getElementById("update_emoji2").innerHTML = "&#128076;"
    if(prediction_2 == Victory){
        document.getElementById("update_emoji2").innerHTML = "&#128076;"
    }
    if(prediction_2 == Calling){
        document.getElementById("update_emoji2").innerHTML = "&#129305;"
    }
    if(prediction_2 == indication){
        document.getElementById("update_emoji2").innerHTML = "&#128072;"
    }
    if(prediction_2 == punch){
        document.getElementById("update_emoji2").innerHTML = "&#128074;"
    }
 }
}

