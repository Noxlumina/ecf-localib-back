const request = require("supertest");
require("dotenv").config();

describe("GET /locataires", () => {
    it("doit donner un code 200 ", () => {
        return request(process.env.APIURI).get("/locataires").expect(200);
    });

    it("doit donner un code 200 et Mme Bouketine", () => {
        return request(process.env.APIURI)
            .get("/locataires/634e95d039a5596df4ccfc23")
            .expect(200)
            .then((response) => {
                expect(response.body.nom).toEqual("bouketine");
            });
    });

    it("doit donner un code 204", () => {
        return request(process.env.APIURI)
            .get("/locataires/0")
            .expect(204)
    });
});

describe("POST /users", () => {
    it("should return 200 and check user with name 'Test' exist", () => {
        return request(process.env.APIURI)
            .post("/locataires")
            .send({ nom: "Test", prenom: "test", email: "testy", password: "test" })
            .expect(200)
            .then(() => {
                return request(process.env.APIURI)
                    .get("/locataires")
                    .query({ name: "Test" })
                    .expect(200)
            });
    });
});

describe("Delete /locataires/{id}", () => {
    it("supprime l'utilisateur code 410 puis 204", () => {
        return request(process.env.APIURI)
            .del("/locataires/6350fbb64300910b94ef4f38")
            .expect(410)
            .then(() => {
                return request(process.env.APIURI)
                    .del("/locataires/6350fbb64300910b94ef4f38")
                    .expect(204)
            });
    });
});

//    it("should return 400 because user name already exists", () => {
//      return request(ApiUrl)
//        .post("/users")
//        .send({ name:"TestAPI", jobTitle:"Test Engineer" })
//        .expect(400)
//        .then(response => {
//          expect(response.body).toEqual("The user name already exists");
//        });
//    });
//  });

//  describe("PUT /users/{id}", () => {
//    it("should return 200 and check user was update to 'TestAPI'", () => {
//      return request(ApiUrl)
//        .put("/users/123456")
//        .send({ name:"TestAPIEdited", jobTitle:"Test Engineer" })
//        .expect(200)
//        .then(() => {
//          return request(ApiUrl)
//          .get("/users")
//          .query({ name:"TestAPIEdited" })
//          .expect(200)
//        });
//    });
//  });


