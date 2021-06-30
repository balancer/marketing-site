import Vue from 'vue'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';

Vue.use(VTooltip)

Vue.directive("tooltip", VTooltip);
Vue.directive("close-popover", VClosePopover);
Vue.component("v-popover", VPopover);
