import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { apiKey, baseUrl, originalLanguage, options } from '../utils/api_tmdb';

@Injectable()
export class MovieService {

    private readonly apiKey: string;
    private readonly baseUrl: string;
    private readonly options: any;

    constructor( private readonly httpService: HttpService ) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.options = options;
    }

    async getPopular(query: Object) : Promise<AxiosResponse<any>>{
        // retourne la langue originale si elle est supportée par l'API (sinon, retourne la langue coréenne)
        query['with_original_language'] = originalLanguage(query);

        // fusionne les paramètres de requête avec les paramètres par défaut et les paramètres populaires
        const option = {
            params: {...query, ...this.options.default, ...this.options.popular}
        };

        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, option);
        return lastValueFrom(response);
    }

    async getNowPlaying(query: Object) : Promise<AxiosResponse<any>>{
        // retourne la langue originale si elle est supportée par l'API (sinon, retourne la langue coréenne)
        query['with_original_language'] = originalLanguage(query);

        // fusionne les paramètres de requête avec les paramètres par défaut et les paramètres populaires
        const option = {
            params: {...query, ...this.options.default, ...this.options.popular}
        };

        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, option);
        return lastValueFrom(response);
    }

    async getTopRated(query: Object) : Promise<AxiosResponse<any>>{
        // retourne la langue originale si elle est supportée par l'API (sinon, retourne la langue coréenne)
        query['with_original_language'] = originalLanguage(query);

        // fusionne les paramètres de requête avec les paramètres par défaut et les paramètres populaires
        const option = {
            params: {...query, ...this.options.default, ...this.options.popular}
        };

        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, option);
        return lastValueFrom(response);
    }

    async getUpcoming(query: Object) : Promise<AxiosResponse<any>>{
        // retourne la langue originale si elle est supportée par l'API (sinon, retourne la langue coréenne)
        query['with_original_language'] = originalLanguage(query);

        // fusionne les paramètres de requête avec les paramètres par défaut et les paramètres populaires
        const option = {
            params: {...query, ...this.options.default, ...this.options.popular}
        };

        const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, option);
        return lastValueFrom(response);
    }

    getMovieById(id: number) : Promise<AxiosResponse<any>>{
        const option = {
            params: this.options.default
        };
        const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
        const response = this.httpService.get(url, option);
        return lastValueFrom(response);
    }
}
