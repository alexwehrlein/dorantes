
const btnProyect = document.querySelectorAll(".btnImgClick");

for (let i = 0; i < btnProyect.length; i++) {
    btnProyect[i].addEventListener('click', async(e) => {
        const pt = e.target.dataset.proyect;
        fetch('../assets/proyects.json')
        .then(response => response.json())
        .then(response => {
            let data = response.filter(proyect => proyect.proyecto == pt);
            lightboxWindow(data[0].imgs);
        })
        .catch((e)=>{
            console.error(e);
        })
    });
}

const lightboxWindow = (imgs) => {
    const lightbox = new FsLightbox();
    lightbox.props.sources = imgs;
    lightbox.props.onInit = () => console.log('Lightbox initialized!');
    lightbox.open();
}