Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90

})
camera= document.getElementById("camera")
Webcam.attach("#camera")
function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">'
});
}
console.log("ml5 version-",ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mT4u75LXa/model.json",model_loaded())
function model_loaded(){
    console.log("model_loaded")
}
function check(){
    amg= document.getElementById("captured_image")
    classifier.classify(amg,gotresult)
}
function gotresult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("result_object_name").innerHTML= result[0].label
        document.getElementById("result_object_accuracy").innerHTML= result[0].confidence.toFixed(3)

    }
}
