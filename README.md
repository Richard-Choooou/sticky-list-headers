# sticky-list-headers
sticky list headers when list on scrolling

滚动列表头部吸顶效果

![gif1](https://user-images.githubusercontent.com/23492006/48208851-b8db6200-e3ae-11e8-9956-e1ef62f25cad.gif)


# 安装 Installation

> npm i sticky-list-headers --save-dev


# 使用 usage

## 引入 import
```
import StickyListHeaders from 'sticky-list-headers'

or

<script src="/node_modules/sticky-list-headers/dist/sticky-list-headers.min.js"></script>
```

## 使用 use 
```html
<body>
<div id="outer-container">
    <div id="inner-container">
        <h1 id="header1">标题1</h1>
        <p>列表文本</p>
        <p>列表文本</p>
        <p>列表文本</p>
        <h1  id="header2">标题2</h1>
        <p>列表文本</p>
        <p>列表文本</p>
        <p>列表文本</p>
        <h1  id="header3">标题3</h1>
        <p>列表文本</p>
        <p>列表文本</p>
        <p>列表文本</p>
        <h1  id="header4">标题4</h1>
        <p>列表文本</p>
        <p>列表文本</p>
        <p>列表文本</p>
        <h1  id="header5">标题5</h1>
        <p>列表文本</p>
        <p>列表文本</p>
        <p>列表文本</p>
        <h1  id="header6">标题6</h1>
        <p>列表文本</p>
        <p>列表文本</p>
    </div>
</div>
<script>
new StickyListHeaders({
    outerContainer: 'outer-container',
    innerContainer: 'inner-container',
    headers: ['header1', 'header2', 'header3', 'header4', 'header5', 'header6']
})
</script>
</body>
```

可以在examples目录查看细节

you can learn more details in examples directory