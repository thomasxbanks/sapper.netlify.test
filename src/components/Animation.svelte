<script>
  import { onMount } from "svelte";
  onMount(() => {
    for (let i = 0; i < 10; i++) {
      document.querySelector(
        "figure"
      ).innerHTML += `<img src="http://placekitten.com/g/${(i + 1) * 100}/${(i +
        1) *
        100}"/>`;
    }

    setInterval(() => {
      document
        .querySelector("figure")
        .insertAdjacentElement("beforeend", document.querySelector("img"));
    }, 40);
  });
</script>

<style>
  figure {
    width: 400px;
    height: 400px;
    overflow: hidden;
  }
  figure :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<figure />
