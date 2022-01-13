document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const player = document.createElement("div");
    let GameOver = false;
    const gridheight = 600;
    let platCount = 5;
    const platGap = gridheight / platCount;
    let platforms = [];
    let playerbottom=250;
    let playerleft=50;
    let isJumping=false;
    
    
    function createPlayer() {
        grid.appendChild(player);
        player.classList.add('player');
        playerbottom = platforms[0].bottom + 15;
        playerleft = platforms[0].left;
        player.style.bottom=playerbottom + 'px';
        player.style.left = playerleft + 'px';
    }

    class Platform {
        constructor(newPlatBottom){
        this.bottom = newPlatBottom;
        this.left = Math.random() * 300;
        let platform = document.createElement("div");
        this.visual=platform;
        }

        draw(){
            
            grid.appendChild(this.visual);
            this.visual.classList.add('platform');
            this.visual.style.left=this.left + 'px';
            this.visual.style.bottom=this.bottom + 'px';
        }
    }
    function createPlatform(){
        for (let i=0;i<platCount ; i++){
            let newPlatBottom = 100 + platGap*i;
            let newPlat=new Platform(newPlatBottom);
            platforms.push(newPlat);
            newPlat.draw();
        }
    }
    function movePlat(){
        if (playerbottom>200)
        platforms.forEach(p =>{
            p.bottom-=4;
            let platform = p.visual;
            platform.style.bottom= p.bottom + 'px';
        })
    }
    function jump(){
        // clearInterval(downward);
        isJumping=true;
        upward = setInterval(function(){
            playerbottom+=20;
            player.style.bottom=playerbottom + 'px';
            if (playerbottom > 350){
                fall();
            }

        },30)
    }
    function fall(){
        isJumping=false;
        clearInterval(upward);
        downward = setInterval(function(){
            playerbottom-=5;
            player.style.bottom=playerbottom + 'px';
            if (playerbottom <=0){
                gameOver();
            }

        },30)
    }
    function gameOver(){
        GameOver=true;
        clearInterval(upward);
        clearInterval(downward);
    }
    function start() {
        if (!GameOver) {
            createPlatform();
            createPlayer();
            setInterval(movePlat,30);
            jump();
        }
    }
    start();
})