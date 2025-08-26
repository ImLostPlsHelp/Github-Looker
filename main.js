import { getUser } from "./api.js"; //Jangan lupa ekstensi

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("user-search");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const inputUser = document.getElementById("input-user").value;
        console.log(inputUser);
        getUser(inputUser);
   });
})

// returns =>
// {"login":"ImLostPlsHelp",
// "id":107686662,
// "node_id":"U_kgDOBmsrBg",
// "avatar_url":"https://avatars.githubusercontent.com/u/107686662?v=4",
// "gravatar_id":"","url":"https://api.github.com/users/ImLostPlsHelp",
// "html_url":"https://github.com/ImLostPlsHelp",
// "followers_url":"https://api.github.com/users/ImLostPlsHelp/followers",
// "following_url":"https://api.github.com/users/ImLostPlsHelp/following{/other_user}",
// "gists_url":"https://api.github.com/users/ImLostPlsHelp/gists{/gist_id}",
// "starred_url":"https://api.github.com/users/ImLostPlsHelp/starred{/owner}{/repo}",
// "subscriptions_url":"https://api.github.com/users/ImLostPlsHelp/subscriptions",
// "organizations_url":"https://api.github.com/users/ImLostPlsHelp/orgs",
// "repos_url":"https://api.github.com/users/ImLostPlsHelp/repos",
// "events_url":"https://api.github.com/users/ImLostPlsHelp/events{/privacy}",
// "received_events_url":"https://api.github.com/users/ImLostPlsHelp/received_events",
// "type":"User",
// "user_view_type":"public",
// "site_admin":false,
// "name":null,
// "company":null,
// "blog":"",
// "location":null,
// "email":null,
// "hireable":null,
// "bio":null,
// "twitter_username":null,
// "public_repos":31,
// "public_gists":0,
// "followers":4,
// "following":1,
// "created_at":"2022-06-17T11:45:56Z",
// "updated_at":"2025-08-25T00:43:18Z"
// }