import { inject,ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

import { toast } from "../utils/sweatalert";
export function auth(){
  const store = inject("store");
    const router = useRouter();
    const logout = async () => {
      
      await store
        .dispatch("auth/logout")
        .then(() => {
          toast("Sign Out Success!", "success");
        })
        .catch((er) => {
          console.log(er.status);
          toast("Sign Out Success!", "success");
        });
      router.push({ name: "login" });
    
    };
    const me = async () => {
      const response = ref('')
      await axios.get(
        "http://portoweb-backend-starter.test/status",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.auth.token,
          },
        }
      ).then((r)=>{
       response.value = r.data
      }).catch();
      
      return response.value;
    };
    return {
      store,
      me,
      logout,
    }
} 