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
            Desarrollo
            </Typography>
            

            <Typography paragraph justifyContent='center'>
           Responsable de la conceptualización, desarrollo e implementación de la Plataforma Digital Nacional Anticorrupción. Desarrollo de 
           estándares de datos para sectores como declaraciones patrimoniales y de intereses, compras 
           públicas, personas sancionadas, y denuncias. Uso de tecnologías exponenciales para prevenir, detectar, investigar y sancionar actos de corrupción.
            </Typography>
         </Paper>
            
            

            
        </div>);
}

export default withStyles(styles)(Funciones);