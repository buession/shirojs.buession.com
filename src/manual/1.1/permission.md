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


#### **lacksPermission(permissionName: string)**
* 功能描述：验证用户是否不具备某权限，与 hasPermission 逻辑相反

* 参数：permissionName 权限名称

* 返回值：boolean 用户是否不具备某权限

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.lacksPermission('user:add') === true) {
    return "用户不具有 user:add 权限";
  }else{
    return "用户具有 user:add 权限";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.lacksPermission('user:add') === true">用户不具有 user:add 权限</div>
    <div v-if="shiro.lacksPermission('user:add') === false">用户具有 user:add 权限</div>
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


#### **hasPermissionsAll(permissionNames: string[])**
* 功能描述：验证用户是否具有以下所有权限

* 参数：permissionNames 权限列表

* 返回值：boolean 用户是否具有以下所有权限

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.hasPermissionsAll('user:add', 'user:edit') === true) {
    return "用户具有 user:add 和 user:edit 权限";
  }else{
    return "用户不具有 user:add 或 user:edit 权限";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.hasPermissionsAll('user:add', 'user:edit') === true">用户具有 user:add 和 user:edit 权限</div>
    <div v-if="shiro.hasPermissionsAll('user:add', 'user:edit') === false">用户不具有 user:add 或 user:edit  权限</div>
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