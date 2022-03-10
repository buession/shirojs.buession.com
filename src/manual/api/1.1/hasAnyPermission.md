#### **hasAnyPermission(permissionNames: string[])**
* 功能描述：验证用户是否具有以下任意一个权限

* 参数：permissionNames 权限列表

* 返回值：boolean 用户是否具有以下任意一个权限

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.hasAnyPermission('user:add', 'user:edit') === true) {
  	return "用户具有 user:add 或 user:edit 权限";
  }else{
  	return "用户不具有 user:add 和 user:edit 权限";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.hasAnyPermission('user:add', 'user:edit') === true">用户具有 user:add 或 user:edit 权限</div>
    <div v-if="shiro.hasAnyPermission('user:add', 'user:edit') === false">用户不具有 user:add 和 user:edit 权限</div>
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