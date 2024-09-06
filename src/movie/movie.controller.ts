import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {

    constructor( private readonly movieService: MovieService) {}

    @Get('popular')
    async getPopular() : Promise<any>{
        const response = await this.movieService.getPopular();
        return response.data;
    }

    @Get('now-playing')
    async getNowPlaying() : Promise<any>{
        const response = await this.movieService.getNowPlaying();
        return response.data;
    }

    @Get('top-rated')
    async getTopRated() : Promise<any>{
        const response = await this.movieService.getTopRated();
        return response.data;
    }

    @Get('upcoming')
    async getUpComing() : Promise<any>{
        const response = await this.movieService.getUpcoming();
        return response.data;
    }

}
