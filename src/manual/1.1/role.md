# 角色 API


用户角色判断


### 方法

|  方法                                                    | 描述                          |
|  ----                                                   | ----                          |
| [hasRole](role.html#角色-api-hasrolerolename-string)             | 验证用户是否具备某角色           |
| [lacksRole](role.html#角色-api-acksrolerolename-string)          | 验证用户是否不具备某角色         |
| [hasAnyRole](role.html#角色-api-hasanyrolerolenames-string[])    | 验证用户是否具有以下任意一个角色  |
| [hasRolesAll](role.html#角色-api-hasrolesallrolenames-string[])  | 验证用户是否具有以下所有角色      |


---

### **hasRole(roleName: string)**
* 类型：`Function`

* 功能描述：验证用户是否具备某角色

* 参数：roleName 角色名称

* 返回值：`boolean` 用户是否具备某角色

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
```html
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


### **lacksRole(roleName: string)**
* 类型：`Function`

* 功能描述：验证用户是否不具备某角色，与 hasRole 逻辑相反

* 参数：roleName 角色名称

* 返回值：`boolean` 用户是否不具备某角色

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
```html
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


### **hasAnyRole(roleNames: string[])**
* 类型：`Function`

* 功能描述：验证用户是否具有以下任意一个角色

* 参数：roleNames 角色列表

* 返回值：`boolean` 用户是否具有以下任意一个角色

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
```html
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


### **hasRolesAll(roleNames: string[])**
* 类型：`Function`

* 功能描述：验证用户是否具有以下所有角色

* 参数：roleNames 角色列表

* 返回值：`boolean` 用户是否具有以下所有角色

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
```html
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