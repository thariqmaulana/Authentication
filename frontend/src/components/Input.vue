<template>
  <input
    :placeholder="placeholder"
    :type="type"
    :name="name"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  
</template>

<script>
export default {
  props: ['placeholder', 'type', 'name', 'id', 'modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      
    }
  },
}
</script>
