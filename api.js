// example url :  "url": "https://api.github.com/users/kamranahmedse",

export async function getUser(username) {
    try {
        const fetchResponse = await fetch(`https://api.github.com/users/${username}`, {
            method: "GET",
        });
        const json = await fetchResponse.json();

        return {
            ...json,
            ok: fetchResponse.ok,
        };
    } catch (error) {
        return {
            ok: false,
            message: error.message,
        };
    }
}