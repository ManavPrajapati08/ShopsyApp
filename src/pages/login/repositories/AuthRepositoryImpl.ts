import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import type { IAuthRepository } from "../interfaces/IAuthRepository";
import type { LoginRequest, LoginResponse } from "../types/login.types";
import type { SignupRequest, SignupResponse } from "../../signup/types/signup.types";
import type { User } from "@/shared/types/user.types";

export class AuthRepositoryImpl implements IAuthRepository {
  private readonly googleProvider = new GoogleAuthProvider();

  private mapFirebaseUser(firebaseUser: any): User {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
    };
  }

  async login(request: LoginRequest): Promise<LoginResponse> {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      request.email,
      request.password
    );
    
    return {
      user: this.mapFirebaseUser(userCredential.user),
      message: "Login successful",
    };
  }

  async loginWithGoogle(): Promise<LoginResponse> {
    const userCredential = await signInWithPopup(auth, this.googleProvider);
    
    return {
      user: this.mapFirebaseUser(userCredential.user),
      message: "Google login successful",
    };
  }

  async register(request: SignupRequest): Promise<SignupResponse> {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      request.email,
      request.password
    );

    // Update display name
    await updateProfile(userCredential.user, {
      displayName: request.name,
    });

    return {
      user: this.mapFirebaseUser(userCredential.user),
      message: "Registration successful",
    };
  }

  async logout(): Promise<void> {
    await signOut(auth);
  }
}

export const authRepository = new AuthRepositoryImpl();
