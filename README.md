# Product & Co

## Demo

[View on Heroku](https://guarded-waters-98348.herokuapp.com/)

## Disclaimer

Backend is not production ready: minimal validation, no CSRF protection. Data is stored in a JSON file. Mobile layout is done 'vite fait'. No client side data validation.

## Specification

Product & Co decided to create a new page on their website to upload and display their products. You were requested to make
a first draft of the page, implementing basic functionalities; design enhancement will be taken care separately.

### UI description

The following UI mockups have been designed.

![mock](https://raw.githubusercontent.com/magom001/product-and-co/master/docs/mock.png)

Product dropper & Co screen: this page provides the ability to upload a product (picture – one at a time) using the “Add
product” button, or by dropping directly the product to the page. Products are displayed in a table, and three of their
attributes are displayed.
Nice to have:
- the products could be removed using the cross displayed at the bottom of each product
- if the quantity = 0, the description could show “Out of order”
- the screen could have a search bar to find product by name (partial name accepted)

Product description pop-up: after clicking the “Add product” button or dropping a picture, a pop-up appears to provide
few information on the uploaded product: name, quantity, price and colour. These have the following default values:
- Name: “Product XYZXXX” where XXX is a sequence
- Quantity: 1
- Price: 1$
- Colour: white

The button “Save” is used to save the product to the DB, and the button “Cancel” to disregard the product upload.

Nice to have: attributes could be added on the fly depending on its characteristics.

### Technology recommended

Storage to a NoSQL DB or JSON file using a local URI, JavaScript, HTML 5, NodeJS or React.js.


