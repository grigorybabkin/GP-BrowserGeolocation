# GP-BrowserGeolocation
[Project](https://github.com/grigorybabkin/GP-BrowserGeolocation) | 
[Github Page](https://grigorybabkin.github.io/GP-BrowserGeolocation/)

Проект - реализованная страница, предоставляющая информацию о нахождении пользователя (координаты и название города, полученное с помощью [API сервиса](https://dadata.ru/api/geolocate/))

Страница проекта является гибкой и подстраивается под изменение экрана браузера.

## Структура проекта
```bash
GP-BrowserGeolocation
├── public                     
│     
├── srs                    # каталог с реализацией и стилями компонента         
│    ├── App.css                      
│    ├── App.tsx
│    ├── ...              
│    └── vite-env.d.ts                       
│    
├── ...
└── README.md
```
### Требования
```bash
node.js --version >= 18
yarn    --version >= 1.22
npm     --version >= 8
```

### Сборка проекта

```bash
$ git clone https://github.com/grigorybabkin/GP-BrowserGeolocation.git
```
```bash
$ cd GP-FigmaDesignToPage
```
```bash
$ yarn
```
```bash
$ yarn build
```
