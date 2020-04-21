class Github {
    constructor() {
        this.client_id = 'a858ab08b0ce8fe8f1e6';
        this.client_secret = '4b3f7feb5354ea42610e1657fedfe21b62a64ce3';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile: profileData,
            repos
        }
    }



}