import AddTestDataButton from './ResetDataButton';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

interface HeaderProps {}

const HomeLink = styled(Link)({
  textDecoration: 'none',
  color: 'white',
});

const Header: React.FC<HeaderProps> = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <HomeLink to={'/'}>
              <span style={{ marginRight: '1rem' }}>🍉</span>
              Smoothie Book
            </HomeLink>
          </Typography>
          <AddTestDataButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
