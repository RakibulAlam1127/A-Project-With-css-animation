
        function countDown() {
            var today = new Date();
            var eventTime = new Date("May 4,2019 12:00:00");
            
            var currentTitme = today.getTime();
            var currentEventTime = eventTime.getTime();
            
            var differentTime = currentEventTime - currentTitme;
            
            var seconds = Math.floor(differentTime/1000);
            var minutes = Math.floor(seconds/60);
            var hours = Math.floor(minutes/60);
            
            hours %= 24;
            minutes %= 60;
            seconds %= 60;
            
            hours = (hours < 10) ? "0"+hours : hours;
            minutes = (minutes < 10) ? "0"+minutes : minutes;
            seconds = (seconds < 10) ? "0"+seconds : seconds;
            
            
            
            document.getElementById('hour').innerHTML = hours;
            document.getElementById('minute').innerHTML = minutes;
            document.getElementById('second').innerHTML = seconds;
            
            setTimeout(countDown,1000);
            
        }
 
         countDown();
    