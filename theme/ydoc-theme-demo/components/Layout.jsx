<html lang="zh-CN">
  <Head config={props.config} assets={props.assets} title={props.title} distPath={props.page.distPath} />
  <body>
    <div className="g-doc">
      {
        (props.summary && props.summary.length) ? (
          <Summary summary={props.summary} releativePath={props.page.releativePath} distPath={props.page.distPath} />
        ) : null
      }
      <div className="m-main" id="js-panel">
        <Header nav={props.config.nav} distPath={props.page.distPath} ydoc={props} />
        <Content distPath={props.page.distPath} content={props.page.content} type={props.page.type} ydoc={props} prev={props.page.prev} next={props.page.next} />
      </div>
    </div>
    <Hook name="mask" ydoc={props} />
    <Scripts assets={props.assets} page={props.page} />
    {(
      const _hmt = _hmt || [];
      (function() {
        const hm = document.createElement('script');
        hm.src = 'https://hm.baidu.com/hm.js?ce98b773508a8563e2eef8c8573da346';
        const s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    )}
  </body>
</html>