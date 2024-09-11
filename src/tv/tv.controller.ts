import { Controller, Get, Param, Redirect, Req } from '@nestjs/common';
import { TvService } from './tv.service';
import { Request } from 'express';

@Controller('tv')
export class TvController {

    constructor( private readonly  tvService: TvService ) {}

    @Get()
    @Redirect('popular')
    getTv(){}

    @Get('popular')
    async getPopular(@Req() request: Request) : Promise<Object>{
        const query = request.query;
        const response = await this.tvService.getPopular( query );
        return response.data;
    }

    @Get('top-rated')
    async getTopRated(@Req() request: Request) : Promise<Object>{
        const query = request.query;
        const response = await this.tvService.getTopRated(query);
        return response.data;
    }

    @Get(':id')
    async getTvById(@Param() params: any) : Promise<Object>{
        const id = +params.id;
        const response = await this.tvService.getTvById(id);
        return response.data;
    }
}
