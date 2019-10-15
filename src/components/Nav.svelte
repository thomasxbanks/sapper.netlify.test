<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 2px solid rgba(180, 180, 180, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    font-size: 0;
  }

  li {
    display: inline-block;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: 1em;
    height: 2px;
    background-color: #012099;
    display: block;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
  }

  a {
    color: #012099;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    font-size: 1rem;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
  </ul>
</nav>
