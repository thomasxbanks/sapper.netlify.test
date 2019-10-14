import fetch from "isomorphic-fetch";

export async function get(req, res) {
  const endpoint = 'http://scrummable.com/wp-json/wp/v2/posts'
  const posts = await fetch(endpoint).then(r => r.json())

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  // Send the list of blog posts to our Svelte component
  res.end(JSON.stringify(posts));
}