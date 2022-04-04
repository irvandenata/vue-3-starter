import { reactive, ref} from "vue";

import { toast,swalConfirm } from "../../../utils/sweatalert";

export function showContent(store){
 const render = ref('');

    const getAllContent = async (item) => {

     const response = ref('')
     

     
      await store
        .dispatch("content/showByCategory",item)
        .then(async (r) => {
        
            response.value = await r.data
       
        
        })
        .catch((er) => {
          console.log(er);
          
        });
       
      return response.value;
    };

    const allContent = async (item) => {

     const response = ref('')
     

     
      await store
        .dispatch("content/show",item)
        .then(async (r) => {
           if(r.data.length >0){ 
            response.value = await r.data
          
         }
        
        })
        .catch((er) => {
          console.log(er);
          
        });
      
      return response.value;
    };
    return {
     getAllContent,
      render,
      allContent
    }
} 

export function createContent(store){
 const submit = async () => {
      const slug = ref(); 
      await store
        .dispatch("content/create")
        .then(async (r) => {
         slug.value= r.data.data.attributes.slug
         console.log(r.data.data)
        })
        .catch((er) => {
          console.log(er);
        });
        return slug;
    }

    return {
     submit
    }
}


export function editContent(store){ 
const getData = async (slug) => {
     const result = reactive({
      data:''
     })
     await store
        .dispatch("content/get", slug)
        .then(async (r) => {
          result.data = r.data.data
        })
        .catch((er) => {
          console.log(er);
        });
       return result
}


 const update = async (item) => {
    
     await store
        .dispatch("content/update",item)
        .then(async () => {
          toast("Success Updated!", "success");
        })
        .catch((er) => {
          console.log(er);
        
        });

    }

   


    return {
    update,
     getData,

    }

}

export function destroyContent(store){
 const destroy = async (item) =>{
    const status = ref(false)
    const confirm = await swalConfirm(status)
    if(confirm){
      await store
        .dispatch("content/destroy",item)
        .then(async () => {
         status.value = true
        })
        .catch((er) => {
          console.log(er);
        });
       }
       return status.value   
   }
   return {
  destroy
  }
}