from fastapi import FastAPI, Request
from model import search_job
import uvicorn
app = FastAPI()

 

@app.get("/")
def test(request: Request):
    return {"testing passed"}
@app.post("/grade")
def grade():
        res=mine_data("yuvarajcoder@gmail.com","yuvaraj1234")
        print(res)
        return {"output":res}
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)