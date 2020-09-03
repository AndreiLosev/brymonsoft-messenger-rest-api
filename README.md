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

        Из папки проекта заустить комануд: npm start    Из ппки проекта заустить комануд: npm start
    
    Из папки проекта заустить комануд: mpn run-script init - эта команда создаст пользлвателя 
        {name: 'admin11', password: 'admin11'} в базе данных в обход авторизации 
    Из папки проекта заустить комануд: npm start


## REST API методы:
###     `Авторизация`
    
    METOD: POST
    URL: <hostname>/signin
    HEADERS: Content-Type: application/json
    BODY: {name: String, password: String}
    RESPONSE {token: <session token>}

###  `Получить всех пользователей`

    METOD: GET
    URL: <hostname>/user
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY: 
    RESPONSE: 
		[
			{
				_id: mongoose.Schema.Types.ObjectId,
				name: String,
				password: String,
				"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				"avatar"?: String,
			},
			.....
		]

###  `Создать пользователя`

    METOD: POST
    URL: <hostname>/user
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY:
			{
				name: String,
				password: String,
				"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				"avatar"?: String,
			},

    RESPONSE:
			{
				"message": "user created",
				"user": {
						_id: mongoose.Schema.Types.ObjectId,
						name: String,
						password: String,
						"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
						"avatar"?: String,
				}
			}

###     `Обновить позльзователя`
    METOD: PUT
    URL: <hostname>/user/<id пользователя>
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY:
			{
				name?: String,
				password?: String,
				"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				"avatar"?: String,
			},

		RESPONSE:
			{
				_id: mongoose.Schema.Types.ObjectId,
				name?: String,
				password?: String,
				"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				"avatar"?: String,
			}

###     `Удалить позльзователя`
	  METOD: Delete
    URL: <hostname>/user/<id пользователя>
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY:

		RESPONSE:	{"message": "user removed"}


###		`Найти пользователей`

    METOD: GET
    URL: <hostname>/find/<user name or user phone> 
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY: 
    RESPONSE: 
		[
			{
				_id: mongoose.Schema.Types.ObjectId,
				name: String,
				"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				"avatar"?: String,
			},
			.....
		]