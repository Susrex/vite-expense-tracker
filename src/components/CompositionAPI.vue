<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
</template>

<script>
import { ref, reactive } from 'vue'

const isAbsent = Symbol()

export default {
  name: "CompositionAPI",
  props: {
    foo: {default: isAbsent}
  },
  setup(props) {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })

    if(props.foo === isAbsent){
      console.log("foo was not provided")
    }

    // expose to template
    return {
      readersNumber,
      book
    }
  }
}
</script>

<style scoped>

</style>