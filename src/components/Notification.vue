<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
<!--        <img src="..." class="rounded me-2" alt="...">-->
        <strong class="me-auto">Finance Tracker</strong>
        <small>Notification</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {withDefaults} from "vue";
import { Toast } from 'bootstrap/dist/js/bootstrap.esm.min.js'

interface Props {
  msg: string
}
const props = withDefaults(defineProps<Props>(), {
  msg: "Alert!"
})

Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode => new Toast(toastNode))
</script>

<style scoped>

</style>