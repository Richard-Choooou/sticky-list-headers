class ScrollFiexdHeader {
    constructor(options) {
        this.options = Object.assign({

        }, options)

        this.container = document.querySelector(this.options.container)
        this.initEvent()
        this.cloneContainer()
        this.headers = new Map()
        this.options.headers.forEach(id => this.headers.set(document.getElementById(id), {}))
        this.scrollHeight = this.container.scrollHeight
        console.log(this.scrollHeight)
        this.cloneHeader()
        
        console.log(this.headers, this.clonedHeaders)
    }

    initEvent() {
        this.container.style.position = 'relative'
        this.container.addEventListener('click', () => {
            alert(1)
        })
        this.container.addEventListener('scroll', e => {
            console.log(11111)
            this.computePostion(e)
        })
    }

    cloneContainer() {
        let cloneContainer = this.container.cloneNode(true)
        const div = document.createElement('div')
        div.setAttribute('data-info', 'scroll-fiexd-header-container')
        div.style.position = 'relative'
        div.appendChild(cloneContainer)
        this.scrollFiexdHeaderContainer = div

        let parentNode = this.container.parentNode
        parentNode.replaceChild(div, this.container)
    }

    cloneHeader() {
        this.clonedHeaders = new Map()
        this.headers.forEach((value, node) => {
            const cloneNode = node.cloneNode(true)
            cloneNode.style.top = node.offsetTop + 'px'
            cloneNode.style.left = node.offsetLeft + 'px'
            cloneNode.style.width = node.offsetWidth + 'px'
            cloneNode.style.height = node.offsetHeight + 'px'
            cloneNode.style.position = 'absolute'
            this.container.appendChild(cloneNode)
            
            this.headers.set(node, cloneNode)
            this.clonedHeaders.set(cloneNode, {
                prototype: node,
                height: node.offsetHeight,
                width: node.offsetWidth,
                top: node.offsetTop,
                left: node.offsetLeft
            })
            // return cloneNode
        })
    }

    computePostion(e) {
        console.log(1, this.container.scrollTop)
        this.headers.forEach((cloneNode, protoNode) => {
            let cloneNodeProperty = this.clonedHeaders.get(cloneNode)
            
            if (cloneNodeProperty.top < this.container.scrollTop) {
                cloneNode.style.position = 'fixed'
            } else {
                cloneNode.style.position = 'absolute'
            }
        })
    }
}

export default ScrollFiexdHeader