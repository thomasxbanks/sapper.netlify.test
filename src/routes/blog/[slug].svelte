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
      this.error(res.status, "fuck fuck fuck!");
    }
  }
</script>

<script>
  export let post;
  console.log(post);
</script>

<h1>
  {@html post.title.rendered}
</h1>
<div class="content">
  {@html post.content.rendered}
</div>
