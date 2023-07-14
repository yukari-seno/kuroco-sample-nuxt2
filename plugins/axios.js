export default function({ $axios }) {
  $axios.onError((err) => {
    // axiosの通信でエラーが発生した時にエラーページにリダイレクト
    console.log(err)
    throw new Error('API Error')
  })
}
