export default interface DefaultTheme {
  mixins: {
    toolbar: Object;
    minHeight: 56;
    '@media(min - width: 0px) and(orientation: landscape)': { minHeight: 48 };
    '@media(min - width: 600px)': { minHeight: 64 };
  };
}
