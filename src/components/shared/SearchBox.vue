<template>
  <div class="search-box">
    <i class="fa fa-search" style="font-weight: 600"></i>
    <input placeholder="Buscar" class="search-input" @input="onWrite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBox',
  props: { searchText: String },
  emits: ['update:searchText'],
  setup(props, { emit }) {
    let text = '';
    const onWrite = (val: InputEvent) => {
      if (val.data === null) {
        text = text.slice(0, text.length - 1);
      } else {
        text += val.data;
      }
      emit('update:searchText', text);
    };

    return { onWrite };
  }
});
</script>

<style scoped lang="scss">
.search-input {
  border: 0px;
  outline: none;
  margin-left: 1rem;
  font-size: 16px;
  min-width: 40rem;
}

.search-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #000;
  border-radius: 0.3rem;
  height: 3rem;
  padding: 0rem 1rem;
}
</style>
