import {FetchInterceptor} from './module/FetchInterceptor';
import {Logger} from './module/Logger';

(() => {
    Logger.info('Инициализация перехватчика...', '', true);
    new FetchInterceptor().enableInterception();
})();