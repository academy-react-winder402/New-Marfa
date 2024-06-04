import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import getList from '../function/getList'
import {onSuccess , onError} from '../function/onSitu'



const CustomGetUseQueryExtra = (key , url) =>{



    return useQuery(key , ()=>getList(url),
        {
            onSuccess:onSuccess, 
            onError:onError
        }
    )


}

export {CustomGetUseQueryExtra}