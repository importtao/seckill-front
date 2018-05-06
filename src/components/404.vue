
<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main>
      <div class="m">
        <div id="error-container">
          <div id="error">
            <div id="pacman"></div>
          </div>
          <div id="container">
            <div id="title">
              <h1>对不起, 你访问的页面不存在!</h1>
            </div>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
  </el-container>
</template>

<script>
  import header from '@/components/header'
  import footer from '@/components/footer'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default {
    name: 'home',
    data () {
      return {
        msg: '商品明细',
        tableData: [{
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: '测试商品1',
          price: 99,
          id:'1',
          number: 2
        }, {
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: 'carnon',
          price: 199,
          id:'1',
          number: 2
        }, {
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: 'carnon',
          price: 199,
          id:'1',
          number: 2
        }, {
          img: 'https://img.alicdn.com/bao/uploaded/i2/TB1epw_HpXXXXbFXVXXVJyf8VXX_031714.jpg_b.jpg',
          name: 'carnon',
          price: 199,
          id:'1',
          number: 2
        }]
      }
    },
    components: {
      ElCol,
      ElRow,
      'v-header': header,
      'v-footer': footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .m{
    /*height: 1000px;*/
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 100px;
  }
  ::-moz-selection{
    background:#2E7BB8; color:#fff;
  }
  ::selection {
    background:#2E7BB8; color:#fff;
  }
  a:hover, ul.links li a {
    color: #2E7BB8;
  }
  #error {
    background:transparent url('../assets/images/404e.png') right 35px no-repeat;
  }
  #error #pacman {

    background:transparent url('../assets/images/pacman_eats.png') 0 0 no-repeat;
  }
  input[type="text"]:focus{
    border:1px solid #2E7BB8;
    box-shadow:0 0 3px rgba(46, 123, 184, 1);
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, nav, section { display: block; }
  audio, canvas, video { display: inline-block; *display: inline; *zoom: 1; }
  audio:not([controls]) { display: none; }
  [hidden] { display: none; }

  html { font-size: 100%; overflow-y: scroll; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  body { margin: 0; font-size: 13px; line-height: 1.231; }
  body, button, input, select, textarea { font-family: 楷体,sans-serif; color: #222; }

  ::-moz-selection { background: #fe57a1; color: #fff; text-shadow: none; }
  ::selection { background: #fe57a1; color: #fff; text-shadow: none; }

  a { color: #00e; }
  a:visited { color: #551a8b; }
  a:hover { color: #06e; }
  a:focus { outline: thin dotted; }
  a:hover, a:active { outline: 0; }

  abbr[title] { border-bottom: 1px dotted; }
  b, strong { font-weight: bold; }
  blockquote { margin: 1em 40px; }
  dfn { font-style: italic; }
  hr { display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0; }
  ins { background: #ff9; color: #000; text-decoration: none; }
  mark { background: #ff0; color: #000; font-style: italic; font-weight: bold; }
  pre, code, kbd, samp { font-family: 楷体,monospace, monospace; _font-family: '楷体', monospace; font-size: 1em; }
  pre { white-space: pre; white-space: pre-wrap; word-wrap: break-word; }
  q { quotes: none; }
  q:before, q:after { content: ""; content: none; }
  small { font-size: 85%; }
  sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
  sup { top: -0.5em; }
  sub { bottom: -0.25em; }
  ul, ol { margin: 1em 0; padding: 0 0 0 40px; }
  dd { margin: 0 0 0 40px; }
  nav ul, nav ol { list-style: none; list-style-image: none; margin: 0; padding: 0; }
  img { border: 0; -ms-interpolation-mode: bicubic; vertical-align: middle; }
  svg:not(:root) { overflow: hidden; }
  figure { margin: 0; }

  form { margin: 0; }
  fieldset { border: 0; margin: 0; padding: 0; }
  label { cursor: pointer; }
  legend { border: 0; *margin-left: -7px; padding: 0; }
  button, input, select, textarea { font-size: 100%; margin: 0; vertical-align: baseline; *vertical-align: middle; }
  button, input { line-height: normal; *overflow: visible; }
  table button, table input { *overflow: auto; }
  button, input[type="button"], input[type="reset"], input[type="submit"] { cursor: pointer; -webkit-appearance: button; }
  input[type="checkbox"], input[type="radio"] { box-sizing: border-box; }
  input[type="search"] { -webkit-appearance: textfield; -moz-box-sizing: content-box; -webkit-box-sizing: content-box; box-sizing: content-box; }
  input[type="search"]::-webkit-search-decoration { -webkit-appearance: none; }
  button::-moz-focus-inner, input::-moz-focus-inner { border: 0; padding: 0; }
  textarea { overflow: auto; vertical-align: top; resize: vertical; }
  input:valid, textarea:valid {  }
  input:invalid, textarea:invalid { background-color: #f0dddd; }

  table { border-collapse: collapse; border-spacing: 0; }
  td { vertical-align: top; }


  /* ==|== primary styles =====================================================
     Author:
     ========================================================================== */

  a {
    color: #999;
    text-decoration:none;
  }
  a:hover {
    color: #2E7BB8;
  }
  body {
    font-family: '楷体', sans-serif;
    font-size:18px;
    color: #555;
    text-shadow: 0px 1px 0px #ffffff;
    filter: dropshadow(color=#ffffff, offx=0, offy=1);
    text-align: center;
    background-color:#aaa;
    background-image:url('../assets/images/maze_bg.png');
  }
  #container {
    width:760px;
    margin:0 auto;
    border:1px solid #E0E0E0;
    border-top:1px solid #fff;
    border-bottom:1px solid #ccc;
    background-color:#E5E5E5;
    -webkit-box-shadow: 0 1px 0px rgba(255, 255, 255, 0.2) inset, 0 2px 4px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0 1px 0px rgba(255, 255, 255, 0.2) inset, 0 2px 4px rgba(0, 0, 0, 0.7);
    box-shadow: 0 1px 0px rgba(255, 255, 255, 0.2) inset, 0 2px 4px rgba(0, 0, 0, 0.7);
/*
    behavior: url(PIE.htc);
*/
  }
  #container #title {
    border-bottom:1px solid #aaa;
    overflow:hidden;
    background-color:#E7E7E7;
  }
  #container #content {
    border-top:1px solid #fff;
    border-bottom:1px solid #aaa;
  }#container #footer {
     padding:10px 20px 10px 20px;
     border-top:1px solid #f5f5f5;
     font-size:14px;
     color: #555;
     background-color:#D5D5D5;
   }
  #container .left {
    padding:30px 10px 20px 20px;
    width:350px;
    float:left;
  }
  #container .right {
    padding:30px 20px 20px 10px;
    width:350px;
    float:right;
  }
  h1 {
    font-size: 36px;
    text-align: center;
    margin:20px 0;
    color:#898989;
    color:#555;
    text-shadow: 0 1px 0 #FFFFFF;
  }
  ul li {
    font-size:16px;
  }
  ul.links {
    width:165px;
    margin:0;
    padding:0;
    float:left;
  }
  ul.links li {
    list-style:none;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  ul.links li a {
    color:#2E7BB8;
  }
  ul.links li:hover {
    padding-left:15px;
  }
  ::-moz-selection{
    background:#2E7BB8; color:#fff;
  }
  ::selection {
    background:#2E7BB8; color:#fff;
  }
  #error-container {
    display:block;
    text-align: left;
    width: 960px;
    margin: 0 auto;
    padding-top:40px;
    padding-bottom:40px;
  }
  #error {
    background:transparent url('../assets/images/404e.png') right 35px no-repeat;
    width:680px;
    height:280px;
    position:relative;
    margin:0 auto;
  }
  #error #pacman {
    width:207px;
    height:207px;
    position:absolute;
    left:0px;
    top:16px;
    background:transparent url('../assets/images/pacman_eats.png') 0 0 no-repeat;
    animation:eats 2s linear 0s infinite alternate;
    -moz-animation:eats 2s linear 0s infinite alternate;
    -webkit-animation:eats 2s linear 0s infinite alternate;
    -ms-animation:eats 2s linear 0s infinite alternate;
  }
  @-webkit-keyframes eats {
    from {
      left:0px; top:16px;
    }
    to {
      left:280px; top:16px;
    }
  }
  @-moz-keyframes eats {
    from {
      left:0px; top:16px;
    }
    to {
      left:200px; top:16px;
    }
  }
  @-ms-keyframes eats {
    from {
      left:0px; top:16px;
    }
    to {
      left:200px; top:16px;
    }
  }
  @keyframes eats {
    from {
      left:0px; top:16px;
    }
    to {
      left:200px; top:16px;
    }
  }
  /* ==|== non-semantic helper classes ======================================== */
  .ir { display: block; border: 0; text-indent: -999em; overflow: hidden; background-color: transparent; background-repeat: no-repeat; text-align: left; direction: ltr; }
  .ir br { display: none; }

</style>
