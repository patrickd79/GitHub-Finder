class Github {
  constructor() {
    this.client_id = "14302d4fabae9103831c";
    this.client_secret = "55def0f5eeccd1c51ea820b7834e25754b7db746";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/
${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/
${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
    //give us the json data
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos
    };
  }
}
