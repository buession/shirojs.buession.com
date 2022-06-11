## 用户 API

用户相关 API


### 方法

|  方法                          | 描述                          |
|  ----                         | ----                          |
| [isUser](user.html#isUser)    | 验证用户是否认证通过或已记住的用户 |
| [isGuest](user.html#isGuest)  | 验证用户是否为访客               |


---

### **isUser()**
* 类型：`Function`

* 功能描述：验证用户是否认证通过或已记住的用户，即：shiro 实例创建创建时传入的 principal 是否不为 null

* 参数：无

* 返回值：`boolean` 用户是否认证通过或已记住的用户

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
```html
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


### **isGuest()**
* 类型：`Function`

* 功能描述：验证用户是否为访客，即未认证（包含未记住）的用户，即：shiro 实例创建创建时传入的 principal 是否为 null

* 参数：无

* 返回值：`boolean` 用户是否为访客

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
```html
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