import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { DomainGuard } from './Core/Guard/DomainGuard';
import { LoggingInterceptor } from './Core/Interceptors/LoggingInterceptor';
import * as csurf from 'csurf';
import * as helmet from 'helmet';
import local from './application/LocalResources/config'
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
    port: 8877,
    
  },
};

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(AppModule);
  
  const microservice = await app.connectMicroservice<MicroserviceOptions>({
   
    transport: Transport.REDIS,
    options: {
      url: 'redis://127.0.0.1:6379',
    }
  })
    local()
 
    //app.enableCors();
 
    // app.use(helmet.contentSecurityPolicy());
  // app.use(helmet.crossOriginEmbedderPolicy());
  // app.use(helmet.crossOriginOpenerPolicy());
  // app.use(helmet.crossOriginResourcePolicy());
  // app.use(helmet.dnsPrefetchControl());
  // app.use(helmet.expectCt());
  // app.use(helmet.frameguard());
  // app.use(helmet.hidePoweredBy());
  // app.use(helmet.hsts());
  // app.use(helmet.ieNoOpen());
  // app.use(helmet.noSniff());
  // app.use(helmet.originAgentCluster());
  // app.use(helmet.permittedCrossDomainPolicies());
  // app.use(helmet.referrerPolicy());
  // app.use(helmet.xssFilter());
  // app.useGlobalGuards(new DomainGuard());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  //app.use(csurf());
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();



 
/**
 * import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import * as csurf from 'csurf';
import * as helmet from 'helmet';
import local from './application/LocalResources/config'
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://localhost:6379',
    },
  });
  local()



  // app.use(helmet.contentSecurityPolicy());
  // app.use(helmet.crossOriginEmbedderPolicy());
  // app.use(helmet.crossOriginOpenerPolicy());
  // app.use(helmet.crossOriginResourcePolicy());
  // app.use(helmet.dnsPrefetchControl());
  // app.use(helmet.expectCt());
  // app.use(helmet.frameguard());
  // app.use(helmet.hidePoweredBy());
  // app.use(helmet.hsts());
  // app.use(helmet.ieNoOpen());
  // app.use(helmet.noSniff());
  // app.use(helmet.originAgentCluster());
  // app.use(helmet.permittedCrossDomainPolicies());
  // app.use(helmet.referrerPolicy());
  // app.use(helmet.xssFilter());
  // app.useGlobalGuards(new DomainGuard());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  //app.use(csurf());

  await app.listen();
}
bootstrap();

 */