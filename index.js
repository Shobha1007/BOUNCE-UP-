document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const player = document.createElement("div");
    let GameOver = false;
    const gridheight = 600;
    let platCount = 5;
    const platGap = gridheight / platCount;

    function createPlayer() {
        grid.appendChild(player);
        player.classList.add('player');
    }

    class Platform {
        constructor(newPlatBottom){
        this.bottom = newPlatBottom;
        this.left = Math.random() * 300;
        }

        draw(){
            let platform = document.createElement("div");
            grid.appendChild(platform);
            platform.classList.add('platform');
            platform.style.left=this.left + 'px';
            platform.style.bottom=this.bottom + 'px';
        }
    }
    function createPlatform(){
        for (let i=0;i<platCount ; i++){
            let newPlatBottom = 100 + platGap*i;
            let newPlat=new Platform(newPlatBottom);
            newPlat.draw();
        }
    }

    function start() {
        if (!GameOver) {
            createPlayer();
            createPlatform();
        }
    }
    start();
})