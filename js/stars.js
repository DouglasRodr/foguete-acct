function stars() {
    let count = 11;
    let scene = document.querySelector('.scene');
    let i = 0;

    while (i < count) {
        let star = document.createElement('i');
        let x = (((100 - 4) / count) * i) + 2;

        let duration = 0.5 + (Math.random() * 1);
        let h = Math.random() * 100;

        star.style.left = x + '%';
        star.style.width = 0.5 + 'px';
        star.style.height = '70px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
        i++;
    }

}

stars();