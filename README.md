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


### Как сменить видео
В файле `video.html` в 24 строке исправьте `src` на ваше видео.

### Проксирование с помощью nginx
В конфиг добавьте
```
location = / {
         if ($http_upgrade = "websocket") {
             proxy_pass http://ваш_ip:8889;
         }
         proxy_http_version 1.1;
         proxy_set_header Upgrade websocket;
         proxy_set_header Connection upgrade;
     }
     
```

### Возможные проблемы
Если вы в `video.html` в 31 строке указываете домен, то есть проксируете с nginx на ws, то там может быть параметр
`proxy_read_timeout`, который по умолчанию `proxy_read_timeout 60s`;
Контекст: http, server, location

Я про этот параметр не знал, поэтому у меня и отправляется сообщение `PING` каждые 30 секунд. 
