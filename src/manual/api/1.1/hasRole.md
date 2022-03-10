#### **hasRole(roleName: string)**
* 功能描述：验证用户是否具备某角色

* 参数：roleName 角色名称

* 返回值：boolean 用户是否具备某角色

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.hasRole('admin') === true) {
  	return "用户具有 admin 角色";
  }else{
  	return "用户不具有 admin 角色";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.hasRole('admin') === true">用户具有 admin 角色</div>
    <div v-if="shiro.hasRole('admin') === false">用户不具有 admin 角色</div>
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