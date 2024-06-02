setInterval(function() {
        
        var homeScore = Math.floor(Math.random() * 5);
        
        var drawScore = Math.floor(Math.random() * 5);
        
        var awayScore = Math.floor(Math.random() * 5);
        
        
        document.getElementById('homeResult').innerText = homeScore;
        
        document.getElementById('drawResult').innerText = drawScore;
        
        document.getElementById('awayResult').innerText = awayScore;
    }, 20000);
