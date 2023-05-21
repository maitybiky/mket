import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { persist, createJSONStorage } from "zustand/middleware";
export const useAccType = create(
  persist(
    (set) => ({
      type: "",
      loginStatus: false,
      accountData: null,
      setAccount: (data) => set({ accountData: data }),
      loggedIn: () => set({ loginStatus: true }),
      setUser: () => set({ type: "user" }),
      setSeller: () => set({ type: "seller" }),
    }),
    {
      name: "Log-in-data", // name of the item in the storage (must be unique)
    }
  )
);

export const useToken = create(
  persist(
    (set) => ({
      token: {
        access_token: null,
        refresh_token: null,
        expires_in: null,
      },
      setAxsToken: (payload) =>
        set((state) => ({ token: { ...state.token, access_token: payload } })),
      setRefreashToken: (payload) =>
        set((state) => ({ token: { ...state.token, refresh_token: payload } })),
      setExpTime: (payload) =>
        set((state) => ({ token: { ...state.token, expires_in: payload } })),
    }),
    {
      name: "TOKEN-DATA",
    }
  )
);
mountStoreDevtool("Account Type", useAccType);
