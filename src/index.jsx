---
banner:
  name: '一款 JavaScript/TypeScript 权限框架'
  desc: '一款基于 Apache Shiro 核心思想 JavaScript/TypeScript 权限框架，旨在提供便捷的、统一的、可靠的权限前端权限验证功能。在业务开发中省去的那些“脏活累活”，专注于业务核心的开发。'
  btns: 
    - { name: '开 始', href: '/docs/quickstart.html', primary: true }
    - { name: 'Github >', href: 'https://github.com/buession/buession-shirojs' }
  caption: '当前版本: v1.1.1'
features: 
  - { name: '优雅', desc: '旨在提供便捷的、统一的、可靠的权限前端权限验证工具，拥有完善的文档和高可读性的源码' }
  - { name: '易用', desc: '参考 Apache Shiro 官方 JspTag API 设计，拥有和原生 JspTag 相同的 API，极大的减少学习成本' }
  - { name: '简洁', desc: '与其它框架无耦合，高内聚低耦合' }
  - { name: '高效', desc: 'min 版本 js 文件仅 512B，加载速度快，代码简洁运行效率高' }
  - { name: '兼容', desc: '支持 Node 和 Browser 运行环境，支持主流浏览器，支持原生 JS 和 ES' }
  - { name: '开源', desc: '作为开源项目，我们拥有高质量的代码，对社区的需求能够作出积极快速响应' }

footer:
  copyright:
    name: 'Buession Team'
    href: 'https://www.buession.com/'
  links:
    前端开源库:
      - { name: 'Buession Prototype', href: 'https://prototype.buession.com/' }
      - { name: 'Buession Shirojs', href: 'https://shirojs.buession.com/' }
    后端开源库:
      - { name: 'Buession Framework', href: 'https://www.buession.com/' }
      - { name: 'Buession Security', href: 'https://security.buession.com/' }
      - { name: 'Buession SpringBoot', href: 'https://springboot.buession.com/' }
      - { name: 'Buession SpringCloud', href: 'https://springcloud.buession.com/' }
      - { name: 'Buession Cas', href: 'https://cas.buession.com/' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyright} links={props.footer.links} />