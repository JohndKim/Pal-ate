from .recipeLocation import get_info
from .searx import search_searx
from .wiki import search_wiki

def get_all(food: str) -> dict:
    '''
    Function that returns ALL information needed for a food that is looked up
    '''
    searx = search_searx(food)
    wiki = search_wiki(food)
    recipe_location = get_info(food)
    name = {
        'name': food.title()
    }
    return {**searx, **wiki, **recipe_location, **name}

def main() -> None:
    info1 = get_all('fried chicken')
    info2 = get_all('baklava')
    info3 = get_all('foie gras')
    print(info1)
    print(info2)
    print(info3)

if __name__ == '__main__':
    main()