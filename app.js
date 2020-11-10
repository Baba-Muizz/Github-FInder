const anObj = { 100: 'a', 102: 'b', 7: 'c' };
console.log(Object.keys(anObj));
//  init github
 const github= new Github;
//  init UI
 const ui = new UI;

// search input
const searchUser =document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{

    // get input text
  const searchText = e.target.value;

  if (searchText !== '') {
    //   make http call
     github.getUser(searchText)
     .then(data=>{  
     
        if (data.profile.message ==='Not Found') {
            // show alert
           ui.showAlert('User Not Found','alert alert-danger');
        }else{
            // show data
            ui.showProfile(data.profile);

            // show repos
            ui.showRepos(data.repos);
        }
     })


  }else{
    //   clear profile 
    ui.clearProfile();
  }
});