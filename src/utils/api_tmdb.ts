import 'dotenv/config';

export const apiKey = process.env.TMDB_API_KEY;
export const baseUrl = process.env.TMDB_BASE_URL;
export const apiLanguages = [
    {
        "iso_639_1": "ja",
        "english_name": "Japanese",
        "name": "日本語"
    },
    {
        "iso_639_1": "ko",
        "english_name": "Korean",
        "name": "한국어/조선말"
    },
    {
        "iso_639_1": "zh",
        "english_name": "Mandarin",
        "name": "普通话"
    },
    {
        "iso_639_1": "cn",
        "english_name": "Cantonese",
        "name": "广州话 / 廣州話"
    },
];
export function originalLanguage ( query: Object) : string | void {
    const languages = apiLanguages.map((language) => {
        return language.iso_639_1;
    });
    if(query['with_original_language'] && !languages.includes(query['with_original_language'])){
        return query['with_original_language'] = 'ko';
    } else {
        return query['with_original_language'];
    }
}
export const options = {
    default: {
        include_adult: false,
        include_video: false,
        language: process.env.TMDB_LANGUAGE,
    },
    popular: {
        sort_by: 'popularity.desc',
    },
    nowPlaying: {
        sort_by: 'popularity.desc',
        with_release_type: 3,
    },

    topRated: {
        sort_by: 'vote_average.desc',
        vote_count_gte: 200,
    },
    upcomming: {
        with_release_type: 3,
    }
};