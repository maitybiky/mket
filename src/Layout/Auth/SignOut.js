import supabase from "../../Supabase/Supabase";


export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
};
