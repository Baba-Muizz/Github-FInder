class Github{
    constructor(){
        this.client_id ='f2795f7abc72969904fd';
        this.client_secret='1f8035e17c3d3a9a6f9ac2c3826b52ebc0c13dc8';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
        client_id=${this.client_id}&client_secret=${this.client_secret}` );

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}` );
        
        const profile =  await profileResponse.json();

        const repos =  await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}