import fetch from "isomorphic-fetch";

export async function get(req, res) {
  const endpoint = "http://cooper-respitool-test.ci-dev.havaslynx.com/wp-json/wp/v2/pages"
  let pages = await fetch(endpoint).then(r => r.json())
  pages = pages.filter(page => page.slug === 'precision')[0]
  const documents = {
    resources: pages.attached_files.filter(file => file.category === 'resource'),
    slidedeck: pages.attached_files.filter(file => file.category === 'slidedeck'),
  }
  const page = {
    slug: pages.slug,
    title: pages.title.rendered,
    content: pages.content.rendered,
    documents
  }
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(JSON.stringify(page));
}