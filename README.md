## Как запустить приложение

### `1-й вариант. Использовать мою облачную базу mongoDB (подключение возможно с любого IP)`

    фаил scr/config/app.js
        изменить переменную "appProt: 4000", порт на котором запускается сервер
    
    Из папки проекта заустить комануд: npm start

### `2-й вариант. Использовать собственную базу данных mongoDB`
        фаил scr/config/app.js
        изменить переменные:
         "appProt: 4000", порт на котором запускается сервер
            mongoUri: 'mongodb+srv://andrei:elmoelmo@cluster0.gkh65.mongodb.net/test' url доатсуп к базе данных

        Из ппки проекта заустить комануд: npm start    Из ппки проекта заустить комануд: npm start    Из ппки проекта заустить комануд: npm start
    
    Из папки проекта заустить комануд: mpn run-script init - эта команда создаст пользлвателя {name: 'admin11', password: 'admin11'} в базе данных в обход аунтификации 
    Из папки проекта заустить комануд: npm start


## REST API методы:
