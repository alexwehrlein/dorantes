
const btnProyect = document.querySelectorAll(".btnImgClick");

for (let i = 0; i < btnProyect.length; i++) {
    btnProyect[i].addEventListener('click', async(e) => {
        lightboxWindow();
        /*const pt = e.target.dataset.proyect;
        fetch('../assets/proyects.json')
        .then(response => response.json())
        .then(response => {
            let data = response.filter(proyect => proyect.proyecto == pt);
            lightboxWindow(data[0].imgs);
        })
        .catch((e)=>{
            console.error(e);
        })*/
    });
}

const lightboxWindow = () => {
    const lightbox = new FsLightbox();
    lightbox.props.sources = [ 
        "assets/img/proyects/proyect_1.jpg",
        "assets/img/proyects/proyect/p1/1.jpg",
        "assets/img/proyects/proyect/p1/2.jpg",
        "assets/img/proyects/proyect/p1/3.jpg",
        "assets/img/proyects/proyect/p1/4.jpg",
        "assets/img/proyects/proyect/p1/5.jpg"
    ];
    lightbox.props.onInit = () => console.log('Lightbox initialized!');
    lightbox.open();
}
