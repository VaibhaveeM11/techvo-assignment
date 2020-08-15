//form validation
 const fname=document.getElementById('fName');
 const lname=document.getElementById('lName');
 const classe= document.getElementById('class').value;
 const yearPass = document.getElementById('yearPass').value;
 let Percentage = document.getElementById('Percentage').value;
 const submit = document.getElementById('btn-submit');

 //to show erros msgs
 let statusBox =document.getElementById('statusBox');
  FormCheck=(e)=>
  {
    let showStatus=[];
    let Namepattern="/^[a-zA-Z]*$/"
     let classpattern ='/^[0-9a-zA-Z]+$/';
     //Name (accepts only alphabets a-zA-Z, max character size:20)
      if(fname.value.length<=20 ||fname.value==='' || !Namepattern.test('fname'))
     {
            
        showStatus.push('Enter First Name upto Max 20 leg');    
     }
      //Last Name (accepts only alphabets a-zA-Z, max character size:20)
      if(lname.value.lenghth<=20 ||lname.value==='' ||!Namepattern.test('lname'))
      {
        showStatus.push('Enter Last Name upto Max 20 leg');    
     }
     // Class (accepts both numeric and string values, eg. 5A)
   if(!classpattern.match('classe'))
    {
      showStatus.push('Enter Only Alphanumeric Value');    
   }
//  Year of passing (accepts only number, any year after 2017 should be invalid)
  
  if(yearPass<=2017 ||!Number(yearPass))
  {
       showStatus.push('Enter Year till 2017');    
  }


//Percentage of marks (accepts only number)
     if( Number(Percentage)==false || Percentage=='')
     {
         showStatus.push('Enter Valid Percentage');
      }

    if(showStatus.length>0)
    {         e.preventDefault();
       statusBox.innerText=showStatus.join('||');
    }
  }

  submit.addEventListener('click',FormCheck)


