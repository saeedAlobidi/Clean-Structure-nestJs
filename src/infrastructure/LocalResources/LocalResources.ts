
import IlocalResources from '../../Application/Interfaces/LocalResources/IlocalResources'
import  * as i18next from 'i18next'; 
       
export default class LocalResources implements IlocalResources{
    async getMessage(lan: any, key: any): Promise<String>{ 
        
        await i18next.changeLanguage(lan)
        return i18next.t(key)
    }
    
}