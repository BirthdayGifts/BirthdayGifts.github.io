document.querySelector('button').addEventListener('click', function(){
    var creator = 'AwiL',
        birthdayStar = document.querySelector('input').value,
        songLoop = 4,
        birthdaySong = ['Happy', 'Birthday', 'to', 'you'],
        birthdayMessage = [];
    
    if (birthdayStar.trim() !== '') {
      document.body.classList.add('play');
  
      function titleCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
  
      birthdayMessage.push(titleCase(birthdaySong[2]) + ' ' + birthdayStar);
  
      var i=0;
      while(i<songLoop){
        var line = ""
        for (var j=0;j<birthdaySong.length;j++){
          if (j === 3) {
            if (i === 2) {
              line += birthdayStar;
            }
            else {
              line += birthdaySong[j];
            }
          }
          else {
            line += birthdaySong[j] + ' ';
          }
        }
        birthdayMessage.push(line)
        i++;
      }
  
      birthdayMessage.push('from ' + creator);
  
      StartTextAnimation(0);
  
      function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
         document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 100);
        }
        else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 700);
        }
      }
       function StartTextAnimation(i) {
         if (typeof birthdayMessage[i] == 'undefined'){
            setTimeout(function() { //restart
              StartTextAnimation(0);
            }, 5000);
         }
        if (i < birthdayMessage[i].length) {
         typeWriter(birthdayMessage[i], 0, function(){
           StartTextAnimation(i + 1);
         });
        }
      }
    }
    else {
      alert('Please enter a name');
    }
    
  })