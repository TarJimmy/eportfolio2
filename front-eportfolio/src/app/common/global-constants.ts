import frenchLocale from "../../locales/fr.json";
import englishLocale from "../../locales/en.json";
export class GlobalConstants {

    public static attachment_path : String = window.origin.concat('/attachments/');
    public static locale = () => {
        switch (localStorage.getItem('lang')) {
            case 'fr':
                return frenchLocale;
                break;
            case 'en':
                return englishLocale;
                break
            default:
                return frenchLocale;
                break;
        }
    };

    public static shortLocale = localStorage.getItem('lang') === 'fr' ? 'fr' : 'en';

    public static getCompletePath(endPath : string) {
        return GlobalConstants.attachment_path.concat(endPath);
    }
    constructor() {}
}
