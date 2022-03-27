export default class WebSocketMessage {
    socket: WebSocket;
    static __instance: WebSocketMessage;
    callBack: (arg: any) => [];

    constructor(callBack: (arg: any) => [], userId?: string, chatId?: number, chatToken?: string) {
        if (userId && chatId && chatToken) {
            WebSocketMessage.__instance?.socket.close();
            this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${chatToken}`);
            this._registerEvents();
        } else {
            this.callBack = callBack;
            return WebSocketMessage.__instance;
        }

        WebSocketMessage.__instance = this;
        this.callBack = callBack;
    }
    private _registerEvents(): void {
        this.socket.addEventListener('open', this.open.bind(this));
        this.socket.addEventListener('message', this.message.bind(this));
        this.socket.addEventListener('error', this.error.bind(this));
        this.socket.addEventListener('close', this.close.bind(this));
    }
    open() {
        console.log('Соединение установлено');
        this.socket.send(JSON.stringify({
            content: '0',
            type: 'get old',
        }));
    }
    send(message: string) {
        this.socket.send(JSON.stringify({
            content: message,
            type: 'message',
        }));
    }

    message(event: Record<string, string>) {
        const data = JSON.parse(event.data);
        console.log('Получены данные', data);
        return this.callBack(data);
    }

    error(event: Record<string, string>) {
        console.log('Ошибка', event.message);
    }

    close(event: Record<string, string>) {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
        }

        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    }
}
