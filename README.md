# :hamburger: BurgerStyle!


### Overview of BurgerStyle
This burger app uses Node Express, Handlebars, and MySQL to let users select the names of burgers they'd like to eat and then devour them! The users can even add their custom made burgers.

Please check out the launched app on Heroku [here](http://eat-da-burgerz.herokuapp.com/)!


### Functionality
Using an home-grown ORM, the app uses 3 basic CRUD functions

  1. READ all entries from the MySQL database and display them to the DOM using Handlebars.
  
  2. UPDATE a burger by clicking the "Devour It" button
    * hits an `/burger/eat/:id` route in Express to change its "devoured" status in the MySQL database
    * re-routes the webpage back to the index, where the burger is added to the burgers conquered column.

  3. CREATE a new burger in the "Place Order" form
    * hits a `/burger/create` route in Express to insert a new burger into the MySQL database burgers table
    * re-routes the webpage back to the index, where the burger is added to the column on the left side which is the order up side.


### Screenshots

  * ![Full Size](/public/assets/img/burgerStyle.png)
