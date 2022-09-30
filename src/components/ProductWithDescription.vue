<template>
  <div class="product_item">
    <div class="product_item__title">
      <div class="icon">
        <img src="../images/productcofe.png" alt="productcofe" />
      </div>
      <div>
        <h5>{{ itemData.name }}</h5>
        <h4>{{ itemData.price }} c</h4>
      </div>
    </div>

    <h5>
      <b>{{ itemData.description }}</b>
    </h5>
    <div class="rating">
      <q-rating
        v-model="quality"
        max="5"
        size="12px"
        color="yellow"
        icon="star_border"
        icon-selected="star"
        no-dimming
        @click="show"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const submitResult = ref([]);
    return {
      quality: ref(4),
    };
  },
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    show() {
      console.log(this.quality);
    },
  },
};
</script>

<style scoped>
.product_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--light-color-8);
  border-right: 1px solid transparent;
  padding: 24px 0;
}

/* .product_item h5 {
  font-weight: 600;
} */
.icon {
  width: 56px;
  height: 56px;
  background: var(--dark-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 16px;
}
.icon img {
  height: 100%;
}
.product_item h5:nth-child(2) b {
  color: var(--light-color-48);
}
.product_item__title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.product_item:hover {
  border-right: 4px solid var(--primary-color);
  background: var(--light-color-4);
  padding: 24px 24px;
  transition: 0.5s;
  color: var(--light-color);
}
.rating {
  width: 116px;
  cursor: pointer;
  border: 1px solid var(--light-color-8);
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.q-rating {
  display: flex;
  color: rgba(255, 184, 0, 1);
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  width: 100%;
  height: 100%;
}
.q-rating__icon-container {
  height: 1em;
  outline: 0;
}
.q-rating__icon-container + .q-rating__icon-container {
  margin-left: 2px;
}
.q-rating__icon {
  color: currentColor;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  opacity: 0.4;
  transition: transform 0.2s ease-in, opacity 0.2s ease-in;
}
.q-rating__icon--hovered {
  transform: scale(1.3);
}
.q-rating__icon--active {
  opacity: 1;
}
.q-rating__icon--exselected {
  opacity: 0.7;
}
.q-rating--no-dimming .q-rating__icon {
  opacity: 1;
}
.q-rating--editable .q-rating__icon-container {
  cursor: pointer;
}
</style>
