import { createTheme } from '@mui/material/styles';

const themeMUI = createTheme({
    breakpoints: {
      values: {
        m: 320,
        t: 768,
        d: 1280,
      },
    },
    palette: {
        primary: {
          main: '#979797',
        },
        secondary: {
          main: '#dedede',
        },
      },
  });
  

  export default themeMUI;