# NewsAnalyzer
Дипломный проект студента Яндекс.Практикума (front-end)

## О проекте
__NewsAnalyzer__ - сервис анализа происходящих в мире событий. Его задача - установить, насколько популярны новости на определённыю тему.
#### Сайт состоит из с трех страниц:
1. Главная. Содержит только окно поиска.
2. Страница «О проекте». Содержит информацию о работе: что это за проект, кто его делал, какими технологиями пользовался.
3. Страница с аналитикой. На ней отображается диаграмма популярности новостей.

## Технологии
- [BEM](https://en.bem.info/)
- [git](https://git-scm.com/)
- [webpack](https://webpack.js.org/)
    - [Define plugin](https://webpack.js.org/plugins/define-plugin/)
    - [Style loader](https://github.com/webpack-contrib/style-loader)
    - [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
    - [Autoprefixer](https://github.com/postcss/autoprefixer#webpack)
    - [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
    - [FileLoader](https://github.com/webpack-contrib/file-loader)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
    - [win-node-env](https://www.npmjs.com/package/win-node-env)
    - [Optimize CSS assets](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)
    - [WebpackMd5Hash](https://www.npmjs.com/package/webpack-md5-hash)
    - [win-node-env](https://www.npmjs.com/package/win-node-env)
    - [image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader)
- [Babel](https://babeljs.io);
    - [Babel CLI](https://babeljs.io/docs/en/babel-cli#docsNav)
    - [Babel Core](https://babeljs.io/docs/en/babel-core)
    - [Babel Preset Enviroment](https://babeljs.io/docs/en/babel-preset-env#docsNav)
- [Core JS](https://github.com/zloirock/core-js)
- [PostCSS](https://postcss.org/)
- [SwiperJS](https://swiperjs.com/)

## Установка
1. Клонируйте или скачайте [репозиторий](https://github.com/MaxSavostyanov/NewsAnalyzer).
2. Установите webpack и все плагины, перечисленные в списке [Технологии](#Технологии).
3. Если у вас нет [Node.js](https://nodejs.org/en/), установите его.
4. Если вы работаете на Windows, установите [win-node-env](https://www.npmjs.com/package/win-node-env).
    `$ npm install --save-dev win-node-env`
5. Сборка проекта:
    `$ npm run build`
6. Запустить проект на локальной машине:
    `$ npm run dev`

