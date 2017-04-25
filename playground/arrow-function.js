var square = x => x * x;

console.log(square(9));

var user = {
    name: 'Benoit',
    hi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    hiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
user.hi(1, 2, 3);