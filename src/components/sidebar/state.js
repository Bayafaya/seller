import { computed, ref } from "vue";


export const collapsed = ref(true);
export const toggleSidebar = ()=> (collapsed.value = !collapsed.value)
  

export const SIDEBAR_WITH = 320
export const SIDEBAR_WITH_COLLAPSED = 56
export const sidebarWidth = computed(
    ()=> `${collapsed.value ? SIDEBAR_WITH_COLLAPSED : SIDEBAR_WITH}px`
)