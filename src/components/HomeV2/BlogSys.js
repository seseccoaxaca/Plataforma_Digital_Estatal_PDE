import React from "react";
import BlogComponent from "./Blog/BlogComponent";
import SysPDN from "./Sistemas/SysPDN";
import {Grid} from "@mui/material";
import {withStyles} from "@mui/styles";

const styles = theme => ({
    root: {
        //background: 'rgba(226, 226, 226, 0.9)',
        padding: theme.spacing(2),
        flexGrow: 1
    }
});

const BlogSys = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid container justifyContent="center" >
      
                    <SysPDN/>
              
            </Grid>
        </div>
    );
}

export default withStyles(styles)(BlogSys);