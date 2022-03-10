#### **hasPermission(permissionName: string)**
* 功能描述：验证用户是否具备某权限

* 参数：permissionName 权限名称

* 返回值：boolean 用户是否具备某权限

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.hasPermission('user:add') === true) {
  	return "用户具有 user:add 权限";
  }else{
  	return "用户不具有 user:add 权限";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.hasPermission('user:add') === true">用户具有 user:add 权限</div>
    <div v-if="shiro.hasPermission('user:add') === false">用户不具有 user:add 权限</div>
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