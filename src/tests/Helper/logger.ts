import { error, info } from "console";
import winston from "winston";
const {combine,timestamp,printf,prettyPrint}=winston.format;
export const logger=winston.createLogger({
    level:"info",
    format:combine(
        timestamp(),
        printf((info)=>`${info.timestamp} ${info.level} : ${info.message}`)
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"logSteps.log",level:"error"})
    ]
    
})