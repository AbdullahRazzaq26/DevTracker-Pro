let baseURL = 'https://api.github.com/users/';
let githubProfile = document.querySelector('#githubProfile');
let searchBtn = document.querySelector('#searchGitHub');
let input = document.querySelector("#githubUsername");

// ⛔️ WARNING: Don't expose this token publicly in production!
const token = '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';
const headers = {
    Authorization: `Bearer ${token}`
};

searchBtn.addEventListener('click', () => {
    getProfile();
});

async function getProfile() {
    try {
        let username = input.value;
        localStorage.setItem("lastGitHubUser", username);

        // Fetch user info
        let userResponse = await fetch(`${baseURL}${username}`, { headers });
        let userData = await userResponse.json();

        // Fetch repositories
        let reposResponse = await fetch(`${baseURL}${username}/repos?sort=updated&per_page=100`, { headers });
        let reposData = await reposResponse.json();

        let totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        // --- Latest 2 Repos ---
        let latestRepos = reposData.slice(0, 2).map(repo => `
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        `).join('<br><br>');

        // --- Language Stats ---
        let languageCount = {};

        for (let repo of reposData) {
            try {
                let langRes = await fetch(repo.languages_url, { headers });
                let langData = await langRes.json();

                for (let lang in langData) {
                    if (typeof langData[lang] === "number" && langData[lang] > 0 && !['message', 'block'].includes(lang.toLowerCase())) {
                        languageCount[lang] = (languageCount[lang] || 0) + langData[lang];
                    }
                }
            } catch (err) {
                console.warn(`Failed to fetch language stats for repo: ${repo.name}`);
            }
        }

        let totalBytes = Object.values(languageCount).reduce((a, b) => a + b, 0) || 1;

        let languagePercentages = Object.entries(languageCount).map(([lang, bytes]) => {
            let percent = ((bytes / totalBytes) * 100).toFixed(1);
            return `${lang}: ${percent}%`;
        }).join('<br>');

        let knownLanguages = Object.keys(languageCount).join(', ');

        githubProfile.style.display = 'flex';
        githubProfile.innerHTML = `
    <img id="profilePic" alt="Profile Picture" src='${userData.avatar_url}'>
    <h3 id="name">👤 ${userData.login}</h3>
    <p id="bio">🧾 ${userData.bio || "No bio available"}</p>
    <p><strong>📦 Public Repos:</strong> ${userData.public_repos}</p>
    <p><strong>👥 Followers:</strong> ${userData.followers}</p>
    <p><strong>👤 Following:</strong> ${userData.following}</p>
    <p><strong>⭐ Total Stars:</strong> ${totalStars}</p>
    <p><strong>🧠 Known Languages:</strong> ${knownLanguages}</p>
    <p><strong>📊 Language Usage:</strong><br>${languagePercentages}</p>
    <p><strong>🕐 Latest Repos:</strong><br><br>${latestRepos}</p>
    <a id="profileLink" href="${userData.html_url}" target="_blank">🔗 View Profile</a>
`
    } catch (error) {
        githubProfile.innerHTML = `<p>Error fetching profile. Make sure the username is correct.</p>`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const lastUser = localStorage.getItem("lastGitHubUser");
    if (lastUser) {
        input.value = lastUser; // fill input box with stored name
        getProfile();           // fetch their profile
    }
});