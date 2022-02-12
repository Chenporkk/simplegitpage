function myNumber(){
    var myNumber = document.getElementById('number').value;
    if(myNumber%3==0){
        document.getElementById('myP').innerHTML="True.";
    }
    else if(myNumber%7==0){
        document.getElementById('myP').innerHTML="True.";
    }
    else{
        document.getElementById('myP').innerHTML="Wrong input!!"
    }
}
function keNumber(){
    var angles = document.getElementById('keNumber').value;
    var total = (angles-2)*180;
    document.getElementById('keP').innerHTML= total + "&deg;";
    if(angles<=2){
        alert("Wrong input!!");
    }
}