from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/")

async def create_greeting(request: Request):
    name = await request.json()  # Get the name from the request body
    greeting = f"Hola, {name.get('name')}!"  # Create the greeting string
    return {"greeting": greeting}  # Return the greeting response
