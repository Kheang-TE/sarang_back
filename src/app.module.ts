import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { HttpModule } from '@nestjs/axios';
import { TvModule } from './tv/tv.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, MovieModule, TvModule, UserModule, AuthModule, ConfigModule.forRoot({isGlobal: true,})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
