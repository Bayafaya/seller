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
    border-bottom: 1px solid var(--light-color-8);
  }

  .textarea textarea{ 
   background: transparent;
   border: none;
   font-size: 16px;
   line-height: 24px;
   color: var(--light-color-72);
   width: 100%;
   resize: vertical;
   height: 99px;
  }

  .textarea textarea:focus-visible{ 
    color: var(--light-color);
    outline: none;
  }
  .textarea:focus-within {
    border-bottom: 2px solid var(--primary-color);
  }
  .textarea:hover{
    border-bottom: 1px solid var(--light-color);
  }
  textarea::-webkit-outer-spin-button,
  textarea::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  </style>