# 初始化 Shiro


使用 Buession ShiroJs 必须先对其初始化，创建 Shiro 类实例。在实例化 Shiro 类 之前，需定义 [Principal](./principal.html)

示例：

原生 JavaScript
```javascript
<script type="text/javascript">
  var principal = new Principal() | null;
  var shiro = new Shiro(principal);
</script>
```

vue
在 main.js 中实例化 Shiro 类，并挂载到 Vue 全局中
```javascript
<script type="ts">
  import '@buession/shiro';

  const principal = new Principal() | null;
  const shiro = new Shiro(principal);
  app.config.globalProperties.shiro = shiro;
</script>
```