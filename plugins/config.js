const KUROCO_API_URL = {
  BANNER_API: '/rcms-api/5/banner',
  THEMA_API: '/rcms-api/5/theme',
  SHIGHTSEEING_API: '/rcms-api/5/sightseeing',
  ADVERTISEMENT_API: '/rcms-api/5/advertisement',
  COUPON_API: '/rcms-api/5/coupon',
  PREFECTURE_API: '/rcms-api/5/prefecture',
  OTHERLINK_API: '/rcms-api/5/otherLink'
}

const TVG_URL = {
  BASE_URL: 'http://tvg-vm.private/search/',
  API_URL: 'http://127.0.0.1/tvg_search_api',
  AREA_MASTER_API: '/Area?ResID=TVG_AREA_MST_JSON',
  SHISETSU_DETAIL_API: '/FacilityDetail?ResID=TVG_FACILITY_DETAIL_JSON&JtbShisetsuApiExeFlg=0'
}

export default (context, inject) => {
  inject('KUROCO_API_URL', KUROCO_API_URL)
  inject('TVG_URL', TVG_URL)
}
