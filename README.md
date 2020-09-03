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

###  `Получить пользователя`

    METOD: GET
    URL: <hostname>/user/<user id>
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY: 
    RESPONSE: 
			{
				_id: mongoose.Schema.Types.ObjectId,
				name: String,
				"phone"?: String, // onli 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
				"avatar"?: String,
			}

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

###		`Отправить сообщени`

METOD: POST
    URL: <hostname>/message
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY:
		{
			text: String,
			authorID: mongoose.Schema.Types.ObjectId, // автор сообщеня
			recipientID: mongoose.Schema.Types.ObjectId, // получатель сообшения
		}

    RESPONSE:
			{
				"_id": <message id>,
				"text": String
				"authorID": <user id>,
				"recipientID": <user id>,
				"added": true,
				"viewed": false,
				"created": "2020-09-03T17:43:00.091Z",
			}

###		`Получить диалог с пользователем`

METOD: PUT
    URL: <hostname>/message
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY:
		{
			"userID": "5f50ae13b9eb57cbb132666a", //текщий пользователь
			"interlocutorID": "5f50b12e30c049ce47359a43" // собеседник пользователя
		}

    RESPONSE: // массив сообщений отсортерованный по дате 
		[
				{
						"_id": "5f50c20704954ddfc175bc22",
						"text": "привет я админ давай дружить",
						"authorID": "5f50ae13b9eb57cbb132666a",
						"recipientID": "5f50b12e30c049ce47359a43",
						"added": true,
						"viewed": true,
						"created": "2020-09-03T10:14:31.658Z",
						"__v": 0,
						"name": "admin",
						"avatar": "http:\\1111"
				},
				{
						"_id": "5f50c23404954ddfc175bc23",
						"text": "привет, меня заут Никида, а как завут тебя",
						"authorID": "5f50b12e30c049ce47359a43",
						"recipientID": "5f50ae13b9eb57cbb132666a",
						"created": "2020-09-03T10:15:16.705Z",
						"__v": 0,
						"name": "Nikita",
						"avatar": "http:\\1111"
				},
			.....
		]


###		`Удалить сообщение`

		METOD: Delete
    URL: <hostname>/message/<id сообщения>
    HEADERS:
			Content-Type: application/json
			Authorization:  <session token>
    BODY:

		RESPONSE:	{"message": "message removed"}