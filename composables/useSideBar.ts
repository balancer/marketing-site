const sidebarOpen = ref(false);

export const useSidebar = () => {
  const toggleSidebar = ()=> sidebarOpen.value = !sidebarOpen.value;
  return {sidebarOpen, toggleSidebar};
}