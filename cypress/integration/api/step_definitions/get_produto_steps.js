import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu faço uma requisição GET para buscar o produto {string} com a quantidade por categoria {string}", (name, quantity) => {
    cy.request({
        method: "GET",
        url: `/catalog/api/v1/products/search?name=${name}&quantityPerEachCategory=${quantity}`,
        failOnStatusCode: false, // Para não falhar automaticamente em status 500
    }).as("response");
}
);

When("a requisição for processada", () => {
    cy.get("@response").then((response) => {
        console.log("exibir response", response);
        expect(response).to.have.property("status").that.is.a("number");
        if (response.status === 200) {
            expect(response).to.have.property("body").that.is.an("array");
        }
    });
});

Then("o status code deve ser {string}", (statusCode) => {
    cy.get("@response").then((response) => {
        console.log("status code", response.status)
        expect(response.status).to.eq(parseInt(statusCode));
    });
});

Then("a lista de produtos deve conter todos os produtos {string}", (name) => {
    cy.get("@response").then((response) => {
        const categories = response.body;
        expect(categories).to.be.an("array").and.not.be.empty;
        const totalProducts = categories.reduce((count, category) => {
            expect(category).to.have.property("products").that.is.an("array");
            return count + category.products.length;
        }, 0);
        expect(totalProducts).to.eq(6);
        categories.forEach((category) => {
            category.products.forEach((product) => {
                expect(product.productName.toLowerCase()).to.contain(name.toLowerCase());
            });
        });
    });
});

Then("a lista de produtos deve conter apenas um item {string}", (name) => {
    cy.get("@response").then((response) => {
        const categories = response.body;
        expect(categories).to.be.an("array").and.not.be.empty;
        const totalProducts = categories.reduce((count, category) => {
            expect(category).to.have.property("products").that.is.an("array");
            return count + category.products.length;
        }, 0);
        expect(totalProducts).to.eq(1);
        categories.forEach((category) => {
            category.products.forEach((product) => {
                expect(product.productName.toLowerCase()).to.contain(name.toLowerCase());
            });
        });
    });
});