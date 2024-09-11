import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { apiKey, baseUrl, originalLanguage, options } from '../utils/api_tmdb';


@Injectable()
export class TvService {

    private readonly apiKey: string;
    private readonly baseUrl: string;
    private readonly url: string;
    private readonly options: any;

    constructor( private readonly httpService: HttpService ) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.options = options;
        this.url = `${this.baseUrl}/discover/tv?api_key=${this.apiKey}`;
    }

    async getPopular(query: Object) : Promise<AxiosResponse<any>>{
        query['with_original_language'] = originalLanguage(query);
        const option = {
            params: {...query, ...this.options.default, ...this.options.tv_popular}
        };
        const response = this.httpService.get(this.url, option);
        return lastValueFrom(response);
    }

    async getTopRated(query: Object) : Promise<AxiosResponse<any>>{
        query['with_original_language'] = originalLanguage(query);
        const option = {
            params: {...query, ...this.options.default, ...this.options.tv_topRated}
        };
        const response = this.httpService.get(this.url, option);
        return lastValueFrom(response);
    }

    async getTvById(id: number) : Promise<AxiosResponse<any>>{
        const option = {
            params: this.options.default
        };
        const url = `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, option);
        return lastValueFrom(response);
    }

}
