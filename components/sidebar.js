import Area from './area'
import Type from './type'
export default function Sidebar() {

  return (
    <div className="col-2 side-wrap">
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
      <ul>
        <Type type_id = "1" title = "ノーマル" />
        <Type type_id = "2" title = "かくとう" />
        <Type type_id = "3" title = "ひこう" />
        <Type type_id = "4" title = "どく" />
        <Type type_id = "5" title = "じめん" />
        <Type type_id = "6" title = "いわ" />
        <Type type_id = "7" title = "むし" />
        <Type type_id = "8" title = "ゴースト" />
        <Type type_id = "9" title = "はがね" />
        <Type type_id = "10" title = "ほのお" />
        <Type type_id = "11" title = "みず" />
        <Type type_id = "12" title = "くさ" />
        <Type type_id = "13" title = "でんき" />
        <Type type_id = "14" title = "エスパー" />
        <Type type_id = "15" title = "こおり" />
        <Type type_id = "16" title = "ドラゴン" />
        <Type type_id = "17" title = "あく" />
        <Type type_id = "18" title = "フェアリー" />
      </ul>
    </div>
  )
}