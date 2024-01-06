window.ydoc_plugin_search_json = {
  "文档": [
    {
      "title": "快速入门",
      "content": "TIP\n\n官方指南假设您已了解\"权限\"方面的相关知识，关于 HTML 和 JavaScript 的初级知识。如果您使用 npm 包，那么您需要具备掌握 npm 的基础知识，否则这不是您使用 Buession ShiroJs 的最佳方式；此种情况下，将建议您使用 script 标签引入 Buession ShiroJs 的文件。\n\n您可以根据本文档中的示例，快速熟悉 Buession ShiroJs 的使用方法，本文档中所有示例基于原生 js 和 vue 二者编写。本文档给出了不通方法的安装方式，但是我们始终建议您，直接下载压缩后的文件到您的项目中进行使用，或者直接引用 unpkg 、jsdelivr的资源。",
      "url": "/docs/quickstart.html",
      "children": [
        {
          "title": "下一步可做什么？",
          "url": "/docs/quickstart.html#下一步可做什么？",
          "content": "下一步可做什么？您对 Buession ShiroJs 大致了解后，您接下来可以做以下事情：了解兼容性：了解 Buession ShiroJS 对浏览器的兼容性\n安装：安装/引用 Buession ShiroJs\n使用：开始使用 Buession ShiroJs 功能\n"
        }
      ]
    },
    {
      "title": "框架介绍",
      "content": "",
      "url": "/docs/intro.html",
      "children": [
        {
          "title": "Buession Shiro 框架是什么？",
          "url": "/docs/intro.html#buession-shiro-框架是什么？",
          "content": "Buession Shiro 框架是什么？在前后端分离项目中（如：Vue、Angular、React等），前端常常涉及到根据权限显示数据、操作等等重复的实现所困惑。每当开启一个新项目时，我们都得手动重复去编写这些代码，而且还难免代码逻辑不一致，质量参差不齐。Buession ShiroJs 旨在提供便捷的、统一的、可靠的前端权限验证功能。在业务开发中省去的那些“脏活累活”，专注于业务核心的开发。Buession ShiroJs 的核心思想参考 Apache Shiro，Buession ShiroJs 的 API 核心方法完全和 Apache Shiro Tags 几乎保持一致。"
        },
        {
          "title": "如何贡献",
          "url": "/docs/intro.html#如何贡献",
          "content": "如何贡献如果您希望参与贡献，欢迎 Pull Request，或给我们报告 Bug。"
        }
      ]
    },
    {
      "title": "开源协议",
      "content": "MIT LicenseCopyright (c) 2021 BuessionPermission is hereby granted, free of charge, to any person obtaining a copyof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in allcopies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS ORIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.",
      "url": "/docs/license.html",
      "children": []
    },
    {
      "title": "版本说明",
      "content": "该项目基于 GNU 版风格定义项目版本，即：主版本号.子版本号.修正版本号。管理策略主版本号，发生变更时，不保证所有的 API 对上一个版本兼容，但保障大部分能兼容；主版本变更，可能涉及类、接口、枚举、方法的删除，或者包名的变更\n子版本号，发生变更时，完全兼容上一个版本，主要会增加一些小的功能或API，底层逻辑的调整调优\n修正版本号，主要用于修复 BUG、优化性能、安全漏洞修复，不会新增、变更、删除已有 API\n",
      "url": "/docs/version.html",
      "children": []
    },
    {
      "title": "安装及使用",
      "content": "您可以通过 NPM、YARN 或者通过  的方式引入 unpkg.com 上的包；稳定版 。",
      "url": "/docs/installation.html",
      "children": [
        {
          "title": "NPM",
          "url": "/docs/installation.html#npm",
          "content": "NPMnpm install @buession/shiro# or\nyarn add @buession/shiro\n"
        },
        {
          "title": "浏览器引入",
          "url": "/docs/installation.html#浏览器引入",
          "content": "浏览器引入在浏览器中使用 script 标签直接引入文件，并使用全局类。\n我们在 npm 发布包内的 @buession/shiro/dist 目录下提供了 shiro.amd.js、shiro.cjs.js、shiro.esm.js、shiro.iife.js、shiro.umd.js、shiro.js 以及对应 shiro.amd.min.js、shiro.cjs.min.js、shiro.esm.min.js、shiro.iife.min.js、shiro.umd.min.js、shiro.min.js ；其中，shiro.js、shiro.min.js 等同于 shiro.umd.js 和 shiro.umd.min.js。\n您也可以通过 unpkg 或  进行下载。\n对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。\n最新版：具体版本：\n"
        }
      ]
    },
    {
      "title": "环境要求",
      "content": "支持环境现代浏览器\nIE10，IE11\n\n\nIE / Edge\nFirefox\nChrome\nSafari\niOS Safari\nOpera\n\n\n\n\nIE10, IE11, Edge\nlast 5 versions\nlast 5 versions\nlast 5 versions\nlast 5 versions\nlast 5 versions\n\n\nNodeJsnode v13+，建议使用 v14 及其以上版本TypeScriptTypeScript 4.1.xES支持 ES5、ES6、ES2015、ES2016、ES2017、ES2018、ESNext 的版本。",
      "url": "/docs/requirement.html",
      "children": []
    }
  ],
  "参考手册": [
    {
      "title": "参考手册简介",
      "content": "Buession ShiroJs 提供认证判断、角色判断、权限判断三大核心功能，Buession ShiroJs 将为您提供优雅的前端权限验证框架。本章节将想您讲解，如何使用 Buession ShiroJs，为您提供前端权限验证的最佳实践。",
      "url": "/manual/index.html",
      "children": []
    },
    {
      "title": "参考指南",
      "content": "Buession ShiroJs 提供认证判断、角色判断、权限判断三大核心功能。本参考手册描述了所有 Buession ShiroJs 对象的属性和方法以及示例。您可以开始使用 Buession ShiroJs",
      "url": "/manual/overview.html",
      "children": []
    },
    {
      "title": "初始化 Shiro",
      "content": "使用 Buession ShiroJs 必须先对其初始化，创建 Shiro 类实例。在实例化 Shiro 类 之前，需定义 Principal示例：原生 JavaScript  var principal = new Principal() | null;\n  var shiro = new Shiro(principal);\n\n或  var shiro = new Shiro({\n    id: 'id',\n    roles: [],\n    permissions: []\n  });\n\nvue在 main.js 中实例化 Shiro 类，并挂载到 Vue 全局中  import '@buession/shiro';\n\n  const principal = new Principal() | null;\n  const shiro = new Shiro(principal);\n  app.config.globalProperties.shiro = shiro;\n\n或  import '@buession/shiro';\n\n  const shiro = new Shiro({\n    id: 'id',\n    roles: [],\n    permissions: []\n  });\n  app.config.globalProperties.shiro = shiro;\n\n",
      "url": "/manual/start.html",
      "children": []
    },
    {
      "title": "初始化 Principal",
      "content": "什么是 Principal ？\n\nPrincipal 即身份，标识了当前用户的身份属性，如：用户 ID、用户名、用户角色等等。\n\n在 Buession ShiroJs 中需要先声明 Principal，设置当前用户的 ID、角色和权限。principal 可以为任意对象，但必须实现以下方法。interface Principal {\n\n\t/**\n\t * 返回用户 ID\n\t * \n\t * @return 用户 ID\n\t */\n\tgetId(): string,\n\n\t/**\n     * 设置用户 ID\n\t *\n\t * @param id\n\t * \t\t用户 ID\n\t */\n\tsetId(id: string): void,\n\n\t/**\n\t * 返回用户角色名称列表\n\t * \n\t * @return 用户角色名称列表\n\t */\n\tgetRoles(): string[],\n\n\t/**\n     * 设置用户角色\n\t *\n\t * @param roleNames\n\t * \t\t用户角色名称列表\n\t */\n\tsetRoles(roleNames: string[]): void,\n\n\t/**\n     * 添加用户角色\n\t *\n\t * @param roleName\n\t * \t\t用户角色名称\n\t */\n\taddRole(roleName: string): void,\n\n\t/**\n     * 批量添加用户角色\n\t *\n\t * @param roleNames\n\t * \t\t用户角色名称列表\n\t */\n\taddRoles(roleNames: string[]): void,\n\n\t/**\n\t * 返回用户权限列表\n\t * \n\t * @return 用户权限列表\n\t*/\n\tgetPermissions(): string[],\n\n\t/**\n     * 设置用户权限\n\t *\n\t * @param permissions\n\t * \t\t用户权限列表\n\t */\n\tsetPermissions(permissions: string[]): void,\n\n\t/**\n     * 添加用户权限\n\t *\n\t * @param permission\n\t * \t\t用户权限\n\t */\n\taddPermission(permission: string): void,\n\n\t/**\n     * 批量添加用户权限\n\t *\n\t * @param permissions\n\t * \t\t用户权限列表\n\t */\n\taddPermissions(permissions: string[]): void\n}\n\n示例：  function Principal(){\n    this.id = '1';\n  }\n\n  Principal.prototype.getId = function(){\n    return this.id;\n  }\n\n  Principal.prototype.getRoles = function(){\n    return [\"role1\", \"role2\"];\n  }\n\n  Principal.prototype.getPermissions = function(){\n    return [\"user:add\", \"user:edit\"];\n  }\n\n  var principal = new Principal();\n\n",
      "url": "/manual/principal.html",
      "children": []
    },
    {
      "title": "API",
      "content": "Buession ShiroJS API 包含以下目录，包含了完整的参考文档：认证 API用户 API角色 API权限 API",
      "url": "/manual/reference.html",
      "children": []
    },
    {
      "title": "认证 API",
      "content": "认证 API 用于检测用户是否进行了认证（即：用户是否登录）",
      "url": "/manual/authenticated.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/authenticated.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisAuthenticated\n验证是否为已认证通过的用户\n\n\nisNotAuthenticated\n验证是否为未认证通过用户\n\n\n"
        },
        {
          "title": "isAuthenticated()",
          "url": "/manual/authenticated.html#isauthenticated",
          "content": "isAuthenticated()\n类型：Function\n\n\n功能描述：验证是否为已认证通过的用户，即：shiro 实例创建创建时传入的 principal 是否不为 null，不包含已记住的用户，这是与 isUser 标签方法的区别所在\n\n\n参数：无\n\n\n返回值：boolean 用户是否已通过认证\n\n示例：原生 JavaScript  if(shiro.isAuthenticated() === true) {\n    return \"已认证用户\";\n  }else{\n    return \"未认证用户\";\n  }\n\nvue  \n    已认证\n    未认证\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "isNotAuthenticated()",
          "url": "/manual/authenticated.html#isnotauthenticated",
          "content": "isNotAuthenticated()\n类型：Function\n\n\n功能描述：验证是否为未认证通过用户，即：shiro 实例创建创建时传入的 principal 是否为 null，与 isAuthenticated 相对应，与 isGuest 标签的区别是，该标签包含已记住用户\n\n\n参数：无\n\n\n返回值：boolean 用户是否未通过认证\n\n示例：原生 JavaScript  if(shiro.isNotAuthenticated() === true) {\n    return \"未认证用户\";\n  }else{\n    return \"已认证用户\";\n  }\n\nvue  \n    未认证\n    已认证\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "用户 API",
      "content": "用户相关 API",
      "url": "/manual/user.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/user.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nisUser\n验证用户是否认证通过或已记住的用户\n\n\nisGuest\n验证用户是否为访客\n\n\n"
        },
        {
          "title": "isUser()",
          "url": "/manual/user.html#isuser",
          "content": "isUser()\n类型：Function\n\n\n功能描述：验证用户是否认证通过或已记住的用户，即：shiro 实例创建创建时传入的 principal 是否不为 null\n\n\n参数：无\n\n\n返回值：boolean 用户是否认证通过或已记住的用户\n\n示例：原生 JavaScript  if(shiro.isUser() === true) {\n    return \"已登录或已记住用户\";\n  }else{\n    return \"未登录用户\";\n  }\n\nvue  \n    访客\n    非访客\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "isGuest()",
          "url": "/manual/user.html#isguest",
          "content": "isGuest()\n类型：Function\n\n\n功能描述：验证用户是否为访客，即未认证（包含未记住）的用户，即：shiro 实例创建创建时传入的 principal 是否为 null\n\n\n参数：无\n\n\n返回值：boolean 用户是否为访客\n\n示例：原生 JavaScript  if(shiro.isGuest() === true) {\n    return \"访客\";\n  }else{\n    return \"非访客\";\n  }\n\nvue  \n    访客\n    非访客\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "角色 API",
      "content": "用户角色判断",
      "url": "/manual/role.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/role.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nhasRole\n验证用户是否具备某角色\n\n\nlacksRole\n验证用户是否不具备某角色\n\n\nhasAnyRole\n验证用户是否具有以下任意一个角色\n\n\nhasRolesAll\n验证用户是否具有以下所有角色\n\n\n"
        },
        {
          "title": "hasRole(roleName: string)",
          "url": "/manual/role.html#hasrolerolename-string",
          "content": "hasRole(roleName: string)\n类型：Function\n\n\n功能描述：验证用户是否具备某角色\n\n\n参数：roleName 角色名称\n\n\n返回值：boolean 用户是否具备某角色\n\n示例：原生 JavaScript  if(shiro.hasRole('admin') === true) {\n    return \"用户具有 admin 角色\";\n  }else{\n    return \"用户不具有 admin 角色\";\n  }\n\nvue  \n    用户具有 admin 角色\n    用户不具有 admin 角色\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "lacksRole(roleName: string)",
          "url": "/manual/role.html#lacksrolerolename-string",
          "content": "lacksRole(roleName: string)\n类型：Function\n\n\n功能描述：验证用户是否不具备某角色，与 hasRole 逻辑相反\n\n\n参数：roleName 角色名称\n\n\n返回值：boolean 用户是否不具备某角色\n\n示例：原生 JavaScript  if(shiro.lacksRole('admin') === true) {\n    return \"用户不具有 admin 角色\";\n  }else{\n    return \"用户具有 admin 角色\";\n  }\n\nvue  \n    用户不具有 admin 角色\n    用户具有 admin 角色\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "hasAnyRole(roleNames: string[])",
          "url": "/manual/role.html#hasanyrolerolenames-string[]",
          "content": "hasAnyRole(roleNames: string[])\n类型：Function\n\n\n功能描述：验证用户是否具有以下任意一个角色\n\n\n参数：roleNames 角色列表\n\n\n返回值：boolean 用户是否具有以下任意一个角色\n\n示例：原生 JavaScript  if(shiro.hasAnyRole('admin', 'seller') === true) {\n    return \"用户具有 admin 或 seller 角色\";\n  }else{\n    return \"用户不具有 admin 和 seller 角色\";\n  }\n\nvue  \n    用户具有 admin 或 seller 角色\n    用户不具有 admin 和 seller 角色\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "hasRolesAll(roleNames: string[])",
          "url": "/manual/role.html#hasrolesallrolenames-string[]",
          "content": "hasRolesAll(roleNames: string[])\n类型：Function\n\n\n功能描述：验证用户是否具有以下所有角色\n\n\n参数：roleNames 角色列表\n\n\n返回值：boolean 用户是否具有以下所有角色\n\n示例：原生 JavaScript  if(shiro.hasRolesAll('admin', 'seller') === true) {\n    return \"用户具有 admin 和 seller 角色\";\n  }else{\n    return \"用户不具有 admin 或 seller 角色\";\n  }\n\nvue  \n    用户具有 admin 和 seller 角色\n    用户不具有 admin 或 seller 角色\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        }
      ]
    },
    {
      "title": "权限 API",
      "content": "用户权限判断",
      "url": "/manual/permission.html",
      "children": [
        {
          "title": "方法",
          "url": "/manual/permission.html#方法",
          "content": "方法\n\n方法\n描述\n\n\n\n\nhasPermission\n验证用户是否具备某权限\n\n\nlacksPermission\n验证用户是否不具备某权限\n\n\nhasAnyPermission\n验证用户是否具有以下任意一个权限\n\n\nhasAllPermissions\n验证用户是否具有以下所有权限\n\n\nhasPermissionsAll\n验证用户是否具有以下所有权限\n\n\n"
        },
        {
          "title": "hasPermission(permissionName: string)",
          "url": "/manual/permission.html#haspermissionpermissionname-string",
          "content": "hasPermission(permissionName: string)\n类型：Function\n\n\n功能描述：验证用户是否具备某权限\n\n\n参数：permissionName 权限名称\n\n\n返回值：boolean 用户是否具备某权限\n\n示例：原生 JavaScript  if(shiro.hasPermission('user:add') === true) {\n    return \"用户具有 user:add 权限\";\n  }else{\n    return \"用户不具有 user:add 权限\";\n  }\n\nvue  \n    用户具有 user:add 权限\n    用户不具有 user:add 权限\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "lacksPermission(permissionName: string)",
          "url": "/manual/permission.html#lackspermissionpermissionname-string",
          "content": "lacksPermission(permissionName: string)\n类型：Function\n\n\n功能描述：验证用户是否不具备某权限，与 hasPermission 逻辑相反\n\n\n参数：permissionName 权限名称\n\n\n返回值：boolean 用户是否不具备某权限\n\n示例：原生 JavaScript  if(shiro.lacksPermission('user:add') === true) {\n    return \"用户不具有 user:add 权限\";\n  }else{\n    return \"用户具有 user:add 权限\";\n  }\n\nvue  \n    用户不具有 user:add 权限\n    用户具有 user:add 权限\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "hasAnyPermission(permissionNames: string[])",
          "url": "/manual/permission.html#hasanypermissionpermissionnames-string[]",
          "content": "hasAnyPermission(permissionNames: string[])\n类型：Function\n\n\n功能描述：验证用户是否具有以下任意一个权限\n\n\n参数：permissionNames 权限列表\n\n\n返回值：boolean 用户是否具有以下任意一个权限\n\n示例：原生 JavaScript  if(shiro.hasAnyPermission('user:add', 'user:edit') === true) {\n    return \"用户具有 user:add 或 user:edit 权限\";\n  }else{\n    return \"用户不具有 user:add 和 user:edit 权限\";\n  }\n\nvue  \n    用户具有 user:add 或 user:edit 权限\n    用户不具有 user:add 和 user:edit 权限\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "hasPermissionsAll(permissionNames: string[])",
          "url": "/manual/permission.html#haspermissionsallpermissionnames-string[]",
          "content": "hasPermissionsAll(permissionNames: string[])\n类型：Function\n\n\n功能描述：验证用户是否具有以下所有权限\n\n\n参数：permissionNames 权限列表\n\n\n返回值：boolean 用户是否具有以下所有权限\n\n示例：原生 JavaScript  if(shiro.hasPermissionsAll('user:add', 'user:edit') === true) {\n    return \"用户具有 user:add 和 user:edit 权限\";\n  }else{\n    return \"用户不具有 user:add 或 user:edit 权限\";\n  }\n\nvue  \n    用户具有 user:add 和 user:edit 权限\n    用户不具有 user:add 或 user:edit  权限\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        },
        {
          "title": "hasAllPermissions(permissionNames: string[])",
          "url": "/manual/permission.html#hasallpermissionspermissionnames-string[]",
          "content": "hasAllPermissions(permissionNames: string[])\n类型：Function\n\n\n功能描述：验证用户是否具有以下所有权限\n\n\n参数：permissionNames 权限列表\n\n\n返回值：boolean 用户是否具有以下所有权限\n\n示例：原生 JavaScript  if(shiro.hasAllPermissions('user:add', 'user:edit') === true) {\n    return \"用户具有 user:add 和 user:edit 权限\";\n  }else{\n    return \"用户不具有 user:add 或 user:edit 权限\";\n  }\n\nvue  \n    用户具有 user:add 和 user:edit 权限\n    用户不具有 user:add 或 user:edit  权限\n  \n\n\n\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  setup() {\n  }\n});\n\n"
        }
      ]
    }
  ]
}