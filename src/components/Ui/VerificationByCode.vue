<template>
  <div class="phone__ver">
    <div class="phone__ver__item">
      <input
        type="text"
        maxlength="1"
        placeholder="_"
        @onChange="onlyNumber(event)"
      />
    </div>
    <div class="phone__ver__item">
      <input
        type="text"
        maxlength="1"
        placeholder="_"
        @onChange="onlyNumber(event)"
      />
    </div>
    <div class="phone__ver__item">
      <input
        type="text"
        maxlength="1"
        placeholder="_"
        @onChange="onlyNumber(event)"
      />
    </div>
    <div class="phone__ver__item">
      <input
        type="text"
        maxlength="1"
        placeholder="_"
        @onChange="onlyNumber(event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onlyNumber(evt) {
      let charCode = evt.which ? evt.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.phone__ver {
  display: flex;
  column-gap: 8px;
  justify-content: space-between;
}
.phone__ver__item {
  display: flex;
  align-items: center;
  background: var(--bg-statistic);
  padding: 12px;
  border-bottom: 1px solid var(--border-of-stats);
}
.phone__ver__item input {
  background: transparent;
  border: none;
  font-size: 16px;
  line-height: 24px;
  color: var(--text-ui);
  width: 100%;
  text-align: center;
}
.phone__ver__item input:focus-visible {
  color: var(--hover-ui);
  outline: none;
}
.phone__ver__item:focus-within {
  border-bottom: 1px solid var(--primary-color);
}
.phone__ver__item:hover {
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
