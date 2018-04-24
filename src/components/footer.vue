<template>
  <div class="footer">
    <div class="tag">
      <a href="https://github.com/importtao">作者</a>
      <a href="https://github.com/importtao/seckill-front">github</a>
      <a href="javascript:;">常见问题</a></div>
    <div class="cop"><p>滇ICP备17002680号|Copyright © 20017-2018  importtao 版权所有</p></div>

  </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
  .footer {
    padding: 50px 0 20px;
    background: #fff;
    margin-top: 20px;
  }

  .tag {
    display: flex;
    justify-content: center;
    a {
      height: 14px;
      padding: 0 10px;
      line-height: 14px;
    }
    a + a {
      border-left: 1px solid #666;
    }
  }

  .cop {
    text-align: center;
    margin: 10px 0;
  }
</style>
