<template>
  <div class="sto-group">
    <h5 class="sto-group__headline">
      <span class="sto-group__title">{{title}}</span>
      <button
        class="sto-group__toggle" @click="toggleVisibility"
        :class="{'sto-group__toggle--collapsed': isCollapsed}">
        <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M415.5 169.683L255.563 342.5L95.5 169.5" stroke="var(--ogc-primary--stroke, #1CDAFF)" stroke-width="var(--ogc-primary--width-strong, 40)" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </h5>
    <div class="sto-group__content"
      :class="{'sto-group__content--hidden': isCollapsed}">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import  { ref, watch, PropType, defineComponent } from 'vue'
import { SizeType } from '../../types/index'

export default defineComponent({
  name: 'sto-group',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String as PropType<SizeType>,
    }
  },
  setup(props) {
    const isCollapsed = ref(props.collapsed)
    watch(() => props.collapsed, (currentValue) => {
      isCollapsed.value = currentValue
    })

    const toggleVisibility = () => {
      isCollapsed.value = !isCollapsed.value
    }

    return { toggleVisibility, isCollapsed }
  }
})
</script>
