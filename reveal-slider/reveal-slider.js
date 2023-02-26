const
    left = document.querySelector('#left'),
    right = document.querySelector('#right');

// on mouse move

const moveHandler = e => {

    let x = e.clientX / window.innerWidth * 100

    left.animate([{width: x + '%'}],
        {duration: 1000,}
    );

    left.style.width = x + '%';

}

document.onmousemove = e => moveHandler(e);
document.ontouchmove = e => moveHandler(e.touches[0]);
