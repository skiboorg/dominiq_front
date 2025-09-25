
export function createBlankRepository(appFetch: typeof $fetch){

    return {
        events(){
            return appFetch(`/api/data/events/`);

        },
        event(slug:string){
            return appFetch(`/api/data/events/${slug}`);

        },
        media_articles(){
            return appFetch(`/api/data/media-articles/`);

        },
        media_article(slug:string){
            return appFetch(`/api/data/media-articles/${slug}`);

        },
    }

}
