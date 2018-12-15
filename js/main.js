

$(document).ready(function () {
    //variables
    let mode = 0; //App mode
    let timeCounter = 0; //time Counter
    let lapCounter = 0; //Lap Counter
    let action; //variable for setInterval
    let lapNumber = 0; //Number of Lap
    let timeMinute,timeSecond,timeCentiseconds,lapMinute,lapSecond,lapCentiseconds;
    hideShow('#startButton', '#lapButton');
    //click on Start button
    $('#startButton').click(function (e) { 
        //mode on
        mode=1;
        startAction();
        hideShow('#stopButton','#lapButton');
    });
    
    //hideShow() funtion   
    function hideShow(x, y) {
        $('.control').hide();
        $(x).show();
        $(y).show();
    }

    //startAction()  funtion 
    function startAction()
    {
        action=setInterval(function(){
            timeCounter++;
            lapCounter++;
             updateTime();
        },10);


    }
    //updateTime() function
    
    function updateTime()
    {
      //  console.log(timeCounter);
        //1min=60*100centiSeconds=6000centiSeconds
        timeMinute=Math.floor(timeCounter/6000);  
        timeSecond=Math.floor((timeCounter%6000)/100); 
        timeCentiseconds=(timeCounter%6000)%100;
        $("#timeMinute").text(formatNumber(timeMinute)); 
        $("#timeSecond").text(formatNumber(timeSecond));
        $("#timeCentisecond").text(formatNumber(timeCentiseconds));
           //1min=60*100centiSeconds=6000centiSeconds
          lapMinute=Math.floor(lapCounter/6000);       
           lapSecond=Math.floor((lapCounter%6000)/100); 
           lapCentiseconds=(lapCounter%6000)%100;
           $("#lapMinute").text(formatNumber(lapMinute)); 
           $("#lapSecond").text(formatNumber(lapSecond));
           $("#lapCentisecond").text(formatNumber(lapCentiseconds));
        }
        // formatNumber() function
        function formatNumber(num)
        {
            if(num<10)
            {
                return '0'+num;
            }
            else
            {
                return num;
            }
        }

        //Stop Button

        $('#stopButton').click(function () { 
            clearInterval(action);
            hideShow('#resumeButton','#resetButton');
            
        });

        //Resume Button

        $('#resumeButton').click(function () { 
            updateTime();
            hideShow('#stopButton','#lapButton');   
        });


});


