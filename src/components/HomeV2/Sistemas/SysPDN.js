import React from 'react';
import {Typography, Box, useMediaQuery} from "@mui/material";
import {withStyles, useTheme} from "@mui/styles";
import SysCard from "./SysCard";
import IconS1 from "../../../assets/rediseno/ico_sistemas/ico_s1_color.svg"
import IconS2 from "../../../assets/rediseno/ico_sistemas/ico_s2_color.svg"
import IconS3 from "../../../assets/rediseno/ico_sistemas/ico_s3_color.svg"
import IconS4 from "../../../assets/rediseno/ico_sistemas/ico_s4_color.svg"
import IconS5 from "../../../assets/rediseno/ico_sistemas/ico_s5_color.svg"
import IconS6 from "../../../assets/rediseno/ico_sistemas/ico_s6_color.svg"
import IconS7 from "../../../assets/rediseno/ico_sistemas/ico_s7_color.svg"
import IconS8 from "../../../assets/rediseno/ico_sistemas/ico_s8_color.svg"
import IconS9 from "../../../assets/rediseno/ico_sistemas/ico_s9_color.svg"

const styles = theme => ({
    root: {
        maxWidth: 920
    }
});

const systems = [
    {
        name: "istema de evolución patrimonial, declaración de intereses y constancia de presentación de declaración fiscal",
        color: "#F8CAC4",
        icon: IconS1,
        url: "/declaraciones"
    },
    {
        name: "Sistema de los Servidores públicos y particulares que intervengan en procedimientos de contrataciones públicas",
        color: "#D8ACD8",
        icon: IconS2,
        url: "/servidores"
    },
    {
        name: "Catálogo de empresas prestadoras de servicios de los Poderes del Estado y Municipios",
        color: "#FEA142",
        icon: IconS3,
        url: "/sancionados"
    },
    {
        name: "Sistema Estatal de Servidores públicos y particulares sancionados",
        color: "#C6C1EB",
        icon: IconS4,
        url: "/fiscalizacion"
    },
    {
        name: "Sistema de información y comunicación del Sistema Estatal",
        color: "#C4DDB6",
        icon: IconS5,
        url: "/denuncias"
    },
    {
        name: "Sistema de denuncias públicas, de faltas administrativas y hechos de corrupción",
        color: "#34c9b2",
        icon: IconS6,
        url: "/contrataciones"
    },
    {
        name: "Sistema de Información Pública de Contrataciones",
        color: "#B2DBEB",
        icon: IconS7,
        url: "/fiscalizacion"
    },
    {
        name: "Sistema de seguimiento a las recomendaciones emitidas",
        color: "#FEB142",
        icon: IconS8,
        url: "/denuncias"
    },
    {
        name: "Indicadores de evaluación",
        color: "#E6C5C0",
        icon: IconS9,
        url: "/contrataciones"
    }
];

const CustomTypography = withStyles({
    root: {
        color: "#d0d7d9",
    }
})(Typography);

const SysPDN = props => {
    const {classes} = props;
    const theme = useTheme();

    const justify = useMediaQuery(theme.breakpoints.down("md")) ? "center" : "left"

    return (
        <div className={classes.root}>
            <CustomTypography variant="h3" fontWeight="bold" paragraph>
                Sistemas de la PDE
            </CustomTypography>

            <CustomTypography fontWeight="100" paragraph>
                El desarrollo de la <b>PDE</b> considera nueve sistemas que integran datos estratégicos para la lucha
                contra la corrupción, contemplados en
                la <b>Ley del Sistema Estatal de Combate a la Corrupción.</b>
            </CustomTypography>

            <Box display="flex" flexWrap="wrap" justifyContent = {justify}>
            {
                systems.map((s, i) => {
                    return <SysCard key={i} sys={s}/>
                })
            }
            </Box>
        </div>
    );
}

export default withStyles(styles)(SysPDN);
