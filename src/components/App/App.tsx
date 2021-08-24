import { Box, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { CreatePassword } from 'features/ActivateByCard/pages/CreatePassword';
import { theme } from '_config/theme';
import { useStyle } from './App.style';

export const App: React.FC = () => {
  const style = useStyle();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Box className={style.app}>
          <CreatePassword />
        </Box>
    </MuiThemeProvider>      
  );
}

