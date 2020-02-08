export interface I_APP_PATHES {
    [key: string]: string;
}

export const APP_PATHS: I_APP_PATHES = {
    HOME: '/',
    REGISTER: '/register',
    LOGIN: '/login',
    ARTICLE: '/article/:id'
}
