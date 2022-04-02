## Read me!
Inside of front-end and then cp4-vue-cli is the basic vue cli for the project
I mostly just copied the stuff over from the other project
I somehow messed up the CSS....
Hopefully this is enough to at least get started.

the schemas need ISBN s so we can identify them...


# CreativeProject4
Last Creative project for CS 260


I really want to implement the API from google books with the site. I am willing to put in the work to do this.
If we do that here is what the site might end up looking like: 

Here is what potentially it can look like:
Multiple Pages
 - home page
 - completed page
 - list to read page
 - favorites page
 - search page
 - an about page
 
 Things To Do -- Overarching Ideas
  - implement the search function
  - implement the database abilities
  - correct git hub footer
  - implement buttons on cards
  - push it up on to the server
  
 
 
 Each of these can be their own collection with a slightly different schema:
 
  completed
   - title
   - cover
   - author
   - review (# of stars)
   - notes on the book
   - description of the book
   - date completed

  favorites
   - title
   - cover
   - author
   - review (# of stars)
   - notes on the book
   - description of the book
   - overall ranking


  list to read
   - title
   - cover
   - author
   - description of the book

Each book card looks a little different:
 completed
   - edit review
   - edit description
   - remove from completed list
   - edit date completed
   - add notes
   - add to favorites list
 
 favorites
   - edit review
   - edit description
   - remove from favorites list
   - edit date completed
   - edit ranking
 
 list to read
   - be able to remove from list
   - be able to add to completed
   - be able to add to favorites
 
 search
   - add to completed
   - add to list to read
   - add to favorites
 

More specific:
google books API
     - this includes using vue cli
     - use google books api
     - fix the bug where sometimes only some books show up
buttons
     - this is more visual
     - the buttons should call functions -- starting with just console log statements
     - the buttons should probably be implemented before trying to do the database?
 database
    - create an accounte we can both use   
    - create the seperate collections
    - create schemas for each of the collections
    - see more information above
integrate database and website


    - have all the buttons work
      - search page: add to favorites
      - search page: add to completed
      - search page: add to list
      - completed page: add to favorites
      - completed page: remove from completed page
      - completed page: edit items in completed -- date / reviews / notes
      - etc etc I think theres 6ish more things
      - 





Things I want to do today:
  - figure out how vue cli and express work together
  - agree on what we want the site to look like
  - divide out the workload
  




Kelly
 - add buttons to the cards
 	- completed / list / api card 
 - create schema
 - start adding database functionality
 - git hub footer

Rebekah
- init project 
- api working
- start adding database functionality
 

Database to connect them


look into creating another account

- send my connection string - password and username






This is a creative project, so you are welcome to build what you would like. The basic requirements are:

The site uses Vue CLI for the front end
The site uses Node, Express, and Mongo on the back end
The site uses an API between the front end and back end, and supports create, read, update, and delete operations
The site has multiple pages (multiple views in the Router)
The site contains a footer that links to your public GitHub repository
In addition, the site should have a robust data model. Ideally, this should be multiple collections of documents and a detailed schema for each collection. For example, if you were building a recipe site, you could have a collection for recipes and for people. The recipes should have a robust schema, such as name, description, ingredient list, photo. The people should have a robust schema, such as name, interests, favorite recipes, etc.  You want to avoid having an overly simplistic site.


90-100: Excellent use of Vue CLI, Node, Express, and Mongo, robust data model, and clearly follows web design principles
We will grade your projects based on:
 - you used the Vue CLI for the front end, with multiple pages
 - you used Node, Express, and Mongo for the back end,
 - you have an API that includes creating, reading, updating and deleting data on the back end,
 - you have a robust data model,
 - how well you follow web design principles: spacing, typography, color, consistency, and responsive design.
