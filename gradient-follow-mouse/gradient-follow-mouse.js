const blob = document.querySelector('.blob');

document.body.onpointermove = event => {
    const
        x = event.clientX,
        y = event.clientY;


    blob.animate([
        {
            top: y + 'px',
            left: x + 'px'
        },

    ], {duration: 300, fill: 'forwards'});


}