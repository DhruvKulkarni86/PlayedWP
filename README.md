# Played.

A spotify playlist creator created using ReactJS and a custom wordpress plugin.

## Working

This project uses Spotify API's [Implicit Grant Flow](https://developer.spotify.com/documentation/web-api/tutorials/implicit-flow) for user authorization.

The user selects the songs on the frontend and sends an HTTP request with selected song IDs to the wordpress plugin along with the access token to actually generate a spotify playlist.

This small project was actually created to understand creating and working of a **custom wordpress plugin** and under no circumstances is it advisable to pass spotify generated tokens outside of its authflow, to ensure security of the webapp.

## Running it locally

For obvious reasons the project is not live, but to run it locally:

-   generate client id from spotify developer account
-   pop in this .env in `Frontend` root:

```env
VITE_SPOTIFY_CLIENT_ID= yourClientId
VITE_SPOTIFY_REDIRECT_URI= redirect_after_auth
VITE_SPOTIFY_SCOPES= Read more about scopes here->https://developer.spotify.com/documentation/web-api/concepts/scopes
VITE_BACK_URL= path to your WP plugin
```

-   I used [Local](https://localwp.com/) to run WP locally, just pop the `spotify-api` in the `plugins` folder
