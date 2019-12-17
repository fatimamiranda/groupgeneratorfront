import { Component, OnInit } from '@angular/core';
import { GroupsGeneratorService } from 'src/app/services/groups-generator.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private groupsGeneratorService: GroupsGeneratorService, private router:Router) { }

  groupName:string = undefined;
  groupSize:number = 2;
  members:string [] = [];
  newMember:string = undefined;
  resultado:any;
  nombreGrupos:string[] = [];
  

  ngOnInit() {

  
  }

  addMember():void{
    this.members.push(this.newMember);
    this.newMember = undefined;
  }

  createGroups(){

    this.resultado = this.groupsGeneratorService.createGroups(this.groupSize,this.groupName,this.members);
    
    //this.nombreGrupos = Object.keys(this.resultado);

    
    // TODO PINTAR resultado


    // NO NAVEGAMOS, LO MOSTRAMOS AQUI...
    let navigationExtras: NavigationExtras = {
      queryParams:{
        "resultado" :JSON.stringify(this.resultado)
      }
    };

    this.router.navigate(['/result'], navigationExtras);
    
  }

}
