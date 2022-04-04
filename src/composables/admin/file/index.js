
import { toast,swalConfirm } from "../../../utils/sweatalert";
import {ref} from 'vue'

export function file(store){
 const upload = async (item) => {
      await store
        .dispatch("file/create", item)
        .then(async () => {
          toast("Upload File !", "success");
        })
        .catch((er) => {
          console.log(er);
        }); 
    }

    const uploadProfile = async (item) => {
      await store
        .dispatch("file/createProfile", item)
        .then(async () => {
         
        })
        .catch((er) => {
          console.log(er);
        }); 
    }
     const uploadBanner = async (item) => {
     
      await store
        .dispatch("file/createBanner", item)
        .then(async () => {
        
        })
        .catch((er) => {
          console.log(er);
        }); 
    }

 const fetchFile = async (item) => {
     const response = await store
        .dispatch("file/fetch", item)
        
        .catch((er) => {
          console.log(er);
 
        }); 

        return response

    }
const destroyFile = async (item) =>{
    const status = ref(false)
    const confirm = await swalConfirm(status)
    if(confirm){
      await store
        .dispatch("file/destroy",item)
        .then(async () => {
      status.value = true
        })
        .catch((er) => {
          console.log(er);
        });
       }
   return status
   }
    return {
     fetchFile,
     upload,
     destroyFile,
      uploadProfile,
      uploadBanner
    }
}
