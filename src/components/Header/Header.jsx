import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import styled from '@emotion/styled';

//кастомізація стилю кнопок
const CustomButton = styled(Button)({
  textTransform: 'none',
  fontSize: '20px',
  border: 'none',
  '&:hover, &:active, &:focus': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: 'black',
    outline: 'none',
  },
});

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Container
          disableGutters
          sx={{ width: 'auto', m: '0', display: 'flex' }}
        >
          <Typography
            href="#"
            fontSize={'20px'}
            variant="h4"
            component="a"
            color="inherit"
          >
            Home
          </Typography>
        </Container>

        <Stack direction="row" spacing={2}>
          <CustomButton
            href="#text-buttons"
            color="inherit"
            variant="text"
            size="large"
            startIcon={<AppRegistrationIcon />}
            onClick={() => {
              alert('clicked');
            }}
          >
            Register
          </CustomButton>

          <CustomButton
            href="#text-buttons"
            color="inherit"
            variant="text"
            size="large"
            startIcon={<LockOpenIcon />}
            onClick={() => {
              alert('clicked');
            }}
          >
            Log In
          </CustomButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
