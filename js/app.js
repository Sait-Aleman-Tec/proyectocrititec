// Model === Data , View === UI, Controller === Brain - 



//MVC de Dato-Controlador-View
//Model
const model = {
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Red Dead Redemption 2',
            imgSrc: 'images/rdr21.png',
        },
        {
            clickCount: 0,
            name: 'Halo Infinite',
            imgSrc: 'images/jeilo1.png',
        },
        {
            clickCount: 0,
            name: 'Mortal Shell',
            imgSrc: 'images/mortal_shell1.png',
        },
        {
            clickCount: 0,
            name: 'Mortal Kommbat 11',
            imgSrc: 'images/mk1.png',
        },
        {
            clickCount: 0,
            name: 'Assassin´s Creed Odyssey',
            imgSrc: 'images/Assassins_Creed_ Odyssey1.png',
        },

        {
            clickCount: 0,
            name: 'Planet Zoo',
            imgSrc: 'images/planetzoo1.png',
        },

        {
            clickCount: 0,
            name: 'Cyberpunk',
            imgSrc: 'images/cyberpunk1.png',
        },

        {
            clickCount: 0,
            name: 'Ghost Recon Breakpoint',
            imgSrc: 'images/Ghost_Recon_ Breakpoint1.png',
        },
    ],
};

// Controller
const controller = {
    init() {
        
        model.currentCar = model.cars[0];

        
        carListView.init();
        carView.init();
    },

    getCurrentCar() {
        return model.currentCar;
    },

    getCars() {
        return model.cars;
    },

    
    setCurrentCar(car) {
        model.currentCar = car;
    },

   
    incrementCounter() {
        model.currentCar.clickCount++;
        carView.render();
    },
};



// Views
const carView = {
    init() {
        
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');

        
        this.carImageElem.addEventListener('click', this.clickHandler);

       
        this.render();
    },

    clickHandler() {
        return controller.incrementCounter();
    },

    render() {

        const currentCar = controller.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
};

const carListView = {
    init() {
       
        this.carListElem = document.getElementById('car-list');

      
        this.render();
    },

    render() {
        let car;
        let elem;
        let i;
       
        const cars = controller.getCars();

       
        this.carListElem.innerHTML = '';

        
        for(let i = 0; i < cars.length; i++) {
           
            car = cars[i];

           
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener(
                'click',
                (function(carCopy) {
                  return function() {
                    controller.setCurrentCar(carCopy);
                    carView.render();
                  };
                })(car)
              );
 
                this.carListElem.appendChild(elem);
        }
    },
};




controller.init();