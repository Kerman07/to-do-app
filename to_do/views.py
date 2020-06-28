from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Item
from .forms import UserForm


def home(request):
    if request.method == 'GET':
        all_items = Item.objects.filter(author=request.user)
        if not all_items and not request.user.is_authenticated:
            all_items = [{'content': "Example to-do-item"},
                         {'content': "Another example"},
                         {'content': "Yet another example"}, ]
        context = {'items': all_items}
        return render(request, "base.html", context)
    else:
        if 'item' in request.POST:
            if request.POST['item']:
                Item.objects.create_item(request.POST['item'],
                                         author=request.user)
            return redirect(home)
        elif 'delete' in request.POST:
            del_id = request.POST['delete']
            Item.objects.filter(id=del_id).delete()
            return redirect(home)
        else:
            edit_id = request.POST['edit']
            return redirect(f"{edit_id}/update")


@login_required
def edit(request, item_id):
    if request.method == 'GET':
        item = Item.objects.get(id=item_id)
        context = {'item': item}
        return render(request, "edit.html", context)
    else:
        if 'item' in request.POST:
            obj = Item.objects.get(id=item_id)
            obj.content = request.POST['item']
            obj.save()
        return redirect(home)


def register(request):
    if request.method == 'GET':
        form = UserForm()
        return render(request, 'register.html', {'form': form})
    else:
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your account has been created!')
            return redirect(home)
        return render(request, 'register.html', {'form': form})
