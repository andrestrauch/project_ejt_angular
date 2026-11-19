import { Service, signal } from '@angular/core';
import raceData from './../../../../public/assets/data/races.json' with { type: 'json' };
import classData from './../../../../public/assets/data/classes.json' with { type: 'json' };
import elementData from './../../../../public/assets/data/elements.json' with { type: 'json' };
import weaponData from './../../../../public/assets/data/weapons.json' with { type: 'json' };
import shieldData from './../../../../public/assets/data/shields.json' with { type: 'json' };

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

interface Weapons {
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
  weapons = signal<Weapons[]>([]);
  shields = signal<Shields[]>([]);

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

    if (weaponData) {
      //   console.log(weaponData);
      for (let index = 0; index < weaponData.length; index++) {
        this.weapons()[index] = weaponData[index];
      }
      //   console.log(this.weapons());
    }

    if (shieldData) {
      //   console.log(shieldData);
      for (let index = 0; index < shieldData.length; index++) {
        this.shields()[index] = shieldData[index];
      }
      //   console.log(this.shields());
    }
  }
}
