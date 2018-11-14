# sticky-list-headers
sticky list headers when list on scrolling

滚动列表头部吸顶效果

![gif1](https://user-images.githubusercontent.com/23492006/48208851-b8db6200-e3ae-11e8-9956-e1ef62f25cad.gif)


# 安装 Installation

> npm i sticky-list-headers --save


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

可以在[examples目录](https://github.com/Richard-Choooou/sticky-list-headers/tree/master/examples)查看更多细节

you can learn more details in [examples directory](https://github.com/Richard-Choooou/sticky-list-headers/tree/master/examples)

# 选项 OPTIONS

## outerContainer
滚动容器的外层容器,用于占位。
参数：id字符串或者dom元素

The warp scroll container's DOM
params: String Or DOM

## innerContainer
滚动容器，通常设置一个固定高度以及overflow属性为auto 或者 scroll
参数：id字符串或者dom元素

The scroll container's DOM, usually set it overflow to 'auto' or 'scroll'
params: String Or DOM

## headers
需要固定在顶部头部
参数：包含头部id或者dom元素的列表 Array<String: id> or Array<DOM>

The headers's DOM needs fiexd
params: Array<String: id> or Array<DOM>

# 接口 API
## refresh
当滚动容器中的内容发生变动，导致容器高度变化，需要调用此函数重新计算，使吸顶头部适应新的容器高度

execute the function when scroll container DOM changed for recomputation scroll container height 

示例 example
```js
let stickyListHeaders = new StickyListHeaders({
    outerContainer: 'outer-container',
    innerContainer: 'inner-container',
    headers: ['header1', 'header2', 'header3', 'header4', 'header5', 'header6']
})

// 当dom改变后 when dom changed 
stickyListHeaders.refresh()
```

# 更多 more

**issue** **star** or **fork** [click here](https://github.com/Richard-Choooou/sticky-list-headers)
