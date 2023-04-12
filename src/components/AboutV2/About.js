import React from 'react';
import {Typography, Grid, Link, Paper, Box} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {withStyles} from "@mui/styles";
import bgimg from "../../assets/rediseno/fondo_cruces_dark.png";
import pdnRoutes from "../../routes/index";
import HeaderV2 from '../HomeV2/HeaderV2';
import S1 from "@assets/rediseno/sistemas_sin_fondo/btn-s1.svg";
import S2 from "@assets/rediseno/sistemas_sin_fondo/btn-s2.svg";
import S3 from "@assets/rediseno/sistemas_sin_fondo/btn-s3_a.svg";
import S4 from "@assets/rediseno/sistemas_sin_fondo/btn-s4_a.svg";
import S5 from "@assets/rediseno/sistemas_sin_fondo/btn-s5_a.svg";
import S6 from "@assets/rediseno/sistemas_sin_fondo/btn-s6_a.svg";
import S7 from "@assets/rediseno/sistemas_sin_fondo/btn-s7_a.svg";
import S8 from "@assets/rediseno/sistemas_sin_fondo/btn-s8_a.svg";
import S9 from "@assets/rediseno/sistemas_sin_fondo/btn-s9_a.svg";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed"
    },
    rootItem: {
        maxWidth: "1200px",
        padding: theme.spacing(1),
        paddingTop: 90,
        paddingBottom: 90,
    },
    ol: {
        color: "#d0d7d9",
        fontFamily: "Roboto",
        fontSize: "16px"
    },
    ul: {
        color: "#d0d7d9",
        fontFamily: "Roboto",
        fontSize: "16px"
    },
    videoDiv: {
        maxWidth: 850,
        margin: theme.spacing(1)
    },
    paper: {
        backgroundColor: theme.palette.background.opaque,
        padding: theme.spacing(2),
        color: theme.palette.primario.contrastText,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.palette.secundario.main,
        borderRadius: '10px 10px 10px 10px',
        display: 'flex',
        justifyContent: "center"
    },
    box: {
        maxWidth: '900px', paddingTop: '50px', paddingBottom: '50px'
    },
    sistemas: {
        maxWidth: 150,
        "&:hover": {
            opacity: .5
        }
    },
    link: {
        textDecoration: "none"
    },
    containerSistemas: {
        maxWidth: "1200px",
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
});

const CustomTypography = withStyles(theme => ({
    root: {
        color: theme.palette.text.main,

    }
}))(Typography);

const About = props => {
    const {classes} = props;
    const section = pdnRoutes.find(route => route.path === '/about');


    return <div className={classes.root}>
        <HeaderV2 section={section}/>
        <Grid container justifyContent="center" spacing={0}>
            <Grid item xs={12} className={classes.rootItem}>
                <Paper className={classes.paper} elevation={15}>
                    <Box className={classes.box}>

                        <CustomTypography paragraph>
                            Usando la PDE, las autoridades encargadas de la lucha anticorrupción pueden tomar decisiones basadas en evidencia a partir de grandes cantidades de datos.
                        </CustomTypography>

                        <CustomTypography paragraph>
                            El desarrollo de la PDE considera nueve sistemas contemplados en la Ley del Sistema Estatal de Combate a la Corrupción:
                        </CustomTypography>

                        <Typography color={'S1.color'} display={'inline'}>Sistema 1 | </Typography>
                        <CustomTypography display={'inline'}>
                        Sistema de evolución patrimonial, declaración de intereses y constancias de presentación de declaración fiscal (S1).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S2.color'} display={'inline'}>Sistema 2 | </Typography>
                        <CustomTypography display={'inline'}>
                            Sistema de los Servidores públicos y particulares que intervengan en procedimientos de contrataciones públicas (S2).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S3.color'} display={'inline'}>Sistema 3 | </Typography>
                        <CustomTypography display={'inline'}>
                            Catálogo de empresas prestadoras de servicios de los Poderes del Estado y Municipios (S3).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S4.color'} display={'inline'}>Sistema 4 | </Typography>
                        <CustomTypography display={'inline'}>
                            Sistema Estatal de Servidores públicos y particulares sancionados (S4).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S5.color'} display={'inline'}>Sistema 5 | </Typography>
                        <CustomTypography display={'inline'}>
                            Sistema de información y comunicación del Sistema Estatal (S5).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S6.color'} display={'inline'}>Sistema 6 | </Typography>
                        <CustomTypography display={'inline'}>
                            Sistema de denuncias públicas, de faltas administrativas y hechos de corrupción (S6).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S1.color'} display={'inline'}>Sistema 7 | </Typography>
                        <CustomTypography display={'inline'}>
                            Sistema de Información Pública de Contrataciones (S7).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S2.color'} display={'inline'}>Sistema 8 | </Typography>
                        <CustomTypography display={'inline'}>
                            Sistema de seguimiento a las recomendaciones emitidas (S8).
                        </CustomTypography>
                        <br/>
                        <Typography color={'S3.color'} display={'inline'}>Sistema 9 | </Typography>
                        <CustomTypography display={'inline'}>
                            Indicadores de evaluación (S9).
                        </CustomTypography>

                        <Grid container spacing={0} justifyContent='center'>
                            <Grid item xs={12} className={classes.containerSistemas}>
                                <Grid container spacing={0} justifyContent='center'>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/declaraciones" className={classes.link}>
                                            <img src={S1} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/servidores" className={classes.link}>
                                            <img src={S2} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/sancionados" className={classes.link}>
                                            <img src={S3} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/fiscalizacion" className={classes.link}>
                                            <img src={S4} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/denuncias" className={classes.link}>
                                            <img src={S5} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/contrataciones" className={classes.link}>
                                            <img src={S6} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/declaraciones" className={classes.link}>
                                            <img src={S7} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/declaraciones" className={classes.link}>
                                            <img src={S8} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={4} xl={2} align="center">
                                        <RouterLink to="/declaraciones" className={classes.link}>
                                            <img src={S9} alt="" className={classes.sistemas}/>
                                        </RouterLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <CustomTypography paragraph>
                            ¿Quieres saber más sobre el marco normativo de la PDE? haz click <Link
                            component={RouterLink} to="/mesa-de-ayuda">aquí</Link>.
                        </CustomTypography>


                        <div className={classes.videoDiv}>
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/W3gJLf6n6ak?rel=0"
                                    frameBorder="0" title={'Video'}
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        </div>

                        <CustomTypography variant="h4" paragraph>
                            ¿Cómo estamos desarrollando la PDE?
                        </CustomTypography>

                        <CustomTypography paragraph>
                            La PDE opera con una arquitectura que permite consultar información de diversos proveedores (instituciones públicas), en tiempo real y de manera estandarizada (en un mismo formato). Con el objetivo de incorporar datos a la PDE, los generadores de información deben establecer mecanismos de comunicación que permitan la consulta de información desde la PDE hacia sus bases de datos.
                        </CustomTypography>

                        <CustomTypography paragraph>
                            La SECC publicó las especificaciones técnicas y estándares de datos que permiten que cualquier institución pública  pueda desarrollar los mecanismos de comunicación con la PDE.
                        </CustomTypography>

                        <CustomTypography variant="h5" paragraph>
                            El desarrollo de la PDE tiene grandes ventajas:
                        </CustomTypography>

                        <ol className={classes.ol}>
                            <li>
                                <CustomTypography>
                                    Es un modelo más barato (no requiere grandes inversiones en infraestructura ya que no concentra, almacena o replica la información);
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    Promueve que los datos estén siempre actualizados por los generadores, ya que consulta directamente sus bases de datos;
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    Atiende a la normatividad vigente y se desarrolla de manera modular y escalable al interior de la SECC, por personas servidoras públicas, lo que significa que responde directamente a las necesidades de las y los usuarios, contrario a las plataformas que se desarrollan por medio de un tercero, bajo un modelo cerrado;
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    No genera costos adicionales el hacer cualquier modificación o adecuación ya que la desarrolla el equipo de la SECC;
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    Es un modelo sostenible y replicable ya que todo su desarrollo se hace con tecnologías de código abierto, lo cual reduce los costos de licenciamiento de software y evita generar dependencias de proveedores de tecnología/software.
                                </CustomTypography>
                            </li>
                        </ol>

                        <CustomTypography variant="h4" paragraph>
                            ¿Qué puedo hacer a través de la PDE?
                        </CustomTypography>

                        <CustomTypography paragraph>
                            A través de la PDE podrás saber:
                        </CustomTypography>

                        <ul className={classes.ul}>
                            <li>
                                <CustomTypography>
                                    Los datos de personas servidoras públicas sancionadas por la comisión de actos de corrupción.
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    El nombre o razón social de particulares sancionados e inhabilitados para proporcionar bienes o servicios a las instituciones públicas.
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    Las declaraciones patrimoniales de miles de personas servidoras públicas de todo el estado.
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    Los datos de personas servidoras públicas que participan en procedimientos de compras gubernamentales.
                                </CustomTypography>
                            </li>
                            <li>
                                <CustomTypography>
                                    La información pública de los contratos que celebren las instituciones públicas.
                                </CustomTypography>
                            </li>
                        </ul>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </div>
}

export default withStyles(styles)(About);