       //This is Our Countdown Function

        function countDown() {
            var today = new Date(); //Current Date
            var eventTime = new Date("May 20,2019 00:00:00");  //Event Date
            
            
            var currentTitme = today.getTime(); 
            var currentEventTime = eventTime.getTime();
            
            
            var differentTime = currentEventTime - currentTitme;
            
            var seconds = Math.floor(differentTime/1000);
            var minutes = Math.floor(seconds/60);
            var hours = Math.floor(minutes/60);
            var days = Math.floor(hours/24);

            
            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            hours += days * 24;

            hours = (hours < 10) ? "0"+hours : hours;
            minutes = (minutes < 10) ? "0"+minutes : minutes;
            seconds = (seconds < 10) ? "0"+seconds : seconds;
            
            
            
            document.getElementById('hour').innerHTML = hours;
            document.getElementById('minute').innerHTML = minutes;
            document.getElementById('second').innerHTML = seconds;
            
            setTimeout(countDown,1000);
            
        }
 
         countDown();
    
    