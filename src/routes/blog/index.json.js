import fetch from "isomorphic-fetch";
import download_file_httpget from '../../helpers/download_file_httpget';

export async function get(req, res) {
  const endpoint = 'http://cooper-respitool-test.ci-dev.havaslynx.com/wp-json/wp/v2/publications?per_page=100'
  const posts = await fetch(endpoint).then(r => r.json())
  
  await posts.forEach(post => {
    const endpoint = encodeURI(post.file.url)
    fetch(endpoint).then(publication => {
      download_file_httpget(endpoint)
    })
    .catch(err => console.error(err))
  })

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  // Send the list of blog posts to our Svelte component
  res.end(JSON.stringify(posts));
}