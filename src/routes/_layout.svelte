<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    font-size: 1rem;
    max-width: 67ch;
    margin-right: auto;
    margin-left: auto;
  }
  main :global(h1) {
    color: #012099;
    font-size: 4rem;
    font-weight: 200;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
