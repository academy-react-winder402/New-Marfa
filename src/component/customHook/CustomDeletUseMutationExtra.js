import http from '../../core/services/interceptore'
import { useMutation, useQueryClient } from 'react-query'


    const handleDel =async (url ) =>{
        const res =await http.delete(url);
        // console.log(res);
        return res.data

    }

const CustomDeletUseMutationExtra = () => {
    const queryClient = useQueryClient()


    return useMutation((url) => handleDel(url) , {
        onSuccess:(data)=>{
            queryClient.invalidateQueries('list2')
            // queryClient.setQueryData('list2' , (oldData)=>{
            //     let newData = [...oldData]
            //     newData.push(data)

            //     console.log(oldData);
            //     return newData
                
            // })
        },

    })

    // const handleMutate = (values)=>{
    //     mutate(values)
    // }


}

export  {CustomDeletUseMutationExtra}