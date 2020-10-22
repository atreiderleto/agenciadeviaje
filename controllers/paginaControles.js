import { Viaje } from '../models/Viaje.js';

// controladores


const paginaInicio =  (req, res)=> { 
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res)=> { 
    res.render('nosotros', {

        pagina: 'Nosotros'

    });
}

const paginaViajes = async (req, res)=> { 

    //consultar DB

    const viajes = Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {

        pagina: 'Viajes'

    });
}

const paginaTestimoniales = (req, res)=> { 
    res.render('testimoniales', {

        pagina: 'Testimoniales'

    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}