let userid= prompt('your ID')
let todo= {title: prompt('What do you want to do')};
let users= ['Elsi','Nico','Ed','Leo']
let todolist= [{tittle:'softuare'},{tittle:'work'},{tittle:'projects'},{tittle:'work on a projects'}]
let ID= ['Elsi','Nico','Ed','Leo']

  if( userid === 'Elsi'){
      console.log(ID[0] + '' + 'you will' + '' + todo.tittle);
  }

else if( userid === 'Nico'){
    console.log(ID[1] + '' + 'you will' + '' + todo.tittle);
}

else if( userid === 'Ed'){
    console.log(ID[2] + '' + 'you will' + '' + todo.tittle);
}

else if( userid === 'Leo'){
    console.log(ID[3] + '' + 'you will' + '' + todo.tittle);
}

todolist.push(todo)
for (let todo of todolist){
    console.log(todo.tittle)
}
alert('Warning');
if (alert=true){
    console.log ('users list'   + ' ' + users)
    console.log ('users list'   + ' ' + ID)

}