import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MovieService {

    private readonly apiKey = process.env.TMDB_API_KEY;
    private readonly baseUrl = process.env.TMDB_BASE_URL;
    private readonly options = {
        default: {
            params: {
                include_adult: false,
                include_video: false,
                language: process.env.TMDB_LANGUAGE,
                page: 1,
            }
        },
        popular: {
            params: {
                sort_by: 'popularity.desc',
            }
        },
        nowPlaying: {
            params: {
                sort_by: 'popularity.desc',
                with_release_type: 2|3,
            }
        },
        topRated: {
            params: {
                sort_by: 'vote_average.desc',
                vote_count_gte: 200,
            }
        },
        upcomming: {
            params: {
                with_release_type: 2|3,
            }
        }
    }

    constructor( private readonly httpService: HttpService ) {}

    async getPopular() : Promise<AxiosResponse<any>>{
        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, this.options.popular);
        return lastValueFrom(response);
    }

    async getNowPlaying() : Promise<AxiosResponse<any>>{
        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, this.options.nowPlaying);
        return lastValueFrom(response);
    }

    async getTopRated() : Promise<AxiosResponse<any>>{
        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, this.options.topRated);
        return lastValueFrom(response);
    }

    async getUpcoming() : Promise<AxiosResponse<any>>{
        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, this.options.upcomming);
        return lastValueFrom(response);
    }

}
