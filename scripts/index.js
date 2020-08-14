//form validation
//1.Name (accepts only alphabets a-zA-Z, max character size:20)
 let name=document.getElementById('Name').value;
 if(name=='')
 {
     alert('Enter Your Name');
 }



// 2. Last Name (accepts only alphabets a-zA-Z, max character size:20)
// 3. Class (accepts both numeric and string values, eg. 5A)
// 4. Year of passing (accepts only number, any year after 2017 should be invalid)
// 5. Percentage of marks (accepts only number)