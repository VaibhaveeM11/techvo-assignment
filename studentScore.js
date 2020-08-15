
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
        //to sort name 
        let name=i.name
  //To calculate total  Score
              let Maths=i.marks["Maths"];
              let English=i.marks["English"];
              let Science=i.marks["Science"];

           let total=Maths+English+Science;
        
  //To show status total  Score
           let status='';
           //for topper
           //let  top = total+1>total?total+1:total;
        if(Maths>=20 && English>=20 && Science>=20)
        {
           status='pass';
        }
          
         else if(top==Math.max() )
         {
             status="topper";
          }
        else
        {
          status = "fail";
        }
    
          // .sort(function(a,b){
          //   if(a.name>b.name) return b.name
              //  else return a.name}           
 output+= `<tr>
                <td id='studName'>${name}</td>
                <td>${i.rollNumber}</td>
                <td>${total}</td>
                <td>
                   ${status}
                </td>
         </tr>`;
    console.log(total<total+1 || total>total-1);
      });
   document.getElementById('tablebody').innerHTML=output;
    }
 });
