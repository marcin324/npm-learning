function changeSecToHours(sec){
  var timeInHours = Math.floor(sec/3600);
  var timeInMin = Math.floor((sec % 3600) / 60);
  var timeInSec = sec % 60;
  
  if(timeInHours === 0 && timeInMin === 0){
    time = timeInSec + ' sec';
  }
  
  else if(timeInHours === 0){
    time = timeInMin + ' min ' + timeInSec + ' sec';
  }
     
  else {
    time = timeInHours + ' hrs ' + timeInMin + ' min ' + timeInSec + ' sec';
  }
  
    return time;
};

exports.print = changeSecToHours;




/* Też działa */
/*function changeSecToHours (sec){
    var timeInHours = Math.floor(sec/3600);
    var timeInMin = Math.floor((sec % 3600) / 60);
    var timeInSec = sec % 60;
  
    switch(timeInHours, timeInMin, timeInSec){
        case (timeInHours === 0 &&  timeInMin === 0):
            time = timeInSec + ' sec';
        break;
  
  
        case (timeInHours === 0):
            time = timeInMin + ' min ' + timeInSec + ' sec';
        break;
  
     
        default: 
            time = timeInHours + ' hrs ' + timeInMin + ' min ' + timeInSec + ' sec';
  
        return time;
};*/