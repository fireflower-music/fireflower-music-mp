import { getToken, removeToken, setToken } from "../utils/auth"

// const baseUrl = 'https://fireflower-music-1691755-1310040923.ap-shanghai.run.tcloudbase.com'

const baseUrl = 'http://localhost:8080'

export const get = (uri: string) => {
  wx.showLoading({
    title: "Loading..."
  })
  return new Promise<any>((resole, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success: (res) => {
        resole(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

export const post = (uri: string, data: object) => {
  wx.showLoading({
    title: "Loading..."
  })
  return new Promise<any>((resole, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'POST',
      data,
      success: (res) => {
        if (res.statusCode === 401) {
          removeToken()
          const currentPages = getCurrentPages()
          const currentRoute = currentPages[currentPages.length - 1].route
          if (currentRoute !== 'pages/login/index') {
            wx.navigateTo({
              url: `/pages/login/index`
            })
          }
          let errorMsg = '用户未登录'
          if (uri === '/login') {
            errorMsg = '用户名密码错误'
          }
          wx.showToast({
            title: errorMsg,
            icon: 'error'
          })
        }

        _handleToken(res.header)

        resole(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}


const _handleToken = (header: any) => {
  const token = header['Authorization'] || null
  if (token
    && getToken() !== token) {
    setToken(token)
    wx.navigateBack()
  }
}