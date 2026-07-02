/*==================================================
    GITHUB.JS
    Fetch GitHub Profile Information
==================================================*/

"use strict";

const githubUser = "JaydonDevHub";

const repoCount = document.getElementById("repo-count");
const followerCount = document.getElementById("followers-count");
const followingCount = document.getElementById("following-count");
const projectCount = document.getElementById("project-count");

async function loadGitHubProfile() {

    try {

        const response = await fetch(
            `https://api.github.com/users/${githubUser}`
        );

        if (!response.ok) {

            throw new Error("Unable to fetch GitHub profile.");

        }

        const data = await response.json();

        if (repoCount) {

            repoCount.textContent = data.public_repos;

        }

        if (followerCount) {

            followerCount.textContent = data.followers;

        }

        if (followingCount) {

            followingCount.textContent = data.following;

        }

        if (projectCount) {

            projectCount.textContent = data.public_repos;

        }

        console.log("GitHub profile loaded successfully.");

    }

    catch (error) {

        console.error("GitHub API Error:", error);

        if (repoCount) repoCount.textContent = "--";
        if (followerCount) followerCount.textContent = "--";
        if (followingCount) followingCount.textContent = "--";
        if (projectCount) projectCount.textContent = "--";

    }

}

loadGitHubProfile();

/*==================================================
LATEST REPOSITORIES
==================================================*/

const repositoriesContainer =
document.getElementById("github-repositories");

async function loadRepositories() {

    if (!repositoriesContainer) return;

    try {

        const response = await fetch(

            `https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=6`

        );

        if (!response.ok) {
            throw new Error("Unable to fetch repositories.");
        }

        const repos = await response.json();

        repositoriesContainer.innerHTML = "";

        repos.forEach(repo => {

            repositoriesContainer.innerHTML += `

            <div class="repo-card glass">

                <h3>${repo.name}</h3>

                <p>

                    ${repo.description || "No description available."}

                </p>

                <div class="tech-stack">

                    <span>

                        ${repo.language || "Unknown"}

                    </span>

                </div>

                <a href="${repo.html_url}"

                   target="_blank"

                   class="btn">

                    View Repository

                </a>

            </div>

            `;

        });

    }

    catch (error) {

        console.error("Repository Loading Error:", error);

        repositoriesContainer.innerHTML =

        "<p>Unable to load repositories. Please try again later.</p>";

    }

}

loadRepositories();

/*==================================================
END OF GITHUB.JS
==================================================*/