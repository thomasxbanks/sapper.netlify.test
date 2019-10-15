import download_file_httpget from '../helpers/download_file_httpget'

export async function get(req, res) {
  const downloadFiles = pages => {
    pages.forEach(page => {
      Object.keys(page.documents).forEach(document_type => {
        page.documents[document_type].forEach(document => {
          fetch(document.url).then(file => {
            download_file_httpget(file.url, document.filename, `${page.parent_slug || 'root'}/${page.slug}`, document_type)
          })
          .catch(err => console.error(err))
        })
      })
    })
  }

  const endpoint = "http://cooper-respitool-test.ci-dev.havaslynx.com/wp-json/wp/v2/pages"
  let pages = await fetch(endpoint).then(r => r.json())
  let sortedPages = []

  await pages.forEach(page => {
    sortedPages.push({
        slug: page.slug,
        title: page.title.rendered,
        parent_slug: page.parent_slug,
        documents: {
          resources: page.attached_files.map(file => { file.local_url = `uploads/${page.parent_slug || 'root'}/${page.slug}/resources/${file.filename}`; return file; }).filter(file => file.category === 'resource'),
          slidedeck: page.attached_files.map(file => { file.local_url = `uploads/${page.parent_slug || 'root'}/${page.slug}/slidedeck/${file.filename}`; return file; }).filter(file => file.category === 'slidedeck'),
        }
      })
    })

  downloadFiles(sortedPages)

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  // Send the list of blog publications to our Svelte component
  res.end(JSON.stringify(sortedPages));
}
