from fastapi import FastAPI, Request
from mode import search_job
import uvicorn
app = FastAPI()

 
from fastapi.middleware.cors import CORSMiddleware

 
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def test(request: Request):
    return {"testing passed"}
@app.get("/jobs")
def jobs(job:str,loc:str):
        res=search_job(job,loc)
        print(res)
        return {"output":res}
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.8", port=8000)