from ninja import NinjaAPI

api = NinjaAPI()

@api.get("/")
def home(request):
    print(request)
    return "Server says hello!"