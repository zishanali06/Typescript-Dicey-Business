let diecount = 0;
let diearray = [];

class Dice {
    constructor(diecount) {
        this.newdiv = $('<div class="dice block"></div>');
        this.roll();
        this.diecount = diecount;
        $('.diceboard').append(this.newdiv);
        this.newdiv.click(() => this.roll());
        this.newdiv.dblclick(() => {
            //remove from dom
            this.newdiv.remove();
            //remove from global array
            diearray.splice(diearray.indexOf(this), 1);
        });
    }

    roll() {
        this.value = randomNum();
        this.newdiv.empty();
        this.newdiv.append(this.value);
    }

};

let randomNum = () => Math.floor(Math.random() * 6) + 1;

$('#generate').click(() => {
    let newdie = new Dice(diecount);
    diecount++;
    diearray.push(newdie);
})

$('#rolldice').click(() => {
    // for (let dice of diearray) {
    //     dice.roll();
    // }

    //above dice === below diearray[i]

    // for(let i = 0; i < diearray.length; i++) {
    //     diearray[i].roll();
    // }

    diearray.forEach(e => e.roll());
})

$('#sumdice').click(() => {
    let sum = 0;
    //ES6 Syntax for running for of thru an Array
    for (let dice of diearray) {
        sum += dice.value;
    }
    console.log(sum);
})