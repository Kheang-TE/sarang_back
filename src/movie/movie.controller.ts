import { Controller, Get, Param, Req } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Request } from 'express';

@Controller('movie')
export class MovieController {

    constructor( private readonly movieService: MovieService) {}

    @Get('popular')
    async getPopular(@Req() request: Request) : Promise<Object>{
        const query = request.query;
        const response = await this.movieService.getPopular( query );
        return response.data;
    }

    @Get('now-playing')
    async getNowPlaying(@Req() request: Request) : Promise<Object>{
        const query = request.query;
        const response = await this.movieService.getNowPlaying(query);
        return response.data;
    }

    @Get('top-rated')
    async getTopRated(@Req() request: Request) : Promise<Object>{
        const query = request.query;
        const response = await this.movieService.getTopRated(query);
        return response.data;
    }

    @Get('upcoming')
    async getUpComing(@Req() request: Request) : Promise<Object>{
        const query = request.query;
        const response = await this.movieService.getUpcoming(query);
        return response.data;
    }

    @Get(':id')
    async getMovieById(@Param() params: any) : Promise<Object>{
        const id = +params.id;
        const response = await this.movieService.getMovieById(id);
        return response.data;
    }

}
