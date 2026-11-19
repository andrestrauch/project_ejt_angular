import { Service, signal } from '@angular/core';
import raceData from './../../../../public/assets/data/races.json' with { type: 'json' };
import classData from './../../../../public/assets/data/classes.json' with { type: 'json' };
import elementData from './../../../../public/assets/data/elements.json' with { type: 'json' };

interface Races {
  name: string;
  id: number;
  lp: number;
  mp: number;
  a: number;
  d: number;
  ra: number;
  rd: number;
  ma: number;
  md: number;
  speed: number;
  move: number;
}

interface Classes {
  name: string;
  id: number;
  lp: number;
  mp: number;
  a: number;
  d: number;
  ra: number;
  rd: number;
  ma: number;
  md: number;
  speed: number;
  move: number;
}

interface Elements {
  name: string;
  id: number;
  lp: number;
  mp: number;
  a: number;
  d: number;
  ra: number;
  rd: number;
  ma: number;
  md: number;
  speed: number;
  move: number;
  weakness: {}[];
}

interface Wappons {
  name: string;
  category: string;
  cat: string;
  dmga: string;
  dmgf: string;
  id: number;
  hand: number;
  as: number;
  ras: number;
  mas: number;
  rwa: number;
  rwr: number;
  rwm: number;
  rwx: number;
  '2h1': boolean;
  '1h2': boolean;
}

interface Shields {
  name: string;
  category: string;
  cat: string;
  dmga: string;
  dmgf: string;
  id: number;
  hand: number;
  d: number;
  rd: number;
  md: number;
  speed: number;
  move: number;
  as: number;
  ras: number;
  mas: number;
  rwa: number;
  rwr: number;
  rwm: number;
  rwx: number;
}

interface Armor {
  name: string;
  category: string;
  id: number;
  d: number;
  rd: number;
  md: number;
  speed: number;
  move: number;
}

// Waffen Affinität

// Waffenanfälligkeit

@Service()
export class Db {
  races = signal<Races[]>([]);
  classes = signal<Classes[]>([]);
  elements = signal<Elements[]>([]);

  dataTest() {
    if (raceData) {
      for (let index = 0; index < raceData.length; index++) {
        this.races()[index] = raceData[index];
      }
    }

    if (classData) {
      for (let index = 0; index < classData.length; index++) {
        this.classes()[index] = classData[index];
      }
    }

    if (elementData) {
      //   console.log(elementData);
      for (let index = 0; index < elementData.length; index++) {
        this.elements()[index] = elementData[index];
      }
      //   console.log(this.elements());
    }
  }
}
