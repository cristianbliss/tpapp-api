import { extractBearerToken } from '../src/shared/middleware/auth-middleware';

describe("auth-middleware.extractBearerToken(authorization)", () => {
    // GET - List all colors
    it("should return the token in case of valid authorization header", async () => {
        const res = extractBearerToken("Bearer token");
        expect(res).toBeDefined();
        expect(res).toBe("token");   
    });

    it("should fail in case of an invalid authorization header", async () => {
        try {
            const res = extractBearerToken("SnafuBearer token");
            expect(res).toBeUndefined();
        }
        catch (e) {
            expect(e).toBeDefined();
            expect(e.message).toBe("Invalid token");
        }
    });
});