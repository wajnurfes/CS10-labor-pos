const styles = (theme) => ({
  add_button: {
    margin: theme.spacing(3),
    backgroundColor: '#ffeb3b',
  },
  add_text: {
    color: theme.palette.text.primary,
    textShadow: '2px 2px 2px #000000',
    letterSpacing: '1.2px',
  },
  background_color: theme.palette.background.paper,
  blackfont: {
    color: '#000000',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    margin: '16px',
    padding: '16px',
  },
  card_title: {
    marginTop: '40px',
  },
  checkbox: {
    marginTop: '32px',
  },
  dark_paper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up(600 + theme.spacing(2))]: {
      padding: theme.spacing(1),
    },
  },
  delete: {
    textAlign: 'center',
    paddingLeft: '80px',
  },
  emphasis: {
    fontSize: '30x',
    fontWeight: '900',
    color: 'black',
    textShadow: '2px -1px 1px goldenrod',
  },
  field: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.textfield,
    margin: '10px',
    width: '90%',
    fontSize: '16px',
    fontFamily: 'Helvetica, Arial',
    letterSpacing: '1.2px',
  },
  field_small: {
    width: '90%',
  },
  form_control_label: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  group: {
    margin: 'auto',
  },
  highlight: {
    color: '#ffeb3b',
  },
  image: {
    height: '60px',
    margin: 'auto',
  },
  image_large: {
    maxWidth: '100%',
    height: 'auto',
  },
  item_card: {
    backgroundColor: theme.palette.background.paper,
    height: '256px',
    maxWidth: '256px',
    margin: 'auto',
    textAlign: 'left',
    padding: '20px',
  },
  item_card_small: {
    backgroundColor: theme.palette.background.paper,
    height: '200px',
    maxWidth: '200px',
    margin: 'auto',
    textAlign: 'left',
    padding: '20px',
    lineHeight: '4',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(4))]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  limit_width: {
    width: '75%',
    maxWidth: '60%',
  },
  list_item_light: {
    padding: '10px',
    backgroundColor: theme.palette.lightened_background,
    color: theme.palette.text.secondary,
  },
  list_item_reg: {
    padding: '10px',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  main_content: {
    textAlign: 'center',
    margin: 'auto',
    width: '80%',
    maxWidth: '900px',
    marginTop: '20px',
    marginBottom: '20px',
    padding: '32px 32px',
    backgroundColor: theme.palette.background.default,
  },
  margin: {
    margin: theme.spacing(2),
  },
  menuitems: {
    color: `${theme.palette.text.primary} !important`,
    backgroundColor: `${theme.palette.background.paper} !important`,
  },
  modal: {
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
  },
  nav_menu: {
    padding: '20px',
    height: '60px',
  },
  new_card: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: '180px',
    margin: 'auto',
  },
  note: {
    paddingTop: '20px',
    fontSize: '26px',
    fontWeight: '300',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  padded_button: {
    margin: '16px',
    padding: '5px',
    minWidth: '148px',
    fontSize: '14px',
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    // maxWidth: "80%",
    [theme.breakpoints.up(600 + theme.spacing(6))]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  },
  paper_color: {
    backgroundColor: theme.palette.background.paper,
  },
  premium_card: {
    backgroundColor: '#ffeb3b',
    margin: '16px',
    padding: '16px',
  },
  premium_results: {
    color: '#ffeb3b',
  },

  results: {
    textAlign: 'center',
    fontSize: '18px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sidenav: {
    backgroundColor: `${theme.palette.background.sidenav} !important`,
  },
  sidenavFull: {
    height: '100%',
    minHeight: '100vh',
  },
  sidenav_top: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  space_above: {
    margin: '22px 0px',
  },
  space_below: {
    marginBottom: '22px',
  },
  start_card: {
    minWidth: '165px',
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
    padding: '40px',
    width: '80%',
    maxWidth: '900px',
  },
  state_field: {
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    height: '24px',
    border: '0',
    borderBottom: '1px solid',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  state_settings: {
    marginLeft: '40px',
    width: '80% !important',
  },
  stepper: {
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(5)}px`,
    backgroundColor: theme.palette.background.default,
  },
  text_color: {
    color: theme.palette.text.primary,
  },
  textField: {
    flexBasis: 'auto',
    width: '90%',
  },
  typography: {
    paddingTop: '20px',
    fontSize: '24px',
    fontWeight: '900',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  typography_card: {
    paddingTop: '10px',
    paddingBottom: '30px',
    fontSize: '24px',
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
  },
  typography_menu: {
    fontFamily: "'Cinzel', serif",
    fontSize: '16px',
    textShadow: '1px 1px 3px goldenrod, 1px 1px 2px black',
  },
  typography_paragraph: {
    paddingTop: '20px',
    fontSize: '18px',
    fontWeight: '300',
    fontFamily: 'Source Sans Pro, sans-serif',
    letterSpacing: 1,
  },
  typography_paragraph_landing: {
    paddingTop: '20px',
    fontSize: '20px',
    fontWeight: '500',
    color: '#000000',
    textShadow: '0.5px 0.5px 1px goldenrod',
    fontFamily: 'Source Sans Pro, Arial, sans-serif',
  },
  typography_subtitle: {
    fontSize: '18px',
    textShadow: '0.5 px 0.5px 1px goldenrod',
  },
  typography_start: {
    marginTop: '15px',
    padding: '0px 40px 40px 40px',
  },
  typography_title: {
    fontSize: '40px',
    fontFamily: "'Cinzel', serif",
  },
  typography_title_landing: {
    fontFamily: "'Cinzel', serif",
    fontSize: '36px',
    color: 'black',
    textShadow: '1px 2px 4px goldenrod',
  },
  zipcode_settings: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});
export { styles };
