export default function({ $axios }) {
  const token = process.env.TOKEN
  $axios.onRequest((config) => {
    config.headers = { 'x-rcms-api-access-token': token }
    return config
  })

  $axios.onError((err) => {
    // axiosの通信でエラーが発生した時にエラーページにリダイレクト
    console.log(err)
    throw new Error('API Error')
  })
}
