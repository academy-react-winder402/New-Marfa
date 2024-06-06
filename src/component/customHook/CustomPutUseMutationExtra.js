
import http from '../../core/services/interceptore'
import { useMutation, useQueryClient } from 'react-query';

const handlePut = async ({url , values}) => {
    console.log(values);
    const res = await http.put(url, values);
    return res.data;
};

const CustomPutUseMutationExtra = () => {
    const queryClient = useQueryClient();

    return useMutation((obj) => handlePut(obj),
     {

         onMutate :async (data)=>{
            await queryClient.cancelQueries('detail')
            const lastData = queryClient.getQueriesData('detail')

            queryClient.setQueriesData('detail' , data)

            return data

        },


        onSettled:(data)=>{
            queryClient.invalidateQueries('detail')

        },

        onError : (error , hero , context)=>{ 
            queryClient.setQueriesData('detail', context)
        },

    });

    
};

export  {CustomPutUseMutationExtra};