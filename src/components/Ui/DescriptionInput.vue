<template>
    <div class="textarea">
      <textarea :placeholder="dataAboutInput" type="text"></textarea>
    </div>
  </template>
  
  <script>
  export default {
  props:{
    dataAboutInput:{
      type:String,
      required:false,
    }
  }
  }
  </script>
  
  <style scoped>
  .textarea{
    display: flex;
    background: var(--light-color-4);
    padding: 12px;
    background: var(--bg-statistic);
    border-bottom: 1px solid var(--recent-item-border);
  }
  .textarea textarea{ 
   background: transparent;
   border: none;
   font-size: 16px;
   line-height: 24px;
   color: var(--text-ui);
   width: 100%;
   resize: vertical;
   height: 99px;
  }

  .textarea textarea:focus-visible{ 
    color: var(--hover-ui);
    outline: none;
  }
  .textarea:focus-within {
    border-bottom: 2px solid var(--primary-color);
  }
  .textarea:hover{
    border-bottom: 1px solid var(--hover-ui);
  }
  textarea::-webkit-outer-spin-button,
  textarea::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  </style>