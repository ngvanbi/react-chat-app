import { createStyles, makeStyles, Theme } from '@material-ui/core';
import LeftPanelHeader from 'components/LeftPanelHeader/LeftPanelHeader';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f6f6f6',
      height: '100vh',
    },
  })
);

export default function LeftPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LeftPanelHeader />
    </div>
  );
}
