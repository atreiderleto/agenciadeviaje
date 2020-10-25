

const guardarTestimonial = (req, res) =>{

    //validar formulario

    const { nombre, correo, mensaje } = req.body;

    if (nombre.trim() === '') {
        console.log('el nombre esta vacio');
    }

}

export{
    guardarTestimonial
}