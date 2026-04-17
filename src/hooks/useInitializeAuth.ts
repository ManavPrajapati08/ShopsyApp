import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { useAppDispatch } from "@/store/hooks";
import { setUser, setLoading } from "@/store/slices/authSlice";

export const useInitializeAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        }));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);
};
