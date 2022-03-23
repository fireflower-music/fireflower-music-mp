const tokenKey = 'fireflower-token'

export const setToken = (token: String) =>{
  wx.setStorageSync(tokenKey,token)
}

export const getToken = () => {
  return wx.getStorageSync(tokenKey) || null
}

export const removeToken = () => {
  wx.setStorageSync(tokenKey,null)
}