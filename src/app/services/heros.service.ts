import { Injectable } from '@angular/core';

export interface Hero {
  id: number;
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}

@Injectable()
export class HerosService {
  private heros: Hero[] = [
    {
      id: 0,
      nombre: 'Aquaman',
      bio: 'Aquaman is most recognized power is the telepathic ability to communicate with marine life, which it can summon over great distances.',
      img: 'assets/resources/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC',
    },
    {
      id: 1,
      nombre: 'Batman',
      bio: 'The main features of Batman are summarized in "physical prowess, deductive abilities and obsession." Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.',
      img: 'assets/resources/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC',
    },
    {
      id: 2,
      nombre: 'Daredevil',
      bio: "Having lost his sight, Daredevil's remaining four senses were heightened by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can 'see' through a 'sixth sense' that serves as a bat-like radar.",
      img: 'assets/resources/daredevil.png',
      aparicion: '1964-01-01',
      casa: 'Marvel',
    },
    {
      id: 3,
      nombre: 'Hulk',
      bio: 'His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).',
      img: 'assets/resources/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel',
    },
    {
      id: 4,
      nombre: 'Linterna Verde',
      bio: 'Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps named Chang)',
      img: 'assets/resources/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC',
    },
    {
      id: 5,
      nombre: 'Spider-Man',
      bio: 'After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Mans strength allows him to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform incredible jumps. A "spider sense" that lets him know if a danger is hanging over him, before it happens Sometimes this can lead Spider-Man to the source of danger.',
      img: 'assets/resources/spiderman.png',
      aparicion: '1962-08-01',
      casa: 'Marvel',
    },
    {
      id: 6,
      nombre: 'Wolverine',
      bio: 'In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some aliens. He also possesses superhuman strength, which although it does not compare with that of other superheroes like the Hulk, it does surpass that of any human.',
      img: 'assets/resources/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel',
    },
  ];

  constructor() {}

  getHeros(): Hero[] {
    return this.heros;
  }
  getHeroById(i: number): Hero | undefined {
    return this.heros.find((hero) => hero.id == i);
  }

  searchHeros(input: string): Hero[] {
    input = input.toLowerCase();
    return this.heros.filter((e) => e.nombre.toLowerCase().includes(input));
  }
}
