import axios from 'axios'
import React, { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import getList from '../function/getList'
import {onSuccess , onError} from '../../function/onSitu'



const CustomPostUseMutationExtra = (key , url) =>{


    return useMutation(key , ()=>getList(url),
        {
            onSuccess:onSuccess, 
            onError:onError
        }
    )


}

export {CustomPostUseMutationExtra}