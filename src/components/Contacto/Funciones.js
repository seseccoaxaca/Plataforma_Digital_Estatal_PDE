import React from 'react';
//import Typography from "@mui/material/Typography";
import {withStyles} from "@mui/styles";
import coordinador from "../../assets/rediseno/kash.png";
import {Button, Paper, Typography, Grid} from "@mui/material";

const styles = theme => ({
    container: {
        padding: "5% 10%",
        backgroundColor: 'rgba(30, 130, 126, 0.9)',
        color: "#d0d7d9",
    },
    bg: {
        backgroundColor: 'rgba(220, 220, 220, 0.9)',
        backgroundSize: "cover",
        backgroundPosition: 'center'
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

const Funciones = props => {
    const {classes} = props;

    return (<div className={classes.root} justifyContent='center' alignContent="center" style={{ marginTop: 40, borderRadius: 20 }}>
         <Typography variant="h3">
            Funciones
            <br />
            </Typography>
         
         <Paper className={classes.container}>
            
            <Typography variant="h5" className={classes.subTitle}>
            
            </Typography>
            

            <Typography paragraph justifyContent='center'>
            Desarrollar proyectos, planes de trabajo, celebrar reuniones y demás actividades que impulsen las acciones 
            encaminadas al debido funcionamiento de la Plataforma Digital Estatal de manera programada y sistemática, 
            estableciendo también los mecanismos que garanticen una debida vinculación interinstitucional que permita 
            el cumplimiento de los objetivos de la Ley del Sistema Estatal de Combate a la Corrupción; así como, 
            la vigilancia de manera permanente para que las autoridades integrantes del Sistema Estatal de Combate 
            a la Corrupción incorporen a los diferentes sistemas electrónicos de la Plataforma Digital Estatal la 
            información requerida y se mantenga debidamente actualizada.
            </Typography>
         </Paper>
            
            

            
        </div>);
}

export default withStyles(styles)(Funciones);