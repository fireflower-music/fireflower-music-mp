// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'Hello word'
  },
  hi() {
    sayHello().then(data =>{
      console.log(data)
      this.setData({
        message: `${data}`
      })
    })
  }
  
})
