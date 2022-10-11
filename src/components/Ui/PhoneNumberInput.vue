<template>
  <div class="input__component">
    <div class="flag__block">
      <img src="../../images/Flag icon.svg" alt="Flag" />
      <h5>+996</h5>
    </div>
    <div class="phone__input">
      <input
        type="tel"
        placeholder="(708)-888-888"
        minlength="9"
        maxlength="9"
        size="9"
        required
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.input__component {
    display: flex;
    column-gap: 16px;
}
.flag__block {
  background: var(--bg-statistic);
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 12px;
  border-bottom: 1px solid var(--border-of-stats);
}
.input__component div:nth-child(1){
  border-bottom: 1px solid var(--border-of-stats);
}
.input__component:focus-within  div:nth-child(1){
  border-bottom: 2px solid var(--primary-color);
}
.input__component:hover  div:nth-child(1){
  border-bottom: 1px solid var(--hover-ui);
}
.phone__input {
  background: var(--bg-statistic);
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--border-of-stats);
}
.phone__input input {
  background: transparent;
  border: none;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: var(--hover-ui);
}
.phone__input input:focus-visible {
  color: var(--hover-ui);
  outline: none;
}
.phone__input:focus-within {
  border-bottom: 2px solid var(--primary-color);
}
.phone__input:hover {
  border-bottom: 1px solid var(--hover-ui);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
