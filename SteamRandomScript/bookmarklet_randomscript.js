javascript:(function(){classCount=document.getElementsByClassName('gameListRow').length;var a=Math.floor(Math.random()*classCount)+1;document.querySelectorAll('.gameListRow')[a].id='thisgameiscool';document.getElementById('thisgameiscool').style.backgroundColor='#2d1616';window.location.hash='';window.location.hash='thisgameiscool'})();