## 认证 API

认证 API 用于检测用户是否进行了认证（即：用户是否登录）


### 方法

|  方法                                                        | 描述                    |
|  ----                                                        | ----                   |
| [isAuthenticated](authenticated.html#isAuthenticated)        | 验证是否为已认证通过的用户 |
| [isNotAuthenticated](authenticated.html#isNotAuthenticated)  | 验证是否为未认证通过用户   |


------

### **isAuthenticated()**
* 类型：`Function`

* 功能描述：验证是否为已认证通过的用户，即：shiro 实例创建创建时传入的 principal 是否不为 null，不包含已记住的用户，这是与 isUser 标签方法的区别所在

* 参数：无

* 返回值：`boolean` 用户是否已通过认证

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
```html
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


### **isNotAuthenticated()**
* 类型：`Function`

* 功能描述：验证是否为未认证通过用户，即：shiro 实例创建创建时传入的 principal 是否为 null，与 isAuthenticated 相对应，与 isGuest 标签的区别是，该标签包含已记住用户

* 参数：无

* 返回值：`boolean` 用户是否未通过认证

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
```html
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