import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  resultado:any = undefined;
  nombreGrupos:string[] = [];

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(parametros =>{
      
        console.log(parametros["resultado"]);
        this.resultado=JSON.parse(parametros["resultado"]);

      
      this.nombreGrupos = Object.keys(this.resultado);
    });
    
  }




}
