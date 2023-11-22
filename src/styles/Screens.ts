const Screens = {
  sm: (styles: TemplateStringsArray) => {
    return `@media (min-width:576px){${styles}}`;
  },
  md: (styles: TemplateStringsArray) => {
    return `@media (min-width:768px){${styles}}`;
  },
  lg: (styles: TemplateStringsArray) => {
    return `@media (min-width:992px){${styles}}`;
  },
  xl: (styles: TemplateStringsArray) => {
    return `@media (min-width:1200px){${styles}}`;
  },
  xxl: (styles: TemplateStringsArray) => {
    return `@media (min-width:1400px){${styles}}`;
  },
};

export default Screens;
