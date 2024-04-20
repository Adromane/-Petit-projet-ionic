import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accuiel',
  templateUrl: './accuiel.page.html',
  styleUrls: ['./accuiel.page.scss'],
})
export class AccuielPage implements OnInit {

  constructor(private router: Router) {
    // alert("Bonjour")
   }

  ngOnInit() {
  }

  voirAmis() {
 this.router.navigate(['amis'])
  }

  voirEnimis() {
    this.router.navigate(['enimis'])
     }

}
