
class NewBrands {
  elements = {
    addButton: () => cy.contains("+ Добавит"),

    brandName: () =>
      cy.get(
        ":nth-child(1) > .col-span-1 > .alisa-input > .focus-within:ring-2 > .bg-white > .flex > .flex-1"
      ),

    orderNum: () =>
      cy.get(
        ":nth-child(2) > .col-span-1 > .alisa-input > .focus-within:ring-2 > .bg-white > .flex > .flex-1"
      ),

      addPhoto: () => cy.get('.Gallery > .mt-2'),
      
    saveButton: () => cy.get(":nth-child(2) > .button"),

    cancelButton: () => cy.get(":nth-child(1) > .button"),
  };



}

module.exports = new NewBrands();
