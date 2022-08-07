import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  --color-white: #ffffff;
  --color-black: #010101;
  --color-primery-text: #82909e;
  --background-color-primery: #f3f6f9;
  --background-color-secondary: #10c0d9;
  --shadow-color-primery: rgba(0, 0, 0, 0.2) 0px 2px 3px;
  --shadow-color-secondary: rgba(136, 165, 191, 0.5) 0px 3px 5px 1px;
}
body {
  min-height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3 {
  margin: 0;
  padding: 0;
  color: var(--color-black);
}
h2 {
  font-size: 18px;
}
p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: var(--color-black);
}

img {
  display: block;
  height: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;
