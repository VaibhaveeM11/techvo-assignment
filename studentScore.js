
//Condition to calculate total marks
//Maximum marks in each subject is 50.
//Minimum marks required to pass any subject is 20.
//Total marks is the sum of marks received in all subjects.

 fetch('./stud.json', 
 {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }

  })
.then((res)=>res.json())
.then((data)=>{
    if(data.length>0)
    {
      let output='';
      data.forEach( i => {
         //To calculate total  Score
              let Maths=i.marks["Maths"];
              let English=i.marks["English"];
              let Science=i.marks["Science"];
           let total=Maths+English+Science;
           //To show status total  Score
           let status='none'
        
          // if(i.total>)
          // {
            
          // }
        // let name=i.name.sort(function(a,b){
        //      if(a.name>b.name)
        //      {
        //        return b.name
        //      }
        //      else
        //      {
        //       return a.name
        //      }
        //})
        output+=`<tr>
                <td id='studName'>${i.name.sort(function(a,b){}</td>
                <td>${i.rollNumber}</td>
                <td>${total}</td>
                <td>${status}</td>
                </tr>`;
      });
      document.getElementById('tablebody').innerHTML=output;
    }
 });
