//form validation
 let fname=document.getElementById('fName');
 let lname=document.getElementById('lName');
 let classe= document.getElementById('class');
 let yearPass = document.getElementById('yearPass');
 let Percentage = document.getElementById('Percentage').value;
 let submit = document.getElementById('btn-submit');

 //to show erros msgs
 let statusBox =document.getElementById('statusBox');
  FormCheck=(e)=>
  {
    let showStatus=[];
     //Name (accepts only alphabets a-zA-Z, max character size:20)
      if(fname.length<=20 ||fname.value==='')
     {
       // alert('Invalid Last Name');       
         showStatus.push('Enter Name upto Max 20 leg');    
     }
     // Last Name (accepts only alphabets a-zA-Z, max character size:20)
     if(lname.lenghth<=20 ||lname.value==='')
     {
        // alert('Invalid Last Name');
        showStatus.push('Enter Name upto Max 20 leg');    
     }
     // Class (accepts both numeric and string values, eg. 5A)

//    if( classe=='')
//     {

//     }
//  Year of passing (accepts only number, any year after 2017 should be invalid)

// if( !Number(yearPass))
// {
//     alert('invalid  year');
// }


// Percentage of marks (accepts only number)
     if( !Number(Percentage) || Percentage=='')
    {
        //alert('invalid Percentage');
        showStatus.push('invalid Percentage');
    }

    if(showStatus.length>0)
    {         e.preventDefault();

        statusBox.innerText=showStatus.join(',');
    }
  }

  submit.addEventListener('click',FormCheck)


