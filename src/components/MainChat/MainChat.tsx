import LeftPanel from 'components/LeftPanel/LeftPanel';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
    },
  })
);

export default function MainChat() {
  const classes = useStyle()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={6} sm={5} md={3} lg={2}>
        <LeftPanel />
      </Grid>
      <Grid item xs={6} sm={7} md={9} lg={10}>
        Main chat
      </Grid>
    </Grid>
  );
}
