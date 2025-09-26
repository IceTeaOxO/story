// AstroComponent.stories.js
import { defineComponent } from 'vue';
import AstroComponentWrapper from './AstroComponentWrapper.vue';

export default {
  title: 'Astro/MyComponent',
  component: AstroComponentWrapper,
  argTypes: {
    // 定義參數類型
  },
};

export const Default = {
  args: {
    // 傳遞給組件的參數
  },
};
