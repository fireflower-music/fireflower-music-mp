import { getToken } from "./utils/auth"

// app.ts
App<IAppOption>({
  globalData: {},
  onShow() {
    // 展示本地存储能力
    // 判断登录状态

    if (!getToken()) {
      wx.navigateTo({
        url: 'pages/login/index'
      })
    }
  }
})