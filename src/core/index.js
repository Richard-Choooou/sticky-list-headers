class StickyListHeaders {
    constructor(options) {
        this.options = Object.assign({}, options)
        
        this.outerContainer = this.getDom(this.options.outerContainer)
        if (!this.outerContainer) {
            throw new Error(`[sticky-list-headers]: '${this.options.outerContainer}' is not a html element or element id`)
        }
        this.innerContainer = this.getDom(this.options.innerContainer)
        if (!this.innerContainer) {
            throw new Error(`[sticky-list-headers]: '${this.options.innerContainer}' is not a html element or element id`)
        }
        this.setContainerStyle()
        this.headers = []
        this.init()
    }

    getDom(dom) {
        let element = ''
        if(typeof dom === "string") {
            element = document.getElementById(dom)
        } else if(dom instanceof HTMLElement) {
            element = dom
        }

        return element
    }

    setContainerStyle() {
        let outerContainerPosition = window.getComputedStyle(this.outerContainer).position
        this.outerContainer.style.position = ['relative', 'absolute', 'fixed'].includes(outerContainerPosition) ? outerContainerPosition : 'relative'
        this.outerContainer.style.transform = 'translate3d(0, 0, 1px)'
        this.outerContainer.style.overflow = 'hidden'
    }

    init() {
        this.options.headers.forEach(id => {
            let header = this.getDom(id)
            if (header) {
                this.headers.push(this.setHeader(header))
            }
        })
        this.scrollHeight = this.innerContainer.scrollHeight
        this.innerContainer.addEventListener('scroll', this.computePostion.bind(this))

    }

    

    removeEvent() {
        this.innerContainer.removeEventListener('scroll', this.computePostion)
    }

    
    /**
     * clone header and set headers style
     * @param {HTMLElement} node 
     */
    setHeader(node) {
        const cloneNode = node.cloneNode()
        cloneNode.style.width = node.offsetWidth + 'px'
        cloneNode.style.height = node.offsetHeight + 'px'
        cloneNode.style.display = 'none'
        cloneNode.style.position = 'static'
        cloneNode.setAttribute('warning', '[sticky-list-headers]: this is a clone node, do not set style')
        node.style.top = node.offsetTop + 'px'
        node.style.left = node.offsetLeft + 'px'
        node.style.width = node.offsetWidth + 'px'
        node.style.height = node.offsetHeight + 'px'

        this.insertAfter(cloneNode, node)
        return {
            protoNode: node,
            cloneNode: cloneNode,
            top: node.offsetTop,
            left: node.offsetLeft,
            width: node.offsetWidth,
            height: node.offsetHeight,
            position: window.getComputedStyle(node).position
        }
    }

    insertAfter(newElement, targetElement){
        var parent = targetElement.parentNode
        if (parent.lastChild == targetElement) {
            parent.appendChild(newElement)
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling)
        }
    }

    computePostion(e) {
        this.headers.forEach(header => {
            let {protoNode, ...property} = header
            if (property.top < this.innerContainer.scrollTop + property.height) {
                if(this.lastShowHeader) {
                    let lastShowHeaderProperty = this.headers.find(header => this.lastShowHeader === header.protoNode)
                    this.lastShowHeader.style.top = property.top - this.innerContainer.scrollTop - lastShowHeaderProperty.height + 'px'
                }
            }

            if (property.top < this.innerContainer.scrollTop) {
                protoNode.style.position = 'fixed'
                protoNode.style.top = '0'
                this.lastShowHeader = protoNode
                property.cloneNode.style.display = 'block'
            } else {
                protoNode.style.position = property.position
                property.cloneNode.style.display = 'none'
            }
        })
    }

    refresh() {
        this.lastShowHeader = ''
        this.headers.forEach((header, index) => {
            if(!this.innerContainer.contains(header.protoNode)) {
                this.innerContainer.removeChild(header.cloneNode)
                this.headers.splice(index, 1)
            }
        })

        this.headers.map(header => {
            if(header.protoNode.style.position != 'fixed') {
                return Object.assign(header, {top: header.protoNode.offsetTop})
            } else {
                return Object.assign(header, {top: header.cloneNode.offsetTop})
            }
        })
        this.scrollHeight = this.innerContainer.scrollHeight
    }
}

export default StickyListHeaders