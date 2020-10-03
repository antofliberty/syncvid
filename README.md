# syncvid
Синхронный просмотр видео

## Установка
1) `git clone https://github.com/antofliberty/syncvid`
2) Открыть порт 8889 и 8080 на роутере или если вы устанавливаете на VPS, тогда `sudo ufw allow 8889/tcp` и `sudo ufw allow 8080/tcp`
3) `cd wss`
4) `screen`
5) `node index.js`
6) Нажать Ctrl+D, затем Ctrl+A
7) `cd ..`
8) `http-server`
9) Вы прекрасны! Можете заходить на ваш_ip:8080 и смотреть видео синхронно.


#### Как сменить видео
В файле `index.html` в 24 строке исправьте `src` на ваше видео.
