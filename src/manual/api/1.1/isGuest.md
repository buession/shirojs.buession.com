#### **isGuest()**
* 功能描述：验证用户是否为访客，即未认证（包含未记住）的用户，即：shiro 实例创建创建时传入的 principal 是否为 null

* 参数：无

* 返回值：boolean 用户是否为访客

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.isGuest() === true) {
  	return "访客";
  }else{
  	return "非访客";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.isGuest() === true">访客</div>
    <div v-if="shiro.isGuest() === false">非访客</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
  }
});
</script>
```