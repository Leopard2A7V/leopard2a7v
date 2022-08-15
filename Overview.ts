const BIRTH = 938970000000;
const YEAR_IN_MILISECOND = 31536000000;
class ImperialTuHo {
    Name: string;
    Age: number;
    Gender: string;
    Address: string;
    Knowlegde: string;
    Skill: string[];
    TechnicalKnowlegde: string[]
    Quote: string;
    constructor(_self_:any) {
        this.Name = 'Imperial Tu Ho';
        this.Age = (Date.now() - BIRTH)/YEAR_IN_MILISECOND;
        this.Gender = 'Male';
        this.Address = 'My Tho city, Tien Giang Provine';
        this.Knowlegde = 'University';
        this.Skill = ['C/C++', 'JavaScript/TypeScript', 'Python'];
        this.TechnicalKnowlegde = ['NodeJS/Express', 'NestJS', 'Django', 'PostgreSQL', 'MongoDB', 'TypeORM']
        this.Quote = `Rank doesn't matter`
    }
    private LifeCircle(success:string) {
        while(success !== 'OK'){
            tryAgain();
            if(success) {
                improve();
            }
        }
    }
}
