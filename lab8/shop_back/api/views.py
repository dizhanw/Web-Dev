from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

# Create your views here.
def get_products(request):
    products = Product.objects.all()
    
    data = []
    
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id
        })
    
    return JsonResponse(data, safe=False)


def get_product(request, id):
    try:
        p = Product.objects.get(id=id)
        data = {
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'description': p.description,
        'count': p.count,
        'is_active': p.is_active,
        'category_id': p.category.id
    }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def get_categories(request):
    categories = Category.objects.all()

    data = []

    for c in categories:
        data.append({
            'id': c.id,
            'name': c.name
        })

    return JsonResponse(data, safe=False)


def get_category(request, id):
    try:
        c = Category.objects.get(id=id)
        data = {
            'id': c.id,
            'name': c.name
        }
        return JsonResponse(data)
    except:
        return JsonResponse({'error': 'Not found'}, status=404)
    

def get_products_by_category(request, id):
    products_by_category = Product.objects.filter(category_id = id)
    
    data = []

    for p in products_by_category:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category_id': p.category.id
        })
    
    return JsonResponse(data, safe=False)