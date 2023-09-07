// 1. Normal Javascript way
// const names = [];
// names.push("Swayam");

// 2. Typescript Way 
const superHeros: string[] = [];

// 3. Generic way to Define array in TS
const superNumbers: Array<number> = [];

// 4. Objects inside array
type HeroInfo = {
    name: string,
    powerName: string,
    powerLevel: number,
    id: string,
    isCool: boolean
}
const hero: HeroInfo[] = [];
hero.push({
    name:"Swayam",
    powerName:"HeatSensor", 
    powerLevel:6, 
    id:"ASDSADSD5",
    isCool: true
});

// 2D Arrays
const coordinators: number[][]= [
    [1,1,1],
    [2,3,4,5]
];
