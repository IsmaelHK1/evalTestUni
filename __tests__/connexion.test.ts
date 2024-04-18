import Authentification from "../app/api/auth/connexion";
import User from "../model/user.model";
import { expect, test  } from 'vitest'


test("should return the user if email and password match", () => {
        let auth: Authentification;
        auth = new Authentification();
        const user = new User(1, "admin", "test@example.com", "password");
        auth.inscription(user);

        const result = auth.connexion("test@example.com", "password");

        expect(result).toBeTruthy();

    });

    test("should return undefined if email and password do not match", () => {
        let auth: Authentification;
        auth = new Authentification();
        const user = new User(1, "admin", "test@example.com", "password");
        auth.inscription(user);

        const result = auth.connexion("test@example.com", "wrongpassword");

        expect(result).toBeFalsy();
    });
