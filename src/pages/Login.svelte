<script>
  import loginUser from "../strapi/loginUser";
  import registerUser from "../strapi/registerUser";
  import { navigate } from "svelte-routing";
  import globalStore from "../stores/globalStore"

  let email = "";
  let password = "";
  let username = "default username";
  let isMember = true;
  $: isEmpty = !email || !password || !username || $globalStore.alert;

  function toggleMember() {
    globalStore.toggleItem("alert", true, `Cargado datos....`)
    isMember = !isMember;
    if (!isMember) {
      username = "";
    } else {
      password = "default username";
    }
  }
  async function handleSubmit() {
    let user;
    if (isMember) {
      user = await loginUser({ email, password });
      console.log(user);
    } else {
      user = await registerUser({ email, password, username });
    }
    if (user) {
      navigate(`/products`)
      globalStore.toggleItem("alert", true, `Bienvenido ${username}`)
      return;
    }else{
      globalStore.toggleItem("alert", true, `No encontramos esa cuenta...`, true)
    }
  }
</script>

<section class="form">
  <h2 class="section-title">{isMember ? 'Iniciar Sesion' : 'Registrarse'}</h2>
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-control">
      <label for="email">email</label>
      <input type="email" id="email" bind:value={email} />
    </div>
    <div class="form-control">
      <label for="password">password</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    {#if !isMember}
      <div class="form-control">
        <label for="username">username</label>
        <input type="text" id="username" bind:value={username} />
      </div>
    {/if}
    {#if isEmpty}
      <p class="form-empty">Completa todos los campos</p>
    {/if}
    <button
      class="btn btn-block btn-primary"
      class:disabled={isEmpty}
      type="submit"
      disabled={isEmpty}>
      SUBMIT
    </button>
    {#if isMember}
      <p class="register-link">
        Necesitas registrarte?
        <button type="button" class="" on:click={toggleMember}>click</button>
      </p>
    {:else}
      <p class="register-link">
        Ya estas registrado?
        <button type="button" class="" on:click={toggleMember}>click</button>
      </p>
      <!-- else content here -->
    {/if}
  </form>
</section>
