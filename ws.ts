import WebSocket from 'ws';
import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import cron from 'node-cron'



const connectWebsocket = (symbol: string, io: any) => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`)

    ws.onopen = () => {
        console.log('connected')
    }

    ws.onmessage = (msg: any) => {
        const data = JSON.parse(msg.data)
        console.log(data);
        
        io.emit(
            `send-data-${data.s}`,
            data.p
        );
    }

    ws.onclose = () => {
        console.log('disconnected')
        setTimeout(() => {
            connectWebsocket(symbol, io)
        }, 3000)
    }
}


const socket_service = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    const symbols = ["ETHUSDT","XRPUSDT","ADAUSDT","MATICUSDT","DOTUSDT","TRXUSDT","AVAXUSDT","UNIUSDT","LTCUSDT","ATOMUSDT","LINKUSDT","FTTBUSD","ETCUSDT","XLMUSDT","XMRUSDT","ALGOUSDT","NEARUSDT","BCHUSDT","FILUSDT","VETUSDT","ICPUSDT","APEUSDT","XTZUSDT","SANDUSDT","THETAUSDT","AAVEUSDT","MANAUSDT","EOSUSDT","AXSUSDT","ZECUSDT","KLAYUSDT","CAKEUSDT","FTMUSDT","NEOUSDT","MINAUSDT","RUNEUSDT","DASHUSDT","ENJUSDT","ZILUSDT","WAVESUSDT","LRCUSDT","HOTUSDT","XEMUSDT","CELOUSDT","TFUELUSDT","ROSEUSDT","GALAUSDT","SCUSDT","KNCUSDT","OCEANUSDT","GMTUSDT","ALICEUSDT","JASMYUSDT","1INCHUSDT","DODOUSDT","BTCUSDT","DOGEUSDT","STMXUSDT","LINAUSDT","SNXUSDT","QTUMUSDT","OGNUSDT","CELRUSDT","BELUSDT","SOLUSDT","KSMUSDT","MKRUSDT","UNFIUSDT","LITUSDT","BALUSDT","ENSUSDT","C98USDT","BANDUSDT","DUSKUSDT","TLMUSDT","IOSTUSDT","ANCUSDT","KAVAUSDT","BAKEUSDT","CRVUSDT"]
    
    symbols.forEach(element => {
        connectWebsocket(element, io)
    });

    cron.schedule('3 * * * * *', () => {
        symbols.forEach(element => {
                io.emit(
                    `send-data-${element}`,
                );
        });
    });
}

export default socket_service