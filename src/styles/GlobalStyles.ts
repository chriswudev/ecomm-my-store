import { createGlobalStyle } from 'styled-components';
import Screen from './Screens';

import '@fontsource/manrope';

const GlobalStyles = createGlobalStyle`
/* variables  */
:root {
  /** colors */
  --orange-color-1: #e24727;
  --orange-color-2: #ffe8e6;
  --blue-color-1: #155e75;
  --blue-color-2: #edffec;
  --blue-color-3: #efeff0;
  --blue-color-4: #075985;
  --bg-color: #fff;
  --red-color-1: #e11d48;
  --green-color-1: #16a34a;
  --gray-color-1: #6b7280;
  --gray-color-2: #d6d7da41;
  --white-color: #fff;

  /** sizes */
  --max-width: 1300px;
  --header-height: 6rem;

  /** styles */
  --transition: 0.3s;
  --radius: 0.35rem;

  /* font-sizes */
  --fs-900: 9.375rem;
  --fs-800: 3rem;
  --fs-700: 2.5rem;
  --fs-600: 2rem;
  --fs-500: 1.62rem;
  --fs-400: 1.425rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
}

/* resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

/*? typography */
html {
  font-size: 0.525rem;  //8px

  ${Screen.sm`
    font-size: 0.562rem;  //9px
  `}

  ${Screen.md`
    font-size: 0.625rem;  //10px
  `}

  ${Screen.lg`
    font-size: 0.75rem; //12px
  `}
}

/*? global styles */

body {
  background: var(--bg-color);
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

img {
  width: 100%;
  height: 100%;
}

section {
  width: min(100%, var(--max-width));
  margin-inline:  auto;
}
main {
  margin-top: var(--header-height);
}

a {
  color: var(--green-color-1);
  transition: var(--transition);
}
a:hover {
  color: var(--blue-color-1);
}
/*? global class */

.page {
  min-height: calc(
    100vh -
      (var(--header-height))
  );
}
.page-w-b {
  margin-top: var(--header-height);
  min-height: calc(100vh - (var(--header-height)));
}
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ellipsis-2-lines {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
`;

export default GlobalStyles;
