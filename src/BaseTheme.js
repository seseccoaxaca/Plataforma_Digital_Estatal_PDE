import { createTheme } from '@mui/material';
import { esES } from '@mui/material/locale';

export default createTheme(
  {
    typography: {
      useNextVariants: true,
      fontFamily: ['"Roboto"', 'sans-serif'].join(',')
    },
    palette: {
      primary: {
        main: '#46AAA6',
        light: '#27CCAC',
        dark: '#56a3bf'
      },
      secondary: {
        main: '#FEA142',
        light: '#FEB142',
        dark: '#c8af00'
      },
      primario: {
        main: '#46AAA6',
        light: '#27CCAC',
        dark: '#001621',
        contrastText: '#E1E8EB'
      },
      secundario: {
        main: '#27CCAC',
        light: '#27CCAC',
        dark: '#0081b3',
        contrastText: '#0d3b49',
        linkColor: '#89d4f2'
      },
      text: {
        main: '#E1E8EB',
        greyColor: '#666666',
        blueColor: '#46AAA6',
        linkColor: '#89d4f2'
      },
      background: {
        default: '#46AAA6',
        opaque: '#398482',
        hoverBotton: '#27CCAC',
        tableBody: '#f2f2f2',
        paperChart: '#24768f'
      },
      azulPDN: '#46AAA6',
      yellowColor: '#ffe01b',
      greyColor: '#666666',
      redColor: '#B00020',
      S1: {
        color: '#46AAA6',
        shade: '#FBE2DF'
      },
      S2: {
        color: '#D8ACD8',
        shade: '#DCC6E0'
      },
      S3: {
        color: '#C6C1EB',
        shade: '#AEA8D3'
      },
      S4: {
        color: '#C4DDB6'
      },
      S5: {
        color: '#34C9B2'
      },
      S6: {
        color: '#B2DBEB',
        shade: '#CFE8F2'
      }
    }
  },
  esES
);
