import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  private currentPosition: number;
  public result: string;

  constructor(public navCtrl: NavController) {

  }

  //Son aléatoire d'un animal
  randomAnimalSound() {
    let pos;
    if (!this.currentPosition) {
      pos = Math.floor(Math.random() * this.animals.length);
    } else {
      pos = this.currentPosition;
    }
    return pos;
  }

  playDaSound() {
    this.result = "";

    //Choix d'un animal
    this.currentPosition = this.randomAnimalSound();
    let choosenAnimal = this.animals[this.currentPosition];

    //Chargement du son
    let audio = new Audio;
    audio.src = 'assets' + choosenAnimal.file;
    audio.load();

    //Lecture du son
    audio.play();
  }

  /**
   * Deviner l'animal en fonction du cri
   * @param pos 
   */
  guess(pos) {
    //est ce que l'on a joué un son
    if (this.currentPosition) {
      //est ce que l'on a choisi le bon animal
      if (pos == this.currentPosition) {
        this.result = "Gagné";
        //Réinitialisation du choix pour avoir un autre son
        this.currentPosition = null;
      } else {
        this.result = "Perdu";
      }
    }
  }

}
