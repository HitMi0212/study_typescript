interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum PhtoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
}

export {
    PhoneNumberDictionary, 
    Contact, 
    PhtoneType
}