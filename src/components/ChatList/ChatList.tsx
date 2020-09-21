import { createStyles, makeStyles, Theme, Link } from '@material-ui/core';
import ChatItem from 'components/ChatItem/ChatItem';
import React from 'react';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    ul: {
      listStyleType: 'none',
      padding: '5px',
    },
    li:{
      '&:hover': {
        backgroundColor: theme.palette.common.white,
      },
    },
    link: {
      color: theme.palette.common.black,
    },
  })
);

export default function ChatList() {
  const classes = useStyle();

  return (
    <ul className={classes.ul}>
      <li className={classes.li}>
        <Link href="/" className={classes.link} underline="none">
          <ChatItem />
        </Link>
      </li>
    </ul>
  );
}
