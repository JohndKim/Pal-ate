import requests
from bs4 import BeautifulSoup
import re
from searx import search_searx
from wiki import search_wiki

URL_WIKI = "http://en.wikipedia.org/w/api.php"

'''
NEED:
    - Name
    - Culture
    - Type of Cuisine
    - Recipe
    - History
'''

def main():
    '''
    Returns:
    food_name
    history
    intro
    taste (and url to read more on taste)
    '''
    params = 'Fried Chicken' 

    item_info2 = search_searx(params)
    item_info1 = search_wiki(params)

    info = {**item_info1, **item_info2}
    info['food_name'] = params

    print(info)
    

if __name__ == '__main__':
    main()