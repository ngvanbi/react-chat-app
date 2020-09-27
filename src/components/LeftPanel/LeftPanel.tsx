import ChatList from 'components/ChatList/ChatList';
import Search from 'components/Search/Search';
import React from 'react';

import { Avatar, CssBaseline, Grid, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { OpenInNew, VideoCall } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f6f6f6',
      height: '100vh',
      padding: '5px',
    },
    messenger: {
      marginLeft: '10px',
    },
    search: {
      marginTop: '15px',
      marginLeft: '5px',
      marginRight: '5px',
    },
  })
);

export default function LeftPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item spacing={0} xs={6} justify="flex-start" alignItems="center" direction="row">
          <Avatar>B</Avatar>
          <Typography className={classes.messenger} variant="subtitle1">
            <strong>Messenger</strong>
          </Typography>
        </Grid>
        <Grid container item spacing={0} xs={6} justify="flex-end" alignItems="center">
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <OpenInNew />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Search className={classes.search} />
        </Grid>
        <CssBaseline />
        <Grid item xs={12}>
          <ChatList />
        </Grid>
      </Grid>
    </div>
  );
}
