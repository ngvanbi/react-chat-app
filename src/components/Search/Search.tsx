import classNames from 'classnames';
import React, { ChangeEvent, useState } from 'react';

import { IconButton } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(4),
      display: 'flex',
      justifyContent: 'space-between',
    },
    iconButton: {
      color: theme.palette.action.active,
      transform: 'scale(1, 1)',
      transition: theme.transitions.create(['transform', 'color'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    iconButtonHidden: {
      transform: 'scale(0, 0)',
      '& > $icon': {
        opacity: 0,
      },
    },
    searchIconButton: {
      marginRight: theme.spacing(-6),
    },
    icon: {
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    input: {
      width: '100%',
      border: theme.shape.borderRadius,
    },
    searchContainer: {
      margin: 'auto 16px',
      width: `calc(100% - ${theme.spacing(6 + 4)}px)`, // 6 button + 4 margin
    },
  })
);

type Props = {
  className?: string;
}

export default function Search(props: Props) {
  const [value, setValue] = useState('');
  const classes = useStyles();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setValue(event.target.value);
  }

  return (
    <Paper className={classNames(classes.root, props.className)} elevation={0} variant="outlined">
      <div className={classes.searchContainer}>
        <Input
          className={classes.input}
          placeholder="Search..."
          fullWidth
          disableUnderline
          value={value}
          onChange={handleChange}
        />
      </div>
      <IconButton
        className={classNames(classes.iconButton, classes.searchIconButton, {
          [classes.iconButtonHidden]: value !== '',
        })}
      >
        <SearchIcon className={classes.icon} />
      </IconButton>
      <IconButton
        className={classNames(classes.iconButton, {
          [classes.iconButtonHidden]: value === '',
        })}
      >
        <ClearIcon className={classes.icon} />
      </IconButton>
    </Paper>
  );
}
