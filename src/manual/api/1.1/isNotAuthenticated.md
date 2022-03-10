#### **isNotAuthenticated()**
* 功能描述：验证是否为未认证通过用户，即：shiro 实例创建创建时传入的 principal 是否为 null，与 isAuthenticated 相对应，与 isGuest 标签的区别是，该标签包含已记住用户

* 参数：无

* 返回值：boolean 用户是否未通过认证

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.isNotAuthenticated() === true) {
  	return "未认证用户";
  }else{
  	return "已认证用户";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.isNotAuthenticated() === true">未认证</div>
    <div v-if="shiro.isNotAuthenticated() === false">已认证</div>
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