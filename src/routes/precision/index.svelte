<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`precision.json`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        return { data };
      });
  }
</script>

<script>
  export let data;
</script>

<style>

</style>

<svelte:head>
  <title>RespiTool</title>
</svelte:head>

<h1>{data.title}</h1>

<aside>
  <h3>Resources</h3>
  <ul>
    {#each data.documents.resources as resource, i}
      <li>{resource.title}</li>
    {/each}
  </ul>
</aside>
<aside>
  <h3>Clinical Slide Library</h3>
  <ul>
    {#each data.documents.slidedeck as slidedeck, i}
      <li>{slidedeck.title}</li>
    {/each}
  </ul>
</aside>
