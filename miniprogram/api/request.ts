const baseUrl = 'https://fireflower-music-1691755-1310040923.ap-shanghai.run.tcloudbase.com'

export const get = (uri: string) => {
  wx.showLoading({
    title: "Loading..."
  })
  return new Promise((resole, reject) => {
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