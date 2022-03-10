#### **isUser()**
* 功能描述：验证用户是否认证通过或已记住的用户，即：shiro 实例创建创建时传入的 principal 是否不为 null

* 参数：无

* 返回值：boolean 用户是否认证通过或已记住的用户

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.isUser() === true) {
  	return "已登录或已记住用户";
  }else{
  	return "未登录用户";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.isUser() === true">访客</div>
    <div v-if="shiro.isUser() === false">非访客</div>
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