Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'    
    });
}
 
console.log('ML5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded)

function modelLoaded()
{
    console.log('Model Loaded');
}

function speak()
{
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is " + Prediction_1;
    speak_data_2 = "The second prediction is " + Prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);    
}