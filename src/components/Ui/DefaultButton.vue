<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
button{
padding: 12px;
background:var(--primary-color);
border: none;
color: var(--dark-color);
width: 100%;
}
button:hover{
    background: #00B53E;
}
button:active{
    background: #009533;
}
</style>