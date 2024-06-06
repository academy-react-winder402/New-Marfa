import { useQuery } from 'react-query'
import {getList} from '../../function/getList.js'
import {onSuccess , onError} from '../../function/onSitu'



const CustomGetUseQueryExtra = (key , url) =>{



    return useQuery(key , ()=>getList(url),
        {
            onSuccess:onSuccess, 
            onError:onError
        }
    )


}

export {CustomGetUseQueryExtra}