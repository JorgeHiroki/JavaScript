const on = function(parent, event, selector, cb){      
  parent.addEventListener(event, function(e) {
    const el = e.target
    const match = el.closest(selector)
    cb(match)
  })
}