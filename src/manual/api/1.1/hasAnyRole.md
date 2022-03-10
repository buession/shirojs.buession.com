#### **hasAnyRole(roleNames: string[])**
* 功能描述：验证用户是否具有以下任意一个角色

* 参数：roleNames 角色列表

* 返回值：boolean 用户是否具有以下任意一个角色

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.hasAnyRole('admin', 'seller') === true) {
  	return "用户具有 admin 或 seller 角色";
  }else{
  	return "用户不具有 admin 和 seller 角色";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.hasAnyRole('admin', 'seller') === true">用户具有 admin 或 seller 角色</div>
    <div v-if="shiro.hasAnyRole('admin', 'seller') === false">用户不具有 admin 和 seller 角色</div>
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