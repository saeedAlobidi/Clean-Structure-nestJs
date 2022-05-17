import { Module } from "@nestjs/common";
 import { SubController } from "./Controller/SubController";

 

 @Module({
    controllers: [SubController],
  
})
export class RedisModule {}
