import React from "react";
import withStyles from '@mui/styles/withStyles';
import {Typography} from "@mui/material";
import {UserContext} from "../Login/UserContext";

const styles = theme => ({
    root:{
        backgroundColor: "#46AAA6",
        padding: 2,
        color: '#E2E2E2',
        paddingLeft: theme.spacing(8)

    },
    fecha:{
        color: '#E1E8EB'
    },
    bienvenida: {
        backgroundColor: "#d3d3d3",
        padding: 2,
        paddingLeft: theme.spacing(8)
    }
});


function Version(props){
    const { classes } = props;
    /* let date = new Date()
    let day = date.getDate()
    let month = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
    let year = date.getFullYear() */

    const {user} = React.useContext(UserContext);


    return(
        <React.Fragment>
            <div className={classes.root}>
                    <Typography display={'inline'}><b>{`Secretaría Ejecutiva del Sistema Estatal de Combate a la Corrupción`}</b>&nbsp;&nbsp;</Typography>
                    {/* <Typography display={'inline'} className={classes.fecha}>{`${day} ${month} ${year}`}</Typography> */}
            </div>
            {user.loggedIn &&
                <div className={classes.bienvenida}>
                    <Typography display={'inline'}>
                        <b> Bienvenido </b>
                        {/* <b> Bienvenido {`${user.nombres} ${user.primerApellido}`} - {user.username}</b> */}
                    </Typography>
                </div>
            }
        </React.Fragment>
    );
}


export default withStyles(styles)(Version);
