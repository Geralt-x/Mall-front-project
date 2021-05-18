import axios from 'axios'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
// 1、为啥要封装 axios 模块：
// 如果对每个需要发送网络请求的组件都引入 axios 的话，这样整个项目对 axios 的依赖性太大了，一旦 axios 崩了，或者像 Vue-resource一样被官宣不再继续维护了，那你这个项目就 mmp 了懂吧，
// 所以就要对 axios 模块进行封装，单独搞一个文件对 axios 做一个封装，之后所有的组件在进行网络请求的时候都面向这一个文件，
// 假如一旦有一天 axios 不再维护了，也根本不慌，只需要对 axios 封装的文件进行修改就完事了，真是个小机灵鬼。
