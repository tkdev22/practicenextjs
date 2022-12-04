import {parseISO,format} from '/node_modules/date-fns'
import ja from '/node_modules/date-fns/locale/ja'

export default function ConvertDate({dateISO}){
    return(
        <time dateTime = {dateISO}>
            {format(parseISO(dateISO),'yyyy年MM月dd日',{
                locale: ja,
            })}
        </time>
    )


}