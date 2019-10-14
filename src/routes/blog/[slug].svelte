<script context="module">
  import fetch from "isomorphic-fetch";
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog.json`);
    if (res.status === 200) {
      let posts = await res.text();
      return {
        post: JSON.parse(posts).filter(post => post.slug === params.slug)[0]
      };
    } else {
      this.error(res.status, "ERRORRRR!");
    }
  }
</script>

<script>
  export let post;
  // console.log(post);
</script>

<style>
  article {
    font-size: 1rem;
    max-width: 67ch;
    margin-right: auto;
    margin-left: auto;
  }
  article :global(h1),
  article :global(h2),
  article :global(h3),
  article :global(h4),
  article :global(h5),
  article :global(h6) {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 900;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.4em;
  }

  article :global(p:not(:last-of-type)) {
    margin-bottom: 1.6em;
  }
  article :global(.intro p) {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-weight: 200;
    font-size: 1.5em;
    line-height: 1.6em;
    margin-bottom: 1.6em;
  }
</style>

<article>
  <h1>
    {@html post.title.rendered}
  </h1>
  <div class="content">
    {@html post.content.rendered}
  </div>
</article>
