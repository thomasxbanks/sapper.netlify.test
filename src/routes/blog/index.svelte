<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .posts_list li .row {
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 0.125rem;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
  }
  .posts_list li .row .cell {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .posts_list li .row :global(.narrow) {
    width: 25%;
  }
  .posts_list li .row :global(.wide) {
    width: 50%;
  }
  .posts_list li .row :global(p) {
    display: inline;
  }

  .posts_list :global([data-cpd="budesonide-formoterol"]) {
    background-color: lightskyblue;
  }
  .posts_list :global([data-cpd="tezepelumab"]),
  .posts_list :global([data-cpd="benralizumab"]) {
    background-color: lightsteelblue;
  }
  .posts_list :global([data-cpd="benralizumab-phase-iib-iii"]),
  .posts_list :global([data-cpd="tezepelumab-phase-iib-iii"]) {
    background-color: lightpink;
  }
  .posts_list :global([data-cpd="n-a"]) {
    background-color: lightgray;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Publications</h1>

<ul class="posts_list">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li data-cat={post.cat.slug} data-cpd={post.cpd.slug}>
      <a
        rel="prefetch"
        href="/uploads/{post.file.name}.{post.file.subtype}"
        download
        class="row">
        <div class="cell narrow">{post.cat.name}</div>
        <div class="cell narrow">{post.cpd.name}</div>
        <div class="cell wide">
          {@html post.title.rendered}
          {#if post.excerpt}
            :
            {@html post.excerpt.rendered}
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ul>
