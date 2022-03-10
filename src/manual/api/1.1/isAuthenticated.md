#### **isAuthenticated()**
* 功能描述：验证是否为已认证通过的用户，即：shiro 实例创建创建时传入的 principal 是否不为 null，不包含已记住的用户，这是与 isUser 标签方法的区别所在

* 参数：无

* 返回值：boolean 用户是否已通过认证

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.isAuthenticated() === true) {
    return "已认证用户";
  }else{
    return "未认证用户";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.isAuthenticated() === true">已认证</div>
    <div v-if="shiro.isAuthenticated() === false">未认证</div>
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