// Kettle object

let Kettle = function (name, power) {
    
    //Технические свойства чайника
    
    this.name = name;
    this.power = power;
    this.volumeWater;

    //Функции чайника
    
    this.enable = function () {
        this.switch = prompt('Введите "On"');
        if (this.switch == false) {
            alert('Включи меня!');
            this.enable();

        } else if (this.switch == 'on') {
            this.getWater();
        } else this.enable();
    }

    this.getWater = function () {
        this.volumeWater = +prompt('Влейте воду в литрах');
        
        if (this.volumeWater == 1 || this.volumeWater == 2 || this.volumeWater == 3) {
            this.boiling();
        } else if (this.volumeWater == 0) {
            alert('Воду все же нужно влить!');
            this.getWater();
        } else if (this.volumeWater >= 3) {
            alert('Очень много воды, не справлюсь!');
            this.getWater();
        } else {
            alert('Я отказываюсь работать');
            this.enable();
        }
    }

    this.boiling = function () {
        
        switch (this.volumeWater) {
            case 1:
                this.boilTime = 3;
                break;
            case 2:
                this.boilTime = 5;
                break;
            case 3:
                this.boilTime = 7;
                break;
            default:
                this.boilTime = 0;
                break;
        }
        this.showTime();
    }

    this.showTime = function () {
        alert('Время закипания воды ' + this.boilTime);
    }
}

let kettle = new Kettle('Bosch', 1000);
kettle.enable();