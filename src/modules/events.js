/*
 * @Author: zhoupeng 
 * @Date: 2017-09-01 10:46:33 
 * @Last Modified by: zhoupeng
 * @Last Modified time: 2017-09-06 16:38:24
 */
export default function(Constructor) {
	Constructor.prototype.on = function(event, callback) {
		if (!event || !callback) {
			throw new Error('missing parameter, function "on" need two parameters, one of them is event, another is callback function')
		}
		this.events = this.events || []
		this.events.push({
			event,
			funcName: callback.name || 'anonymous',
			callback
		})
	}


	Constructor.prototype.off = function(event, func) {
		if (!this.events) {
			console.error(`${Constructor.name} have no event`)
			return
		}

		if (!func.name) {
			console.error('can not remove a anonymous function')
			return
		}

		for (let i = 0, j = this.events; i < j.length; i++) {
			if (j[i].funcName === func.name && j[i].event === event) {
				j.splice(i, 1)
				return
			}
		}

		console.error(`${Constructor.name}'s ${event} event have no ${func.name} function`)

	}

	Constructor.prototype.once = function(event, callback) {
		if (!event || !callback) {
			throw new Error('missing parameter, function "once" need two parameters, one of them is event, another is callback function')
		}
		this.events = this.events || []
		let length = this.events.length
		let fn = () => {
			callback.apply(this, arguments)
			this.events.splice(length, 1)
		}
		
		this.on(event, fn)
	}

	Constructor.prototype.dispatchEvent = function(eventName, ...params) {
		this.events = this.events || []
		this.events.forEach(value => {
			if(value.event === eventName) {
				value.callback(...params)
			}
		})
	}

}