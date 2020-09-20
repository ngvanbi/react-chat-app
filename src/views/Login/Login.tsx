import React, { useState, MouseEvent, FormEvent } from 'react';
import Copyright from 'components/Copyright/Copyright';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Email from '@material-ui/icons/Email';
import { useFormInput } from 'components/CustomHook/CustomHook';
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Box,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  password: {
    padding: theme.spacing(0),
  },
}));

export default function SignIn(): JSX.Element {
  const classes = useStyles();
  const email = useFormInput('');
  const password = useFormInput('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<string>('');

  const location = useLocation();

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleMouseDownPassword(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  function handleClickRememberMe() {
    setRemember(!remember);
  }

  function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.value && password.value) {
        setRedirect("/")
    }
  }

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: redirect,
          state: { from: location },
        }}
      />
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSignIn}>
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...email}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="standard"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            {...password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    // aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    className={classes.password}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" checked={remember} color="primary" onChange={handleClickRememberMe} />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
