class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  // display profile in ui
  showProfile(user) {
    this.profile.innerHTML = `
    <div class='card card-body mb-3'>
        <div class='row'>
            <div class='col-md-3'>
            <img class='img-fluid mb-2' src='${user.avatar_url}'>
                <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block mb-5'>Veiw Profile</a>
            </div>
                <div class='col-md-9'>
                    <span class='badge badge-primary mb-2'>Public Repos: ${user.public_repos}</span>
                    <span class='badge badge-secondary mb-2'>Public Gists: ${user.public_gists}</span>
                    <span class='badge badge-success mb-2'>Followers: ${user.followers}</span>
                    <span class='badge badge-info mb-2'>Following: ${user.following}</span>
                    <br>
                    <br>
                    <ul class='list-group'>
                        <li class='list-group-item'>Company: ${user.company}</li>
                        <li class='list-group-item'>Blog/Website: ${user.blog}</li>
                        <li class='list-group-item'>Location: ${user.location}</li>
                        <li class='list-group-item'>Member Since: ${user.Created_at}</li>
                    </ul>
                </div>
        </div>
    </div>
    <h3 class='page-heading mb-3'>Latest Repos</h3>
    <div id='repos'></div>
    `;
  }

  //show repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function(repo) {
      output += `
        <div class='card card-body mb-2'>
            <div class='row'>
                <div class='col-md-6'>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class='col-md-6'>
                <span class='badge badge-primary mb-2'>Stars: ${repo.stargazers_count}</span>
                <span class='badge badge-secondary mb-2'>Watchers: ${repo.watchers_count}</span>
                <span class='badge badge-success mb-2'>Forks: ${repos.forks_count}</span>
                </div>
            </div>
        </div>
        `;
    });
    //ouput repos to html
    document.getElementById("repos").innerHTML = output;
  }
  //Show alert message
  showAlert(message, className) {
    //clear any previous alert messages
    this.clearAlert();
    //create div
    const div = document.createElement("div");
    //add classes to new div
    div.className = className;
    //create text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    //get search box
    const searchBox = document.querySelector(".search");
    //insert alert message
    container.insertBefore(div, searchBox);
    //clear alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  //clear away alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //clear profile if no input in field
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
