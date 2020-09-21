import { Avatar, createStyles, Grid, makeStyles, Typography, Theme } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  })
);

export default function ChatItem() {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Avatar />
      </Grid>
      <Grid container item xs>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Bi Nguyen</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">The video chat ended.</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
