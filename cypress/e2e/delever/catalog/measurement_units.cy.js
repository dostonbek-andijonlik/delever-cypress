Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  //import Couriers  from "./delever-cypress/cypress/e2e/pages/Personnel/couriers.js";
import loginPage from "../../pages/login/login.js"
import SideBars from "../../pages/sidebar.js"
import Measurement from '../../pages/catalog/measurement_units/get_measurements'


describe('Measurement Units', () => {
    
    beforeEach(() => {
        //logine
        cy.visit('https://test.admin.delever.uz')
        loginPage.login()      
        SideBars.elements.catalog().click()
        Measurement.elements.measureOpenPage().click()
    });



    it('Add Measurement Unit', () => {
        cy.wait(2000)
        Measurement.addMeasurementUnit(
            "0.1",
            "Грамм",
            "Gram",
            "Gram"
        )
    });

    it('Search Measurement Unit', () => {
        cy.wait(2000)
        Measurement.search("Грамм")
    });

    it('Edit Measurement Unit', () => {
        cy.wait(2000)
        Measurement.editMeasurement(
            "Грамм",
            "0.01"
        )
    });

    it('Delete Measurement Unit', () => {
        cy.wait(2000)
        Measurement.deleteMeasurement(
            "Грамм"
        )
    });
});
