export default interface DefaultTheme {
  mixins: {
    toolbar: Object;
    minHeight: 64;
    '@media(min - width: 0px) and(orientation: landscape)': { minHeight: 0 };
    '@media(min - width: 600px)': { minHeight: 0 };
  };
}
