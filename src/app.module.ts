import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MovieModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
