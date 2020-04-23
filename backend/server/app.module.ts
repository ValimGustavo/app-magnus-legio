import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './src/user/user.controller';
import { UserService } from './src/user/user.service';
import { CalendarioController } from './src/calendario/calendario.controller'
import { CalendarioService } from 'src/calendario/calendario.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'pages'),
    }),
  ],
  controllers: [AppController, UserController, CalendarioController],
  providers: [AppService, UserService, CalendarioService],
})
export class AppModule {}
