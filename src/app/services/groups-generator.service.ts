import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsGeneratorService {

  createGroups(groupSize:number, groupName:string, members:string[]):any{

    let remaining = members.length % groupSize;
    let numberOfGroups = Math.floor(members.length / groupSize);
    let groups = [];

    let resultado = {};

    console.log(members);

    this.shuffle(members);

    console.log(members);

    for (let i = 0; i < numberOfGroups; i++){

        let group:any[] = [];

        for (let j = 0; j < groupSize; j++){

          var k = i * groupSize + j;
          group.push(members[k]);

        }
        
      groups.push(group);
    }

    k++;

    for (let n = 0; n < remaining; n++){
        groups[n].push(members[k+n]);
    }

    for(let p = 0; p < numberOfGroups; p++){

      // TODO no tiene que mostrar por la consola, nos tiene que devolver un objeto
      // con la estructura de los grupos
        console.log(groupName + "_" + p + ": " + groups[p]);
        resultado[groupName + "_" + p] = groups[p]
    }

    return resultado;

}

// Método privado para hacer shuffle de un array

private shuffle(members:string[]): void{
    for (let i = members.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let miembro = members[i];
        members[i] = members[j];
        members[j] = miembro;
    }
  }

}
