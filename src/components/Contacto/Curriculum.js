import React from 'react';
//import Typography from "@mui/material/Typography";
import {withStyles} from "@mui/styles";
import coordinador from "../../assets/rediseno/kash.png";
import {Button, Paper, Typography, Grid} from "@mui/material";

const styles = theme => ({
    container: {
        padding: "5% 10%",
        backgroundColor: 'rgba(30, 130, 126, 0.9)',
    },
   
    headingText: {
        color: "#E1E8EB",
        fontWeight: "700",
        fontSize: '52px',
        [theme.breakpoints.down('md')]:{
            fontSize: '40px',
        },
        
    },
    subTitle:{
       
        color: "#FEA142",
        "& b": {
            color: "#FEA142",
        }
    },
    text:{
        fontSize: '18px',
        fontWeight: 100,
        color: "#d0d7d9",
        "& b": {
            fontWeight: 500,
        }
    },
    btnPDN:{
        margin: theme.spacing(1),
        background: "rgb(255,255,255,0.5)",
        borderRadius: "50px",
        fontWeight: "bold",
        fontStyle: "italic",
        '&:hover': {
            backgroundColor: "#27CCAC",
        },
    },
    link:{
        textDecoration:'none',
        '&:hover': {
            textDecoration:'none',
        },
    }
});

const Curriculum = props => {
    const {classes} = props;

    return (
    <div className={classes.root} justifyContent='center' alignContent="center">
         <img src={coordinador} alt="coordinador PDE" className={classes.icon} style={{ margin: 10, borderRadius: 200 }}/>
            <Typography variant="h3">
            Joel Hugo Castellanos Santiago
            </Typography>
            <Typography variant="h5" className={classes.subTitle}>
            Coordinador de <b>Plataforma Digital</b> y Vinculación Interinstitucional
            </Typography>
            <Typography variant="h6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg> pladig.sesecc@oaxaca.gob.mx
            </Typography>
            <Typography variant="h6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> 951 2066911
            </Typography>

            <Typography paragraph style={{ marginTop: 40, borderRadius: 20, border: 2 }}>
            Ha ocupado diversos cargos en el sector público, entre los que se encuentran: Director de Asuntos Contenciosos en la entonces Comisión 
    Federal de Competencia(COFECO); Director de Normatividad y Consulta en la Unidad de Asuntos Jurídicos, así como Director General 
    Adjunto de la Unidad de Planeación y Evaluación de Políticas Educativas, ambos cargos en la Secretaría de la Educación Pública (SEP); 
    Director de lo Contencioso de Acceso y Director de lo Contencioso de Datos, en el otrora Instituto Federal de Acceso a la Información 
    Pública y Protección de Datos (IFAI); así como Director de Proyectos y Coordinación en la Autoridad Investigadora del Instituto Federal 
    de Telecomunicaciones (IFT). Es Licenciado en Derecho egresado de la Facultad de Derecho de la Universidad Nacional Autónoma de México 
    y Maestro en Derecho de las Tecnologías de Información y Comunicación por el INFOTEC, Centro de Investigación e Innovación en Tecnologías 
    de la Información y Comunicación del CONACYT. Es autor del libro “El Derecho de acceso a la información en México, su ejercicio y medios 
    de impugnación”, así como de diversos artículos y ensayos en revistas especializadas como: “El Mundo del Abogado”, “Ars Iuris” de 
    la Universidad Panamericana y la “Revista en Derecho, Comunicaciones y Nuevas Tecnologías” de la Universidad de los Andes de Colombia.
            </Typography>

            
        </div>


    // <React.Fragment>
    //         <Grid container spacing={0} alignItems="flex-center" justifyContent='center' className={classes.container}>
    //             <Grid item md={6} sm={12} xs={12} align="left">
    //             <img src={coordinador} alt="coordinador PDE" className={classes.icon} style={{ margin: 10, borderRadius: 200 }}/>
    //                 <Typography className={classes.headingText} paragraph>
    //                 Joel Hugo 
    //                 <br />
    //                 Castellanos Santiago
    //                 </Typography>
                    
    //                 <Typography className={classes.subTitle} variant="h5">
    //                 Coordinador de <b>Plataforma Digital</b> y Vinculación Interinstitucional
    //                 </Typography>
    //                 <Typography variant="h6">
    //          sesecc@oaxaca.gob.mx
    //          </Typography>
    //          <Typography variant="h6">
    //          951 2066911
    //          </Typography>
                    
    //             </Grid>
    //             <Grid item md={6} sm={12} xs={12} align="left" >
    //                 <Typography className={classes.text} paragraph>
    //                 Ha ocupado diversos cargos en el sector público, entre los que se encuentran: Director de Asuntos Contenciosos en la entonces Comisión 
    //                 Federal de Competencia(COFECO); Director de Normatividad y Consulta en la Unidad de Asuntos Jurídicos, así como Director General 
    //                 Adjunto de la Unidad de Planeación y Evaluación de Políticas Educativas, ambos cargos en la Secretaría de la Educación Pública (SEP); 
    //                 Director de lo Contencioso de Acceso y Director de lo Contencioso de Datos, en el otrora Instituto Federal de Acceso a la Información 
    //                 Pública y Protección de Datos (IFAI); así como Director de Proyectos y Coordinación en la Autoridad Investigadora del Instituto Federal 
    //                 de Telecomunicaciones (IFT). Es Licenciado en Derecho egresado de la Facultad de Derecho de la Universidad Nacional Autónoma de México 
    //                 y Maestro en Derecho de las Tecnologías de Información y Comunicación por el INFOTEC, Centro de Investigación e Innovación en Tecnologías 
    //                 de la Información y Comunicación del CONACYT. Es autor del libro “El Derecho de acceso a la información en México, su ejercicio y medios 
    //                 de impugnación”, así como de diversos artículos y ensayos en revistas especializadas como: “El Mundo del Abogado”, “Ars Iuris” de 
    //                 la Universidad Panamericana y la “Revista en Derecho, Comunicaciones y Nuevas Tecnologías” de la Universidad de los Andes de Colombia.
    //                 </Typography>

                   
                
    //             </Grid>
    //         </Grid>
    //     </React.Fragment>
        );
}

export default withStyles(styles)(Curriculum);