#**Domain objects**
#####**User**
```csharp
{
	"id": 1,
    "name": "Administrator",
    "username": "admin",
    "email": "admin@CASLocation.com",
    "created_by": "admin",
    "updated_by": "admin",
    "created_at": "2016-10-13T16:39:19.961Z",
    "updated_at": "2016-10-13T16:39:19.961Z"
}
```

#**Deploy to heroku:** 
- Use: heroku git:remote -a <your heroku app name> to link to your heroku app
- Push code: git subtree push --prefix api heroku master
