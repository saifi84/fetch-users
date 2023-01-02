function fetchTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        let result = "";
        data.map((item) => {

          let status = (item.completed) ? '✅' : '❌';
          let titleStrike = (item.completed) ? item.title.strike() : item.title;
                result += `
               
                <tr class="row_${ item.id } tasks task-delete " id="task-delete">
                    <td> <p id="task-edit_${ item.id }">  ${titleStrike}</p></td>
                    <td class="isDone" id="donetask_${ item.id } demo">${item.completed}</td>
                    <td id="desctask_${ item.id }">${ status}</td>
                    <td>
                    <button class="btn btn-danger" onclick="setRemoval(${item.id})"><i class="fa fa-trash"></i></button>
                    <button class="btn btn-primary"  onclick="setEdit(${item.id})"><i class="fa fa-edit"></i></button>
                   
                </td>
                </tr>
            `
            
        });
        document.getElementById("taskList").insertAdjacentHTML('beforeend',result) ;
    });
    
}
fetchTodo();
