<script context="module">
  import fetch from "isomorphic-fetch";
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(pages => {
        return { pages };
      });
  }
</script>

<script>
  import Animation from "../components/Animation";
  export let pages;
</script>

<style>

</style>

<svelte:head>
  <title>RespiTool</title>
</svelte:head>

<h1>Homepage</h1>
<Animation />
<aside>
  <h2>Resources</h2>
  {#each pages as page, i}
    {#if page.documents.resources.length > 0}
      <details>
        <summary>
          <h3 style="display: inline;">{page.title}</h3>
        </summary>
        <ul>
          {#each page.documents.resources as resource}
            <li>
              <a href={resource.local_url} download>{resource.title}</a>
            </li>
          {/each}
        </ul>
      </details>
    {/if}
  {/each}
</aside>
