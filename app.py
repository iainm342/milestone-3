import os
from flask import Flask, flash, render_template, redirect, request, session, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)


@app.route("/")
def categories():
    return render_template("categories.html")


@app.route("/all_recipes")
def all_recipes():
    recipes = mongo.db.recipes.find()
    return render_template("recipes.html", recipes=recipes)


@app.route("/show_recipe/<recipe_id>")
def show_recipe(recipe_id):
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
    categories = mongo.db.categories.find()
    return render_template("show_recipe.html", recipe=recipe, categories=categories)


@app.route("/show_starters")
def show_starters():
    return render_template("starters.html", recipes=mongo.db.recipes.find({"category_name": "Starters"}).sort("recipe_name"))
    

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one({"username": request.form.get("username").lower()})

        if existing_user:
            flash("username already exists")
            return render_template(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        session["user"] = request.form.get("username").lower()
        flash("registration successful!")
        return redirect(url_for("profile", username=session["user"]))
    return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        existing_user = mongo.db.users.find_one({"username": request.form.get("username").lower()})

        if existing_user:
            if check_password_hash(existing_user["password"], request.form.get("password")):
                session["user"] = request.form.get("username").lower()
                flash("Welcome, {}".format(request.form.get("username")))
                return redirect(url_for("profile", username=session["user"]))
            else:
                flash("incorrect username and/or password")
                return redirect(url_for("login"))
        
        else:
            flash("incorrect username and/or password")
            return redirect(url_for("login"))
    
    return render_template("login.html")


@app.route("/profile/<username>", methods={"GET", "POST"})
def profile(username):
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    if session["user"]:
        return render_template("profile.html", username=username)
    
    return redirect(url_for("login"))


@app.route("/logout")
def logout():
    flash("you have been logged out")
    session.pop("user")
    return redirect(url_for("all_recipes"))


@app.route("/add_recipe", methods=["GET", "POST"])
def add_recipe():
    if request.method == "POST":
        recipes = mongo.db.recipes
        recipe_dict = request.form.to_dict()
        recipe_dict['category_name'] = request.form.get("category_name")
        recipe_dict['recipe_name'] = request.form.get("recipe_name")
        recipe_dict['recipe_chef'] = request.form.get("recipe_chef")
        recipe_dict['recipe_cookbook'] = request.form.get("recipe_cookbook")
        recipe_dict['recipe_image'] = request.form.get("recipe_image")
        recipe_dict['recipe_difficulty'] = request.form.get("recipe_difficulty")
        recipe_dict['recipe_time'] = request.form.get("recipe_time")
        recipe_dict['recipe_ingredients'] = request.form.getlist("recipe_ingredients")
        recipe_dict['recipe_method'] = request.form.getlist("recipe_method")

        recipes.insert_one(recipe_dict)
        flash("recipe added")
        return redirect(url_for("all_recipes"))
    
    categories = mongo.db.categories.find().sort("category_name, 1")
    return render_template("add_recipe.html", categories=categories)


@app.route("/edit_recipe/<recipe_id>", methods=["GET", "POST"])
def edit_recipe(recipe_id):
    if request.method == "POST":
        submit = {
            "category_name": request.form.get("category_name"),
            "recipe_name": request.form.get("recipe_name"),
            "recipe_chef": request.form.get("recipe_chef"),
            "recipe_cookbook": request.form.get("recipe_cookbook"),
            "recipe_image": request.form.get("recipe_image"),
            "recipe_difficulty": request.form.get("recipe_difficulty"),
            "recipe_time": request.form.get("recipe_time"),
            "recipe_ingredients": request.form.getlist("recipe_ingredients"),
            "recipe_method": request.form.getlist("recipe_method")
        }
        mongo.db.recipes.update({"_id": ObjectId(recipe_id)}, submit)
        flash("recipe updated")
    
    recipe = mongo.db.recipes.find_one({"_id": ObjectId(recipe_id)})
    categories = mongo.db.categories.find().sort("category_name, 1")
    return render_template("edit_recipe.html", recipe=recipe, categories=categories)


@app.route("/delete_recipe/<recipe_id>")
def delete_recipe(recipe_id):
    mongo.db.recipes.remove({"_id": ObjectId(recipe_id)})
    flash("recipe deleted")
    return redirect(url_for("categories"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)