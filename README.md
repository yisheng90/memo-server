## Idea Board (Server)

This project is server to process backend api for [Idea Board](https://github.com/yisheng90/memo-client).

The project is host on heroku. You can access it [here](https://agile-eyrie-72271.herokuapp.com).

## Requirement

The server includes the following api services:

1.  GET idea/:id
        
        Response: 
        
        [{
            "id”: “:id”,
            created_date”: “:created_date”, 
            “title”: “:title”, 
            “body”: “:body”
        }]
        
 
2. POST ideas 
        
        Response: 
         
        {
             “id”: “:id”, 
             “created_date”: “:created_date”
        }  
       
3. PUT idea/:id

        Query:
        
        {
            “title”: “:title”, 
            “body”: “:body”
        }
        
        Response:
        
        {
           "success": true
        }
      
      
4. DELETE idea/:id

      Response:
            
            {
               "success": true
            }
            

## Technical Stack

1. Main Stack
     -  Node
     -  Express
     -  Mongoose
     -  Babel
    
     
2. Formatting
     - Eslint
     - Prettier
     
