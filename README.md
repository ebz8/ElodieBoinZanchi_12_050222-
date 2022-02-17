# SportSee
[Openclassrooms Front-End P12](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react) | VERSION 1.0 |   ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

with Create React App, Sass, Recharts, JsDoc & better-doc,

documented [here](https://ebz8.github.io/ElodieBoinZanchi_12_050222-/).

[live demo on Netlify](https://elodieboinzanchi-12050222.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/f59af8bb-a50b-4eff-a2de-7f146f47850d/deploy-status)](https://app.netlify.com/sites/elodieboinzanchi-12050222/deploys)

### Prerequisites

- [NodeJS (**v.12.18**)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1 | Back-end

1. Download or clone the back-end's repository :

```sh
git clone https://github.com/ebz8/P9-front-end-dashboard.git
```

2. Install dependencies :

```sh
# NPM
npm install

# Yarn
yarn install
```

Inside this back-end repository, install dependencies :

```sh
# NPM
npm install

# Yarn
yarn install
```

3. Launch back-end on port 3000 (default port) :

```sh
# NPM
npm run start

# Yarn
yarn dev
```

### 1 | Front-end

1. Clone this repository :

`git clone https://github.com/ebz8/ElodieBoinZanchi_12_050222-.git`

2. Install dependencies:

```sh
# NPM
npm install

# Yarn
yarn install
```

3. Launch dev server on port 3001 :

```sh
# NPM
npm start
```

4. Front-end is now rendered at URL `http://localhost:3001` with mocked data. If you want to switch to real backend data, go to `my-app/src/data/config.js` [(this file)](https://github.com/ebz8/ElodieBoinZanchi_12_050222-/blob/9cfa6384b9b182fb9f3ff46fb5185f03a0860b4d/my-app/src/data/config.js) and set `currentUrl` constant from `urlMockAPI` to `urlAPI`.

5. You also can build a production version and serve it with a static server :

```sh
# NPM
npm run build
npm run serve

# Yarn
yarn global add serve
serve -s build
```