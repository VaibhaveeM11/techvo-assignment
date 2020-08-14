//form validation
 let fname=document.getElementById('fName').value;
 let lname=document.getElementById('lName').value;
 let classe= document.getElementById('class');
 let yearPass = document.getElementById('yearPass');
 let Percentage = document.getElementById('Percentage');
 let submit = document.getElementById('btn-submit');
 const maxNameLength =20;
 const Numformat= '^[0-9]*$';
  FormCheck=()=>
  {
    let showStatus=[];
    // To check all fields are not empty

      //1.Name (accepts only alphabets a-zA-Z, max character size:20)
    if(fname=='' && lname=='' && classe=='' && yearPass=='' && Percentage=='')
    {
           showStatus.push('fill all field' );  
    }
     if(fname.maxlength==20 && lname.maxlength==20)
    {
        showStatus.push('Enter Name upto Max 20 leg');    

    }
   if( classe=='')
    {

    }
     if( yearPass=='')
    {

    }
     if( Number(Percentage)==true)
    {

    }
    // else
    // {
    //  console.log('done');
    // }
  }

  submit.addEventListener('click',FormCheck)
  console.log('insidemform');


// 2. Last Name (accepts only alphabets a-zA-Z, max character size:20)
// 3. Class (accepts both numeric and string values, eg. 5A)
// 4. Year of passing (accepts only number, any year after 2017 should be invalid)
// 5. Percentage of marks (accepts only number)