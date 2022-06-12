import Area from './area'
export default function Sidebar() {

  return (
    <div className="col-2">
      <ul className="">
      <Area area_id = '1' limit = "151" offset = "0" title = 'カントー' />
      <Area area_id = '152' limit = "100" offset = "151" title = 'ジョウト' />
      <Area area_id = '252' limit = "135" offset = "251" title = 'ホウエン' />
      <Area area_id = '387' limit = "107" offset = "386" title = 'シンオウ' />
      <Area area_id = '494' limit = "156" offset = "493" title = 'イッシュ' />
      <Area area_id = '650' limit = "72" offset = "649" title = 'カロス' />
      <Area area_id = '722' limit = "86" offset = "721" title = 'アローラ' />
      <Area area_id = '810' limit = "89" offset = "809" title = 'ガラル' />
      <Area area_id = '808' limit = "2" offset = "807" title = 'その他' />
      </ul>
    </div>
  )
}