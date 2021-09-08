Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("webcam_output");

Webcam.attach("#webcam_output");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("display_image").innerHTML="<img id='img' src='"+data_uri+"'>";
    })
}
console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/S9vHhZvqq/model.json", model_loaded);



function model_loaded()
{
    console.log("model_loaded");
}

function identify_image()
{
    img=document.getElementById("img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("display_object").innerHTML=results[0].label;
        document.getElementById("display_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}