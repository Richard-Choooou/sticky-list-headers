class StickyListHeaders {
    constructor(options) {
        this.options = Object.assign({

        }, options)
        this.outerContainer = document.getElementById(this.options.outerContainer)
        this.innerContainer = document.getElementById(this.options.innerContainer)
        this.setStyle()
        this.initEvent()
        this.headers = new Map()
        this.options.headers.forEach(id => this.headers.set(document.getElementById(id), {}))
        this.scrollHeight = this.innerContainer.scrollHeight
        this.cloneHeader()
    }

    setStyle() {
        let outerContainerPosition = window.getComputedStyle(this.outerContainer).position
        this.outerContainer.style.position = ['relative', 'absolute', 'fixed'].includes(outerContainerPosition) ? outerContainerPosition : 'relative'
        this.outerContainer.style.transform = 'translate3d(0, 0, 1px)'
        this.outerContainer.style.overflow = 'hidden'
    }

    initEvent() {
        this.innerContainer.addEventListener('scroll', e => {
            this.computePostion(e)
        })
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
            cloneNode.style.visibility = 'hidden'
            this.outerContainer.appendChild(cloneNode)
            
            this.headers.set(node, cloneNode)
            this.clonedHeaders.set(cloneNode, {
                prototype: node,
                height: node.offsetHeight,
                width: node.offsetWidth,
                top: node.offsetTop,
                left: node.offsetLeft
            })
        })
    }

    computePostion(e) {
        this.headers.forEach((cloneNode, protoNode) => {
            let cloneNodeProperty = this.clonedHeaders.get(cloneNode)
            if (cloneNodeProperty.top < this.innerContainer.scrollTop + cloneNodeProperty.height) {
                if(this.lastShowHeader) {
                    let lastShowHeaderProperty = this.clonedHeaders.get(this.lastShowHeader)
                    this.lastShowHeader.style.top = cloneNodeProperty.top - this.innerContainer.scrollTop - lastShowHeaderProperty.height + 'px'
                }
            }
            
            if (cloneNodeProperty.top < this.innerContainer.scrollTop) {
                cloneNode.style.position = 'fixed'
                cloneNode.style.top = '0'
                cloneNode.style.visibility = 'visible'
                this.lastShowHeader = cloneNode
            } else {
                cloneNode.style.position = 'absolute'
                cloneNode.style.visibility = 'hidden'
            }
        })
    }
}

export default StickyListHeaders