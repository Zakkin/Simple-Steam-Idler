const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: process.env.STEAM_USERNAME,  // Используем переменные окружения
	password: process.env.STEAM_PASSWORD
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);  // 1 - онлайн, 7 - невидимый
	user.gamesPlayed([440, 730, 570]);  // Список ID приложений
});
