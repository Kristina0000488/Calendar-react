// Основа календаря

class Clndr {
    // метод для получения дней
    getDays(year=this.getCurrentYear(), month=new Date().getMonth())
    {
        const monthIndex = month;
        const date       = new Date(year, monthIndex, 1);
        const result     = [];

        while (date.getMonth() === monthIndex) {
            result.push(`${date.getDate()}`);
            date.setDate(date.getDate() + 1);
        }
        
        return result;
    }

    // получение месяцев
    getMonths()
    {
        return [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    }

    // получение текущего года
    getCurrentYear()
    {
        return new Date().getFullYear();
    }

    // получение текущего дня
    getCurrentDay()
    {
        return new Date().getDate();
    }

    // получение текущего месяца
    getCurrentMonth()
    {
        const index = new Date().getMonth();

        return this.getMonths()[index];
    }

    // получение списка годов
    getYears(currentYear=this.getCurrentYear(), startYear=1990)
    {
        const years = [];

        while ( startYear <= currentYear ) {
            years.push(+(startYear++));
        }   

        return years;
    }
}

const date = new Clndr();

export default date;