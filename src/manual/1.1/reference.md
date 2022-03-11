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


#### **lacksRole(roleName: string)**
* 功能描述：验证用户是否不具备某角色，与 hasRole 逻辑相反

* 参数：roleName 角色名称

* 返回值：boolean 用户是否不具备某角色

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.lacksRole('admin') === true) {
    return "用户不具有 admin 角色";
  }else{
    return "用户具有 admin 角色";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.lacksRole('admin') === true">用户不具有 admin 角色</div>
    <div v-if="shiro.lacksRole('admin') === false">用户具有 admin 角色</div>
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


#### **hasRolesAll(roleNames: string[])**
* 功能描述：验证用户是否具有以下所有角色

* 参数：roleNames 角色列表

* 返回值：boolean 用户是否具有以下所有角色

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  if(shiro.hasRolesAll('admin', 'seller') === true) {
    return "用户具有 admin 和 seller 角色";
  }else{
    return "用户不具有 admin 或 seller 角色";
  }
</script>
```

vue
```vue
<template>
  <div>
    <div v-if="shiro.hasRolesAll('admin', 'seller') === true">用户具有 admin 和 seller 角色</div>
    <div v-if="shiro.hasRolesAll('admin', 'seller') === false">用户不具有 admin 或 seller 角色</div>
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