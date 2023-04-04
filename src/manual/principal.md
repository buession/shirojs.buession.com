# 初始化 Principal


> 什么是 Principal ？
>> Principal 即身份，标识了当前用户的身份属性，如：用户 ID、用户名、用户角色等等。

在 Buession ShiroJs 中需要先声明 Principal，设置当前用户的 ID、角色和权限。principal 可以为任意对象，但必须实现以下方法。

```javascript
<script type="text/javascript">
interface Principal {

	/**
	 * 返回用户 ID
	 * 
	 * @return 用户 ID
	 */
	getId(): string,

	/**
     * 设置用户 ID
	 *
	 * @param id
	 * 		用户 ID
	 */
	setId(id: string): void,

	/**
	 * 返回用户角色名称列表
	 * 
	 * @return 用户角色名称列表
	 */
	getRoles(): string[],

	/**
     * 设置用户角色
	 *
	 * @param roleNames
	 * 		用户角色名称列表
	 */
	setRoles(roleNames: string[]): void,

	/**
     * 添加用户角色
	 *
	 * @param roleName
	 * 		用户角色名称
	 */
	addRole(roleName: string): void,

	/**
     * 批量添加用户角色
	 *
	 * @param roleNames
	 * 		用户角色名称列表
	 */
	addRoles(roleNames: string[]): void,

	/**
	 * 返回用户权限列表
	 * 
	 * @return 用户权限列表
	*/
	getPermissions(): string[],

	/**
     * 设置用户权限
	 *
	 * @param permissions
	 * 		用户权限列表
	 */
	setPermissions(permissions: string[]): void,

	/**
     * 添加用户权限
	 *
	 * @param permission
	 * 		用户权限
	 */
	addPermission(permission: string): void,

	/**
     * 批量添加用户权限
	 *
	 * @param permissions
	 * 		用户权限列表
	 */
	addPermissions(permissions: string[]): void
}
</script>
```

示例：

```javascript
<script type="text/javascript">
  function Principal(){
    this.id = '1';
  }

  Principal.prototype.getId = function(){
    return this.id;
  }

  Principal.prototype.getRoles = function(){
    return ["role1", "role2"];
  }

  Principal.prototype.getPermissions = function(){
    return ["user:add", "user:edit"];
  }

  var principal = new Principal();
</script>
```