//form validation
 let fname=document.getElementById('fName').value;
 let lname=document.getElementById('lName').value;
 let classe= document.getElementById('class');
 let Percentage = document.getElementById('Percentage');
 let submit = document.getElementById('btn-submit');
 const maxNameLength =20;
//  ^[0-9]*$"  
  FormCheck=()=>
  {
      //console.log('insidemform');
      //1.Name (accepts only alphabets a-zA-Z, max character size:20)
    if(fname=='' && fname.maxlength=='20')
    {
        alert('Enter Your valid First Name');    
    }
    else if(lname==''  && lname.maxlength=='20')
    {
        alert('Enter Your valid  Last Name');    

    }
    else if( classe=='')
    {

    }
    else if( classe=='')
    {

    }
    else if( Percentage=='')
    {

    }
    else
    {
     console.log('done');
    }
  }

  submit.addEventListener('click',FormCheck)
  console.log('insidemform');


// 2. Last Name (accepts only alphabets a-zA-Z, max character size:20)
// 3. Class (accepts both numeric and string values, eg. 5A)
// 4. Year of passing (accepts only number, any year after 2017 should be invalid)
// 5. Percentage of marks (accepts only number)