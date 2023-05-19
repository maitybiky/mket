import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { persist, createJSONStorage } from "zustand/middleware";
export const useAccType = create(
  persist(
    (set) => ({
      type: "",
      loginStatus: false,
      loggedIn: () => set({ loginStatus: true }),
      setUser: () => set({ type: "user" }),
      setSeller: () => set({ type: "seller" }),
    }),
    {
      name: "Log-in-data", // name of the item in the storage (must be unique)
     // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

mountStoreDevtool("Account Type", useAccType);



