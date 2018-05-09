
import { setStore, getStore,removeStore,setSession,getSession,removeSession} from '../utils/storage'
export default {
  //记住密码
  rememberPassword (state, userPass) {
    setStore('userPass', userPass)
  },
  //获取密码
  getPassword (state) {
    getStore('userPass')
  },
  //登陆成功
  loginSuccess (state, data){
    state.login = true
    setSession('user',data.user)
    setSession('userInfo',data.userInfo)
  },
  //注销登陆
  loginOut (state, data){
    state.login = false
    removeSession('user')
    removeSession('userInfo')
  },
  // 记录用户信息
  addUserInfo (state, info) {
    state.userInfo = info
    state.login = true
    setStore('userInfo', info)
  },
  // 获取用户信息
  getUserInfo (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  }
}
